import React from 'react'
import styled from 'styled-components';

const About = () => {
  return (
    <Wrapper>About</Wrapper>
  )
}

export default About;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 120px);

  font-size: 40px;
  background-color: #ddd;
`