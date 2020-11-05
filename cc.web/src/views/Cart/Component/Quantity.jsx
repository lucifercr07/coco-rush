import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './style.scss';

export default function Quantity(props) {
	return <Form.Group>
		<InputGroup size="sm">
			<InputGroup.Prepend className="quanity-width">
				<button variant="outlined" className="primary-button" >
					< RemoveIcon />
				</button>
			</InputGroup.Prepend>
			<Form.Control
				type="text"
				placeholder="QTY"
				value={props.product.quantity}
				className="quanity-input"
			/>
			<InputGroup.Append className="quanity-width">
				<button variant="outlined" className="primary-button" >
					< AddIcon />
				</button>
			</InputGroup.Append>
		</InputGroup>
	</Form.Group>
}