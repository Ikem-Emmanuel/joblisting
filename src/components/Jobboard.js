import React from 'react';

const Jobboard = ({
	job: {
		id,
		company,
		logo,
		isNew,
		featured,
		position,
		role,
		level,
		postedAt,
		contract,
		location,
		languages,
		tools,
	},
	handleTagClick,
}) => {
	const tags = [role, level];
	if (languages && tags.push(...languages));
	if (tools && tags.push(...tools));

	// const [text, setText] = useState();

	// const jobTags = e => {
	// 	console.log(langAndTool);
	// };

	return (
		<div>
			<div
				className={`flex flex-col lg:justify-center bg-white shadow-lg my-16 mx-3 lg:mx-20 p-4 rounded lg:flex-row lg:my-6 justify-center ${featured &&
					'border-teal-500 border-l-4 border-solid'}`}>
				<div className='justify-center'>
					<img
						src={logo}
						alt='header background'
						className='-mt-16 w-20 mb-4 lg:mb-0 h-20 lg:w-24 lg:h-24 lg:mt-0'
					/>
				</div>
				<div className='flex flex-col justify-center justify-evenly ml-4'>
					<h5 className='text-teal-500 text-lg py-1'>
						{company}
						{isNew && (
							<span className='bg-teal-500 text-gray-100 mx-4 px-2 py-1 rounded-full'>
								New !
							</span>
						)}

						{featured && (
							<span className='bg-gray-900 text-white px-2 py-1 rounded-full'>
								Featured
							</span>
						)}
					</h5>
					<h2 className='font-bold text-lg text-gray-900'>{position}</h2>
					<p className='text-gray-500 text-lg'>
						{postedAt} • {contract} • {location}
					</p>
				</div>
				<div className='flex items-center flex-wrap mt-4 mx-4 pt-4 border-t border-solid border-gray-500 lg:ml-auto lg:border-0 lg:pt-0 lg:mt-0'>
					{tags
						? tags.map((tag, idx) => (
								<button
									key={idx}
									onClick={() => handleTagClick(tag)}
									className='text-teal-500 bg-teal-100 mr-2 my-2 px-2 py-1 rounded '>
									{tag}
								</button>
						  ))
						: ' '}
				</div>
			</div>
		</div>
	);
};

export default Jobboard;
