import styled from "styled-components";
import { Paragraph, Title } from "../styles/styles";
import quotes from "../images/bg-quotes.png";
import perfil1 from "../images/profile-1.jpg";
import perfil2 from "../images/profile-2.jpg";
import perfil3 from "../images/profile-3.jpg";

const List = styled.ul`
  margin-top: -5px;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 0px 100px;
  li {
    width: 31%;
    background-color: hsl(219, 30%, 18%);
    border-radius: 5px;
    padding: 20px 30px;
    box-shadow: 5px 5px 06px 2px hsl(216, 53%, 9%);
    p {
      font-size: 0.76em;
      max-width: 390px;
      height: 100px;
      text-align: start;
      margin-bottom: 0px;
    }
    .perfil_area {
      margin-top: -10px;
      display: flex;
      align-items: center;
    }
    list-style: none;
    .perfil {
      margin-left: 15px;
    }
    img {
      width: 34px;
      height: 34px;
      border-radius: 50%;
    }
    h1 {
      font-size: 0.8em;
      margin-bottom: 0px;
    }
    span {
      padding: 0px;
      font-size: 0.7em;
      color: hsl(0, 0%, 87%);
    }
  }
  @media (max-width: 1000px){
    flex-direction: column;
    li{
      width: 100%;
      margin-bottom: 30px;
    }
  }
`;
const Quotes = styled.img`
margin-top: 50px;
  padding: 0px 92px;
  margin-bottom: 0px;
  padding-bottom: 0px;
`;

export default function Comments() {
  return (
    <>
      <Quotes src={quotes} alt="quotes" id="quotes" />
      <List>
        <li>
          <Paragraph>
            {" "}
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </Paragraph>
          <div className="perfil_area">
            <img src={perfil1} alt="avatar perfil" />
            <div className="perfil">
              <Title>Satish Patel</Title>
              <span>Founder & CEO, Huddle</span>
            </div>
          </div>
        </li>
        <li>
          <Paragraph>
            {" "}
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </Paragraph>
          <div className="perfil_area">
            <img src={perfil2} alt="avatar perfil" />
            <div className="perfil">
              <Title>Bruce McKenzie</Title>
              <span>Founder & CEO, Huddle</span>
            </div>
          </div>
        </li>
        <li>
          <Paragraph>
            {" "}
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </Paragraph>
          <div className="perfil_area">
            <img src={perfil3} alt="avatar perfil" />
            <div className="perfil">
              <Title> Boyd</Title>
              <span>Founder & CEO, Huddle</span>
            </div>
          </div>
        </li>
      </List>
    </>
  );
}
