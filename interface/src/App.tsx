import {AppBar, Toolbar, Typography, Box} from "@mui/material";
import './App.css'
import DragAndDropBox from "./components/DragAndDropBox";

function App() {

  return (
    <>
      <div>
      <AppBar position="fixed" sx={{ backgroundColor: '#65b2a0' }}>
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold' }}>
              Real vs AI Generated image
            </Typography>
          </Toolbar>
        </AppBar>
        <Box>
          <DragAndDropBox />
        </Box>
      </div>
    </>
  )
}

export default App
