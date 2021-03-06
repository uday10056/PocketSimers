import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { responsiveFontSizes } from '@material-ui/core/styles';

const theme = responsiveFontSizes(createMuiTheme({
    palette: {
        primary: {
            main: "#0572e8",
        },
        secondary: {
            main: green[500],
        },
    },
    typography: {
        fontFamily: "Poppins"
    }
}));
export default theme;