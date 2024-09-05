import React from 'react';

import {
	Section,
	SectionText,
	SectionTitle,
	SectionSubtitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const hoverStyle = {
	textDecoration: 'underline', color: '#FF4500'
};

const defaultStyle = {
	textDecoration: 'none',
	color: '#0000ff',

};
const Hero = (props) => (
	<>
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					My Portfolio
					<br />
					Abimael Garcia (Web Developer)
				</SectionTitle>
				<SectionText>
					Experienced Full-Stack Developer with ten years of expertise in
					building web applications from the ground up. Known for delivering
					high-quality, scalable solutions and for effective collaboration in
					diverse, multicultural teams. Proficient in React, Redux, Typescript,
					Node.js, MongoDB, among other technologies, and dedicated to
					driving innovation and excellence throughout the entire
					development process.
				</SectionText>
				<Button onClick={props.handleClick}>
					<a
						href='https://drive.google.com/uc?export=download&id=1IjFu-kn8scFmSAkGZ1DjC1hDlRuYHm2V'
						target='_blank'
						rel='noopener noreferrer'
						onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
						onMouseLeave={(e) => Object.assign(e.currentTarget.style, defaultStyle)}
						download>
						Download CV
					</a>
				</Button>
			</LeftSection>
		</Section>
	</>
);

export default Hero;
