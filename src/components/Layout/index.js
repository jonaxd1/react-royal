import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {colors} from '../../assets/styles';

const useStyles = makeStyles(() => ({
	root: {
		background: colors.white,
		padding: 10,
	}
}));

const Layout = ({children}) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			{children}
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element),
}

export default Layout;