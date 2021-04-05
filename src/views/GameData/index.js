import React from 'react'
import Button from '@material-ui/core/Button'
import PageHeader from '../../components/PageHeader'
import Layout from '../../components/Layout'
import DataTable from '../../components/DataTable'
const data = [
	['Owner', 'Centro Servicio', 'Sala de Ventas', 'Tiempo Jugado', 'Intermitencias'],
	[
		{
			column: [
				'Nombre ejemplo',
				'Centro Servicio',
				'Ventas ejemplo',
				'Sin acceso',
				'Intermitencias',
			],
		},
		{
			column: [
				'Nombre ejemplo',
				'Centro Servicio',
				'Ventas ejemplo',
				'01.30.00',
				'Intermitencias',
			],
		},
		{
			column: [
				'Nombre ejemplo',
				'Centro Servicio',
				'Ventas ejemplo',
				'Sin acceso',
				'Intermitencias',
			],
		},
		{
			column: [
				'Nombre ejemplo',
				'Centro Servicio',
				'Ventas ejemplo',
				'00.30.00',
				'Intermitencias',
			],
		},
		{
			column: [
				'Nombre ejemplo',
				'Centro Servicio',
				'Ventas ejemplo',
				'Sin acceso',
				'Intermitencias',
			],
		},
		{
			column: [
				'Nombre ejemplo',
				'Centro Servicio',
				'Ventas ejemplo',
				'Sin acceso',
				'Intermitencias',
			],
		},
		{
			column: [
				'Nombre ejemplo',
				'Centro Servicio',
				'Ventas ejemplo',
				'Sin acceso',
				'Intermitencias',
			],
		},
		{
			column: [
				'Nombre ejemplo',
				'Centro Servicio',
				'Ventas ejemplo',
				'Sin acceso',
				'Intermitencias',
			],
		},
		{
			column: [
				'Nombre ejemplo',
				'Centro Servicio',
				'Ventas ejemplo',
				'00.24.00',
				'Intermitencias',
			],
		},
		{
			column: [
				'Nombre ejemplo',
				'Centro Servicio',
				'Ventas ejemplo',
				'00.10.00',
				'Intermitencias',
			],
		},
		{
			column: [
				'Nombre ejemplo',
				'Centro Servicio',
				'Ventas ejemplo',
				'04.20.00',
				'Intermitencias',
			],
		},
	],
]
const GameData = () => {
	return (
		<Layout>
			<PageHeader
				title="Datos de juego"
				LeftElement={<Button>Default</Button>}
			/>
			<DataTable columns={data[0]} rows={data[1]} />
		</Layout>
	)
}

export default GameData
