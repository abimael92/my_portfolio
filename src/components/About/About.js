import React, { useState, useRef, useEffect } from 'react';

import { FaUserGraduate, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaBirthdayCake, FaUserClock } from 'react-icons/fa';


import {
	BulletPoint,
	Container,
	Row,
	RightContainer,
	AboutSectionText,
	PersonalInfoGrid,
	RotatingText,
	ImageNeon,
	Image,
	InfoItem,
	InfoTitle,
	InfoDetail,
} from './AboutStyles';

import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';


const About = () => {
	const birthday = new Date(1992, 9, 7); // October is month 9 (zero-based index)
	const today = new Date();
	const age = today.getFullYear() - birthday.getFullYear() - (today < new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate()) ? 1 : 0);
	const workExp = today.getFullYear() - 2015;
	const toRotate = ["Web Developer", "Full-Stack Developer", "Software Engineer"];

	const remToPixels = (rem) => rem * 16;

	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState('');
	const [isPaused, setIsPaused] = useState(false);
	// const [delta, setDelta] = useState(300 - Math.random() * 100);
	const delta = 150;
	const period = 1500;


	useEffect(() => {
		const tick = () => {
			let i = loopNum % toRotate.length;
			let fullText = toRotate[i];
			let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

			setText(updatedText);

			if (!isDeleting && updatedText === fullText) {
				setIsPaused(true); // Pause before deleting
				setTimeout(() => {
					setIsDeleting(true); // Start deleting after pause
					setIsPaused(false); // Reset pause
				}, period);
			} else if (isDeleting && updatedText === '') {
				setIsDeleting(false);
				setLoopNum(loopNum + 1);
				setIsPaused(true); // Pause before starting new text
				setTimeout(() => {
					setIsPaused(false); // Reset pause
				}, period);
			}
		};

		let ticker;
		if (!isPaused) {
			ticker = setInterval(() => {
				tick();
			}, delta);
		}

		return () => clearInterval(ticker);
	}, [text, isDeleting, isPaused, loopNum]);


	return (
		<Section id='about'>
			<SectionTitle>About Me</SectionTitle>
			<SectionDivider />
			<Container>
				<AboutSectionText>
					Hey there! I’m a web developer who loves tackling challenges and learning new things along the way. <br />
					I enjoy working with great teams where we can share ideas, mentor each other, and build awesome projects together.
					I’m always on the lookout for exciting opportunities to grow, contribute, and have fun while doing it —
					ready to turn caffeine into code!
				</AboutSectionText>

				<RightContainer>
					<ImageNeon className="neon-medium">
						<Image
							src='/images/my_picture.png'
							alt='Abimael'
							width={remToPixels(6)}  // example size, adjust as needed
							height={remToPixels(6)}
						/>
					</ImageNeon>
					<RotatingText>
						<span className="txt-rotate" data-period="1000" data-rotate={JSON.stringify(toRotate)}>
							{`I'm a `}
							<span className="wrap">{text}</span>
						</span>
					</RotatingText>
				</RightContainer>

			</Container>

			<Row>
				<PersonalInfoGrid>
					<InfoItem>
						<FaUserGraduate />
						<InfoTitle>Degree:</InfoTitle>
						<InfoDetail>Bachelor's in Computer Science</InfoDetail>
					</InfoItem>
					<InfoItem>
						<FaPhoneAlt />
						<InfoTitle>Phone:</InfoTitle>
						<InfoDetail>+52 (614) 132 54 05</InfoDetail>
					</InfoItem>
					<InfoItem>
						<FaMapMarkerAlt />
						<InfoTitle>Location:</InfoTitle>
						<InfoDetail>Chihuahua, Chih. Mexico</InfoDetail>
					</InfoItem>
					<InfoItem>
						<FaEnvelope />
						<InfoTitle>Email:</InfoTitle>
						<InfoDetail>abimael1992g@gmail.com</InfoDetail>
					</InfoItem>
					<InfoItem>
						<FaBirthdayCake />
						<InfoTitle>Birthday:</InfoTitle>
						<InfoDetail>{birthday.toDateString() || 'October 7th, 1992'}</InfoDetail>
					</InfoItem>
					<InfoItem>
						<FaUserClock />
						<InfoTitle>Age:</InfoTitle>
						<InfoDetail>{age}</InfoDetail>
					</InfoItem>
					<InfoItem>
						<FaUserClock />
						<InfoTitle>Experience:</InfoTitle>
						<InfoDetail>{workExp}</InfoDetail>
					</InfoItem>
				</PersonalInfoGrid>
			</Row>


		</Section>
	);
};

export default About;
