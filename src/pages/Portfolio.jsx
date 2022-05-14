import React from 'react'
import styled from 'styled-components';

const Portfolio = () => {
  return (
    <Wrapper>Portfolio</Wrapper>
  )
}

export default Portfolio;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 120px);

  font-size: 40px;
  background-color: #ddd;
`;