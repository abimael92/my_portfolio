import React from 'react';

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

import BlurWrapper from '../PrivateContent/BlurWrapper'

import { Projects as MyProjects } from '../../constants/constants';


const Projects = ({ authenticated }) => (
	<Section nopadding id='projects'>
		<SectionTitle main>Projects</SectionTitle>
		<SectionDivider />

		<GridContainer>
			{MyProjects.map((project, index) => {
				return (
					<BlogCard key={index}>
						<Content>
							<Img src={project.image} alt={project.title} />
							<TitleContent>
								<HeaderThree title={project.title.toString()}>{project.title}</HeaderThree>
								<Hr />
							</TitleContent>
							<CardInfo>{project.description}</CardInfo>
							<HeaderStack title>Stack</HeaderStack>
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
									<ExternalLinks disabled>
										Code
									</ExternalLinks>
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

export default Projects;
