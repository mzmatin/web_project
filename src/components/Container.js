import React from 'react';
import AppNavBar from "./AppNavBar";
import RTL from "./utils/RTL";
import LeagueMainPage from "./pages/LeaguePage/LeagueMainPage";
import {withStyles} from "@material-ui/core";
import PlayerPage from "./pages/playerPage/PlayerPage";
import PlayerAvatar from "./pages/playerPage/PlayerAvatar";

const styles = theme => ({
    appContainer : {
        display: 'flex',
        flexDirection: 'column',
        maxWidth : '85vw',
        margin: theme.unit * 10,
    }
});

class Container extends React.Component{
    render() {
        const { classes} = this.props;
        return (
            <RTL>
                <div className={classes.appContainer}>
                    <AppNavBar />
                    <PlayerPage />
                </div>
            </RTL>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Container);