import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
	cell: {
		border: '1px solid #D3D3D3'
	}
})

export default function BasicTable(props) {
	const classes = useStyles()
	const { columns, rows } = props

	return (
		<TableContainer component={Paper} elevation={0}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell className={classes.cell}></TableCell>
						{columns.map((column, index) => (
							<TableCell className={classes.cell} align="center" key={`table-column-${index}`}>{column}</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, index) => (
						<TableRow key={`table-row-${index}`}>
							<TableCell className={classes.cell} component="th" scope="row">
								{row.name}
							</TableCell>
							<TableCell className={classes.cell} align="center">{row.column1}</TableCell>
							<TableCell className={classes.cell} align="center">{row.column2}</TableCell>
							<TableCell className={classes.cell} align="center">{row.column3}</TableCell>
							<TableCell className={classes.cell} align="center">{row.column4}</TableCell>
							<TableCell className={classes.cell} align="center">{row.column5}</TableCell>
							<TableCell className={classes.cell} align="center">{row.column6}</TableCell>
							<TableCell className={classes.cell} align="center">{row.column7}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
