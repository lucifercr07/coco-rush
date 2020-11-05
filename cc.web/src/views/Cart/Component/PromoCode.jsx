import React from 'react';
import { TextField, Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const PromoTextField = withStyles({
	root: {
		paddingRight: '1em',
		'& .MuiOutlinedInput-root': {
			borderRadius: 0,
			'&:hover fieldset': {
				borderColor: '#c58c4a',
			},
			'&.Mui-focused fieldset': {
				borderColor: '#654321',
			},
		},
	},
})(TextField);

export default function PromoCode(props) {
	return <>
		<Grid item xs={8}>
			<PromoTextField
				placeholder="Enter Coupon Code"
				fullWidth={true}
				variant="outlined"
				size="small"
			/>
		</Grid>
		<Grid item xs={4}>
			<Button variant="contained" fullWidth={true} className="primary-button" >Apply</Button>
		</Grid>
	</>
}