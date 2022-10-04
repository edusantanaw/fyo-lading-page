import { SectionContainer, Title, Paragraph, Button } from "../styles/styles";
import ilustration from "../images/illustration-intro.png";
import styled from "styled-components";
import curvy from '../images/bg-curvy-desktop.svg'

const HomeContainer = styled(SectionContainer)`
  flex-direction: column;
  background: hsl(217, 28%, 15%);
  background-image: url(${curvy});
  background-repeat: no-repeat;
  background-position: 0 96%;
  h1 {
    margin-top: 60px;
    font-size: 2.6em;
    font-weight: 700;
    max-width: 900px;
    text-align: center;
    padding: 0px;
    margin-bottom: 12px;
    line-height: 1.5;
}
  p {
    max-width: 600px;
    line-height: 1.7;
  }
  button {
    margin-top: 20px;
    margin-bottom: 173px;
  }

  @media (max-width: 800px){
    img{
      width: 100%;
    }
    h1{
      font-size: 1.8em;
      width: 420px;
    }

    p{
      font-size: 1em;
      width: 400px;
    }
  }
`;

export default function Home() {
  return (
    <HomeContainer>
      <img src={ilustration} alt="ilustration" />
      <Title>All your files in one secure location, accessible anywhere.</Title>
      <Paragraph font_size="1.1em">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </Paragraph>
      <Button>Get Started</Button>
    </HomeContainer>
  );
}
