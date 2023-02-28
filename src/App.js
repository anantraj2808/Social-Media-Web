import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import AddPost from "./MyComponents/AddPost";
import Feed from "./MyComponents/Feed";
import LeftBar from "./MyComponents/LeftBar";
import NavBar from "./MyComponents/NavBar";
import RightBar from "./MyComponents/RightBar";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <LeftBar setMode = {setMode} mode = {mode}/>
          <Feed />
          <RightBar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
