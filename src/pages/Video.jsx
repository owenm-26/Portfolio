
import React from 'react'
import styled from 'styled-components';
import Card from '../components/Card';

const Container = styled.div `
  display: flex;
  gap: 24px;
`;

const Content = styled.div `
  flex: 5;
`;

const VideoWrapper = styled.div `
`;


const Title = styled.h1 `
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({theme}) => theme.text}
`;

const Details = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  `;

const Info = styled.span `
  color: ${({theme}) => theme.textSoft};
`;

const Hr = styled.hr `
  margin: 15px 0px;
  border: 0.5px solid color: ${({theme}) => theme.soft};
`;


const Recommendation = styled.div `
  flex: 2;
`;
const Organization = styled.div `
  display: flex;
  justify-content: space-between;
`;

const OrganizationInfo = styled.div `
  display: flex;  
  gap: 20px;
  

`;

const ImageDiv = styled.div `
  width: 50px;
  height: 50px;
  
  
`;

const Image = styled.img `
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #999;
`;

const OrganizationDetails = styled.div `
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.text};
`;

const OrganizationName = styled.span `
  font-weight: 500;
  margin-top: 0px;
  margin-bottom: 15px; 
`;


const OrganizationDescription = styled.p `
`;

const Video = ({imageLink, title, date}) => {
  return (
    <Container>
      <Content>
        <VideoWrapper>

        </VideoWrapper>
        <Title>{title}</Title>
        <Details>
          <Info>October 2022</Info>
        </Details>
        <Hr/>
        <Organization>
          <OrganizationInfo>
            <ImageDiv>
              <Image src=""/>
            </ImageDiv>
            <OrganizationDetails>
              <OrganizationName>Dummy Employer</OrganizationName>
              <OrganizationDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis expedita autem similique magni architecto rerum harum, sint dolor vitae voluptas asperiores saepe atque magnam amet quia error eius nemo soluta?</OrganizationDescription>
            </OrganizationDetails>
          </OrganizationInfo>
        </Organization>
      </Content>
      <Recommendation>
        <Card type = "sm"/>
        <Card type = "sm"/>
        <Card type = "sm"/>
        <Card type = "sm"/>
        <Card type = "sm"/>
      </Recommendation>
    </Container>

  )
}

export default Video;