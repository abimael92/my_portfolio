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
	{ name: 'Javascript', percent: '80%' },
	{ name: 'HTML5', percent: '90%' },
	{ name: 'CSS3', percent: '85%' },
	{ name: 'React', percent: '75%' },
	{ name: 'Bootstrap', percent: '60%' },
];

const Technologies = () => (
	<Section id='tech'>
		<SectionTitle>Technologies </SectionTitle>
		<SectionDivider />

		<SectionText>
			I've worked with a range a technologies in the web development
			world. From Front-end, Back-end To Design
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
