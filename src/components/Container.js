import React from 'react';
import AppNavBar from "./AppNavBar";
import RTL from "./utils/RTL";
import {withStyles} from "@material-ui/core";
import Ranking from "./pages/LeaguePage/Ranking";
import LeagueMainPage from "./pages/LeaguePage/LeagueMainPage";
import MainPage from "./pages/mainPage/MainPage";

const styles = theme => ({
    appContainer : {
        maxWidth : '100vw',
        marginTop: '80px',
    }
});

class Container extends React.Component{
    render() {
        const { classes} = this.props;
        return (
            <RTL>
                <AppNavBar />
                <div className={classes.appContainer}>
                    <MainPage />
                </div>
            </RTL>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Container);