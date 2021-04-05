import React from 'react'
import Button from '@material-ui/core/Button'
import PageHeader from '../../components/PageHeader'
import Table from '../../components/Table'
import Layout from '../../components/Layout'
import {
	PieChart,
	Pie,
	Cell,
	ResponsiveContainer,
	Label,
	BarChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	Bar,
} from 'recharts'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'
import { colors } from '../../assets/styles'

const data = [
	{ name: 'Group A', value: 400 },
	{ name: 'Group B', value: 300 },
	{ name: 'Group C', value: 300 },
	{ name: 'Group D', value: 200 },
]

const dataBar = [
	{
		name: 'PR CUN',
		vtas: 4000,
		brz: 2400,
		brplus: 400,
		slvr: 200,
		slvrplus: 1400,
	},
	{
		name: 'GPR CUN',
		vtas: 3000,
		brz: 1398,
		brplus: 398,
		slvr: 198,
		slvrplus: 2210,
	},
	{
		name: 'GPR COZ',
		vtas: 2000,
		brz: 9800,
		brplus: 800,
		slvr: 900,
		slvrplus: 2290,
	},
	{
		name: 'PR ACA',
		vtas: 2780,
		brz: 3908,
		brplus: 398,
		slvr: 490,
		slvrplus: 2000,
	},
]

