import dynamic from 'next/dynamic';
import Acomplishments from '../components/Achievements/Achievements';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
// import Technologies from '../components/Technologies/Technologies';
import Experience from '../components/Experience/Experience';
import About from '../components/About/About';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Technologies = dynamic(() => import('../components/Technologies/Technologies'), { ssr: false });

const Home = () => {
	return (
		<Layout>
			<Section grid>
				<Hero />
				<BgAnimation />
			</Section>
			<About />
			<Technologies />
			<Experience />
			<Projects />
			<Acomplishments />
		</Layout>
	);
};

export default Home;
