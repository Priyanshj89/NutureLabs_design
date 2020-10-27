import React from 'react';
import './Expert.css';
import ExpertCard from './ExpertCard';
import { mentorData } from './ExpertData';

function Expert() {
	return (
		<div className="expert-container">
			{mentorData.map((data, key) => {
				return (
					<ExpertCard
						name={data.name}
						role={data.role}
						sessions={data.sessions}
						language={data.language}
						location={data.location}
						price={data.price}
						rating={data.rating}
						reviews={data.reviews}
						content={data.content}
						other={data.other}
					/>
				);
			})}
		</div>
	);
}

export default Expert;
