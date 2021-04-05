import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
// import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  margin: {
	margin: theme.spacing(1),
  },
}));

export default function InputIcon(props) {
	const classes = useStyles();
	const { Icon, ...rest } = props;
	return (
		<TextField
			className={classes.margin}
			id="input-with-icon-textfield"
			InputProps={{
				startAdornment: (
					<InputAdornment position="start">
						{Icon}
					</InputAdornment>
				),
			}}
			{...rest}
		/>
	);
}

InputIcon.propTypes = {
	Icon: PropTypes.element.isRequired,
}
