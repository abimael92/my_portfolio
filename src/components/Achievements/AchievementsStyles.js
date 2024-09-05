import styled from 'styled-components';

export const Boxes = styled.div`
	width: 100%;
	display: grid;
	justify-content: space-between;
	grid-template-columns: repeat(3, 1fr);
	gap: 3rem 0.5rem;
	margin: 1.5rem;

	@media ${(props) => props.theme.breakpoints.md} {
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		max-width: 500px;
		margin: 24px auto;
	}
`;

export const BoxNum = styled.h5`
	font-style: normal;
	font-size: 2.5rem;

	font-weight: bold;
	display: flex;
	align-items: center;

	line-height: 22px;
	letter-spacing: 0.01em;
	color: #ffffff;
	/* box-shadow: 0px 4px 10px #007bff; // Accent color */

	margin-bottom: 1rem;

	&::before {
    content: url('/icons/checkmark.svg'); // Icon before the title
    margin-right: 10px;
  }

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 18px;
		line-height: 18px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 14px;
		line-height: 14px;
	}
`;

export const Box = styled.div`
	background: #212d45;
	border-radius: 12px;
	width: 90%;
	height: 25rem;
	padding: 1.5rem;
	box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.5); 
	transition: transform 0.3s ease;

	&:hover {
	transform: translateY(-5px); // Lift effect on hover
	}

	@media ${(props) => props.theme.breakpoints.lg} {
		height: 210px;
	}

	@media ${(props) => props.theme.breakpoints.md} {
		height: 135px;
		padding: 16px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		height: 110px;
		padding: 12px;

		&:nth-child(2n) {
			grid-row: 2;
		}
	}
`;




export const BoxText = styled.p`
	font-style: normal;
	font-weight: normal;
	font-size: 2rem;
	line-height: 1.6;

	letter-spacing: 0.02em;
	color: rgba(255, 255, 255, 0.75);

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 12px;
		line-height: 12px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 10px;
		line-height: 10px;
	}
`;

export const Join = styled.div`
	display: flex;
	max-width: 1040px;
	justify-content: center;
	align-items: center;
	padding-bottom: 80px;

	@media ${(props) => props.theme.breakpoints.md} {
		display: flex;
		justify-content: center;
		padding-bottom: 64px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 32px;
	}
`;

export const JoinText = styled.h5`
	display: flex;
	font-size: 24px;
	line-height: 40px;
	letter-spacing: 0.02em;
	color: rgba(255, 255, 255, 0.5);

	@media ${(props) => props.theme.breakpoints.md} {
		line-height: 32px;
		font-size: 20px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 16px;
		line-height: 24px;
		margin: 0 0 16px;
	}
`;

export const IconContainer = styled.div`
	display: flex;

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 160px;
		justify-content: space-between;
	}
`;
