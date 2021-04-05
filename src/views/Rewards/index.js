import React from 'react'
import Button from '@material-ui/core/Button'
import PageHeader from '../../components/PageHeader'
import Layout from '../../components/Layout'
import DataTable from '../../components/DataTable'
const data = [
	['Owner', 'Centro Servicio', 'Sala de Ventas', 'Steward', 'Noches Ganadas'],
	[
		{
			column: [
				'Nombre ejemplo',
				'Centro Servicio',
				'Ventas ejemplo',
				'Steward',
				'7',
			],
		},
		{
			column: [
				'Nombre ejemplo',
				'Centro Servicio',
				'Ventas ejemplo',
				'Steward',
				'7',
			],
		},
		{
			column: [
				'Nombre ejemplo',
				'Centro Servicio',
				'Ventas ejemplo',
				'Steward',
				'7',
			],
		},
		{
			column: [
				'Nombre ejemplo',
				'Centro Servicio',
				'Ventas ejemplo',
				'Steward',
				'7',
			],
		},
		{
			column: [
				'Nombre ejemplo',
				'Centro Servicio',
				'Ventas ejemplo',
				'Steward',
				'7',
			],
		},
		{
			column: [
				'Nombre ejemplo',
				'Centro Servicio',
				'Ventas ejemplo',
				'Steward',
				'7',
			],
		},
		{
			column: [
				'Nombre ejemplo',
				'Centro Servicio',
				'Ventas ejemplo',
				'Steward',
				'7',
			],
		},
		{
			column: [
				'Nombre ejemplo',
				'Centro Servicio',
				'Ventas ejemplo',
				'Steward',
				'5',
			],
		},
		{
			column: [
				'Nombre ejemplo',
				'Centro Servicio',
				'Ventas ejemplo',
				'Steward',
				'10',
			],
		},
		{
			column: [
				'Nombre ejemplo',
				'Centro Servicio',
				'Ventas ejemplo',
				'Steward',
				'14',
			],
		},
		{
			column: [
				'Nombre ejemplo',
				'Centro Servicio',
				'Ventas ejemplo',
				'Steward',
				'5',
			],
		},
	],
]
const Rewards = () => {
	return (
		<Layout>
			<PageHeader title="Rewards" LeftElement={<Button>Default</Button>} />
			<DataTable columns={data[0]} rows={data[1]} />
		</Layout>
	)
}

export default Rewards
