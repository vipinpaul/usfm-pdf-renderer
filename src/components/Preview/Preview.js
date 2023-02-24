/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from 'react';
import {
	css_1_col_ltr,
	css_2_col_ltr,
	css_1_col_rtl,
	css_2_col_rtl,
} from './export_css';
import './pageSetup.css';
// import './ToHtml.css'

// const style1 = '\
// .color-red{color:red},\
// body{color:green}'
const Preview = ({ html, pageSize, selectcolumn }) => {
	const [isOpen, setIsOpen] = useState(true);
	const [currentpage, setCurrentPage] = useState(null);
	const [currentHtml, setCurrentHtml] = useState();
	// const parser = new DOMParser();
	// const htmlDoc = parser.parseFromString(htmlString, 'text/html');
	// console.log({ htmlDoc });
	const handleClick = (e) => {
		console.log('Yo', e.target);
		console.log(e.target);
		e.target.classList.add('color-red');
		// setCurrentSelected(e.target);
	};

	const sigleColumn = () => {
		const _style = document.createElement('style');
		document.head.appendChild(_style);
		_style.innerHTML = css_1_col_ltr;
	};
	const doubleColumn = () => {
		const _style = document.createElement('style');
		document.head.appendChild(_style);
		_style.innerHTML = css_2_col_ltr;
	};
	useEffect(() => {
		console.log('Yo');
		if (html) {
			let inlineData = `<!DOCTYPE html>
    <html lang="en">
      <head>
      <script src="https://unpkg.com/pagedjs/dist/paged.polyfill.js"></script>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
      </head>
      <body class="body">
      <div id="paper" class="newspaper page m-5 ${pageSize.value}">`;
			inlineData += html;
			inlineData += '</div></body></html>';
			setCurrentHtml(inlineData);
		}
	}, [html]);
  useEffect(()=>{
    if (pageSize.value && currentHtml){
      console.log(currentHtml,currentpage,pageSize.value);
      const _style = document.getElementById('paper');
      _style.classList.replace(currentpage,pageSize.value);
    }
    setCurrentPage(pageSize.value)
  },[pageSize.value])

	useEffect(() => {
		if (selectcolumn === 'single') {
			sigleColumn();
		}
		if (selectcolumn === 'double') {
			doubleColumn();
		}
	}, [selectcolumn]);
	// console.log(selectcolumn,html);
	return (
		<>
			<div className='container mx-auto mt-12'>
				<div className='grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3'>
					<div className='w-screen h-screen px-4 py-5'>
							{currentHtml && (
								<div contenteditable="true" className={`${pageSize.value} flex space-x-4 `}
									onClick={(e) => handleClick(e)}
									dangerouslySetInnerHTML={{
										__html: currentHtml,
									}}
								/>
							)}
					</div>
				</div>
			</div>
		</>
	);
};
export default Preview;
