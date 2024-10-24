import React, {useState} from 'react';
import HistoryItem from './HistoryItem';

type HistoryRecord = {
    filename: string;
    project: string;
    time: string;
};

const HistoryTable: React.FC = () => {
    const initialData: HistoryRecord[] = [
        {
            filename: 'image_1.svs (2.5 GB, 120823 x 87023)',
            project: 'Project Folder1/Patient A/H&E',
            time: '2024-10-19 12:45:23',
        },
        {
            filename: 'image_2.svs (2.3 GB, 62823 x 45231)',
            project: 'Project Folder1/Patient A/H&E',
            time: '2024-10-19 12:48:00',
        },
        {
            filename: 'image_3.tiff (1.9 GB, 45223 x 12023)',
            project: 'Project Folder1/Patient A/H&E',
            time: '2024-10-19 12:49:01',
        },
    ];

    const [data, setData] = useState<HistoryRecord[]>(initialData);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

    const handleSort = () => {
        const sortedData = [...data].sort((a, b) => {
            const timeA = new Date(a.time).getTime();
            const timeB = new Date(b.time).getTime();
            return sortDirection === 'asc' ? timeA - timeB : timeB - timeA;
        });
        setData(sortedData);
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    };

    return (
        <div className="w-1/2 bg-white rounded-lg border border-gray-300 shadow-sm cursor-move">
            <div className="p-4">
                <h2 className="h4 fw-bold mb-0 text-dark">Browsing History</h2>
            </div>
            <div style={{maxHeight: 'calc(100vh - 250px)', overflowY: 'auto'}}>
                <table className="w-full">
                    <thead className="sticky top-0 bg-white">
                    <tr className="bg-primary bg-opacity-10 text-dark">
                        <th className="px-4 py-2 text-left">Filename</th>
                        <th className="px-4 py-2 text-left">Which Project</th>
                        <th
                            className="px-4 py-2 text-left cursor-pointer hover:bg-blue-600"
                            onClick={handleSort}
                        >
                            Time Last Opened
                            <span className="ms-2 fw-bold" style={{ fontSize: '0.8rem' }}>
                                    {sortDirection === 'asc' ? '▲' : '▼'}
                            </span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => (
                        <HistoryItem key={index} item={item}/>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HistoryTable;
