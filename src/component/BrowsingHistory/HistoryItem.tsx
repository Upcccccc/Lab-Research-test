import React from "react";
import { AiOutlineFile } from "react-icons/ai";
import { FaFolder } from "react-icons/fa";

type HistoryItemProps = {
    item: HistoryRecord;
};

type HistoryRecord = {
    filename: string;
    project: string;
    time: string;
};

const HistoryItem: React.FC<HistoryItemProps> = ({ item }) => {
    const [fileName, sizeInfo] = item.filename.split('(');

    return (
        <tr>
            <td className="px-3">
                <div className="d-flex align-items-center text-dark">
                    <AiOutlineFile className="text-primary me-2" style={{fontSize: '1.2rem'}}/>
                    <span>
                        {fileName}
                        {sizeInfo && (
                            <span className="text-success smaller">
                                ({sizeInfo}
                            </span>
                        )}
                    </span>
                </div>
            </td>
            <td className="px-3">
                <div className="d-flex align-items-center">
                    <FaFolder className="text-primary me-2" style={{fontSize: '1.2rem'}}/>
                    <span className="text-dark">{item.project}</span>
                </div>
            </td>
            <td className="px-3 text-dark">{item.time}</td>
        </tr>
    );
};

export default HistoryItem;
