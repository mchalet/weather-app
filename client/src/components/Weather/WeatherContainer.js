import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import CurrentWeather from "./CurrentWeather";
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
            <WeatherForm searchtype={props.searchtype} />
            <Route path="/current-weather" component={CurrentWeather} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

WeatherContainer.propTypes = {};

export default WeatherContainer;