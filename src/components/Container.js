import React from 'react';
import AppNavBar from "./AppNavBar";
import RTL from "./utils/RTL";
import {withStyles} from "@material-ui/core";
import NewsPage from "./pages/news/NewsPage";
import Field from "./pages/TeamPage/Field";
import Members from "./pages/TeamPage/Members";

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
                    <Members teamCode={0}/>
                </div>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Container);