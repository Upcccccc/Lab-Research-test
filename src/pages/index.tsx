import React from 'react';
import Layout from '@/component/layout'
import Foldermanager from "@/component/FolderManager/FolderManager";
import HistoryTable from "@/component/BrowsingHistory/HistoryTable";


const IndexPage = () => {
  return (
      <Layout>
          <div className="container-fluid p-4">
              <div className="row g-4">
                  <div className="col-12 col-xl-6 d-flex">
                      <Foldermanager/>
                  </div>
                  <div className="col-12 col-xl-6 d-flex">
                      <HistoryTable/>
                  </div>
              </div>
          </div>
      </Layout>
  );
};

export default IndexPage;
