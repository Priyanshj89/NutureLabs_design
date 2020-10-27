import React from 'react';
import './Filter.css';

function Filters() {
	return (
		<div className="Filter">
			EXPERTISE
			<div className="filter-container">
				<div className="blue-back">
					Branding&nbsp;&nbsp;
					<i class="material-icons" style={{ color: 'white', fontSize: '15px', cursor: 'pointer' }}>
						close
					</i>
				</div>
				<div style={{ marginLeft: '55%' }}></div>
				<i class="material-icons" style={{ color: 'green', cursor: 'pointer' }}>
					search
				</i>
			</div>
			<div className="green-back">
				Strategy&nbsp;&nbsp;
				<i class="material-icons" style={{ color: 'white', fontSize: '15px', cursor: 'pointer' }}>
					close
				</i>
			</div>
			<div style={{ marginTop: '30px' }}>FOCUS AREA</div>
			<div className="filter-container">
				<div className="blue-back">
					Focus Area&nbsp;&nbsp;
					<i class="material-icons" style={{ color: 'white', fontSize: '15px', cursor: 'pointer' }}>
						close
					</i>
				</div>

				<div className="blue-back">
					Focus Area&nbsp;&nbsp;
					<i class="material-icons" style={{ color: 'white', fontSize: '15px', cursor: 'pointer' }}>
						close
					</i>
				</div>
				<div style={{ marginLeft: '14%' }}></div>
				<i class="material-icons" style={{ color: 'green', cursor: 'pointer' }}>
					search
				</i>
			</div>
			<div style={{ display: 'flex' }}>
				<div className="green-back">
					Strategy&nbsp;&nbsp;
					<i class="material-icons" style={{ color: 'white', fontSize: '15px', cursor: 'pointer' }}>
						close
					</i>
				</div>
				<div className="blue-back">
					Focus Area&nbsp;&nbsp;
					<i class="material-icons" style={{ color: 'white', fontSize: '15px', cursor: 'pointer' }}>
						close
					</i>
				</div>
			</div>
			<div style={{ marginTop: '30px', marginBottom: '10px' }}>RATING</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<div className="checkbox1">
					<i class="material-icons" style={{ color: 'white', fontSize: '14px', marginLeft: '2px' }}>
						done
					</i>
				</div>
				<i class="material-icons" style={{ color: 'orange', fontSize: '15px' }}>
					star
				</i>
				<i class="material-icons" style={{ color: 'orange', fontSize: '15px' }}>
					star
				</i>
				<i class="material-icons" style={{ color: 'orange', fontSize: '15px' }}>
					star
				</i>
				<i class="material-icons" style={{ color: 'orange', fontSize: '15px' }}>
					star
				</i>
				&nbsp;&nbsp;&nbsp;&nbsp;
				<div className="checkbox"></div>
				<i class="material-icons" style={{ color: 'orange', fontSize: '15px' }}>
					star
				</i>
				<i class="material-icons" style={{ color: 'orange', fontSize: '15px' }}>
					star
				</i>
				<i class="material-icons" style={{ color: 'orange', fontSize: '15px' }}>
					star
				</i>
			</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<div className="checkbox"></div>
				<i class="material-icons" style={{ color: 'orange', fontSize: '15px' }}>
					star
				</i>
				<i class="material-icons" style={{ color: 'orange', fontSize: '15px' }}>
					star
				</i>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<div className="checkbox"></div>
				<i class="material-icons" style={{ color: 'orange', fontSize: '15px' }}>
					star
				</i>
			</div>
			<div style={{ marginTop: '30px', marginBottom: '10px' }}>PRICE</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<div className="checkbox"></div>
				<div style={{ fontWeight: 'bold', fontSize: '15px' }}>&nbsp;Free</div>
			</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<div className="checkbox"></div>
				<div style={{ fontWeight: 'bold', fontSize: '15px' }}>&nbsp;Less than $25</div>
			</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<div className="checkbox"></div>
				<div style={{ fontWeight: 'bold', fontSize: '15px' }}>&nbsp;$25 - $50</div>
			</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<div className="checkbox"></div>
				<div style={{ fontWeight: 'bold', fontSize: '15px' }}>&nbsp;$50 - $100</div>
			</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<div className="checkbox"></div>
				<div style={{ fontWeight: 'bold', fontSize: '15px' }}>&nbsp;More than $100</div>
			</div>
			<div style={{ marginTop: '30px', marginBottom: '10px' }}>SESSION AVAILABILITY</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<div className="checkbox"></div>
				<div style={{ fontWeight: 'bold', fontSize: '15px' }}>&nbsp;30 min</div>
			</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<div className="checkbox"></div>
				<div style={{ fontWeight: 'bold', fontSize: '15px' }}>&nbsp;60 min</div>
			</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<div className="checkbox"></div>
				<div style={{ fontWeight: 'bold', fontSize: '15px' }}>&nbsp;15 min</div>
			</div>
			<div style={{ marginTop: '30px', marginBottom: '10px' }}>LANGUAGE</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<div className="checkbox"></div>
				<div style={{ fontWeight: 'bold', fontSize: '15px' }}>&nbsp;English</div>
			</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<div className="checkbox"></div>
				<div style={{ fontWeight: 'bold', fontSize: '15px' }}>&nbsp;French</div>
			</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<div className="checkbox"></div>
				<div style={{ fontWeight: 'bold', fontSize: '15px' }}>&nbsp;German</div>
			</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<div className="checkbox"></div>
				<div style={{ fontWeight: 'bold', fontSize: '15px' }}>&nbsp;Hindi</div>
			</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<div className="checkbox"></div>
				<div style={{ fontWeight: 'bold', fontSize: '15px' }}>&nbsp;Arabic</div>
			</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<div className="checkbox"></div>
				<div style={{ fontWeight: 'bold', fontSize: '15px' }}>&nbsp;Mandarin Chinese</div>
			</div>
			<div style={{ fontWeight: 'bold', fontSize: '15px', color: 'green', margin: '10px', cursor: 'pointer' }}>
				&nbsp;More
			</div>
		</div>
	);
}

export default Filters;
