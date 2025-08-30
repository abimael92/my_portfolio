import React, { useState, useRef, useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import {
	AchievementList,
	ArrowButton,
	CarouselContainer,
	CarouselMobileScrollNode,
	CarouselHeader,
	CarouselHeaderRight,
	CalendarIcon,
	CarouselItemHeader,
	CarouselItemTextBold,
	CarouselItem,
	CarouselItemTitle,
	CarouselItemDot,
	CarouselButtons,
	CarouselButton,
	CarouselButtonDot,
	CarouselLine,
	CarouselTimeLine,
	EducationItem,
	EducationHeaderRight,
	EducationItemTitle,
	EducationItemTextBold,
	EducationItemText,
	TechnologiesWrapper,
	TimeLineItemTitle,
	TimeLineContainer,
	TechnologyTag,
	ProjectIndustryWrapper,
} from './ExperienceStyles';
import {
	Section,
	SectionDivider,
	SectionTitle,
	SectionSubtitle,
	SectionTitle2,
	SectionSmallText,
} from '../../styles/GlobalComponents';
import { Calendar } from '@styled-icons/boxicons-regular';
import { useEducation, useTimeline } from '../../hooks/usePortfolioData';
import BlurWrapper from '../PrivateContent/BlurWrapper';

const Experience = () => {
	const [activeItem, setActiveItem] = useState(0);
	const carouselRef = useRef(null);
	const { accessToken } = useContext(AuthContext);
	const hasAccess = !!accessToken;
	const { education } = useEducation();
	const { timeline } = useTimeline();

	const scroll = (node, index) => {
		if (!node) return;
		const itemWidth = node.scrollWidth / timeline.length;
		const containerWidth = node.offsetWidth;
		const centerOffset = (itemWidth * index) - (containerWidth / 2) + (itemWidth / 2);
		const scrollLeft = Math.max(0, Math.min(centerOffset, node.scrollWidth - containerWidth));
		node.scrollTo({ left: scrollLeft, behavior: 'smooth' });
	};

	const handleClick = (e, index) => {
		setActiveItem(index);
		scroll(carouselRef.current, index);
	};

	const handleScroll = () => {
		if (carouselRef.current) {
			const index = Math.round(
				(carouselRef.current.scrollLeft / carouselRef.current.scrollWidth) * timeline.length
			);
			setActiveItem(index);
		}
	};

	useEffect(() => {
		const handleResize = () => scroll(carouselRef.current, activeItem);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [activeItem]);

	const handleBack = () => activeItem > 0 && setActiveItem(prev => {
		const newActive = prev - 1;
		scroll(carouselRef.current, newActive);
		return newActive;
	});

	const handleForward = () => activeItem < timeline.length - 1 && setActiveItem(prev => {
		const newActive = prev + 1;
		scroll(carouselRef.current, newActive);
		return newActive;
	});

	return (
		<Section id="experience">
			<SectionTitle>Experience</SectionTitle>
			<SectionDivider />

			<CarouselContainer ref={carouselRef} onScroll={handleScroll}>
				<CarouselMobileScrollNode>
					{timeline?.map((item, index) => (
						<TimeLineContainer key={index} index={index} active={activeItem}>
							<TimeLineItemTitle>{item.year}</TimeLineItemTitle>
							<CarouselTimeLine>
								<CarouselLine active={activeItem === index} isFirst={index === 0} isLast={index === timeline.length - 1} />
								<CarouselItemDot active={activeItem === index} />
							</CarouselTimeLine>

							<BlurWrapper authenticated={hasAccess}>
								<CarouselItem index={index} active={activeItem} onClick={(e) => handleClick(e, index)}>
									<CarouselHeaderRight>
										<CarouselItemTitle>
											<CalendarIcon>
												<Calendar size="24" />
											</CalendarIcon>
											{item.date}
										</CarouselItemTitle>
									</CarouselHeaderRight>

									<CarouselHeader>
										<CarouselItemHeader>
											{item.company} | {item.position}
										</CarouselItemHeader>
									</CarouselHeader>

									<ProjectIndustryWrapper>
										<div>
											<CarouselItemTextBold>Project:</CarouselItemTextBold>
											<SectionSmallText>{item.project}</SectionSmallText>
										</div>
										<div>
											<CarouselItemTextBold>Industry:</CarouselItemTextBold>
											<SectionSmallText>{item.industry}</SectionSmallText>
										</div>
									</ProjectIndustryWrapper>

									<CarouselItemTextBold>Description:</CarouselItemTextBold>
									<SectionSmallText>{item.description}</SectionSmallText>

									<CarouselItemTextBold>Achievements:</CarouselItemTextBold>
									<AchievementList>
										{item.achievements?.map((achievement, i) => (
											<li key={i}>{achievement}</li>
										))}
									</AchievementList>

									<TechnologiesWrapper>
										{item.technologies?.map((tech, i) => (
											<TechnologyTag key={i}>{tech}</TechnologyTag>
										))}
									</TechnologiesWrapper>
								</CarouselItem>
							</BlurWrapper>
						</TimeLineContainer>
					))}
				</CarouselMobileScrollNode>
			</CarouselContainer>

			<CarouselButtons>
				<ArrowButton onClick={handleBack}>&lt;</ArrowButton>
				{timeline?.map((_, index) => (
					<CarouselButton key={index} index={index} active={activeItem} onClick={() => handleClick(null, index)}>
						<CarouselButtonDot active={activeItem === index} />
					</CarouselButton>
				))}
				<ArrowButton onClick={handleForward}>&gt;</ArrowButton>
			</CarouselButtons>

			<SectionTitle>Education</SectionTitle>
			<SectionDivider colorAlt />
			<EducationItem>
				{education?.map((item, index) => (
					<React.Fragment key={index}>
						<EducationHeaderRight>
							<EducationItemTitle>
								<CalendarIcon>
									<Calendar size="24" />
								</CalendarIcon>
								{item.date}
							</EducationItemTitle>
						</EducationHeaderRight>
						<EducationItemTextBold>{item.title}</EducationItemTextBold>
						<EducationItemText>{item.institution}</EducationItemText>
					</React.Fragment>
				))}
			</EducationItem>
		</Section>
	);
};

export default Experience;