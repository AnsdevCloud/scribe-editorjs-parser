import React, { useEffect, useState } from 'react';

const ScribeTable = ({ data, withHeadings }) => {
    const [newContent, setNewContent] = useState([]);
    useEffect(() => {
        const parseOriginal = () => {
            let Array = data.content?.map((item) => item.row || item);
            setNewContent(Array);
        }
        parseOriginal();
    }, [data])
    return (
        <table className="scribe-table">
            <thead className='scribe-table-heading'>
                {withHeadings && (
                    <tr className='scribe-table-heading-row'>
                        {newContent[0]?.map((cell, cellIndex) => (
                            <th className='scribe-table-heading-col' key={cellIndex} dangerouslySetInnerHTML={{ __html: cell }} />
                        ))}
                    </tr>
                )}
            </thead>
            <tbody className='scribe-table-body'>
                {newContent?.slice(withHeadings ? 1 : 0)?.map((row, rowIndex) => (
                    <tr className='scribe-table-body-row' key={rowIndex}>
                        {row?.map((cell, cellIndex) => (
                            <td className='scribe-table-body-col' key={cellIndex} dangerouslySetInnerHTML={{ __html: cell }} />
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ScribeTable;
