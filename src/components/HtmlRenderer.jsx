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
  const [selectcolumn, setSelectcolumn] = useState()
  return (
    <>
      <MenuBar />
      {/* <SideBar/> */}
      {/* <Preview html={htmlString}/> */}
      <div className='flex'>
        <div className='flex flex-col h-screen p-3 bg-white shadow w-60'>
          <Sidebar setPagesize={setPagesize} setSelectcolumn={setSelectcolumn} />
        </div>
        <div>
          <Suspense fallback={<div> Please Wait... </div>} >
            <Preview html={htmlString} pageSize={pageSize} selectcolumn={selectcolumn} />
          </Suspense>
        </div>

      </div>
    </>
  );
};

export default HtmlRenderer;
