// ExperienceStyles.js
import styled from 'styled-components';

export const TimeLineContainer = styled.div`
  top: 0;
  transform: translateX(-50%);
  z-index: 2;
  height: auto;
  min-width: 80%;
  position: relative; /* Important for absolute positioning of CarouselLine */
  overflow: visible;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem 0;
  padding: 2rem;
`;

export const CarouselContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  padding: 5rem;
  margin: 0;
  position: relative;
  width: 90%;
  box-sizing: border-box;
  
  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar for better aesthetics */
  }
`;


export const CarouselButtons = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin: 0 3rem ;
`;

export const CarouselButton = styled.button`
	box-sizing: border-box;
	background: none;
	font-size: 800;
	padding: 4px;
	border-radius: 30px;
	border: none;
	cursor: pointer;
	margin: 0 4px;
	opacity: ${(props) => (props.active === props.index ? `1` : `.33`)};
	transform: ${(props) =>
		props.active === props.index ? `scale(1.6)` : `scale(1)`};
	color: white; /* Set button color to white */

	&:hover {
		box-shadow: 0 0 10px rgba(255, 255, 255, 1); /* White glow effect */
		border-radius: 30px;
	}

	&:focus {
		outline: none;
		border-radius: 30px;
	}
`;
export const ArrowButton = styled.button`
	box-sizing: border-box;
	background: none;
	padding: 4px;
	border: none;
	cursor: pointer;
	margin: 0 4px;
	font-size: 800;
	border-radius: 30px;
	color: white;
	transform: scale(1.6);

	&:hover {
		box-shadow: 0 0 10px rgba(255, 255, 255, 1);
	}

	&:focus {
		outline: none;
	}
`;

export const CarouselButtonDot = styled.div`
	background-color: white;
	border-radius: 30px;
	margin: auto;
	width: 8px;
	height: 8px;
`;
export const CarouselMobileScrollNode = styled.div`
	display: flex;
	min-width: 100%;
	scroll-snap-type: x mandatory;
	justify-content: space-between;
`;

export const CarouselItem = styled.div`
  min-width: 80%;
  scroll-snap-align: center;
  flex: 0 0 80%;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  margin-left: 60rem;
  margin-right: 12rem;
  margin-top: 5rem;
 
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 1rem 2.5rem;
  z-index: ${(props) => (props.active === props.index ? 2 : 1)};
  opacity: ${(props) => (props.active === props.index ? 1 : 0.5)};
  transform: ${(props) =>
		props.active === props.index ? 'scale(1.1)' : 'scale(1)'};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

   /* Apply box-shadow only when active */
   box-shadow: ${(props) =>
		props.active === props.index
			? '0 0 15px 5px rgba(255, 255, 255, 0.8) !important'
			: 'none'};

  &:hover, &:focus {
    transform: scale(1.05);
  
  }

  &:active {
    transform: scale(1.05);
  }
`;


export const CarouselItemTitle = styled.h3`
	font-weight: bold;
	font-size: 18px;
	line-height: 24px;
	color: #fff;
	text-align: center;
	margin: 10px auto;
	padding: 1rem;

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 14px;
		line-height: 20px;
	}
`;

export const TimeLineItemTitle = styled.h4`
	font-weight: bold;
	font-size: 26px;
	line-height: 24px;
	color: #fff;
	text-align: center;
	margin: 10px auto 0;

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 14px;
		line-height: 20px;
	}
`;

export const CarouselTimeLine = styled.div`
	width: 100%;
	position: relative;
`;

export const CarouselItemDot = styled.div`
  background-color: ${(props) => (props.active ? 'rgb(0,123,255)' : 'rgba(0,123,255,0.7)')};
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  transition: background-color 0.3s ease-in-out;

  box-shadow: ${(props) =>
		props.active === props.index
			? '0 0 15px 5px rgba(255, 255, 255, 0.8) !important'
			: 'none'};
`;


export const CarouselLine = styled.div`
  background-color: ${(props) => (props.active ? 'rgb(0,123,255)' : 'rgba(0,123,255,0.4)')};
  height: 0.4rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 0;
  width: ${(props) =>
		props.isFirst ? '60%' :
			props.isLast ? '50%' : 'calc(100% +  12rem)'};

  left: ${(props) => (props.isFirst ? '50%' : '0')};
  right: ${(props) => (props.isLast ? '50%' : '0')};
`;

