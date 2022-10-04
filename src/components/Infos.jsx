import { SectionContainer } from "../styles/styles";
import styled from "styled-components";
import { Icon, Title, Paragraph } from "../styles/styles";
import Access from "../images/icon-access-anywhere.svg";
import Collaboration from "../images/icon-collaboration.svg";
import Security from "../images/icon-security.svg";
import File from "../images/icon-any-file.svg";

const InfoCotaniner = styled(SectionContainer)`
  margin-top: -50px;
  background-color: hsl(218, 28%, 13%);
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px 15%;
  .right,
  .left {
    width: 400px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .infos {
      text-align: center;
      img{
        max-width: 90px;
        height: 80px;
      }
      h1 {
        font-size: 1.2em;
      }
      p{
        font-size: 0.83em;
        width: 100%;
      }
    }
  }

  @media (max-width: 800px){
    flex-direction: column;

    .right{
      margin-top: 100px;
    }
  }
`;

export default function Infos() {
  return (
    <InfoCotaniner>
      <div className="left">
        <div className="infos">
          <Icon src={Access} alt="access icon" />
          <Title>Access your files, anywhere</Title>
          <Paragraph>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </Paragraph>
        </div>
        <div className="infos">
          <Icon src={Collaboration} alt="collaboration icon" />
          <Title>Reall-time collaborarion</Title>
          <Paragraph>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </Paragraph>
        </div>
      </div>
      <div className="right">
        <div className="infos">
          <Icon src={Security} alt="security icon" />
          <Title>Security you can trust</Title>
          <Paragraph>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </Paragraph>
        </div>
        <div className="infos">
          <Icon src={File} alt="file icon" />
          <Title>Store any type of file</Title>
          <Paragraph>
            {" "}
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </Paragraph>
        </div>
      </div>
    </InfoCotaniner>
  );
}
