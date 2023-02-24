import { useEffect, useState } from 'react';

const MarginPage = ({ setPageMargin }) => {
	const [selected, setSelected] = useState(0);
	useEffect(() => {
		if (selected) {
			setPageMargin(selected);
		}
	}, [selected]);

	console.log(selected);
	return (
		<>
			<div className='flex items-center justify-center mt-10'>
        <span className='mr-2'>Padding</span>
				<button
					className='bg-blue-700 px-4 rounded-full border-black mr-2 font-bold hover:bg-blue-300 border'
					onClick={() => setSelected(selected - 1)}>
					-
				</button>
				<button
					className='bg-blue-700 px-4 rounded-full border-black font-bold hover:bg-blue-300 border'
					onClick={() => setSelected(selected + 1)}>
					+
				</button>
			</div>
		</>
	);
};
export default MarginPage;
