import React from 'react';
import { INR_SYMBOL } from '../constants';
import '../styles/discount.scss';

function Discount(props) {
	const { oldPrice = 0, newPrice = 0, percentOff = 0 } = props;
	const { type = 'dark' } = props;
	return <>
		{ oldPrice !== 0 &&
			<div className={`discount old-price ${type}`}>
				{INR_SYMBOL} <span>{oldPrice}</span>
			</div>
		}
		{ newPrice !== 0 &&
			<div className="discount">
				&nbsp; {INR_SYMBOL} <span>{newPrice}</span>
			</div>
		}
		<br />
		{ percentOff !== 0 &&
			<div className={`discount percent ${type}`} >
				{percentOff}% OFF
			</div>
		}
	</>
}

export default Discount;