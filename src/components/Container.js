import React from 'react';
import AppNavBar from "./AppNavBar";
import RTL from "./utils/RTL";
import LeagueMainPage from "./pages/LeaguePage/LeagueMainPage";
import {withStyles} from "@material-ui/core";

const styles = ({
    appContainer : {
        display: 'flex',
        flexDirection: 'column',
    }
});

class Container extends React.Component{
    render() {
        const { classes} = this.props;
        return (
            <RTL>
                <div className={classes.appContainer}>
                    <AppNavBar />
                    <LeagueMainPage />
                </div>
            </RTL>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Container);