import React from 'react';

const Filter = ({ clearFilters, handleFilterClick, filters }) => {
	return (
		<div className='container mx-auto'>
			{filters.length > 0 && (
				<div className='flex flex-wrap lg:justify-center bg-white shadow-lg mb-16 mx-6 lg:mx-auto lg:max-w-lg p-4 rounded lg:flex-row lg:-mt-16 z-10 relative justify-center'>
					{filters.map((filter, idex) => (
						<button
							key={idex}
							onClick={() => handleFilterClick(filter)}
							className='text-teal-500 bg-teal-100 m-1 px-2 py-1 rounded '>
							{filter} x
						</button>
					))}

					<button onClick={clearFilters} className='text-gray-700 font-bold ml-auto'>
						Clear All
					</button>
				</div>
			)}
		</div>
	);
};

export default Filter;
