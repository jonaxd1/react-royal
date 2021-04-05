import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DashboardIcon from '@material-ui/icons/Dashboard'
import TimelineIcon from '@material-ui/icons/Timeline'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { BsTrophy } from 'react-icons/bs'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { colors } from '../../assets/styles'

const drawerWidth = 200

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
		borderRight: `5px solid ${colors.theme.primary}`,
	},
	content: {
		flexGrow: 1,
		// padding: theme.spacing(3),
	},
	toolbarUser: {
		marginLeft: 'auto',
		marginRight: -12,
		color: colors.white,
		fontWeight: 'bold',
	},
	selected: {
		background: '#93DFF3',
	},
	listItemMenu: {
		padding: '20px 10px',
	},
	listItemMenuText: {
		'& .MuiListItemText-primary': {
			fontWeight: '500',
			textTransform: 'uppercase',
			fontSize: '0.9em',
		}
	},
	secondList: {
		marginTop: 200,
	}
}))

const routes = [
	{
		label: 'Dashboard',
		routeName: 'dashboard',
		icon: <DashboardIcon />,
	},
	{
		label: 'Rewards',
		routeName: 'rewards',
		icon: <BsTrophy size="1.6em" />,
	},
	{
		label: 'Datos de Juego',
		routeName: 'gamedata',
		icon: <TimelineIcon />,
	},
]

function DrawerBar(props) {
	const { window, children } = props
	const classes = useStyles()
	const location = useLocation()
	const history = useHistory()
	const theme = useTheme()
	const [mobileOpen, setMobileOpen] = React.useState(false)

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}

	const checkSelected = (routeName) => {
		const convertedRoute = `/${routeName}`
		if (location.pathname === convertedRoute) {
			return classes.selected
		}
		return null
	}

	const goToRoute = (routeName) => {
		history.push(`/${routeName}`)
	}

	const drawer = (
		<div>
			<div className={classes.toolbar} style={{ textAlign: 'center' }} >
				<img src="/img/logo.png" alt="" width="150" />
			</div>
			<List>
				{routes.map((route, index) => (
					<ListItem
						button
						onClick={() => goToRoute(route.routeName)}
						className={`${classes.listItemMenu} ${checkSelected(route.routeName)}`}
						key={`list-item-${index}`}
					>
						<ListItemIcon>
							{route.icon}
						</ListItemIcon>
						<ListItemText primary={route.label} className={classes.listItemMenuText} />
					</ListItem>
				))}
				<ListItem
					button
					onClick={() => goToRoute('login')}
					className={classes.secondList}
				>
					<ListItemIcon>
						<ExitToAppIcon />
					</ListItemIcon>
					<ListItemText primary="Cerrar sesión" className={classes.listItemMenuText} />
				</ListItem>
			</List>
		</div>
	)

	const container =
		window !== undefined ? () => window().document.body : undefined

	return (
		<div className={classes.root}>
			<AppBar position="fixed" className={classes.appBar} elevation={0}>
				<Toolbar>
					<span className={classes.toolbarUser}>admin@admin.com</span>
				</Toolbar>
			</AppBar>
			<nav className={classes.drawer} aria-label="mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant="permanent"
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				{children}
			</main>
		</div>
	)
}

DrawerBar.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
	children: PropTypes.arrayOf(PropTypes.element),
}

export default DrawerBar
