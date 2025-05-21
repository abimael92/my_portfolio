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
					Full-Stack Developer with 10 years of experience
					building scalable systems and solving tough technical challenges.
					Known for effective collaboration in diverse, multicultural teams and adapting quickly to fast-paced demands.
					Skilled at leading greenfield builds, improving legacy systems, and selecting the right architecture
					— from monolith to microservices or serverless.
					Proficient in React, TypeScript, Node.js, SQL, MongoDB, and GraphQL.
					Committed to clean code, constant learning, and delivering real-world impact
					from design to deployment.
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
