import React from 'react'
import styled from 'styled-components';

const ScribeList = ({ items, type }) => {

    return (
        <Wrapper>


            <ul className='scribe-list' >
                {items.map((item, index) => (
                    <li className='scribe-list-item' key={index}>
                        {typeof item === 'string' ?
                            item
                            :
                            <div dangerouslySetInnerHTML={{ __html: item.content }} />
                        }

                        {item.items && <ScribeList items={item.items} />}

                    </li>
                ))}
            </ul>

        </Wrapper>
    );
};

export default ScribeList

const Wrapper = styled.div`
/* MyMonacoEditor.css */

/* Base style for the outermost list */
.scribe-list {
  list-style-type: none; /* Remove default bullet style */
  padding-left: 10px;
  margin: 5px 0;
  font-family: Arial, sans-serif;
  .scribe-list-item{
    margin: 5px 10px;
    position: relative;
    line-height: 20px;
    padding-left: 20px;
    font-size: 1vmax;
    width: "100%";
    
  }
}

/* Custom symbols for the outermost list and each level of nesting */

.scribe-list > li::before {
  content: "★"; /* Star symbol */
  color: #007bff;
  position: absolute;
  left: 0;
  top: auto;
  margin-right: 10px;
}

.scribe-list li .scribe-list > li::before {
  content: "→"; /* Arrow symbol */
  color: #ff5722;
  margin-right: 10px;
}

.scribe-list li .scribe-list li .scribe-list > li::before {
  content: "◆"; /* Diamond symbol */
  color: #4caf50;
  margin-right: 10px;
}

.scribe-list li .scribe-list li .scribe-list li .scribe-list > li::before {
  content: "✦"; /* Sparkle symbol */
  color: #9c27b0;
  margin-right: 10px;
}

.scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list > li::before {
  content: "✸"; /* Flower symbol */
  color: #ff9800;
  margin-right: 10px;
}

.scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list > li::before {
  content: "✵"; /* Six-pointed star symbol */
  color: #3f51b5;
  margin-right: 10px;
}

.scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list > li::before {
  content: "✷"; /* Star symbol */
  color: #009688;
  margin-right: 10px;
}

.scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list > li::before {
  content: "❖"; /* Diamond with a dot symbol */
  color: #c2185b;
  margin-right: 10px;
}

.scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list > li::before {
  content: "✿"; /* Flower symbol */
  color: #8bc34a;
  margin-right: 10px;
}

.scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list > li::before {
  content: "⚫"; /* Black circle symbol */
  color: #607d8b;
  margin-right: 10px;
}

/* Additional styles for all nested levels */
.scribe-list li {
  margin-bottom: 5px; /* Space between list items */
}

.scribe-list li a {
  color: #007bff; /* Link color */
  text-decoration: none;
}

.scribe-list li a:hover {
  text-decoration: underline;
}


`;
