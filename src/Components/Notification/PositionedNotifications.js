import React from 'react'
import '../../App.css'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

function PositionedNotifications() {

    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const { vertical, horizontal, open } = state;

    const handleClick = (newState) => () => {
        setState({ open: true, ...newState });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const buttons = (
        <div style ={{display:"flex", alignItems: "center", justifyContent:"space-between"}}>
            <Button
                variant="outlined"
                onClick={handleClick({
                    vertical: 'top',
                    horizontal: 'center',
                })}>
                Top-Center
            </Button>

            <Button
                variant="outlined"
                onClick={handleClick({
                    vertical: 'top',
                    horizontal: 'right',
                })}>
                Top-Right
            </Button>

            <Button
                variant="outlined"
                onClick={handleClick({
                    vertical: 'bottom',
                    horizontal: 'right',
                })}>
                Bottom-Right
            </Button>

            <Button
                variant="outlined"
                onClick={handleClick({
                    vertical: 'bottom',
                    horizontal: 'center',
                })}>
                Bottom-Center
            </Button>

            <Button
                variant="outlined"
                onClick={handleClick({
                    vertical: 'bottom',
                    horizontal: 'left',
                })}>
                Bottom-Left
            </Button>

            <Button
                variant="outlined"
                onClick={handleClick({
                    vertical: 'top',
                    horizontal: 'left',
                })}>
                Top-Left
            </Button>
        </div>
    )

    return (
        <div style={{ textAlign: "center", paddingTop: "15px" }}>
            <h4>Positioned Notifications</h4>
            <br />
            {buttons}
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                message="Hello There"
                key={vertical + horizontal}
            />
        </div>
    )
}

export default PositionedNotifications
