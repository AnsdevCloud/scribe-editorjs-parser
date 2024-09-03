import React from 'react';
import ScribeHeader from './hooks/ScribeHeader';
import ScribeList from './hooks/ScribeList';
import ScribeQuote from './hooks/ScribeQuote';
import ScribeCodeEditor from './hooks/ScribeCodeEditor';
import ScribeMusicPlayer from './hooks/ScribeMusicPlayer';
import ScribeAlert from './hooks/ScribeAlert';
import ScribeTable from './hooks/ScribeTable';
import ScribeDelimiter from './hooks/ScribeDelimiter';
// import MyMonacoEditor from '../editorparser/components/MonocoEditor';
// import RenderList from '../editorparser/components/List';
// import DynamicHader from '../editorparser/components/DynamicHader';
// import SpotifyPlayer from '../editorparser/components/AudioPlayer';
// import AlertMessage from '../editorparser/components/AlertMessage';
// import TableRenderer from '../editorparser/components/Table';
// import DelimiterRenderer from '../editorparser/components/Delimiter';
// import QuoteRenderer from '../editorparser/components/Quote';

const useEditorJsParser = ({ data }) => {
    const RenderBlock = ({ block }) => {
        switch (block.type) {
            case 'header':
                return <ScribeHeader level={block.data.level} text={block.data.text} />;
            case 'paragraph':
                return <p className='scribe-pragraph' dangerouslySetInnerHTML={{ __html: block.data.text }} />;
            case 'image':
                return (
                    <div className='scribe-image-container'>
                        <img className='scribe-image' src={block.data.file.url} alt={block.data.caption || 'Scribe Image'} />
                        {block.data.caption && <span className='scribe-image-caption' dangerouslySetInnerHTML={{ __html: block.data.caption }} />}
                    </div>
                );
            case 'list':
                return <ScribeList items={block?.data?.items} type={block?.data?.style} />;
            case 'quote':
                return <ScribeQuote data={block?.data} />;
            case 'code':
                return (
                    <ScribeCodeEditor code={block.data.code} language={block.data.language} />
                );
            case 'raw':
                return <div className='scribe-raw-container'>
                    <div className='scribe-raw-render' dangerouslySetInnerHTML={{ __html: block?.data?.html }} />
                </div>;
            case 'linkTool':
                return (
                    <a className='scribe-main-link' href={block?.data?.link} target='_blank' rel='noopener noreferrer'>
                        <div className='scribe-link-container'>
                            <img className='scribe-link-image' src={block?.data?.meta?.image?.url} alt={block?.data?.meta?.title} />
                            <h1 className='scribe-link-title'>{block?.data?.meta?.title}</h1>
                            <p className='scribe-link-description'>{block?.data?.meta?.description}</p>
                            <a className='scribe-link-url' href={block?.data?.link} target='_blank' rel='noopener noreferrer'>{block?.data?.link}</a>
                        </div>
                    </a>
                );
            case 'embed':
                return <iframe
                    className='scribe-embed-container'
                    width={block?.data?.width || "300px"}
                    height={block?.data?.height || "300px"}
                    src={block?.data?.embed}
                    title={`Scribe Emabed Code - ${block?.id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>;
            case 'audioPlayer':
                return <ScribeMusicPlayer artistName={"Ansdev Cloud"} src={block?.data?.src} trackTitle={"Aurd"} />;
            case 'alert':
                return <ScribeAlert align={block?.data?.align} message={block?.data?.message} type={block?.data?.type} />;
            case 'table':
                return <ScribeTable data={block?.data} withHeadings={block?.data?.withHeadings} />;
            case 'delimiter':
                return <ScribeDelimiter showDelimiter={true} />;
            case 'Quote':
                return <ScribeQuote data={block?.data} />;
            default:
                return null;
        }
    };

    return (


        <div className='scribe-parser' id='scribe-ac-parser'>
            {data?.map((block, index) => (
                <RenderBlock block={block} key={index} />
            ))}
        </div>


    );
};

export default useEditorJsParser;
