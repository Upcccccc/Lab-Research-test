import React from "react";
import FolderItem from "./FolderItem";

type Folder = {
    name: string;
    type: 'folder' | 'file';
    expanded?: boolean;
    children?: Folder[];
    size?: string;
    resolution?: string;
}

const FolderTree: React.FC = () =>{
    const data: Folder[] = [
        {
            name: 'Project Folder 1',
            type: 'folder',
            expanded: true,
            children: [
                {
                    name: 'Patient A',
                    type: 'folder',
                    expanded: true,
                    children: [
                        {
                            name: 'H&E',
                            type: 'folder',
                            expanded: true,
                            children: [
                                {
                                    name: 'image_1.svs',
                                    type: 'file',
                                    size: '2.5 GB',
                                    resolution: '120823 x 87023',
                                },
                                {
                                    name: 'image_2.svs',
                                    type: 'file',
                                    size: '2.3 GB',
                                    resolution: '62823 x 45231',
                                },
                                {
                                    name: 'image_3.tiff',
                                    type: 'file',
                                    size: '1.9 GB',
                                    resolution: '45223 x 12023',
                                }
                            ],
                        },
                        {
                            name: 'H&E 2nd visit',
                            type: 'folder',
                            expanded: false,
                            children: [],
                        },
                    ],
                },
                {
                    name: 'Patient B',
                    type: 'folder',
                    expanded: false,
                    children: [],
                },
            ],
        },
        {
            name: 'Project Folder 2',
            type: 'folder',
            expanded: false,
            children: [],
        },
        {
            name: 'Project Folder 3',
            type: 'folder',
            expanded: false,
            children: [],
        },
    ];

    return(
        <div className="mt-4" style={{maxHeight: 'calc(100vh - 250px)', overflowY: 'auto'}}>
            {data.map((item, index) => (
                <FolderItem key={index} item={item} level={0}/>
            ))}
        </div>
    );
};

export default FolderTree;
