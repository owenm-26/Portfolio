import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div `
width: ${(props) => props.type !== "sm" && "360px"};
margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
cursor: pointer;
display: ${(props) => props.type === "sm" && "flex"};
gap: 10px;
    
`;

const Image = styled.img `
    width: 100%;
    height: ${(props => props.type === "sm" ? "120px" : "202px")};;
    background-color: #999;
    cursor: pointer;
    flex: 1;
`;

const Details = styled.div `
    display: flex;
    flex: 1;
    
`;

const Texts = styled.div `
    
`;

const Title = styled.h1 `
  font-size: 16px;
  font-weight: 500;
  color: ${({theme}) => theme.text};
`;

const Date = styled.div `
  font-size: 14px;
  color: ${({theme}) => theme.textSoft};
  margin: 3px 0px;  
`;

const Card = ({type}) => {
  return (
    <Link to="/video/test" style = {{textDecoration: "none"}}>
    
    <Container type = {type}>
      <Image type = {type} src = ""/>
      <Details type = {type}>
        <Texts>
          <Title>Test Project</Title>
          <Date>October 2022</Date>
        </Texts>

      </Details>
    </Container>
  </Link>
  )
}

export default Card;
