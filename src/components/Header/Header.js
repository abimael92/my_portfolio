import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { BsPalette2 } from 'react-icons/bs';

import {
	Container,
	Div1,
	Div2,
	Div3,
	NavLink,
	SocialIcons,
	Span,
} from './HeaderStyles';

import PaletteChanger from '../PaletteChanger/PaletteChanger';

// Calculate the pixel value equivalent of 3rem based on the root font size
const remToPixels = (rem) => rem * 16;

const Header = () => {
	const [activeSection, setActiveSection] = useState('');
	const [showPaletteMenu, setShowPaletteMenu] = useState(false); // State to control the display of the palette menu

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

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<Container id='header'>
			<Div1>
				<Link href='/' legacyBehavior>
					<a
						style={{
							display: 'flex',
							alignItems: 'center',
							color: 'white',
							marginBottom: '20px',
						}}
						legacyBehavior>
						<Image
							src='/images/Kachorro92_Logo.png'
							alt='Logo'
							width={remToPixels(3)}
							height={remToPixels(3)}
							style={{
								margin: '6px',
							}}
						/>
						<Span>Portfolio</Span>
					</a>
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
				<SocialIcons href='http://github.com/abimael92' target='_blank' rel='noopener noreferrer'>
					<AiFillGithub size='3rem' />
				</SocialIcons>
				<SocialIcons href='https://www.linkedin.com/in/abimael-garcia-00580314a/' target='_blank' rel='noopener noreferrer'>
					<AiFillLinkedin size='3rem' />
				</SocialIcons>
				<SocialIcons href='mailto:abimael199g@gmail.com' target='_blank' rel='noopener noreferrer'>
					<AiOutlineMail size='3rem' />
				</SocialIcons>

				{/* <SocialIcons>
					<PaletteChanger
						showPaletteMenu={showPaletteMenu}
						setShowPaletteMenu={setShowPaletteMenu}
					/>
				</SocialIcons> */}
			</Div3>
		</Container>
	);
};

export default Header;
