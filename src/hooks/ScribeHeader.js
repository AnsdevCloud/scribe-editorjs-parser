import React from 'react'

const ScribeHeader = ({ lavel, text }) => {
    switch (lavel) {
        case 1:
            return <h1 className='scribe-heading  scribe-h1' dangerouslySetInnerHTML={{ __html: text }} />
            break;
        case 2:
            return <h2 className='scribe-heading  scribe-h2' dangerouslySetInnerHTML={{ __html: text }} />
            break;
        case 3:
            return <h3 className='scribe-heading  scribe-h3' dangerouslySetInnerHTML={{ __html: text }} />
            break;
        case 4:
            return <h3 className='scribe-heading  scribe-h4' dangerouslySetInnerHTML={{ __html: text }} />
            break;
        case 5:
            return <h5 className='scribe-heading  scribe-h5' dangerouslySetInnerHTML={{ __html: text }} />
            break;
        case 6:
            return <h6 className='scribe-heading  scribe-h6' dangerouslySetInnerHTML={{ __html: text }} />
            break;

        default:
            return <h3 className='scribe-heading  scribe-h3' />
            break;
    }

}

export default ScribeHeader

