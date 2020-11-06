import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import { INR_SYMBOL } from '../../../constants';
import { Quantity } from '../../../components';
import './style.scss';

const useStyles = makeStyles((theme) => ({
	img: {
		maxWidth: '100%',
	},
	productRow: {
		borderBottom: '1px solid',
		borderColor: '#d4d4d4 !important',
		"&:last-child": {
			border: 'none'
		}
	},
	productItem: {
		padding: '20px 0px'
	},
}));

function ProductImage(props) {
	const classes = useStyles();
	return <ButtonBase className={classes.image}>
		<img className={classes.img} alt="chololate" src={props.imageSrc} />
	</ButtonBase>
}

function ItemDetails(props) {
	return <Grid item xs={12} container direction="row" spacing={0} style={{ padding: '0px 10px' }}>
		<Grid item xs={12}>
			<h2 style={{ fontWeight: '500', width: '100%' }}>{props.product.title}</h2>
		</Grid>
		<Grid item xs={12}>
			<Grid item xs={12} sm={4}>
				<Quantity product={props.product} type="dark" />
			</Grid>
		</Grid>
		<Grid item xs={12}>
			<Grid item xs={12} sm={4}>
				<Button variant="contained" fullWidth={true} size="small" className="secondary-button">Remove</Button>
			</Grid>
		</Grid>
	</Grid>
}

export default function CartItem(props) {
	const classes = useStyles();
	return <td >
		<div className={classes.productItem}>
			<Grid container>
				<Grid item xs={4} sm={2} >
					<ProductImage imageSrc={props.product.img} />
				</Grid>
				<Grid item xs={8} sm={8} container>
					<ItemDetails product={props.product} />
				</Grid>
				<Grid item xs={12} sm={2} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '10px 10px 0px 0px' }} >
					<h5 style={{ fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', fontWeight: 800, color: '#654321' }}>
						{INR_SYMBOL} {props.product.price * props.product.quantity}
					</h5>
				</Grid>
			</Grid>
		</div>
	</td>
}