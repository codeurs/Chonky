import React from 'react';

import 'chonky/style/main.css';
import { FileBrowser, FileList, FileToolbar } from 'chonky';

import { createDocsObject } from '../story-helpers';

// @ts-ignore
// eslint-disable-next-line
import markdown from './01-Invalid-props.md';

// eslint-disable-next-line import/no-default-export
export default {
    title: '2 File Browser examples|Passing invalid props',
    parameters: {
        docs: createDocsObject({ markdown }),
    },
};

export const InvalidPropsExample = () => {
    const badFiles = [
        12312, // Not an object or `null`!
        {}, // Missing all required fields!
        { id: '2xf4' }, // Missing some required fields!
        { id: '2xf4', name: 'Some other file!' }, // Duplicate ID!

        { id: 'xbAr', name: 'Good file.txt' }, // Good file!
    ];
    const badFolderChain = [
        12312, // Not an object or `null`!
        { id: 'bRyH', name: 'Good folder', isDir: true },
        { id: 'bMgR', name: 'Good folder #2', isDir: true },
    ];

    return (
        <div style={{ height: 500 }}>
            {/* @ts-ignore */}
            <FileBrowser files={badFiles} folderChain={badFolderChain}>
                <FileToolbar />
                <FileList />
            </FileBrowser>
        </div>
    );
};