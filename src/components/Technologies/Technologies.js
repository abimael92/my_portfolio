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

import { useSkills } from '../../hooks/usePortfolioData';


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


const Technologies = () => {
	const { skills, loading } = useSkills();

	if (loading) return <div>Loading skills...</div>;

	return (
		<Section id='tech'>
			<SectionTitle>Technologies</SectionTitle>
			<SectionDivider />
			<SectionText>
				I specialize in <strong>full-stack development</strong>,
				crafting <span className="highlight">scalable</span> and <span className="highlight">high-performance </span>
				web applications centered on exceptional <em>user experiences</em>.<br /><br />

				My expertise spans  <strong>modern front-end </strong>frameworks,
				efficient<strong> back-end architectures</strong>, and <em>intuitive design</em>,
				enabling me to deliver seamless digital solutions that address real-world challenges.
			</SectionText>

			<List>
				<ListItem>
					<picture><DiReact size="3rem" /></picture>
					<ListContainer>
						<ListTitle>Frontend</ListTitle>
						<ListParagraph>
							Built fast, responsive UIs with React and TypeScript, focusing on accessibility and real-world user experience.
						</ListParagraph>
					</ListContainer>
				</ListItem>

				<ListItem>
					<picture><DiFirebase size="3rem" /></picture>
					<ListContainer>
						<ListTitle>Backend</ListTitle>
						<ListParagraph>
							Developed scalable backends using Node.js with MongoDB and SQL, implementing authentication and secure data flows.
						</ListParagraph>
					</ListContainer>
				</ListItem>

				<ListItem>
					<picture><SiDocker size="3rem" /></picture>
					<ListContainer>
						<ListTitle>DevOps</ListTitle>
						<ListParagraph>
							Managed deployments with Docker and CI/CD pipelines. Delivered stable releases using AWS S3 and GitHub integrations.
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
							Designed modern, intuitive interfaces in Figma and translated them into clean, maintainable code for smooth UX.
						</ListParagraph>
					</ListContainer>
				</ListItem>

				<ListItem>
					<picture><FaCodeBranch size="3rem" /></picture>
					<ListContainer>
						<ListTitle>Teamwork</ListTitle>
						<ListParagraph>
							Collaborated in Agile teams, using GitHub for version control and code reviews. Ensured fast delivery and quality.
						</ListParagraph>
					</ListContainer>
				</ListItem>
			</List2>

			<SectionSubtitle>Skills</SectionSubtitle>
			<SectionDivider colorAlt />

			<SkillsContainer>
				{skills.map((skill, index) => (
					<SkillBar key={index} name={skill.name} percent={skill.percent} />
				))}
			</SkillsContainer>
		</Section >
	);
};

export default Technologies;
