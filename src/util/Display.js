import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: window.innerWidth - 500,
    height: window.innerHeight - 100,
  },
}));

export default function Display({ imageList }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={20}>
        <GridList cellHeight={160} className={classes.gridList} cols={4}>
          {imageList.map((image, idx) => (
            <GridListTile key={idx} cols={1}>
              <img src={image.previewURL} alt="Bad network" />
              <GridListTileBar
                actionIcon={
                  <a href={image.webformatURL} target="_blank" rel="noreferrer">
                    <IconButton className={classes.icon}>
                      <VisibilityIcon />
                    </IconButton>
                  </a>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </Paper>
    </div>
  );
}
