import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {get} from 'lodash';
import '../styles/quantity.scss';

export default function Quantity(props) {
	const {type = 'light'} = props;
	const buttonClassName = `quantity-button ${type}-button`;
	const inputClassName = `quantity-input ${type}-input`;
	return <Form.Group>
		<InputGroup size={props.size}>
			<InputGroup.Prepend className="quantity-width">
				<button className={buttonClassName} >
					< RemoveIcon />
				</button>
			</InputGroup.Prepend>
			<Form.Control
				type="text"
				placeholder="QTY"
				value={get(props, 'product.quantity', 1)}
				className={inputClassName}
			/>
			<InputGroup.Append className="quantity-width">
				<button className={buttonClassName} >
					< AddIcon />
				</button>
			</InputGroup.Append>
		</InputGroup>
	</Form.Group>
}