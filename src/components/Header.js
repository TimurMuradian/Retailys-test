import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Header = ({ amount }) => {

    
  return (
    <Box mb={2}>
      <AppBar position="static">
        <Toolbar>
          <Button
            variant="outlined"
            to="/"
            component={NavLink}
            color="inherit"
          >
            Items
          </Button>
          <Button sx={{m:1}}
            variant="outlined"
            to="/parts"
            component={NavLink}
            color="inherit"
          >
            Parts
          </Button>
          <Typography>You have {amount} items in you pricelist</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
