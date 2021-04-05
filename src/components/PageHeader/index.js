import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	title: {
		fontSize: '2.8em',
		textTransform: 'uppercase',
		fontWeight: 'bold',
	},
}))

const PageHeader = (props) => {
	const classes = useStyles()
	const { title, LeftElement } = props
	return (
		<Grid container justify="space-between">
			<Grid item xs>
				<Typography color="primary" className={classes.title}>{title}</Typography>
			</Grid>
			<Grid container item xs justify="flex-end" >{LeftElement}</Grid>
		</Grid>
	)
}

PageHeader.propTypes = {
	title: PropTypes.string,
	LeftElement: PropTypes.element,
}

export default PageHeader
