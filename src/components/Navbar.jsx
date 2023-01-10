import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
  position: sticky;
  top: 0px;
  background-color: ${({theme}) => theme.bgLighter};
  height: 56px;
  
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px
  position: relative;
  
`;
const Search = styled.div`
width: 50%;
position: absolute;
left:0px;
right: 0px;
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5px;
border: 1px solid #ccc;
border-radius: 3px;
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
`;



const Navbar = ({blueMode, setBlueMode}) => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Awesome Website'/>
          <SearchIcon/>

        </Search>
      </Wrapper>
    </Container>
  )
}

export default Navbar


