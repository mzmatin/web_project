import React from 'react';
import withStyles from "@material-ui/core/es/styles/withStyles";

const styles = theme => ({
    field: {
        backgroundImage : 'url("https://i.etsystatic.com/11118846/r/il/0f6306/1133393522/il_570xN.1133393522_bnzg.jpg")',
        flex: 1,
        resizeMode: 'cover',
    },

});

class Field extends React.Component{
    render() {
        const { classes} = this.props;
        return (
            <div className={classes.field}>
                sdfjsdlfksdfsdkjfhsdkfj
            </div>
        );
    }

}

export default withStyles(styles, { withTheme: true })(Field);