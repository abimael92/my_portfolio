import styled from 'styled-components';
/* GridContainer: add max-width for large screens and horizontal centering */
export const GridContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 2rem 1rem;
  place-items: stretch;
  column-gap: 4rem;
  row-gap: 3rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 1rem 0.5rem;
  }
`;

/* BlogCard: fixed width, height and smoother hover */
export const BlogCard = styled.div`
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  width: 400px;
  height: 550px; 
  display: flex;
  flex-direction: column;
  background: #1e1e1e; /////////////
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.5); 

  &:hover {
    transform: translateY(-8px);
  	box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.8); 
  }
`;

/* Img: fixed height with rounded top corners */
export const Img = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

/* Content: add padding, flex grow to fill space */
export const Content = styled.div`
  padding: 1.5rem 1.5rem 2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  border: 2px solid rgba(255, 255, 255, 0.12);
  border-radius: 0 0 12px 12px;
  background: #212d45;
`;

/* TitleContent: center with padding */
export const TitleContent = styled.div`
  text-align: center;
  width: 100%;
  font-weight: 700;
  font-size: 1.8rem;
  text-decoration: underline #d0bb57;
  margin-bottom: 1rem;
  padding: 0 1rem;
  box-sizing: border-box;
`;

/* HeaderThree: smaller size for cards */
export const HeaderThree = styled.h3`
  font-weight: 600;
  letter-spacing: 1.2px;
  color: #9cc9e3;
  font-size: 2rem;
  margin: 0;
  line-height: 1.2;
`;

/* HeaderStack: smaller size with margin */
export const HeaderStack = styled.h4`
  font-weight: 500;
  color: #9cc9e3;
  font-size: 1.4rem;
  margin: 1rem 0 0.5rem 0;
`;

/* Hr: shorter and with smooth color */
export const Hr = styled.hr`
  width: 40%;
  height: 3px;
  margin: 0.8rem auto 1.2rem auto;
  border: none;
  background: linear-gradient(90deg, #d0bb57 0%, #ffa500 100%);
  border-radius: 2px;
`;

/* CardInfo: fixed height, scroll if overflow */
export const CardInfo = styled.p`
  padding: 1rem;
  margin: 0 0.5rem;
  width: calc(100% - 1rem);
  height: 120px;  /* reduce height */
  overflow-y: auto;
  color: #e4e6e7;
  font-size: 1.6rem;
  text-align: justify;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  border: 0.8px solid white;
  border-radius: 4px;

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d0bb57;
    border-radius: 3px;
  }
`;

/* UtilityList: flex layout with space-between */
export const UtilityList = styled.ul`
  display: flex;
  justify-content: ${(props) => (props.hasVisit ? 'space-between' : 'center')};
  padding: 0;
  margin: 1rem 0 0 0;
  list-style: none;
  gap: 1rem;
  flex-wrap: wrap;
`;

/* ExternalLinks: consistent size, subtle shadow */
export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  background: #6b3030;
  border-radius: 12px;
  border: 2px solid #ffa500;
  box-shadow: 0 2px 6px rgba(0,0,0,0.4);
  transition: background-color 0.3s ease;

  &:hover {
    background: #801414;
  }

  &[disabled] {
    background: #4a2a2a;
    color: #9e9e9e;
    cursor: not-allowed;
    pointer-events: none;
    border-color: #c76e00;
    box-shadow: none;
  }
`;

/* TagList: flex wrap with spacing */
export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  padding: 0.3rem;
  margin: 0 0.5rem;
  width: calc(100% - 1rem);
  height: 75px; /* reduce height */
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  border: 0.8px solid white;
  border-radius: 4px;

  /* scrollbar */
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d0bb57;
    border-radius: 3px;
  }
`;

/* Tag: consistent size and spacing */
export const Tag = styled.li`
  background-color: #007bff;
  color: #fff;
  padding: 0.3rem 0.9rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 15px;
  display: flex;
  align-items: center;
  height: 28px;
  user-select: none;
  white-space: nowrap;
  gap: 1rem;
  margin: 0.5rem;
`;
