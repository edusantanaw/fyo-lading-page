import styled from "styled-components";
import { Title, Paragraph, Button, SectionContainer } from "../styles/styles";

const FormSection = styled(SectionContainer)`
  background: linear-gradient(
    180deg,
     hsl(218, 28%, 13%) 50%,
     hsl(216, 53%, 9%) 50%
     );
  justify-content: center;
  height: 30vh;
  width: 100%;

  @media (max-width: 750px){
    padding: 0 10px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: hsl(217, 28%, 15%);
  width: 75%;
  height: 260px;
  border-radius: 6px;

  h1 {
    font-size: 2em;
    margin-bottom: 4px;
  }
  p {
    font-size: 0.8em;
    max-width: 75%;
    line-height: 1.6;
  }
  .form {
    padding: 30px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    input {
      padding: 10px;
      width: 460px;
      height: 45px;
      border: none;
      border-radius: 30px;
      font-size: 0.8em;
    }

    button {
      width: 220px;
      height: 49px;
      font-size: 1em;

    }
  }

  @media (max-width:950px){

    height: 340px;
    .form{
      flex-direction: column;
      input{
        margin-bottom: 25px;
        width: 90%;
      }
      button{
        width: 90%;
      }
    }
  }

  @media (max-width: 750px){
    width:  95%;
  }
`;

export default function Form() {
  return (
    <FormSection>
      <FormContainer>
        <Title>Get early access today</Title>
        <Paragraph>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </Paragraph>
        <div className="form">
          <input placeholder=" example@fylo.com"/>
          <Button> Get Started For Free</Button>
        </div>
      </FormContainer>
    </FormSection>
  );
}
