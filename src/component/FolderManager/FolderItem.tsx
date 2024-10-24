import React, { useState } from "react";
import { FaFolder, FaFolderOpen } from "react-icons/fa";
import { AiOutlineFile } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

//folder structure:
//name, type, expanded, children, size, resolution
type Folder = {
    name: string;
    type: 'folder' | 'file';
    expanded?: boolean;
    children?: Folder[];
    size?: string;
    resolution?: string;
}

//props for FolderItem component
//folder object and level for compress
type FolderItemProps = {
    item: Folder;
    level: number;
}

const FolderItem: React.FC<FolderItemProps> = ({item, level}) =>{
    const [expanded, setExpanded] = useState(item.expanded || false);

    const switchExpanded = () =>{
        if(item.type === 'folder'){
            setExpanded(!expanded);
        }
    };

    const getIcon = (type: 'folder' | 'file', isExpanded: boolean) => {
        if (type === 'folder') {
            return isExpanded ?
                <FaFolderOpen className="w-5 h-5 text-blue-500 mr-2" /> :
                <FaFolder className="w-5 h-5 text-blue-500 mr-2" />;
        }
        return <AiOutlineFile className="w-5 h-5 text-gray-500 mr-2" />;
    };

    return (
        <div style={{marginLeft: level * 20}} className="mt-2">
            <div className={`
                d-flex align-items-center p-2 rounded
                ${expanded ? 'bg-primary bg-opacity-10' : 'hover-bg-light'} 
                ${item.type === 'folder' ? 'cursor-pointer' : ''}
            `}
                 onClick={() => item.type === 'folder' && setExpanded(!expanded)}
            >
                {item.type === 'folder' && (
                    <button onClick={switchExpanded} className="me-2 text-primary border-0 bg-transparent">
                        {expanded ?
                            <IoIosArrowDown style={{width: '1rem', height: '1rem'}}/> :
                            <IoIosArrowForward style={{width: '1rem', height: '1rem'}}/>
                        }
                    </button>
                )}
                {getIcon(item.type, expanded)}
                <span className="small">
                    {item.name}
                    {item.size && (
                        <span className="text-success ml-2 text-xs">
                            ({item.size}, {item.resolution})
                        </span>
                    )}
                </span>
            </div>
            {expanded && item.children &&
                item.children && item.children.map((child, index) => (
                    <FolderItem key={index} item={child} level={level + 1}/>
                ))}
        </div>
    );
};

export default FolderItem;
