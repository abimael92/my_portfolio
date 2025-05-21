import React, { useEffect, useState } from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { SiDocker, SiFigma } from 'react-icons/si';
import { FaCodeBranch } from 'react-icons/fa';

import { useInView } from 'react-intersection-observer';

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
	{ name: 'HTML5', percent: 95 },
	{ name: 'CSS3', percent: 90 },
	{ name: 'Bootstrap', percent: 85 },
	{ name: 'JavaScript', percent: 90 },
	{ name: 'React', percent: 85 },
	{ name: 'TypeScript', percent: 80 },
	{ name: 'Node.js', percent: 75 },
	{ name: 'MongoDB', percent: 70 },
	{ name: 'AWS S3', percent: 70 },
	{ name: 'GraphQL', percent: 45 },
	{ name: 'Three.js', percent: 40 },
];


const SkillBar = ({ name, percent }) => {
	const [fill, setFill] = useState(0);
	const [counter, setCounter] = useState(0);
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

	useEffect(() => {
		if (inView) {
			let progress = 0;
			const duration = 6500; // 5 seconds total
			const stepTime = duration / percent;

			const fillTimeout = setInterval(() => {
				progress++;
				setCounter(progress);
				setFill(progress);
				if (progress >= percent) clearInterval(fillTimeout);
			}, stepTime);

			return () => clearInterval(fillTimeout);
		}
	}, [inView, percent]);


	return (
		<SkillItem ref={ref}>
			<SkillTitle>{name}</SkillTitle>
			<Progress>
				<ProgressIn width={`${fill}%`} />
				<SkillPercent>{counter}%</SkillPercent>
			</Progress>
		</SkillItem>
	);
};


const Technologies = () => (
	<Section id='tech'>
		<SectionTitle>Technologies</SectionTitle>
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

		<SectionSubtitle>Skills</SectionSubtitle>
		<SectionDivider colorAlt />

		<SkillsContainer>
			{skillsData.map((skill, index) => (
				<SkillBar key={index} name={skill.name} percent={skill.percent} />
			))}
		</SkillsContainer>
	</Section>
);

export default Technologies;
