import React from 'react';
import { DiFirebase, DiReact, DiZend, DiGithubBadge, DiScrum } from 'react-icons/di';
import { SiDocker, SiFigma } from 'react-icons/si';
import { FaCodeBranch } from 'react-icons/fa';



import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
	SectionSubtitle
} from '../../styles/GlobalComponents';
import {
	List,
	List2,
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
			I specialize in full-stack development, creating performant and user-centric web applications.
			My expertise spans modern front-end frameworks, scalable back-end architectures, and user-focused design,
			enabling me to deliver seamless digital experiences that solve real-world problems.
		</SectionText>
		<List>
			<ListItem>
				<picture><DiReact size="3rem" /></picture>
				<ListContainer>
					<ListTitle>Frontend</ListTitle>
					<ListParagraph>
						React + TypeScript for performant UIs. Built responsive, accessible apps with real-world user flows.
					</ListParagraph>
				</ListContainer>
			</ListItem>

			<ListItem>
				<picture><DiFirebase size="3rem" /></picture>
				<ListContainer>
					<ListTitle>Backend</ListTitle>
					<ListParagraph>
						Node.js APIs with MongoDB/SQL. Scalable services, auth flows, and secure data handling.
					</ListParagraph>
				</ListContainer>
			</ListItem>

			<ListItem>
				<picture><SiDocker size="3rem" /></picture>
				<ListContainer>
					<ListTitle>DevOps</ListTitle>
					<ListParagraph>
						CI/CD pipelines, Docker containers, AWS S3 deploys. Delivered code to prod reliably.
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>

		<List2>
			<ListItem>
				<picture><SiFigma size="3rem" /></picture>
				<ListContainer>
					<ListTitle>UI / UX</ListTitle>
					<ListParagraph>
						Figma to code. Created modern layouts and smooth flows focused on usability and clarity.
					</ListParagraph>
				</ListContainer>
			</ListItem>

			<ListItem>
				<picture><FaCodeBranch size="3rem" /></picture>
				<ListContainer>
					<ListTitle>Teamwork</ListTitle>
					<ListParagraph>
						Agile sprints, GitHub PRs, cross-team collab. Delivered features fast with strong team synergy.
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List2>

		<SectionSubtitle>Skills </SectionSubtitle>
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
