import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from "@material-ui/core/Paper/Paper";
import RTL from "../../utils/RTL";

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    newsLink: {
        textDecoration: 'none',
        '&:link':{color:'black'},
        '&:visited':{color:'grey'},
    }
});

class ControlledExpansionPanels extends React.Component {
    state = {
        expanded: null,
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };


    render() {
        const { classes } = this.props;
        const { expanded } = this.state;
        let news_list = [];

        for (let i = 0; i < this.props.news.length; i++){
            news_list.push(
                <ExpansionPanel expanded={expanded === 'panel' + i.toString()} onChange={this.handleChange('panel' + i.toString())} key={i} dir={"rtl"}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}><a className={classes.newsLink} target="_blank" rel="noopener noreferrer" href={this.props.news[i]["title"]}>{this.props.news[i]["title"]}</a></Typography>
                        <Typography className={classes.secondaryHeading}>{this.props.news[i]["time"]}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            {this.props.news[i]["summary"]}
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            );
        }

        return (
            <Paper className={classes.root} style={{maxHeight: 200, overflow: 'auto'}} >
                {news_list}
            </Paper>
        );
    }
}

ControlledExpansionPanels.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);
