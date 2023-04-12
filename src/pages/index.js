import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import Contacts from '../components/Contacts/Contacts';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import AboutMe from '../components/AboutMe/AboutMe';



const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <AboutMe />
      <Acomplishments />
      <Technologies />
      <Timeline />
      <Projects />
     
      
      <Contacts/>

    </Layout>
  );
};

export default Home;
