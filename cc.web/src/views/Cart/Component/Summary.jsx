import React from 'react';
import { INR_SYMBOL } from '../../../constants';
import './style.scss';

export default function Summary(props) {
	const { cartItems } = props;
	const noOfItems = cartItems.reduce((accumulator, { quantity }) => accumulator + quantity, 0);
	const subTotal = cartItems.reduce((accumulator, { quantity, price }) => accumulator + quantity * price, 0);
	const gstValue = Math.round(((subTotal * 16.6 / 100) + Number.EPSILON) * 100) / 100;
	const shipping = 0;
	const total = subTotal + gstValue + shipping;

	return <table className="summaryTable">
		<tbody>
			<tr>
				<td>No. of items</td>
				<td>{noOfItems}</td>
			</tr>
			<tr>
				<td>SubTotal</td>
				<td>{INR_SYMBOL} {subTotal}</td>
			</tr>
			<tr>
				<td>GST</td>
				<td>{INR_SYMBOL} {gstValue}</td>
			</tr>
			<tr>
				<td>Shipping Charges</td>
				<td>{INR_SYMBOL} {shipping}</td>
			</tr>
			<tr>
				<td style={{ fontWeight: 'bold', fontSize: '30px' }}>Total</td>
				<td style={{ fontWeight: 'bold', fontSize: '18px' }}>{INR_SYMBOL} {total}</td>
			</tr>
		</tbody>
	</table>
}
