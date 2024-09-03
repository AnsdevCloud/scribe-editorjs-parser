
# Scribe Editor.js Parser

**Scribe Editor.js Parser** is a React hook that enables seamless parsing and rendering of content created with [Editor.js](https://editorjs.io/). This library supports a variety of block types, including headers, paragraphs, images, lists, quotes, code blocks, tables, and more. It’s a part of the Scribe platform by Ansdev Cloud, which provides tools for blog writing, course creation, e-book development, and social media content generation.

## About Scribe

Scribe is a versatile platform designed by **Ansdev Cloud** to empower creators in various domains. Whether you’re writing a blog, developing an e-book, creating a course, or generating social media content, Scribe offers the tools you need to produce high-quality work. The Scribe Editor.js Parser is a key component of this ecosystem, allowing you to bring structured content from Editor.js into your React applications effortlessly.

## Features

- **Comprehensive Block Support**: Render headers, paragraphs, images, lists, quotes, code blocks, raw HTML, links, embedded media, tables, and more.
- **Custom Components**: Easily integrate custom React components for specialized content like Spotify players and alerts.
- **Styled Components**: Leverage styled-components for easy customization of the rendered content.
- **Extensible**: Add new block types or customize existing ones according to your needs.
- **Lightweight**: Optimized for performance with minimal overhead.

## Installation

To install the package, run:

```bash
npm install scribe-editorjs-parser
```

## Usage

Here’s an example of how to use the Scribe Editor.js Parser in your React application:

```jsx
import React from 'react';
import useEditorJsParser from 'scribe-editorjs-parser';

const data = {
  blocks: [
    {
      type: "header",
      data: {
        text: "Welcome to Scribe",
        level: 2
      }
    },
    {
      type: "paragraph",
      data: {
        text: "Scribe helps you create content effortlessly."
      }
    },
    {
      type: "image",
      data: {
        file: {
          url: "https://example.com/image.png"
        },
        caption: "Example Image",
        withBorder: true,
        stretched: false,
        withBackground: false
      }
    },
    // Add more blocks here...
  ]
};

const MyComponent = () => {
  const parsedContent = useEditorJsParser({ data });

  return (
    <div>
      {parsedContent}
    </div>
  );
};

export default MyComponent;
```

### Custom Components

You can extend or customize the rendering of specific block types by creating your custom components. For example, here’s how you can integrate a Spotify player component:

```jsx
import SpotifyPlayer from 'scribe-editorjs-parser/SpotifyPlayer';

const CustomSpotifyPlayer = ({ trackUrl }) => {
  return <SpotifyPlayer src={trackUrl} artistName="Ansdev Cloud" trackTitle="Scribe Theme" />;
};
```

### Available Block Types

- **Header**: Render dynamic headers.
- **Paragraph**: Render paragraphs with rich text.
- **Image**: Display images with optional captions.
- **List**: Render ordered or unordered lists.
- **Quote**: Display blockquotes with optional signatures.
- **Code**: Render syntax-highlighted code blocks using Monaco Editor.
- **Raw HTML**: Render raw HTML directly in the page.
- **Link Tool**: Display rich link previews.
- **Embed**: Embed external content such as videos or maps.
- **Audio Player**: Integrate custom audio players, like a Spotify player.
- **Alert**: Display alert messages with different styles.
- **Table**: Render tables with optional headings.
- **Delimiter**: Visually separate content with delimiters.

## Options

- **data** (required): The content data from Editor.js to be parsed and rendered.
- **customComponents** (optional): An object containing custom React components for specific block types.

## Contributing

We welcome contributions to the Scribe Editor.js Parser. To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Support

For support or questions, please contact us at [support@ansdevcloud.com](mailto:support@ansdevcloud.com).

---

This `README.md` is now tailored for your GitHub repository, providing potential contributors and users with all the necessary information about the Scribe Editor.js Parser.
