import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { AiOutlineLock } from 'react-icons/ai';

import AccessRequestModal from '../AccessRequest/AccessRequestModal';
import BlurWrapper from '../PrivateContent/BlurWrapper';

import {
	Container,
	Div1,
	Div2,
	Div3,
	UserLogin,
	NavLink,
	SocialIcons,
	Span,
} from './HeaderStyles';


const remToPixels = (rem) => rem * 16;

const Header = ({ authenticated }) => {
	const [activeSection, setActiveSection] = useState('');
	const [hasAccess, setHasAccess] = useState(false);

	const [showUserLogin, setShowUserLogin] = useState(false);
	const [showAccessModal, setShowAccessModal] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		// Check localStorage for access token flag
		const access = localStorage.getItem('access_granted');
		setHasAccess(!!access);
	}, []);

	const handleScroll = () => {
		const sections = [
			'about',
			'tech',
			'experience',
			'projects',
			'achievements',
		];

		sections.forEach((sectionId) => {
			const section = document.getElementById(sectionId);
			if (section) {
				const offsetTop = section.offsetTop;
				if (
					window.pageYOffset >= offsetTop &&
					window.pageYOffset < offsetTop + section.offsetHeight
				) {
					setActiveSection(sectionId);
				}
			}
		});
	};


	return (
		<>
			<Container id='header'>
				<Div1>
					<Link href='/' style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px' }}>
						<Image
							src='/images/Kachorro92_Logo.png'
							alt='Logo'
							width={remToPixels(3)}
							height={remToPixels(3)}
							style={{ margin: '6px' }}
						/>
						<Span>Portfolio</Span>
					</Link>
				</Div1>
				<Div2>
					<li>
						<Link href='#about' legacyBehavior>
							<NavLink
								className={
									activeSection === 'about' ? 'active' : ''
								}
								onClick={() => {
									setActiveSection('about');
								}}>
								About
							</NavLink>
						</Link>
					</li>{' '}
					<li>
						<Link href='#tech' legacyBehavior>
							<NavLink
								className={activeSection === 'tech' ? 'active' : ''}
								onClick={() => {
									setActiveSection('tech');
								}}>
								Technologies
							</NavLink>
						</Link>
					</li>{' '}
					<li>
						<Link href='#experience' legacyBehavior>
							<NavLink
								className={
									activeSection === 'experience' ? 'active' : ''
								}
								onClick={() => {
									setActiveSection('experience');
								}}>
								Experience
							</NavLink>
						</Link>
					</li>{' '}
					<li>
						<Link href='#projects' legacyBehavior>
							<NavLink
								className={
									activeSection === 'projects' ? 'active' : ''
								}
								onClick={() => {
									setActiveSection('projects');
								}}>
								Projects
							</NavLink>
						</Link>
					</li>
					<li>
						<Link href='#achievements' legacyBehavior>
							<NavLink
								className={
									activeSection === 'achievements' ? 'active' : ''
								}
								onClick={() => {
									setActiveSection('achievements');
								}}>
								Achievements
							</NavLink>
						</Link>
					</li>
				</Div2>
				<Div3>
					<BlurWrapper authenticated={authenticated}>
						<SocialIcons href='http://github.com/abimael92' target='_blank' rel='noopener noreferrer'>
							<AiFillGithub size='3rem' />
						</SocialIcons>
						<SocialIcons href='https://www.linkedin.com/in/abimael-garcia-00580314a/' target='_blank' rel='noopener noreferrer'>
							<AiFillLinkedin size='3rem' />
						</SocialIcons>
						<SocialIcons href='mailto:abimael199g@gmail.com' target='_blank' rel='noopener noreferrer'>
							<AiOutlineMail size='3rem' />
						</SocialIcons>
					</BlurWrapper>

					{!hasAccess && (
						<AiOutlineLock
							size={28}
							style={{ cursor: 'pointer', color: 'white' }}
							title="Request Access / Login Requests"
							onClick={() => setShowUserLogin(!showUserLogin)}
						/>
					)}

					{showUserLogin && (
						<UserLogin>
							<button
								onClick={() => {
									setShowAccessModal(true);
									setShowUserLogin(false);
								}}
								style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem', cursor: 'pointer' }}
							>
								Request Access
							</button>

							<div>
								<strong>Login Requests:</strong>

							</div>
						</UserLogin>
					)}


				</Div3>
			</Container>

			{showAccessModal && (
				<AccessRequestModal onClose={() => setShowAccessModal(false)} />
			)}
		</>
	);
};

export default Header;
