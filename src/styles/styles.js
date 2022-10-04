import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    *{
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        width: 100%;
        min-height: 100vh;
        background-color: hsl(218, 28%, 13%);
        font-family: 'Open Sans', sans-serif;
    }
`;
const HeaderContianer = styled.header`
  width: 100%;
  height: 18vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 80px;
  background: hsl(217, 28%, 15%);
  img {
    width: 160px;
  }

  @media (max-width: 600px){
    padding: 5px 30px;
  }
`;

const List = styled.ul`
  display: flex;

  li {
    list-style: none;
  }
`;

const SectionContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 10px 80px;
`;

const Title = styled.h1`
  font-size: 3em;
  color: #fff;
  font-family: "Raleway", sans-serif;
`;

const Paragraph = styled.p`
  color: hsl(0, 0%, 87%);
  font-size: ${(props) => props.font_size};
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-size: 400;
  letter-spacing: 1px;
`;

const Button = styled.button`
  width: 300px;
  height: 55px;
  border: none;
  border-radius: 45px;
  font-size: 1.2em;
  color: #fff;
  cursor: pointer;
  transition: 0.2s;
  background: linear-gradient(90deg, hsl(176, 68%, 64%), hsl(198, 60%, 50%));
 
  &:hover {
    background: linear-gradient(90deg, hsl(176, 68%, 64%), hsl(176, 68%, 64%));
  }
`;

const Icon = styled.img``;

export {
  Paragraph,
  GlobalStyle,
  HeaderContianer,
  List,
  SectionContainer,
  Title,
  Button,
  Icon,
};
