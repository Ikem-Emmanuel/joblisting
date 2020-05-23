import React, { Fragment, useState, useEffect } from 'react';
import data from './assets/data.json';
import Jobboard from './components/Jobboard';
import Filter from './components/Filter';

function App() {
	const headerImage = '/images/bg-header-desktop.svg';

	const [jobs, setJobs] = useState([]);
	const [filters, setFilters] = useState([]);

	// const [term, setTerm] = useState('');

	useEffect(() => setJobs(data), []);

	const filterFunc = ({ role, level, tools, languages }) => {
		if (filters.length === 0) {
			return true;
		}

		const tags = [role, level];
		if (languages && tags.push(...languages));
		if (tools && tags.push(...tools));

		return filters.every(filter => tags.includes(filter));
	};

	const handleTagClick = tag => {
		setFilters([...filters, tag]);
	};

	const clearFilters = () => {
		setFilters([]);
	};

	const filteredJobs = jobs.filter(filterFunc);

	const handleFilterClick = passedFilter => {
		setFilters(filters.filter(f => f !== passedFilter));
	};

	return (
		<Fragment>
			<header className='bg-teal-500  mb-6'>
				<img src={headerImage} alt='header background' />
			</header>
			<Filter
				clearFilters={clearFilters}
				filters={filters}
				setFilters={setFilters}
				handleFilterClick={handleFilterClick}
			/>
			<div className='container mx-auto'>
				{jobs.length === 0 ? (
					<h1 className='text-4xl text-center items-center text-gray-800'>Loading...</h1>
				) : (
					filteredJobs.map((job, index) => (
						<Jobboard key={index} job={job} handleTagClick={handleTagClick} />
					))
				)}
			</div>
		</Fragment>
	);
}

export default App;