export const CarouselItemText = styled.p`
	font-size: 28px;
	line-height: 22px;
	letter-spacing: 0.02em;
	color: rgba(255, 255, 255, 0.75);
	padding-right: 16px;
	margin-top: 10px;

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 12px;
		line-height: 18px;
		padding-right: 32px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 10px;
		line-height: 16px;
		padding-right: 0;
	}
`;

export const CarouselHeader = styled.div`
	display: flex;
	font-weight: bold;


align-self: center;

`;

export const CarouselHeaderRight = styled.div`
	margin-left: auto;
	align-items: center;
	display: inline-block;
`;

export const CarouselItemHeader = styled.span`
	font-size: 22px;
	align-items: center;
`;


export const CalendarIcon = styled.span`
	font-size: 24px;
	margin-right: 4px;
	align-self: flex-start;
`;

export const CarouselItemTextBold = styled.p`
	font-weight: bold;
	font-size: 18px;
	line-height: 12px;
	letter-spacing: 0.02em;
	color: rgba(255, 255, 255, 0.75);
	padding-right: 16px;

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 14px;
		line-height: 18px;
		padding-right: 32px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 12px;
		line-height: 16px;
		padding-right: 0;
	}
`;

export const AchievementList = styled.ul`
	padding-left: 20px; 
	font-size: 14px;
	line-height: 22px;
	letter-spacing: 0.02em;
	color: rgba(255, 255, 255, 0.75);
	padding-right: 16px;
	margin-top: 10px;

	li::before {
		content: '•';
		color: rgba(255, 255, 255, 0.75);
		margin-right: 8px;
	}

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 12px;
		line-height: 18px;
		padding-right: 32px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 10px;
		line-height: 16px;
		padding-right: 0;
	}
`;

export const EducationItem = styled.div`
	width: 75%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	position: relative;

	transition: opacity 0.3s;
	background-color: rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	padding: 1rem;
	margin: 0.5rem;
	z-index: 2;
	align-self: center;
`;

export const EducationItemTitle = styled.h4`
	font-weight: bold;
	font-size: 16px;
	line-height: 24px;
	color: #ffffff;
	text-align: center;
	margin: 10px auto 0;

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 14px;
		line-height: 20px;
	}
`;

export const EducationItemText = styled.p`
	font-size: 14px;
	line-height: 22px;
	letter-spacing: 0.02em;
	color: rgba(255, 255, 255, 0.75);
	text-align: center;
	margin: 10px auto 0;

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 12px;
		line-height: 18px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 10px;
		line-height: 16px;
	}
`;

export const EducationHeader = styled.div`
	display: flex;
	align-items: center;
	font-weight: bold;
	justify-content: space-between;
`;

export const EducationHeaderRight = styled.div`
	margin-left: auto;
	align-items: center;
	display: inline-block;
`;

export const EducationItemTextBold = styled.p`
	display: flex;
	font-weight: bold;
	align-items: center;
	font-size: 16px;
	line-height: 22px;
	letter-spacing: 0.02em;
	color: rgba(255, 255, 255, 0.75);
	margin: 10px 0;

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 14px;
		line-height: 18px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 12px;
		line-height: 16px;
	}
`;

export const ProjectIndustryWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 10px;
  align-items: center;
`;

// For Technology tags
export const TechnologiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const TechnologyTag = styled.div`
  background-color: #f0f0f0;
  color: #333;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 500;
`;



// // Technology Tag
// export const TechnologyTag = styled.a`

//   position: relative;
//   background-color: rgb(0,123,255);
//   color: #ffffff;
//   padding: 5px 10px;
//   font-size: 12px;
//   font-family: "Lucida Grande", "Lucida Sans Unicode", Verdana, sans-serif;
//   font-weight: bold;
//   border-bottom-right-radius: 3px;
//   border-top-right-radius: 3px;
//   margin: 0.8rem;


//   &:before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: -12px;
//     width: 0;
//     height: 0;
//     border-color: transparent rgb(0,123,255) transparent transparent;
//     border-style: solid;
//     border-width: 12px 12px 12px 0;
//   }

//   &:after {
//     content: "";
//     position: absolute;
//     top: 10px;
//     left: 1px;
//     float: left;
//     width: 5px;
//     height: 5px;
//     border-radius: 50%;
//     background: #fff;
//     box-shadow: -1px -1px 2px rgba(0, 0, 0, 0.4);
//   }