import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

import { theme } from './config'
import DrawerBar from './components/DrawerBar'

import LoginView from './views/Login'
import DashboardView from './views/Dashboard'
import RewardsView from './views/Rewards'
import GameDataView from './views/GameData'

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Switch>
					<Route path="/login">
						<LoginView />
					</Route>
					<DrawerBar>
						<Route path="/dashboard">
							<DashboardView />
						</Route>
						<Route path="/rewards">
							<RewardsView />
						</Route>
						<Route path="/gamedata">
							<GameDataView />
						</Route>
					</DrawerBar>
				</Switch>
			</Router>
		</ThemeProvider>
	)
}
