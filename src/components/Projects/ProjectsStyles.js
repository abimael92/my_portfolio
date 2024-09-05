import styled from 'styled-components';

export const GridContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	padding: 3rem;
	place-items: center;
	column-gap: 2rem;
	row-gap: 3rem;

	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		padding: 2rem;
		padding-bottom: 0;
	}
`;

export const BlogCard = styled.div`
	border-radius: 10px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	text-align: center;
	width: 100%;
	width: fit-content;
	block-size: fit-content;/* Fixed height for cards */
	display: flex;
	flex-direction: column;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	position: relative;
	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	}
	box-shadow: 0 0 4px rgba(255, 255, 255, 1);
`;

export const Img = styled.img`
	width: 100%;
	height: 280px;
	object-fit: cover;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	border: 2px solid  rgba(255, 255, 255, 0.5);
	border-radius: 15px;
`;

export const TitleContent = styled.div`
	text-align: center;
	width: 100%;
	font-size: 1.5rem;
	font-weight: bold;
	text-decoration: underline;
	margin-bottom: 1rem;
	padding: 0 1rem;
	box-sizing: border-box;
	height: 80px;
`;

export const HeaderThree = styled.h3`
	font-weight: 600;
	letter-spacing: 1.5px;
	color: #9cc9e3;
	padding: 0.5rem 0;
	font-size: 3rem;
	margin: 0;
	height: 48px;
`;

export const HeaderStack = styled.h4`
	font-weight: 400;
	color: #9cc9e3;
	font-size: 1.75rem;
	margin: 0;
	padding: 0.5rem 0;
`;

export const Hr = styled.hr`
	width: 50%;
	height: 3px;
	margin: 1rem auto;
	border: none;
	background: #d0bb57;
`;

export const CardInfo = styled.p`
	padding: 1.5rem 1rem;
    margin: 0 0.5rem;
    width: calc(100% - 2rem);
    height: 120px;
	overflow-y: auto;
	color: #e4e6e7;
	font-size: 1.8rem;
	text-align: justify;
	box-sizing: border-box;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	justify-content: center;
	border: 0.8px solid white;
	border-radius: 15px;
`;

export const UtilityList = styled.ul`
	list-style-type: none;
	padding: 2rem;
	margin: 4rem 0;
	justify-content: ${(props) => (props.hasVisit ? 'space-between' : 'center')};
	flex-wrap: wrap;
`;

export const ExternalLinks = styled.a`
	color: #d4c0c0;
	font-size: 1.6rem;
	padding: 1rem 1.5rem;
	background: #6b3030;
	border-radius: 15px;
	transition: 0.5s;
	border: 2px solid #FFA500;
	&:hover {
		background: #801414;
	}


	/* Styles for the disabled state */
	&[disabled] {
		background: #4a2a2a; /* Darker overlay */
		color: #9e9e9e; /* Light gray text */
		cursor: not-allowed; /* Indicate that it's not clickable */
		pointer-events: none; /* Disable pointer events */
		border: 2px solid #C76E00;
	}
`;

export const TagList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
	justify-content: center;
    padding: 0.3rem;
    margin: 0 0.5rem;
    width: calc(100% - 1rem);
    height: 90px;
    overflow-y: auto;
    overflow-x: hidden;
	box-sizing: border-box;
	border: 0.8px solid white;
	border-radius: 8px;
`;

export const Tag = styled.li`
    background-color: rgb(0, 123, 255);
    color: #ffffff;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    font-family: "Lucida Grande", sans-serif;
    font-weight: bold;
    border-radius: 12px;
    margin: 0.5rem;
    height: 2.5rem; /* Set a fixed height for tags */
    display: flex;
    align-items: center; /* Center content vertically within tags */
    box-sizing: border-box; /* Include padding and border in the height */
`;


