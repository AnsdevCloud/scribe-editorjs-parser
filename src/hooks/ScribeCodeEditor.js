import React, { useRef, useState } from 'react';
import MonacoEditor from '@monaco-editor/react';
import styled from 'styled-components';

const ScribeCodeEditor = ({ code, language }) => {
    const [isConpy, setIsCopy] = useState(false);
    const editorRef = useRef(null);

    const handleEditorDidMount = (editor) => {
        editorRef.current = editor;
    };

    const copyCodeToClipboard = () => {
        const code = editorRef.current.getValue();
        navigator.clipboard.writeText(code).then(() => {
            setIsCopy(true);
        }).catch(err => {
            console.error("Failed to copy text: ", err);
        });
    };

    return (
        <Wrapper>


            <div className="scribe-editor-container">
                <div className='scribe-editor-header'>
                    <span className='scribe-code-label'>{language}</span>

                    <button className="scribe-copy-button" id='scribe-copy-btn_ac' onClick={copyCodeToClipboard}>
                        {isConpy ? "Code Copied" : "Code Copy "}
                    </button>

                </div>
                <MonacoEditor
                    height="auto"
                    className='scribe-code-tools'
                    width="100%"
                    language={language.toLocaleLowerCase() || "javascript"}
                    value={code || "// Hello Word"}
                    theme="auto"
                    options={{
                        readOnly: true,               // Make the editor read-only
                        fontSize: 14,                 // Set the font size
                        lineNumbers: "on",            // Show line numbers ('on', 'off', 'relative', or 'interval')
                        minimap: { enabled: false },   // Show the minimap
                        wordWrap: 'on',               // Enable word wrapping
                        scrollBeyondLastLine: false,  // Prevent scrolling beyond the last line
                        automaticLayout: true,        // Automatically adjust layout
                    }}
                    onMount={handleEditorDidMount}
                />
            </div>

        </Wrapper>
    );
};

export default ScribeCodeEditor;

const Wrapper = styled.div`

/* Container for the editor and the button */
.scribe-editor-container {
  display: flex;
  flex-direction: column;
  min-height: 100px;
  align-items: flex-start;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #3a3535;
  .scribe-editor-header{
    width: 100%;
    height: 40px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: "#000000";
    .scribe-code-label{
        font-size: 12px;
        color: #ffffffc3;
        text-transform: capitalize;
    }

    /* Style for the copy button */

.scribe-copy-button {
  background-color: #161616;
  color: #ffffffd9;
  font-size: 10px;
        text-transform: uppercase;

  padding: 2px 5px ;
  border: 1px solid #ffffff5b;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}
/* Hover effect for the copy button */


    .scribe-copy-button:hover {
   background-color: #232020;
}
}
}



  
`;


