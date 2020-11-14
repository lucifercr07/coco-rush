import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { get } from 'lodash';
import '../styles/quantity.scss';

export default function Quantity(props) {
  const {
    type = 'light',
    onAddClick,
    onRemoveClick,
    quantity,
  } = props;
  const buttonClassName = `quantity-button ${type}-button`;
  const inputClassName = `quantity-input ${type}-input`;
  return <Form.Group>
    <InputGroup size={props.size}>
      <InputGroup.Prepend className="quantity-width">
        <button className={buttonClassName} onClick={() => onRemoveClick(quantity)}>
          <RemoveIcon />
        </button>
      </InputGroup.Prepend>
      <Form.Control
        type="text"
        placeholder="QTY"
        value={quantity}
        className={inputClassName}
      />
      <InputGroup.Append className="quantity-width">
        <button className={buttonClassName} onClick={() => onAddClick(quantity)}>
          <AddIcon />
        </button>
      </InputGroup.Append>
    </InputGroup>
  </Form.Group>
}
