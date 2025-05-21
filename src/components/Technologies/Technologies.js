import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
	SkillsContainer,
	Row,
	SkillItem,
	SkillTitle,
	Progress,
	ProgressIn,
	SkillPercent
} from './TechnologiesStyles';

const skillsData = [
	{ name: 'HTML5', percent: '95%' },
	{ name: 'CSS3', percent: '90%' },
	{ name: 'Bootstrap', percent: '85%' },
	{ name: 'JavaScript', percent: '90%' },
	{ name: 'React', percent: '85%' },
	{ name: 'TypeScript', percent: '80%' },
	{ name: 'Node.js', percent: '75%' },
	{ name: 'MongoDB', percent: '70%' },
	{ name: 'AWS S3', percent: '70%' },
	{ name: 'GraphQL', percent: '45%' },
	{ name: 'Three.js', percent: '40%' },
];


const Technologies = () => (
	<Section id='tech'>
		<SectionTitle>Technologies </SectionTitle>
		<SectionDivider />

		<SectionText>
			I have hands-on experience across the full web development stack,
			including front-end, back-end, and design technologies.
			My skill set enables me to build seamless, efficient, and visually compelling applications
			that deliver outstanding user experiences.
		</SectionText>

		<List>
			<ListItem>
				<picture>
					<DiReact size='3rem' />
				</picture>
				<ListContainer>
					<ListTitle>Front-End</ListTitle>
					<ListParagraph>
						Experiece with <br />
						React.js
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<picture>
					<DiFirebase size='3rem' />
				</picture>
				<ListContainer>
					<ListTitle>Back-End</ListTitle>
					<ListParagraph>
						Experience with <br />
						Node and Databases
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<picture>
					<DiZend size='3rem' />
				</picture>
				<ListContainer>
					<ListTitle>UI/UX</ListTitle>
					<ListParagraph>
						Experience with <br />
						tools like Figma
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
		<SectionDivider colorAlt />

		<SkillsContainer>
			{skillsData.map((skill, index) => (
				<SkillItem key={index}>
					<SkillTitle>{skill.name}</SkillTitle>
					<Progress>
						<ProgressIn width={skill.percent} />
						<SkillPercent>{skill.percent}</SkillPercent>
					</Progress>
				</SkillItem>
			))}
		</SkillsContainer>
	</Section>
);

export default Technologies;
