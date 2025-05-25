import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import {
	Section,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, ButtonContainer } from './HeroStyles';
import BlurWrapper from '../PrivateContent/BlurWrapper';

const workExp = new Date().getFullYear() - 2015;

const Hero = (props) => {
	const { accessToken } = useContext(AuthContext);
	const hasAccess = !!accessToken;

	return (
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					My Portfolio
					<br />
					Abimael Garcia (Web Developer)
				</SectionTitle>
				<SectionText>
					Full-Stack Developer with {workExp} years of experience
					building scalable systems and solving tough technical challenges.
					Known for effective collaboration in diverse, multicultural teams and adapting quickly to fast-paced demands.
					Skilled at leading greenfield builds, improving legacy systems, and selecting the right architecture
					— from monolith to microservices or serverless.
					Proficient in React, TypeScript, Node.js, SQL, MongoDB, and GraphQL.
					Committed to clean code, constant learning, and delivering real-world impact
					from design to deployment.
				</SectionText>
				<ButtonContainer>
					<BlurWrapper authenticated={hasAccess}>
						<Button onClick={props.handleClick}>
							<a
								href='https://drive.google.com/uc?export=download&id=1IjFu-kn8scFmSAkGZ1DjC1hDlRuYHm2V'
								target='_blank'
								rel='noopener noreferrer'
								style={{ textDecoration: 'none', color: 'inherit' }}
								download>
								Download CV
							</a>
						</Button>
					</BlurWrapper>
				</ButtonContainer>
			</LeftSection>
		</Section>
	);
};

export default Hero;
