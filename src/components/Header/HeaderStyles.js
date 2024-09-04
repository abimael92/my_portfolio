import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';
import { BsPalette2 } from 'react-icons/bs';

export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 1000;
	background: #0f1624;
	display: grid;
	grid-template-columns: repeat(
		5,
		minmax(0, 1fr)
	); /* Adjusted column sizing */
	grid-template-rows: 1fr;
	grid-gap: 2rem; /* Added gap between grid items */
	padding: 1rem;
	padding-top: 2rem;

	@media ${(props) => props.theme.breakpoints.sm} {
		grid-template-columns: repeat(
			5,
			1fr
		); /* Keep the same number of columns */
		grid-template-rows: repeat(2, 60px);
		grid-gap: 0.5rem;
	}
`;

export const Span = styled.div`
	font-size: 2rem;
`;

export const Div1 = styled.div`
	grid-area: 1 / 1 / 2 / 2;
	display: flex;
	align-items: center;

	@media ${(props) => props.theme.breakpoints.sm} {
		grid-area: 1 / 1 / 2 / 3; /* Adjust for smaller screens */
	}
`;

export const Div2 = styled.div`
	grid-area: 1 / 2 / 2 / 5; /* Adjusted to span 3 columns */
	display: flex;
	align-items: center;
	justify-content: space-around;

	@media ${(props) => props.theme.breakpoints.sm} {
		grid-area: 2 / 1 / 3 / 6; /* Span all 5 columns for smaller screens */
	}
`;

export const Div3 = styled.div`
	grid-area: 1 / 6 / 2 / 6;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 0 3rem !important;
	//gap: 1rem;

	@media ${(props) => props.theme.breakpoints.sm} {
		grid-area: 1 / 4 / 2 / 6; /* Adjust for smaller screens */
	}
`;

// Navigation Links
export const NavLink = styled.a`
	font-size: 2rem;
	line-height: 32px;
	color: rgba(255, 255, 255, 0.75);
	transition: 0.4s ease;
	&:hover {
		color: #fff;
		opacity: 1;
		cursor: pointer;
		text-decoration: underline;
	}

	&.active,
	&:active {
		color: rgb(0,123,255,0.5);;
		opacity: 1;
		text-decoration: underline;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.5rem;
	}
`;

export const ContactDropDown = styled.button`
	border: none;
	display: flex;
	position: relative;
	background: none;
	font-size: 1.7rem;

	line-height: 32px;
	color: rgba(255, 255, 255, 0.75);
	cursor: pointer;
	transition: 0.3s ease;

	&:focus {
		outline: none;
	}
	&:hover {
		color: #fff;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.4rem 0;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		padding: 0;
	}
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
	margin-left: 8px;
	display: flex;
	align-self: center;
	transition: 0.3s ease;
	opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
	transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

	&:hover {
		opacity: 1;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		margin: 2px 0 0 2px;
		width: 15px;
	}
`;

// Social Icons

export const SocialIcons = styled.a`
	transition: 0.3s ease;
	color: white;
	border-radius: 50px;
	padding: 0 1rem;
	&:hover {
		background-color: #212d45;
		transform: scale(1.2);
		cursor: pointer;
	}
`;

export const DropdownMenu = styled.div`
	position: relative;
	display: inline-block;
	margin-left: 20px;

	/* Style for the icon */
	svg {
		cursor: pointer;
		transition: transform 0.2s;

		&:hover {
			transform: scale(1.1);
		}
	}
`;

export const PaletteIconWrapper = styled.div`
	position: relative;
`;

export const PaletteIcon = styled(BsPalette2)`
	cursor: pointer;
	color: white;
	font-size: 2rem;
`;

export const ColorPalettePopup = styled.div`
	position: absolute;
	top: 100%; /* Position the popup right below the PaletteIcon */
	left: 0;
	background-color: #0f1624;
	border-radius: 4px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
	padding: 10px;
	z-index: 1000; /* Ensure it's above other content */
`;

export const ColorOption = styled.div`
	color: white;
	cursor: pointer;
	padding: 6px 0;
	transition: color 0.3s;

	&:hover {
		color: #462a60;
	}
`;

export const PaletteChangerContainer = styled.div`
	position: absolute;
	top: 100%; /* Position it below the PaletteIconWrapper */
	left: 0;
	background-color: #0f1624; /* Set background color */
	padding: 10px; /* Add some padding for spacing */
	border-radius: 4px; /* Add border radius for a neat look */
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); /* Add a subtle shadow */
	z-index: 100; /* Ensure it's above other content */
`;
