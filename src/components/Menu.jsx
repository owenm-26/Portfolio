import React from 'react'
import styled from 'styled-components';
import mylogo from "../img/website_logo.png"
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import { Link } from 'react-router-dom';


const Container = styled.div `
    flex: 1;
    background-color: ${({theme}) => theme.bgLighter};
    height: 100vh;
    color: ${({theme}) => theme.text};
    font-size: 14px
`;

const Wrapper = styled.div `
    padding: 0px 16px;

`;

const Logo = styled.div `
    display: flex;
    align-items: center;
    gap: 0px;
    font-weight: bold;
    margin-bottom: 25px
    

`;

const Img = styled.img`
   height: 60px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover{
    background-color: ${({theme}) => theme.soft}
  }
`;

const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({theme}) => theme.soft};

    
`; 

const Menu = ({blueMode, setBlueMode}) => {
  return (
    <Container>
        <Wrapper>
            <Link to="/" style = {{textDecoration: "none", color: "inherit"}}>
            
            <Logo>
                <Img src = {mylogo}/>
                OWEN
            </Logo>
            </Link>
            <Link to="/" style = {{textDecoration: "none", color: "inherit"}}>
            <Item>
                <HomeIcon/>
                Home
            </Item>
            </Link>
            <Hr/>
            <Item>
                <WorkIcon/>
                Projects
            </Item>
            <Hr/>
            <Item>
                <SchoolIcon/>
                Education 
            </Item>
            <Hr/>
            <Item>
                <PersonIcon/>
                About 
            </Item>
            <Hr/>
            <Item onClick = {()=> setBlueMode(!blueMode)}>
                <SettingsBrightnessIcon/>
                Theme 
            </Item>
        </Wrapper>
    </Container>
  )
}

export default Menu