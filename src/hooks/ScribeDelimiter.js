import React from 'react';
import styled from 'styled-components';

const ScribeDelimiter = ({ showDelimiter }) => {
    if (!showDelimiter) return null;

    return <Wrapper className="scribe-delimiter">

    </Wrapper>;
};

export default ScribeDelimiter;
const Wrapper = styled.div`
position: relative;
width: 100%;
text-align: center;
&::before{
  display: inline-block;
    content: "***";
    color: inherit;
    font-size: 30px;
    line-height: 65px;
    height: 30px;
    letter-spacing: .2em;
}
    
`;
