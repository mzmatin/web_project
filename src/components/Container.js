import React from 'react';
import AppNavBar from "./AppNavBar";
import RTL from "./utils/RTL";
import withStyles from "@material-ui/core/es/styles/withStyles";
import Members from "./pages/TeamPage/Members";
import Field from "./pages/TeamPage/Field";

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
                    {/*<PlayerPage/>*/}
                    {/*<Members teamCode={0}/>*/}
                    <Field/>
                </div>
            </RTL>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Container);