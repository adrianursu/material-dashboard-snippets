import React from 'react'
import SnackBarContent from '@material-ui/core/SnackbarContent';
import '../../App.css'


function Notifications() {

    const primaryColor = ["#9c27b0", "#ab47bc", "#8e24aa", "#af2cc5"];
    const warningColor = ["#ff9800", "#ffa726", "#fb8c00", "#ffa21a"];
    const dangerColor = ["#f44336", "#ef5350", "#e53935", "#f55a4e"];
    const successColor = ["#4caf50", "#66bb6a", "#43a047", "#5cb860"];
    const infoColor = ["#00acc1", "#26c6da", "#00acc1", "#00d3ee"];

    return (
        <>
            <SnackBarContent
                style={
                    { backgroundColor: primaryColor[0] }
                }
                message="Primary color notification"
            />

            <SnackBarContent
                style={
                    { backgroundColor: infoColor[0] }
                }
                message="You've got a new message!"
            />

            <SnackBarContent
                style={
                    { backgroundColor: warningColor[0] }
                }
                message="Warning! It might be dangerous!"
            />

            <SnackBarContent
                style={
                    { backgroundColor: dangerColor[0] }
                }
                message="Oops! Something went wrong!"
            />

            <SnackBarContent
                style={
                    { backgroundColor: successColor[0] }
                }
                message="Succes! You made it!"
            />
        </>
    )
}

export default Notifications;
