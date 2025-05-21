import React, { useState, useRef, useEffect } from 'react';

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
	const age = today.getFullYear() - birthday.getFullYear();
	const workExp = today.getFullYear() - 2015;
	const toRotate = ["Web Developer", "Full-Stack Developer", "Software Engineer"];

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

		return () => clearInterval(ticker); // Clean up interval on unmount
	}, [text, isDeleting, isPaused, loopNum]); // Add all dependencies



	// if (isDeleting) {
	// 	setDelta(prevDelta => prevDelta / 2);
	// }

	// if (!isDeleting && updatedText === fullText) {
	// 	setIsDeleting(true);
	// 	setDelta(period);
	// } else if (isDeleting && updatedText === '') {
	// 	setIsDeleting(false);
	// 	setLoopNum(loopNum + 1);
	// 	setDelta(500);
	// } else {
	// 	setDelta(prevDelta => prevDelta + 1);
	// }



	return (
		<Section id='about'>
			<SectionTitle>About Me</SectionTitle>
			<SectionDivider />
			<Container>
				<AboutSectionText>
					Hello! I'm a motivated web app developer with a passion for
					coding and problem-solving. I thrive on challenges that
					encourage creative thinking and collaborative teamwork.
					Eager to learn and grow, I'm seeking new opportunities to
					contribute to impactful projects that push boundaries and
					make a difference. Let's create innovative solutions
					together!
				</AboutSectionText>

				<RightContainer>
					<ImageNeon className="neon-medium">
						<Image
							src='/images/my_picture.png'
							alt='Abimael'
						/>
					</ImageNeon>
					<RotatingText>
						<span className="txt-rotate" dataPeriod="1000" data-rotate={JSON.stringify(toRotate)}>
							{`I'm a `}
							<span className="wrap">{text}</span>
						</span>
					</RotatingText>
				</RightContainer>

			</Container>
			<Row>
				<PersonalInfoGrid>
					<InfoItem>
						<BulletPoint />
						<InfoTitle>Degree: </InfoTitle>
						<InfoDetail>Bachelor's in Computer Science</InfoDetail>
					</InfoItem>
					<InfoItem>
						<BulletPoint />
						<InfoTitle>
							Phone: <InfoDetail> +52 (614) 132 54 05</InfoDetail>
						</InfoTitle>
					</InfoItem>
					<InfoItem>
						<BulletPoint />
						<InfoTitle>
							Location:
							<InfoDetail>Chihuahua, Chih. Mexico</InfoDetail>
						</InfoTitle>
					</InfoItem>
					<InfoItem>
						<BulletPoint />
						<InfoTitle>
							Email:
							<InfoDetail>abimael1992g@gmail.com</InfoDetail>
						</InfoTitle>
					</InfoItem>
					<InfoItem>
						<BulletPoint />
						<InfoTitle>
							Birthday: <InfoDetail>{birthday.toDateString() || 'October 7th, 1992'}</InfoDetail>
						</InfoTitle>
					</InfoItem>
					<InfoItem>
						<BulletPoint />
						<InfoTitle>
							Age: <InfoDetail>{age}</InfoDetail>
						</InfoTitle>
					</InfoItem>
					<InfoItem>
						<BulletPoint />
						<InfoTitle>
							Experience:
							<InfoDetail>{workExp}</InfoDetail>
						</InfoTitle>
					</InfoItem>
				</PersonalInfoGrid>
			</Row>
		</Section>
	);
};

export default About;
