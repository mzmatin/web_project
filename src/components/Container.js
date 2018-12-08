import React from 'react';
import AppNavBar from "./AppNavBar";
import RTL from "./utils/RTL";
import {withStyles} from "@material-ui/core";
import LeaguePage from "./pages/LeaguePage/LeaguePage";

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
                    <LeaguePage name={"لیگ برتر انگلیس"} season={"۹۸-۹۷"} />
                </div>
            </RTL>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Container);