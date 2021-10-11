import React from 'react';
import Chart from './Components/Chart/Chart';
import './App.css';
import Notifications from './Components/Notification/Notifications';
import TableComponent from './Components/Table/TableComponent';
import TypographyComponent from './Components/Typography/TypographyComponent';
import Buttons from './Components/Buttons/Buttons';
import PositionedNotifications from './Components/Notification/PositionedNotifications';

function App() {
    return (
        <>
            <Chart />
            <Notifications />
            <TableComponent />
            <TypographyComponent />
            <Buttons />
            <PositionedNotifications />
        </>
    )
}

export default App;
