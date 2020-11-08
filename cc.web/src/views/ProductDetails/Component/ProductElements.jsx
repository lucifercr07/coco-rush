import React from 'react';
import { Button } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { INR_SYMBOL } from '../../../constants'
import './style.scss';
import { Quantity } from '../../../components'
import Grid from '@material-ui/core/Grid';

function HeartIcon() {
	return <div className="descriptionElement">
		<FavoriteIcon style={{ fontSize: '50px' }} />
	</div>;
}

function ProductName(props) {
	return <div className="descriptionElement">
		<h1>{props.name || 'Chocolate Name'}</h1>
	</div>
}

function Description(props) {
	return <div className="descriptionElement">
		<p>{props.description || 'Randomest one liner description containing no useful information what so ever'}</p>
		<p>{"This delicious treat is perfect for any occasion, let it be birthdays, anniversaries, special events, or just for self pamper. Made with the finest and richest indulgent ingredients, everything we create at Coco Rush is full of awesomeness, because you are too!"}</p>
	</div>
}

function Price(props) {
	return <div className="descriptionElement price">
		<span>{INR_SYMBOL} </span>{props.unitPrice || '123'}
	</div>
}

function Actions(props) {
	return <div className="descriptionElement price">
		<Grid container spacing={2} alignItems="center" justify="center">
			<Grid item xs={12} md={10}>
				<Quantity {...props} type="light" />
			</Grid>
			<Grid item xs={12} md={10}>
				<Button variant="contained" fullWidth={true} className="cart-button">Add to cart</Button>
			</Grid>
		</Grid>
	</div>
}

export default function ProductElements(props) {
	return <center>
		<HeartIcon />
		<ProductName />
		<Price />
		<Actions />
		<Description />
	</center>
}