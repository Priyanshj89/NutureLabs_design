import React from 'react';
import './Header.css';
import David from '../../David.jpg';

function Header() {
	return (
		<div className="header">
			<div className="logo">
				<div className="circle"></div>
				Logo
			</div>
			<div className="button-options">
				<button className="button">Dashboard</button>
				<button className="button-active">Find Experts</button>
				<button className="button">Discussion</button>
			</div>
			<div className="icons-profile">
				<i
					class="material-icons"
					style={{ color: 'coral', margin: '10px', marginRight: '20px', fontSize: '30px', cursor: 'pointer' }}
				>
					notifications_none
				</i>
				<i
					class="material-icons"
					style={{ color: 'coral', margin: '10px', marginRight: '20px', fontSize: '30px', cursor: 'pointer' }}
				>
					textsms
				</i>
				{
					//<div className="img-container"></div>
				}
				{
					<img
						src={David}
						style={{
							minWidth: '35px',
							maxHeight: '35px',
							maxWidth: '35px',
							minHeight: '35px',
							alignItems: 'center',
							borderRadius: '50%',
							marginTop: '8px',
							marginRight: '3px',
							marginLeft: '10px'
						}}
					></img>
				}
				<i
					class="material-icons"
					style={{ color: 'coral', marginTop: '10px', fontSize: '30px', cursor: 'pointer' }}
				>
					expand_more
				</i>
			</div>
		</div>
	);
}

export default Header;
