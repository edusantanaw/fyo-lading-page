import { SectionContainer } from "../styles/styles";
import productive from "../images/illustration-stay-productive.png";
import { Title, Paragraph } from "../styles/styles";
import favicon from "../images/favicon-32x32.png";
import styled from "styled-components";

const ProductiveSection = styled(SectionContainer)`
  margin-top: -100px;

  div {
    margin-left: 60px;

    h1 {
      margin-bottom: 20px;
      font-size: 2.4em;
      max-width: 340px;
    }

    p {
      text-align: start;
      font-size: 0.8em;
    }
    a {
      text-decoration: none;
      color: hsl(176, 68%, 64%);
      padding-bottom: 4px;
      border-bottom: 1.5px solid hsl(176, 68%, 64%);
      font-size: 0.95em;
      letter-spacing: 1px;
      transition: 0.2s;
      &:hover {
        color: hsl(198, 60%, 50%);
        border-color: hsl(198, 60%, 50%);
      }
    }
    a img {
      width: 13px;
      color: hsl(176, 68%, 64%);
    }
  }
  @media (max-width: 1000px) {
    padding: 30px;
    margin-top: 60px;
    flex-direction: column;
    img {
      width: 85%;
    }
    div {
     margin-top: 50px;
      h1 {
        font-size: 1.8em;
        max-width: 1000px;
      }
      p{
        font-size: 1em;
      }
    }
  }
`;
export default function Productive() {
  return (
    <ProductiveSection>
      <img src={productive} alt="productive" />
      <div>
        <Title> Stay productive, wherever you are</Title>
        <Paragraph>
          {" "}
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </Paragraph>
        <Paragraph>
          {" "}
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </Paragraph>
        <a href=" ">
          {" "}
          See how Fylo works{" "}
          <img src={favicon} alt="icon from frontend mentor" />
        </a>
      </div>
    </ProductiveSection>
  );
}
