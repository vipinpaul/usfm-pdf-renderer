/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../App.context';
import { css_1_col_ltr, css_2_col_ltr } from './export_css';
import './pageSetup.css';

const Preview = ({ html, pageSize, selectcolumn, pageMargin }) => {
	const [isOpen, setIsOpen] = useState(true);
	const [currentpage, setCurrentPage] = useState(null);
	const [columnSetting, setColumnSetting] = useState(null);

	const {
		state: { currentHtml },
		actions: { setCurrentHtml },
	} = useContext(AppContext);

	const handleClick = (e) => {
		console.log('Yo', e.target);
		console.log(e.target);
		e.target.classList.add('color-red');
	};

	const sigleColumn = () => {
		setColumnSetting(css_1_col_ltr);
	};
	const doubleColumn = () => {
		setColumnSetting(css_2_col_ltr);
	};
	useEffect(() => {
		if (html) {
			let inlineData = `<!DOCTYPE html>
    <html lang="en">
      <head>
      <script src="https://unpkg.com/pagedjs/dist/paged.polyfill.js"></script>
      ${columnSetting}
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
      </head>
      <body class="body">
      <div id="paper" class="newspaper page ${pageSize.value}" style='overflow: scroll;'>`;
			// style=${selectcolumn ==='single' && 'display:inline-table; background:#eee;'}
	  inlineData += html;
			inlineData += '</div></body></html>';
			setCurrentHtml(inlineData);
		}
	}, [html, columnSetting]);
	useEffect(() => {
		if (pageSize.value && currentHtml) {
			console.log(currentHtml, currentpage, pageSize.value);
			const _style = document.getElementById('paper');
			_style.classList.replace(currentpage, pageSize.value);
		}
		setCurrentPage(pageSize.value);
	}, [pageSize.value]);

	useEffect(() => {
		if (selectcolumn === 'single') {
			sigleColumn();
		}
		if (selectcolumn === 'double') {
			doubleColumn();
		}
	}, [selectcolumn]);

	useEffect(() => {
		// const _style = document.getElementById('paper');
		// console.log(currentHtml, 'id')
		if (pageMargin && currentHtml) {
			const _style = document.getElementById('paper');
			console.log(_style);
			_style.style.padding = `${pageMargin}px`;
			// _style.classList?.add(`padding:${pageMargin}`);
			// console.log(_style.classList?.add(`padding:${pageMargin}`), 'style')
		}
	}, [pageMargin]);
	return (
		<>
			<div className='container mt-4'>
				{/* <div className='grid grid-cols-3 gap-6 mb-6 lg:grid-cols-3'> */}
					{currentHtml && (
						<div
							id='previewDiv'
							contentEditable='true'
							className={`${pageSize.value} flex space-x-4`}
							onClick={(e) => handleClick(e)}
							dangerouslySetInnerHTML={{
								__html: currentHtml,
							}}
						/>
					)}
				{/* </div> */}
			</div>
		</>
	);
};
export default Preview;
