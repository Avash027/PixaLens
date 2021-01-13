import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Appbar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    const id = event.target.id;
    if (id === "0")
      window.open("https://linkedin.com/in/avash-mitra-4548761a6/");
    else if (id === "1") window.open("https://github.com/Avash027/PixaLens");
    else if (id === "3") window.open("https://github.com/Avash027");
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            id="menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} id="0">
              My profile
            </MenuItem>
            <MenuItem onClick={handleClose} id="1">
              Github Repo
            </MenuItem>
            <MenuItem onClick={handleClose} id="2">
              Github Profile
            </MenuItem>
          </Menu>
          <Typography variant="h6" className={classes.title}>
            PixaLens
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
