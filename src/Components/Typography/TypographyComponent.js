import React from 'react';
import '../../App.css';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";

const styles = {
    successColor: {
        color: "#4BB543"
    },

    infoColor: {
        color: "#00acc1"
    },

    warningColor: {
        color: "#ff9800"
    },

    dangerColor: {
        color: "#f44336"
    },

    primaryColor: {
        color: "#9c27b0"
    },

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
        marginBottom: "40px",
        position: "relative",
    }
}

const useStyles = makeStyles(styles);

function TypographyComponent() {
    const classes = useStyles();
    return (
        <>
            <Card>
                <div className={classes.typo}>
                    <div className={classes.note}> Header 1 </div>
                    <Typography variant="h1" component="div" gutterBottom>
                        The Life of Material Dashboard
                    </Typography>
                </div>

                <div className={classes.typo}>
                    <div className={classes.note}> Header 2</div>
                    <Typography variant="h2" gutterBottom component="div">
                        The Life of Material Dashboard
                    </Typography>
                </div>

                <div className={classes.typo}>
                    <div className={classes.note}> Header 3 </div>
                    <Typography variant="h3" gutterBottom component="div">
                        The Life of Material Dashboard
                    </Typography>
                </div>

                <div className={classes.typo}>
                    <div className={classes.note}> Header 4</div>
                    <Typography variant="h4" gutterBottom component="div">
                        The Life of Material Dashboard
                    </Typography>
                </div>

                <div className={classes.typo}>
                    <div className={classes.note}> Header 5 </div>
                    <Typography variant="h5" gutterBottom component="div">
                        The Life of Material Dashboard
                    </Typography>
                </div>

                <div className={classes.typo}>
                    <div className={classes.note}> Header 6 </div>
                    <Typography variant="h6" gutterBottom component="div">
                        The Life of Material Dashboard
                    </Typography>
                </div>

                <div className={classes.typo}>
                    <div className={classes.note}> Subtitle 1 </div>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        The Life of Material Dashboard
                    </Typography>
                </div>

                <div className={classes.typo}>
                    <div className={classes.note}> Subtitle 2 </div>
                    <Typography variant="subtitle2" gutterBottom component="div">
                        The Life of Material Dashboard
                    </Typography>
                </div>

                <div className={classes.typo}>
                    <div className={classes.note}> Body 1</div>
                    <Typography variant="body1" gutterBottom>
                        The Life of Material Dashboard
                    </Typography>
                </div>

                <div className={classes.typo}>
                    <div className={classes.note}> Body 2</div>
                    <Typography variant="body2" gutterBottom>
                        The Life of Material Dashboard
                    </Typography>
                </div>

                <div className={classes.typo}>
                    <div className={classes.note}> Button Text </div>
                    <Typography variant="button" display="block" gutterBottom>
                        The Life of Material Dashboard
                    </Typography>
                </div>

                <div className={classes.typo}>
                    <div className={classes.note}> Caption Text </div>
                    <Typography variant="caption" display="block" gutterBottom>
                        The Life of Material Dashboard
                    </Typography>
                </div>

                <div className={classes.typo}>
                    <div className={classes.note}> Overline Text </div>
                    <Typography variant="overline" display="block" gutterBottom>
                        The Life of Material Dashboard
                    </Typography>
                </div>

                <div className={classes.typo}>
                    <div className={classes.note}> Primary Text </div>
                    <p className={classes.primaryColor}>
                        The Life of Material Dashboard
                    </p>
                </div>

                <div className={classes.typo}>
                    <div className={classes.note}> Warning Text </div>
                    <p className={classes.warningColor}>
                        The Life of Material Dashboard
                    </p>
                </div>

                <div className={classes.typo}>
                    <div className={classes.note}> Danger Text </div>
                    <p className={classes.dangerColor}>
                        The Life of Material Dashboard
                    </p>
                </div>

                <div className={classes.typo}>
                    <div className={classes.note}> Info Text </div>
                    <p className={classes.infoColor}>
                        The Life of Material Dashboard
                    </p>
                </div>

                <div className={classes.typo}>
                    <div className={classes.note}> Success Text </div>
                    <p className={classes.successColor}>
                        The Life of Material Dashboard
                    </p>
                </div>
            </Card>
        </>
    )
}

export default TypographyComponent;
