import React from 'react';
import './Expert.css';
import David from '../../../David.jpg';

function ExpertCard({ name, role, sessions, language, location, price, rating, reviews, content, other }) {
	console.log(other);
	return (
		<div className="expert-card">
			{
				//<div className="horizontal-line"></div>
			}
			<div style={{ display: 'flex' }}>
				<img src={David} className="img-con"></img>
				<div style={{ marginLeft: '30px', marginRight: '20px' }}>
					<div style={{ fontSize: '28px', fontWeight: 'bold' }}>{name}</div>
					<div style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '10px' }}>{role}</div>
					<div style={{ display: 'flex', marginTop: '20px', color: 'darkgray' }}>
						<i class="material-icons" style={{ color: 'grey', fontSize: '20px' }}>
							timer
						</i>
						&nbsp;{sessions}&nbsp;&nbsp;&nbsp;&nbsp;
						<i class="material-icons" style={{ color: 'grey', fontSize: '20px' }}>
							location_on
						</i>
						&nbsp;{location}&nbsp;&nbsp;&nbsp;
						<i class="material-icons" style={{ color: 'grey', fontSize: '20px' }}>
							language
						</i>
						&nbsp;{language}
					</div>
				</div>
				<div>
					<i class="material-icons" style={{ color: 'coral', fontSize: '35px', cursor: 'pointer' }}>
						favorite_border
					</i>
				</div>
				<div>
					<button className="view-profile-button">View Profile</button>
				</div>
			</div>
			<div style={{ display: 'flex', marginTop: '10px' }}>
				<div style={{ marginLeft: '10px', marginRight: '40px' }}>
					<div style={{ display: 'flex', marginBottom: '10px' }}>
						Price:&nbsp;&nbsp;&nbsp;
						<div style={{ fontWeight: 'bold', color: ' rgb(48, 168, 108)' }}>{price}</div>
					</div>

					<div style={{ display: 'flex', fontSize: '14px' }}>
						<i class="material-icons" style={{ color: 'orange', fontSize: '15px' }}>
							star
						</i>
						&nbsp; {rating} &nbsp;&nbsp;({reviews})
					</div>
				</div>
				<div style={{ marginTop: '15px' }}>{content}</div>
			</div>
			<div style={{ display: 'flex', marginTop: '15px', marginLeft: '130px' }}>
				{other.map(data => {
					return <div className="option-box">{data}</div>;
				})}
			</div>
		</div>
	);
}

export default ExpertCard;
