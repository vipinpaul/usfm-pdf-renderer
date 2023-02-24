import React, { useState, Suspense } from 'react';
import usfmData from '../data/titus.json';
import { usfm2perf } from '../hooks/useUsmf2Perf';
import { perf2html } from '../core/renderer';
import MenuBar from './MenuBar/MenuBar';
import Sidebar from './SideBar/SideBar';
// import Preview from './Preview/Preview'
const Preview = React.lazy(() => import('./Preview/Preview'));
const HtmlRenderer = () => {
  const { htmlString } = perf2html(usfmData);
  const [pageSize, setPagesize] = useState();
  const [pageMargin, setPageMargin] = useState()
  const [selectcolumn, setSelectcolumn] = useState()
  return (
    <>
      <MenuBar />
      <div className='flex'>
        <div className='flex flex-col h-screen p-3 bg-white shadow w-60'>
          <Sidebar setPagesize={setPagesize} setPageMargin={setPageMargin} setSelectcolumn={setSelectcolumn} />
        </div>
        <div>
          <Suspense fallback={<div> Please Wait... </div>} >
            <Preview html={htmlString} pageSize={pageSize} pageMargin={pageMargin} selectcolumn={selectcolumn} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default HtmlRenderer;
