import styled from 'styled-components';
import {
	SectionTitle,
	SectionText as GlobalSectionText,
} from '../../styles/GlobalComponents';

const remToPixels = (rem) => rem * 16;

export const BulletPoint = styled.span`
	display: inline-block;
	width: 8px;
	height: 8px;
	background-color: #fff;
	border-radius: 50%;
	margin-right: 8px;
`;

export const PersonalInfo = styled.div`
	padding: 15px;
`;
export const PersonalInfoGrid = styled(PersonalInfo)`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 12px;
	padding: 12px;
	box-sizing: border-box;
	min-width: 0;
`;

export const InfoItem = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 12px;
`;

export const InfoTitle = styled.h4`
	font-weight: bold;
	margin: 0;
	display: flex;
	align-items: center;
	font-size: 24px;
	margin-right: 8px;
`;

export const InfoDetail = styled.span`
	font-weight: normal;
	font-size: 20px;
	padding-left: 8px;
`;

export const Row = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: -12px; /* Negative margin to compensate for padding */
`;

export const RotatingText = styled.h2`
    font-size: 2.35rem;
    font-weight: bold;
    color: #13ADC7;
	color: rgb(0,123,255,1);
	margin-top: 1rem; /* Space between image and text */

  .txt-rotate > .wrap {
    border-right: 0.1em solid #666;
    padding: 1rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
    text-align: center;
    min-width: auto; /* reset for small screens */
    margin-top: 0.75rem;
  }
`;

export const StyledSectionTitle = styled(SectionTitle)`
	font-weight: bold;
`;

export const Container = styled.div`
  display: flex;
  align-items: center; /* Align items vertically center */
  justify-content: space-between; /* Space between text and image */
  padding: 1rem; /* Padding around the container */
`;

export const RightContainer = styled.div`
	display: flex;
	flex-direction: column; /* Stack items vertically */
	align-items: center; /* Center items horizontally */
	padding: 1rem; /* Padding around the container */

	min-width: 350px; /* or set a fixed width */
	width: 350px;

	@media ${(props) => props.theme.breakpoints.md} {
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		gap: 2rem; /* space between image and text */
	}
`;

// Section Text styling
export const SectionText = styled.div`
  flex: 1; /* Allows text to take up available space */
  margin-right: 2rem; /* Space between text and image container */
`;

export const AboutSectionText = styled(GlobalSectionText)`
	max-width: 65%;
	flex: 1; 
	font-size: 24px;
	line-height: 40px;
	font-weight: 300;
	padding-bottom: 1.6rem;
	margin-right: 2.6rem;
	color: rgba(255, 255, 255, 0.5);

	@media ${(props) => props.theme.breakpoints.md} {
		max-width: 670px;
		font-size: 20px;
		line-height: 32px;
		padding-bottom: 1.2rem;
		margin-right: 2.2rem;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 16px;
		line-height: 24px;
		padding-bottom: 0.8rem;
		margin-right: 1.8rem;
	}
`;

export const Image = styled.img`
	display: block;
	width: ${remToPixels(16)}px; /* Adjust size as needed */
	height: ${remToPixels(16)}px; /* Adjust size as needed */
	object-fit: cover; /* Ensure the image covers the entire container */
	border-radius: 50%;
	border: 4px solid rgba(255, 255, 255, 0.2);
	box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.4);
	filter: grayscale(30%) contrast(90%) brightness(95%);
	

	@media ${(props) => props.theme.breakpoints.sm} {
		margin-left: 0;
		margin-top: 1rem;
		max-width: 50%;
	}
`;

export const ImageNeon = styled.div`
	position: relative;
	display: inline-block;
	width: ${remToPixels(16)}px;
	height: ${remToPixels(16)}px;
	border-radius: 50%;
	overflow: hidden;
	margin: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2rem;

	&::before, &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    z-index: -1;
    animation: rotate 10s linear infinite;
    box-shadow: 0 0 20px rgba(4, 217, 255, 0.8); /* Neon glow effect */
  }

	&::before {
		width: calc(100% + 200px);
		height: calc(100% + 20px);
		animation: rotate 4s linear infinite;
		background: conic-gradient(from 0deg, rgba(4, 217, 255, 0), rgba(4, 217, 255, 1) 30%, transparent 30%);
		box-shadow: 0 0 20px rgba(4, 217, 255, 0.8); /* Neon glow effect */
	}

	&::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    width: calc(100% + 40px); /* Space around the image */
    height: calc(100% + 40px);
    border: 2px solid rgba(4, 217, 255, 0.6); /* Thinner line */
    background: transparent;
    box-shadow: 0 0 30px rgba(4, 217, 255, 0.8); /* Stronger glow effect */
    animation: rotate 6s linear infinite;
  }

  &.neon-small::before {
    width: calc(100% + 15px);
    height: calc(100% + 15px);
    border: 2px solid rgba(173, 216, 230, 0.6); /* Thinner border */
    animation: rotate 6s linear infinite;
  }

  &.neon-medium::before {
    width: calc(100% + 25px);
    height: calc(100% + 25px);
    border: 3px solid rgba(173, 216, 230, 0.8);
    animation: rotate 5s linear infinite;
  }

  &.neon-large::before {
    width: calc(100% + 35px);
    height: calc(100% + 35px);
    border: 4px solid rgba(173, 216, 230, 0.9);
    animation: rotate 4s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.6;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;