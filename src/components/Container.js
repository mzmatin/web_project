import React from 'react';
import AppNavBar from "./AppNavBar";
import RTL from "./utils/RTL";
import {withStyles} from "@material-ui/core";
import PlayerPage from "./pages/playerPage/PlayerPage";

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
                    {/*<LeaguePage name={"لیگ برتر انگلیس"} season={"۹۸-۹۷"} />*/}
                    <PlayerPage/>
                </div>
            </RTL>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Container);