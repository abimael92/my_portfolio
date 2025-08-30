import React, { useContext } from 'react';

import {
	BlogCard,
	CardInfo,
	Content,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	HeaderStack,
	Hr,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
	Img,
} from './ProjectsStyles';

import {
	Section,
	SectionDivider,
	SectionTitle,
} from '../../styles/GlobalComponents';

import BlurWrapper from '../PrivateContent/BlurWrapper';

// import { Projects as MyProjects } from '../../constants/constants';
import { useProjects } from '../../hooks/usePortfolioData';

import { AuthContext } from '../../context/AuthContext';

const Projects = () => {
	const { accessToken } = useContext(AuthContext);
	const authenticated = !!accessToken;

	const { projects, loading } = useProjects();


	if (loading) return <div>Loading projects...</div>;

	return (
		<Section nopadding id='projects'>
			<SectionTitle main>Projects</SectionTitle>
			<SectionDivider colorAlt />

			<GridContainer>
				{projects.map((project, index) => {
					return (
						<BlogCard key={index}>
							<Content>
								<Img src={project.image} alt={project.title} />
								<TitleContent>
									<HeaderThree title={project.title.toString()}>
										{project.title}
									</HeaderThree>
									<Hr />
								</TitleContent>
								<CardInfo>{project.description}</CardInfo>

								<HeaderStack>Stack</HeaderStack>
								<TagList>
									{project.tags.map((tag, idx) => {
										return <Tag key={idx}>{tag}</Tag>;
									})}
								</TagList>
								<UtilityList>
									{project.source ? (
										<BlurWrapper authenticated={authenticated}>
											<ExternalLinks
												href={project.source}
												target='_blank'
												rel='noopener noreferrer'>
												Code
											</ExternalLinks>
										</BlurWrapper>
									) : (
										<ExternalLinks disabled>Code</ExternalLinks>
									)}
									{project.visit && (
										<ExternalLinks
											href={project.visit}
											target='_blank'
											rel='noopener noreferrer'>
											Visit
										</ExternalLinks>
									)}
								</UtilityList>
							</Content>
						</BlogCard>
					);
				})}
			</GridContainer>
		</Section>
	);
};

export default Projects;
