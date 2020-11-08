import React from 'react';
import { INR_SYMBOL } from '../constants';
import '../styles/discount.scss';

function Discount(props) {
	const { oldPrice = 'No Price', newPrice = 'Unknown', percentOff = null } = props;
	const { context = 'product' } = props;
	const strikeColor = context === 'product' ? 'lightgray' : 'gray';
	const percentColor = context === 'product' ? '#654321' : '#c58c4a';
	return <>
		<div style={{ display: 'inline-block', color: strikeColor, textDecoration: 'line-through' }}>{INR_SYMBOL} <span>{oldPrice}</span></div>
		{/* &nbsp; Now */}
		<div style={{ display: 'inline-block' }}>&nbsp; {INR_SYMBOL} <span>{newPrice}</span></div>
		<br />
		{ percentOff && <div style={{ display: 'inline-block', padding: '5px 10px', fontSize: 'small', backgroundColor: percentColor, borderRadius: '12px', color: '#ffff', }}>{percentOff}% OFF</div>}
	</>
}

export default Discount;