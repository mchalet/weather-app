import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import WeatherForm from "./WeatherForm";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const WeatherContainer = props => {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={3}
      >
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            <WeatherForm
              title={props.title}
              formfields={props.formfields}
              searchtype={props.searchtype}
              formaction={props.formaction}
              fetch={props.fetch}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

WeatherContainer.propTypes = {};

export default WeatherContainer;
