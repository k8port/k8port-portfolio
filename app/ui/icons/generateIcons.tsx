import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import { iconMap } from '../../styles/icons';

// const icons = Object.keys(iconMap);

Object.entries(iconMap).forEach(([iconName, IconComponent]) => {
    // render icon component to static svg markup
    const svgMarkup = ReactDOMServer.renderToStaticMarkup(<IconComponent />);

    // add xml to form proper svg file
    const svgContent = `<?xml version='1.0' encoding='UTF-8'?>\n${svgMarkup}`;

    // write svg content to file
    const filePath = path.join(__dirname, `../../public/images/icons/${iconName}.svg`);
    fs.writeFileSync(filePath, svgContent);
    console.log(`Generated ${iconName}.svg`);
});
