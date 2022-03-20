import Head from "next/head";
import Enjoying from "../components/about/Enjoying";
import Bio from "../components/about/Bio";
const About = (props) => {
  return (
    <div style={{ minHeight: "65vh" }}>
      <Head>
        <title>Gareth Ng - About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Bio closeModal={props.closeModal} />
      <Enjoying />
    </div>
  );
};

export default About;
