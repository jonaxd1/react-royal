import React from 'react'
import { useHistory } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import EmailIcon from '@material-ui/icons/Email'
import LockIcon from '@material-ui/icons/Lock';

import Layout from '../../components/Layout'
import InputIcon from '../../components/InputIcon'

import { colors } from '../../assets/styles'

const useStyles = makeStyles(() => ({
	root: {
		background: colors.white,
		padding: 10,
	},
	box: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	formContainer: {
		padding: 40,
		border: '1px solid #000',
		borderRadius: 20,
		justifyContent: 'center',
		textAlign: 'center',
	},
	loginButton: {
		padding: '15px 100px',
		color: colors.white,
		'& .MuiButton-label': {
			fontSize: '0.8em',
		}
	},
	textForgot: {
		color: colors.grey500,
		fontSize: '0.7em',
		marginTop: 20,
		marginBottom: 20,
		textDecoration: 'none',
	},
	iconEmail: {
		color: colors.green500,
	},
	iconPassword: {
		color: colors.red600,
	},
}))

const Login = () => {
	const classes = useStyles()
	const history = useHistory()

	const handleOnLogin = () => {
		history.replace('/dashboard')
	}

	return (
		<Layout>
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justify="center"
				style={{ minHeight: '100vh' }}
			>
				<Grid
					className={classes.formContainer}
				>
					<img src="/img/logo.png" alt="logo" width={200} />
					<Grid item xs={12}>
						<InputIcon
							id="input-email"
							Icon={<EmailIcon className={classes.iconEmail} />}
							variant="outlined"
							placeholder="ejemplo@ejemplo.com"
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<InputIcon
							id="input-password"
							Icon={<LockIcon className={classes.iconPassword} />}
							variant="outlined"
							placeholder="●●●●●●●●"
							type="password"
							fullWidth
						/>
					</Grid>
					<Grid item>
						<Button className={classes.textForgot}>
							Olvide mi contraseña
						</Button>
					</Grid>
					<Grid item>
						<Button
							variant="contained"
							color="primary"
							disableElevation
							size="large"
							className={classes.loginButton}
							onClick={handleOnLogin}
						>
							iniciar sesión
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Layout>
	)
}

export default Login
