import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/system";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { NotificationAdd } from "@mui/icons-material";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    paddind: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "30%",
  }));

  const Icon = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          BIM Data
        </Typography>
        <BrokenImageIcon
          sx={{ color: "white", display: { xs: "block", sm: "none" } }}
        />
        <Search>
          <InputBase placeholder="Search..." sx={{ width: "100%" }} />
        </Search>
        <Icon>
          <Badge badgeContent={4} color="secondary">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={4} color="secondary">
            <NotificationAdd color="action" />
          </Badge>
          <Avatar
            onClick={() => setOpen(true)}
            sx={{ width: 35, height: 35 }}
            alt="Remy Sharp"
            src=""
          />
        </Icon>

        <UserBox>
          <Typography variant="span">BIM Data</Typography>
          <Avatar
            onClick={() => setOpen(true)}
            sx={{ width: 35, height: 35 }}
            alt="Remy Sharp"
            src=""
          />
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
