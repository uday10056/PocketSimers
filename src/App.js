import './App.css';
import Counter from './container/Counter/Counter';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core'
import theme from './theme/Theme';
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <Counter></Counter>
      </ThemeProvider>

    </div>
  );
}

export default App;
