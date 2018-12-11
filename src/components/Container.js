import React from 'react';
import AppNavBar from "./AppNavBar";
import RTL from "./utils/RTL";
import {withStyles} from "@material-ui/core";
import LeaguePage from "./pages/league/LeaguePage";

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
                    <LeaguePage name={"لیگ برتر انگلیس"} season={"۱۳۹۷-۱۳۹۶"}/>
                </div>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Container);