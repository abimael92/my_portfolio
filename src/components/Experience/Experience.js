import React, { useState, useRef, useEffect } from 'react';
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
	SectionTitle2,
	SectionSmallText,
} from '../../styles/GlobalComponents';

import { Calendar } from '@styled-icons/boxicons-regular';

import { TimeLineData, EducationData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData?.length;

const Experience = () => {
	const [activeItem, setActiveItem] = useState(0);
	const carouselRef = useRef(null);


	const scroll = (node, index) => {
		if (node) {
			const itemWidth = node.scrollWidth / TimeLineData.length; // Width of each item
			const containerWidth = node.offsetWidth; // Width of the container
			const centerOffset = (itemWidth * index) - (containerWidth / 2) + (itemWidth / 2);

			const scrollLeft = Math.max(0, Math.min(centerOffset, node.scrollWidth - containerWidth));

			node.scrollTo({ left: scrollLeft, behavior: 'smooth' });
		}
	};

	function handleClick(e, index) {
		setActiveItem(index);

		const itemWidth = carouselRef.current.clientWidth / 3;
		const scrollPosition = itemWidth * index - (carouselRef.current.clientWidth / 2 - itemWidth / 2);

		carouselRef.current.scrollTo({
			left: scrollPosition,
			behavior: 'smooth',
		});
	}

	const handleScroll = () => {
		if (carouselRef.current) {
			const index = Math.round(
				(carouselRef.current.scrollLeft /
					(carouselRef.current.scrollWidth / TOTAL_CAROUSEL_COUNT))
			);
			setActiveItem(index);
		}
	};

	useEffect(() => {
		const handleResize = () => {
			scroll(carouselRef.current, 0);
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleBack = () => {
		if (activeItem > 0) {
			const newActiveItem = activeItem - 1;
			setActiveItem(newActiveItem);
			scroll(carouselRef.current, newActiveItem);
		}
	};

	const handleForward = () => {
		if (activeItem < TimeLineData.length - 1) {
			const newActiveItem = activeItem + 1;
			setActiveItem(newActiveItem);
			scroll(carouselRef.current, newActiveItem);
		}
	};

	return (
		<Section id="experience">
			<SectionTitle>Experience</SectionTitle>
			<SectionDivider />

			<CarouselContainer ref={carouselRef} onScroll={handleScroll}>
				<CarouselMobileScrollNode>
					{TimeLineData?.map((item, index) => (
						<TimeLineContainer key={index} index={index} active={activeItem}>
							<TimeLineItemTitle>{item.year}</TimeLineItemTitle>
							<CarouselTimeLine>
								<CarouselLine
									active={activeItem === index}
									isFirst={index === 0}
									isLast={index === TimeLineData.length - 1}
								/>
								<CarouselItemDot active={activeItem === index} />
							</CarouselTimeLine>

							<CarouselItem
								index={index}
								active={activeItem}
								first={index === 0}
								onClick={(e) => handleClick(e, index)}
							>
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

								<br />

								{/* Styled components for Project and Industry layout */}
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
								<br />

								<CarouselItemTextBold>Description:</CarouselItemTextBold>
								<SectionSmallText>{item.description}</SectionSmallText>
								<br />

								<CarouselItemTextBold>Achievements:</CarouselItemTextBold>
								<AchievementList>
									{item.achievements?.map((achievement, i) => (
										<li key={i}>{achievement}</li>
									))}
								</AchievementList>
								<br />

								{/* Styled components for Technologies */}
								<TechnologiesWrapper>
									{item.technologies?.map((tech, i) => (
										<TechnologyTag key={i}>{tech}</TechnologyTag>
									))}
								</TechnologiesWrapper>
								<br />

							</CarouselItem>
						</TimeLineContainer>
					))}
				</CarouselMobileScrollNode>
			</CarouselContainer>

			<CarouselButtons>
				<ArrowButton onClick={handleBack}>&lt;</ArrowButton>
				{TimeLineData?.map((item, index) => (
					<CarouselButton
						key={index}
						index={index}
						active={activeItem}
						onClick={() => {
							setActiveItem(index);
							scroll(carouselRef.current, index);
						}}
					>
						<CarouselButtonDot active={activeItem === index} />
					</CarouselButton>
				))}
				<ArrowButton onClick={handleForward}>&gt;</ArrowButton>
			</CarouselButtons>

			<SectionTitle2>Education</SectionTitle2>
			<SectionDivider />
			<EducationItem>
				{EducationData?.map((item, index) => (
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
