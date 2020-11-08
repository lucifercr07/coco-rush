import React from 'react';
import { INR_SYMBOL } from '../constants';
import '../styles/discount.scss';

function Discount(props) {
	const { oldPrice = 'No Price', newPrice = 'Unknown', percentOff = null } = props;
	const { type = 'dark' } = props;
	return <>
		<div className={`discount old-price ${type}`}>{INR_SYMBOL} <span>{oldPrice}</span></div>
		<div className="discount">&nbsp; {INR_SYMBOL} <span>{newPrice}</span></div> <br/>
		{ Boolean(percentOff) && <div className={`discount percent ${type}`} >{percentOff}% OFF</div> }
	</>
}

export default Discount;