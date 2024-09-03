import React from 'react'
import styled from 'styled-components';

const ScribeAlert = ({ message, type, align }) => {

    switch (type) {
        case "primary":
            return <Wrapper $align={align} $bg={"#d8f4ff"} $border={"#2eb2e6"} className={'scribe-alert-container primary'}>
                <div className='scribe-align'>
                    <p className='scribe-alert-message' dangerouslySetInnerHTML={{ __html: message }} />
                </div>
            </Wrapper>
            break;

        case "info":
            return <Wrapper $align={align} $bg={"#b7deff"} $border={"#35a8f6"} className='scribe-alert-container info'>
                <div className='scribe-align'>
                    <p className='scribe-alert-message' dangerouslySetInnerHTML={{ __html: message }} />
                </div>
            </Wrapper>
            break;
        case "secondary":
            return <Wrapper $align={align} $bg={"#f1f5f9"} $border={"#3c3d3d"} className='scribe-alert-container secondary'>
                <div className='scribe-align'>
                    <p className='scribe-alert-message' dangerouslySetInnerHTML={{ __html: message }} />
                </div>
            </Wrapper>
            break;
        case "success":
            return <Wrapper $align={align} $bg={"#c7f2d2"} $border={"#13ce32"} className='scribe-alert-container success'>
                <div className='scribe-align'>
                    <p className='scribe-alert-message' dangerouslySetInnerHTML={{ __html: message }} />
                </div>
            </Wrapper>
            break;
        case "warning":
            return <Wrapper $align={align} $bg={"#f2e4c7"} $border={"#d28315"} className='scribe-alert-container warning'>
                <div className='scribe-align'>
                    <p className='scribe-alert-message' dangerouslySetInnerHTML={{ __html: message }} />
                </div>
            </Wrapper>
            break;
        case "danger":
            return <Wrapper $align={align} $bg={"#f2c7c7"} $border={"#d21515"} className='scribe-alert-container danger'>
                <div className='scribe-align'>
                    <p className='scribe-alert-message' dangerouslySetInnerHTML={{ __html: message }} />
                </div>
            </Wrapper>
            break;
        case "light":
            return <Wrapper $align={align} $bg={"#f8f8f8"} $border={"#000000"} className='scribe-alert-container light'>
                <div className='scribe-align'>
                    <p className='scribe-alert-message' dangerouslySetInnerHTML={{ __html: message }} />
                </div>
            </Wrapper>
            break;
        case "dark":
            return <Wrapper $align={align} $color={"#f9f9f9"} $bg={"#06102d"} $border={"#1a1d24"} className='scribe-alert-container dark'>
                <div className='scribe-align'>
                    <p className='scribe-alert-message' dangerouslySetInnerHTML={{ __html: message }} />
                </div>
            </Wrapper>
            break;
        default:
            <Wrapper $align={align} $color={"#1f0101"} $bg={"#ffffff"} $border={"#000000"} className='scribe-alert-container defalt'>
                <div className='scribe-align'>
                    <p className='scribe-alert-message' dangerouslySetInnerHTML={{ __html: message }} />
                </div>
            </Wrapper>
            break;
    }
}

export default ScribeAlert
const Wrapper = styled.div`
position: relative;
width: 100%;
height: fit-content;
padding: 5px;
border: 2px solid ${props => props.$border};
backdrop-filter: blur(5px);
background-color: ${props => props.$bg};
border-radius: 4px;
.scribe-align{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .scribe-alert-message{
        width: 100%;
        color: ${props => props.$color ? props?.$color : "#000"};
        font-size: 1vmax;
        text-align: ${props => props.$align};
    }
}
  
`;