import React from 'react';
import AppNavBar from "./AppNavBar";
import RTL from "./utils/RTL";
import {withStyles} from "@material-ui/core";
import NewsPage from "./pages/news/NewsPage";
import Timeline from "./pages/matchPage/Timeline";
import Header from "./pages/matchPage/Header";
import MatchPage from "./pages/matchPage/MatchPage";

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
                    <NewsPage />
                </div>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Container);