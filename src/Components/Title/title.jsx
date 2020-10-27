import React from 'react';
import './title.css';

function title() {
	return (
		<div className="title">
			<div style={{ marginRight: '25%' }}>Filters</div>
			<div style={{ marginRight: '40%' }}>Featured Experts</div>

			<button className="title-button">
				Best Match&nbsp;&nbsp;&nbsp;&nbsp;{' '}
				<i class="material-icons" style={{ cursor: 'pointer' }}>
					expand_more
				</i>
			</button>
		</div>
	);
}

export default title;
