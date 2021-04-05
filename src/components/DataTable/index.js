import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { colors } from '../../assets/styles'

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
	tableTools: {
		padding: '20px 0'
	},
	rowHighligh: {
		background: colors.green100,
	},
	cell: {
		borderRight: '5px solid #FFF',
	},
	inputRows: {
		width: 50,
		margin: '0 5px',
		'& .MuiOutlinedInput-input': {
			padding: '5px 14px',
		},
	},
	textSearch: {
		color: colors.grey600,
	},
	inputSearch: {
		marginLeft: 10,
	}
})

export default function DataTable(props) {
	const classes = useStyles()
	const { columns, rows } = props

	return (
		<>
			<Grid container direction="row" justify="space-between" className={classes.tableTools}>
				<Grid container item xs direction="row" alignItems="center">
					<Typography>mostrar</Typography>
					<TextField
						id="input-outlined-rows"
						variant="outlined"
						className={classes.inputRows}
						defaultValue={10}
					/>
					<Typography>entradas</Typography>
				</Grid>
				<Grid container item xs direction="row" justify="flex-end" alignItems="center">
					<Typography className={classes.textSearch} >buscar</Typography>
					<TextField
						id="input-search"
						className={classes.inputSearch}
					/>
				</Grid>
			</Grid>
			<TableContainer component={Paper} elevation={0}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>#</TableCell>
							{columns.map((column) => (
								<TableCell align="left" key={`table-head-row-${column}`}>{column}</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row, index) => (
							<TableRow
								key={`table-row-${index}`}
								className={!Boolean(index % 2) ? classes.rowHighligh : null}
							>
								<TableCell component="th" scope="row" size="small" className={classes.cell}>
									{index + 1}
								</TableCell>
								{row.column.map((item, index) => (
									<TableCell align="left" size="small" className={classes.cell} key={`table-row-data-${index}`}>
										{item}
									</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}
