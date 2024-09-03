import React from 'react';

const ScribeQuote = ({ data }) => {
    return (
        <div className='scribe-quote-container'>
            <blockquote className={"scribe-quote " + data?.alignment}>
                <p className='scribe-quote-text' dangerouslySetInnerHTML={{ __html: data.text }} />
                {data.caption && <footer className="scribe-quote-caption">{data.caption}</footer>}
            </blockquote>
        </div>
    );
};

export default ScribeQuote;
