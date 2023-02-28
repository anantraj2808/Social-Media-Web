import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#1760a5',
            light: "skyblue"
        }, 
        secondary: {
            light: '#0066ff',
            main: '#15c630',
            contrastText: '#ffcc00',
        },
        other: {
            main: "#999"
        },
        anotherColor: {
            main: "#000"
        }
    }
})