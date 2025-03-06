import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "@mui/material/styles";
import { createMuiTheme } from "./theme/theme";
import "./sccs/main.scss";

const theme = createMuiTheme({ theme: "light", responsiveFontSizes: true });
createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>,
)
