import { createMuiTheme } from '@material-ui/core/styles'
import { colors } from '../assets/styles'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: colors.theme.primary
		},
		secondary: {
			main: colors.theme.secondary
		},
		contrastThreshold: 3,
		tonalOffset: 0.2,
	},
})

export default theme
