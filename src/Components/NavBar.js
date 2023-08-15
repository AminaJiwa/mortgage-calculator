import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import  Typography  from "@mui/material/Typography";
import { Container } from "@mui/system";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const NavBar = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography variant="h5">
                        React Mortgage Calculator 
                    </Typography>
                    <pre> </pre>
                    <AccountBalanceIcon />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;