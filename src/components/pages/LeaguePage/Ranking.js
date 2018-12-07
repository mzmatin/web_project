import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';


const styles = ({
    rankingContainer :{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
    }
});


class Ranking extends React.Component {



    render() {
        const {classes} = this.props;
        return (
            <div className={classes.rankingContainer}>
                <div>s</div>
                <div>s</div>
                <div>s</div>
                <div>s</div>
                <div>s</div>
                <div>s</div>
                <div>s</div>
                <div>s</div>
                <div>s</div>
                <div>s</div>
                <div>s</div>
                <div>s</div>

            </div>
        );
    }

}

Ranking.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Ranking);
