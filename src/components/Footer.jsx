import styled from "styled-components";
import { Paragraph } from "../styles/styles";
import logo from "../images/logo.svg";
import location from "../images/icon-location.svg";
import phone from "../images/icon-phone.svg";
import email from "../images/icon-email.svg";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterContainer = styled.footer`
  margin-top: -100px;
  height: 40vh;
  width: 100%;
  padding: 0px 50px;
  background-color: hsl(216, 53%, 9%);
  display: flex;
  flex-direction: column;
  padding: 0px 100px;

  img {
    width: 160px;
  }
  .content {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
  }

  .location {
    display: flex;
    align-items: start;
    img {
      margin-top: 4px;
      width: 11px;
      height: 15px;
    }
    p {
      margin-top: 0px;
      margin-left: 22px;
      font-size: 0.8em;
      max-width: 320px;
      text-align: start;
    }
  }

  .contact {
    display: flex;
    flex-direction: column;
    span {
      display: flex;
      align-items: flex-start;
      margin-bottom: 8px;
      img {
        width: 15px;
      }
      p {
        margin-top: 0px;
        margin-left: 18px;
        font-size: 0.75em;
      }
    }
  }
  .icons{
    .icon{
        padding: 6px;
        color: hsl(0, 0%, 87%);
        font-size: 1.5em;
        box-shadow: 0px 0px 1px 1px hsl(0, 0%, 87%);
        border-radius: 50%;
        margin-right: 15px;
        cursor: pointer;
        transition: 0.2s;
        &:hover{
            color: hsl(176, 68%, 64%);
            box-shadow: 0px 0px 1px 1px hsl(176, 68%, 64%);
        }
    }
  }

  @media (max-width:1100px){
    padding: 0px 50px;
  }

  @media (max-width: 880px){
    height: 90vh;
    padding: 0px 20px;
    img{
      width: 200px;
      margin-bottom: 30px;
    }
    .content{
      height: 100%;
      flex-direction:column;
    }
    .icons{
      align-self: center;
      margin-bottom: 10px;
    }
  }
`;
const List = styled.ul`
  margin-top: 0px;
  li {
    list-style: none;
    margin-bottom: 10px;
    color: hsl(0, 0%, 87%);
    font-size: 0.84em;
    font-weight: 400;
    cursor: pointer;
    &:hover{
        color: hsl(0, 0%, 100%);
    }   
  }

  @media (max-width: 880px) {
      margin: 0px;
      padding: 0px;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <img src={logo} alt="logo" />
      <div className="content">
        <div className="location">
          <img src={location} alt="location icon" />
          <Paragraph>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Paragraph>
        </div>
        <div className="contact">
          <span>
            <img src={phone} alt="phone icon" />
            <Paragraph>+1-543-123-4567</Paragraph>{" "}
          </span>
          <span>
            <img src={email} alt="email icon" />
            <Paragraph>example@fylo.com</Paragraph>{" "}
          </span>
        </div>
        <List>
          <li>About Us</li>
          <li>jobs</li>
          <li>Press</li>
          <li>Blog</li>
        </List>
        <List>
          <li>Contact Us</li>
          <li>Terms</li>
          <li>Privacy</li>
        </List>
        <div className="icons">
          <FaFacebook className= "icon" />
          <FaTwitter className= "icon"  />
          <FaInstagram className= "icon"  />
        </div>
      </div>
    </FooterContainer>
  );
}
