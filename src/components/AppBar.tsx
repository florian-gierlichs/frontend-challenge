import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <Headline variant="h6" sx={{ flexGrow: 1 }}>
            Welcome to paymenttools
          </Headline>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}

const StyledAppBar = styled(AppBar)`
  background-color: #2e3859;
`;

const Headline = styled(Typography)`
  color: #fab608;
`;