const dataBar2 = [
	{
		name: 'PR CUN',
		vtas: 4000,
		brz: 2400,
		brplus: 400,
		slvr: 200,
		slvrplus: 1400,
	},
	{
		name: 'GPR CUN',
		vtas: 3000,
		brz: 1398,
		brplus: 398,
		slvr: 198,
		slvrplus: 2210,
	},
	{
		name: 'GPR COZ',
		vtas: 2000,
		brz: 9800,
		brplus: 800,
		slvr: 900,
		slvrplus: 2290,
	},
	{
		name: 'PR ACA',
		vtas: 2780,
		brz: 3908,
		brplus: 398,
		slvr: 490,
		slvrplus: 2000,
	},
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const useStyles = makeStyles(() => ({
	sectionContainer: {
		padding: 10,
	},
	chartTitle: {
		fontSize: '1.5em',
		fontWeight: 'bold',
	},
	divider: {
		height: 5,
		background: colors.grey400,
	},
	divider_vertical: {
		margin: 10,
		width: 5,
		background: colors.grey400,
		'& ::after': {
			content: '""',
		},
	},
}))

const tableData = [
	[
		'Acatar más usado',
		'Tiempo Conexión',
		'% de Avance',
		'Stoppers',
		'Stoppers',
		'% Activos de juegos',
		'Inactividad',
	],
	[
		{
			name: 'PR CUN',
			column1: '',
			column2: '',
			column3: '',
			column4: '',
			column5: '',
			column6: '',
			column7: '',
		},
		{
			name: 'GPR CUN',
			column1: '',
			column2: '',
			column3: '',
			column4: '',
			column5: '',
			column6: '',
			column7: '',
		},
		{
			name: 'GPR COZ',
			column1: '',
			column2: '',
			column3: '',
			column4: '',
			column5: '',
			column6: '',
			column7: '',
		},
		{
			name: 'PR ACA',
			column1: '',
			column2: '',
			column3: '',
			column4: '',
			column5: '',
			column6: '',
			column7: '',
		},
	],
]

const Dashboard = () => {
	const classes = useStyles()
	return (
		<Layout>
			<PageHeader
				title="Dashboard General"
				LeftElement={<Button>Default</Button>}
			/>
			<Grid
				container
				item
				xs={12}
				justify="center"
				alignItems="center"
				direction="column"
				className={classes.chartContainer}
			>
				<Typography className={classes.chartTitle}>
					$ de Ventas con Tablet
				</Typography>
				<Grid container item xs>
					<Grid container item md={3} sm={5} alignItems="center">
						<ResponsiveContainer width={'100%'} height={200}>
							<PieChart>
								<Pie
									data={data}
									cy={100}
									innerRadius={60}
									outerRadius={80}
									fill="#8884d8"
									paddingAngle={0}
									dataKey="value"
								>
									<Label position="center" value="60%" />
									{data.map((entry, index) => (
										<Cell
											key={`cell-${index}`}
											fill={COLORS[index % COLORS.length]}
										/>
									))}
								</Pie>
							</PieChart>
						</ResponsiveContainer>
					</Grid>
					<Grid container item md={3} sm={5} alignItems="center">
						<ResponsiveContainer width={'100%'} height={200}>
							<PieChart>
								<Pie
									data={data}
									cy={100}
									innerRadius={60}
									outerRadius={80}
									fill="#8884d8"
									paddingAngle={0}
									dataKey="value"
								>
									<Label position="center" value="50%" />
									{data.map((entry, index) => (
										<Cell
											key={`cell-${index}`}
											fill={COLORS[index % COLORS.length]}
										/>
									))}
								</Pie>
							</PieChart>
						</ResponsiveContainer>
					</Grid>
					<Grid container item md={3} sm={5} alignItems="center">
						<ResponsiveContainer width={'100%'} height={200}>
							<PieChart>
								<Pie
									data={data}
									cy={100}
									innerRadius={60}
									outerRadius={80}
									fill="#8884d8"
									paddingAngle={0}
									dataKey="value"
								>
									<Label position="center" value="50%" />
									{data.map((entry, index) => (
										<Cell
											key={`cell-${index}`}
											fill={COLORS[index % COLORS.length]}
										/>
									))}
								</Pie>
							</PieChart>
						</ResponsiveContainer>
					</Grid>
					<Grid container item md={3} sm={5} alignItems="center">
						<ResponsiveContainer width={'100%'} height={200}>
							<PieChart>
								<Pie
									data={data}
									cy={100}
									innerRadius={60}
									outerRadius={80}
									fill="#8884d8"
									paddingAngle={0}
									dataKey="value"
								>
									<Label position="center" value="50%" />
									{data.map((entry, index) => (
										<Cell
											key={`cell-${index}`}
											fill={COLORS[index % COLORS.length]}
										/>
									))}
								</Pie>
							</PieChart>
						</ResponsiveContainer>
					</Grid>
				</Grid>
			</Grid>
			<Divider className={classes.divider} />
			<Grid
				container
				direction="row"
				justify="space-between"
				className={classes.sectionContainer}
			>
				<Grid container item md={5} sm={12}>
					<Typography className={classes.chartTitle}>
						Ventas y Membresias
					</Typography>
					<ResponsiveContainer width={'100%'} height={200}>
						<BarChart
							data={dataBar}
							margin={{
								top: 5,
								right: 30,
								left: 20,
								bottom: 5,
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar
								name="Vtas tablet"
								dataKey="vtas"
								stackId="a"
								fill="#DB0F1F"
							/>
							<Bar name="BRZ" dataKey="brz" stackId="a" fill="#E49440" />
							<Bar name="BR+" dataKey="brplus" stackId="a" fill="#5540E8" />
							<Bar name="SLVR" dataKey="slvr" stackId="a" fill="#115A7E" />
							<Bar name="SLVR+" dataKey="slvrplus" stackId="a" fill="#D8CE32" />
						</BarChart>
					</ResponsiveContainer>
				</Grid>
				<div className={classes.divider_vertical} />
				<Grid container item md={5} sm={12}>
					<Typography className={classes.chartTitle}>
						Datos de Ventas
					</Typography>
					<ResponsiveContainer width={'100%'} height={200}>
						<BarChart
							data={dataBar2}
							margin={{
								top: 5,
								right: 30,
								left: 20,
								bottom: 5,
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar name="Ventas totales" dataKey="vtas" fill="#E49440" />
							<Bar name="Ventas con tablet" dataKey="brz" fill="#5540E8" />
							<Bar name="Original" dataKey="brplus" fill="#115A7E" />
							<Bar name="Upgrade" dataKey="slvr" fill="#D8CE32" />
							<Bar name="Activ. en sala" dataKey="slvrplus" fill="#9A00CD" />
						</BarChart>
					</ResponsiveContainer>
				</Grid>
			</Grid>
			<Divider className={classes.divider} />
			<Grid
				container
				direction="row"
				justify="space-between"
				className={classes.sectionContainer}
			>
				<Grid container item md={5} sm={12}>
					<Table columns={tableData[0]} rows={tableData[1]} />
				</Grid>
				<div className={classes.divider_vertical} />
				<Grid container item md={5} sm={12}>
					<Table columns={tableData[0]} rows={tableData[1]} />
				</Grid>
			</Grid>
		</Layout>
	)
}

export default Dashboard
