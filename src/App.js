import React, { useState } from 'react';

import styled from "styled-components";
import { ThemeProvider } from 'styled-components';
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { blueTheme, lightTheme } from './utils/Theme';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";


const Container = styled.div `
  display: flex;
  aic

`;

const Main = styled.div `
  flex: 7;
  background-color: ${({theme}) => theme.bg};
`;

const Wrapper = styled.div `
  padding: 22px 96px;
`;


function App() {
  const [blueMode, setBlueMode] = useState(false)

  return (
    <ThemeProvider theme = {blueMode ? blueTheme : lightTheme}>
    <Container>
      <BrowserRouter>
      <Menu blueMode = {blueMode} setBlueMode = {setBlueMode}/> 
      <Main>
        <Navbar blueMode = {blueMode} setBlueMode = {setBlueMode}/>
        <Wrapper>
          <Routes>
            <Route path= "/">
              <Route index element = {<Home/>} />
              <Route path= "video">
                <Route path = ":id" element = {<Video/>}/>
                
              </Route>
            </Route>

          </Routes >
            
        </Wrapper>
      </Main>
      </BrowserRouter>
    </Container>
    </ThemeProvider>
  );
}

export default App;
