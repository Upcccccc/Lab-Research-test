import React from "react";
import PrivacyNotice from "@/component/FolderManager/PrivacyNotice";
import FolderTree from "@/component/FolderManager/FolderTree";
import { FaFolderPlus } from "react-icons/fa";

const Foldermanager: React.FC = () =>{
    return (
        <div className="card h-100">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className="h4 fw-bold mb-0">Local Project Folder Management</h2>
                    <button className="btn btn-primary d-flex align-items-center">
                        <FaFolderPlus className="me-2"/>
                        Open New
                    </button>
                </div>
                <PrivacyNotice/>
                <FolderTree/>
            </div>
        </div>
    );
};

export default Foldermanager;
