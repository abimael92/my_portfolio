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
} from './TechnologiesStyles';

const Technologies = () => (
	<Section id='tech'>
		<SectionTitle>Technologies </SectionTitle>
		<SectionDivider />

		<SectionText>
			I've worked with a range a technologies in the web development
			world. From Front-end, Back-end To Design
		</SectionText>
		<SectionDivider colorAlt />

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
	</Section>
);

export default Technologies;
