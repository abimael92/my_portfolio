import React from 'react';
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';

import BlurWrapper from '../PrivateContent/BlurWrapper'

import { SocialIcons } from '../Header/HeaderStyles';
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from './FooterStyles';


const Footer = ({ authenticated }) => {
	console.log('auth', authenticated);

	return (
		<FooterWrapper>
			<BlurWrapper authenticated={authenticated}>
				<LinkList>
					<LinkColumn>
						<LinkTitle>Call</LinkTitle>
						<LinkItem href='tel:614-132-5405'>(614)-132-5405</LinkItem>
					</LinkColumn>
					<LinkColumn>
						<LinkTitle>Email</LinkTitle>
						<LinkItem href='mailto:abimael1992g@gmail.com'>
							abimael1992g@gmail.com
						</LinkItem>
					</LinkColumn>
				</LinkList>
				<SocialIconsContainer>
					<CompanyContainer>
						<Slogan>
							My Portfolio
							<br />
							Abimael Garcia (Web Developer)
						</Slogan>
					</CompanyContainer>
					<SocialContainer>
						<SocialIcons href='http://github.com/abimael92' target='_blank' rel='noopener noreferrer'>
							<AiFillGithub size='3rem' />
						</SocialIcons>
						<SocialIcons href='https://www.linkedin.com/in/abimael-garcia-00580314a/' target='_blank' rel='noopener noreferrer'>
							<AiFillLinkedin size='3rem' />
						</SocialIcons>
						<SocialIcons href='mailto:abimael1992g@gmail.com' target='_blank' rel='noopener noreferrer'>
							<AiOutlineMail size='3rem' />
						</SocialIcons>
					</SocialContainer>
				</SocialIconsContainer>
			</BlurWrapper>
		</FooterWrapper>
	);
};

export default Footer;

