import React from 'react';
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';

import BlurWrapper from '../PrivateContent/BlurWrapper'

import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

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


const Footer = () => {
	const { accessToken } = useContext(AuthContext);

	const hasAccess = !!accessToken;
	return (
		<FooterWrapper>

			<LinkList>
				<LinkColumn>
					<LinkTitle>Call</LinkTitle>
					<BlurWrapper authenticated={hasAccess}>
						<LinkItem href='tel:614-132-5405'>(614)-132-5405</LinkItem>
					</BlurWrapper>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<BlurWrapper authenticated={hasAccess}>
						<LinkItem href='mailto:abimael1992g@gmail.com'>
							abimael1992g@gmail.com
						</LinkItem>
					</BlurWrapper>
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
					<BlurWrapper authenticated={hasAccess}>
						<SocialIcons href='http://github.com/abimael92' target='_blank' rel='noopener noreferrer'>
							<AiFillGithub size='3rem' />
						</SocialIcons>
						<SocialIcons href='https://www.linkedin.com/in/abimael-garcia-00580314a/' target='_blank' rel='noopener noreferrer'>
							<AiFillLinkedin size='3rem' />
						</SocialIcons>
						<SocialIcons href='mailto:abimael1992g@gmail.com' target='_blank' rel='noopener noreferrer'>
							<AiOutlineMail size='3rem' />
						</SocialIcons>
					</BlurWrapper>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;

