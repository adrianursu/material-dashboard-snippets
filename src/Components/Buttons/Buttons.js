import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import "../../App.css";

const styles = {
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px",
  },

  typo: {
    paddingLeft: "25%",
    paddingTop: "10px",
    marginBottom: "40px",
    position: "relative",
  },
};

const useStyles = makeStyles(styles);

function Buttons() {
  const classes = useStyles();

  return (
    <>
      <Card style={{ marginTop: "20px" }}>
        <div className={classes.typo}>
          <div className={classes.note}>Text Button </div>
          <Button variant="text">I'm a button!</Button>
        </div>

        <div className={classes.typo}>
          <div className={classes.note}>Contained Button </div>
          <Button variant="contained">I'm a button!</Button>
        </div>

        <div className={classes.typo}>
          <div className={classes.note}>Outlined Button </div>
          <Button variant="outlined">I'm a button!</Button>
        </div>

        <div className={classes.typo}>
          <div className={classes.note}>Disabled Button </div>
          <Button disabled>I'm a button!</Button>
        </div>

        <div className={classes.typo}>
          <div className={classes.note}>Contained Disabled Button </div>
          <Button variant="contained" disabled>
            I'm a button!
          </Button>
        </div>

        <div className={classes.typo}>
          <div className={classes.note}>Outlined Secnodary Color Button </div>
          <Button variant="contained" color="secondary">
            I'm a button!
          </Button>
        </div>

        <div className={classes.typo}>
          <div className={classes.note}>Contained Primary Color Button </div>
          <Button variant="contained" color="primary">
            I'm a button!
          </Button>
        </div>
      </Card>
    </>
  );
}

export default Buttons;
