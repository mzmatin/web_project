import React from 'react';
import AppNavBar from "./AppNavBar";
import RTL from "./utils/RTL";
import {withStyles} from "@material-ui/core";
import TeamPage from "./pages/TeamPage/TeamPage";
import PlayerPage from "./pages/player/PlayerPage";
import NewsPage from "./pages/news/NewsPage";

const styles = theme => ({
    baseContainer: {
    },
    appContainer : {
        marginLeft: theme.spacing.unit * 12,
        marginRight: theme.spacing.unit * 12,
        marginTop: theme.spacing.unit * 12,
    }
});



class Container extends React.Component{
    render() {
        const { classes} = this.props;
        return (
            <div className={classes.baseContainer}>
                <RTL>
                <AppNavBar />
                </RTL>
                <div className={classes.appContainer}>
                    <TeamPage/>
                </div>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Container);