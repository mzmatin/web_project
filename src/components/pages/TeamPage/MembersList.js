import React from 'react';
import Chip from "@material-ui/core/Chip/Chip";
import Avatar from "@material-ui/core/Avatar/Avatar";
import withStyles from "@material-ui/core/es/styles/withStyles";
import Paper from "@material-ui/core/es/Paper/Paper";

const styles = theme => ({
    chip: {
        margin: theme.spacing.unit,
        width : '150px',
        fontSize : '30px',

    },
    membersContainer :{
        display :'flex',
        flexDirection : 'column',
        width: '170px',
    },
    teamContainer : {
        display: 'flex',
        flexDirection: 'row',
    }
});

class MembersList extends React.Component{
    render() {
        const { classes} = this.props;
        const members = this.props.members;
        let member_list = [];
        for (let i = 0; i < members.length; i++){
            member_list.push(
                <Chip
                    avatar={<Avatar src={members[i].address}/>}
                    label={members[i].name}
                    onMouseOver={() => {
                        console.log(members[i].position)
                    }}
                    className={classes.chip}
                    variant="outlined"
                    key={i}
                />
            )
        }
        return (
            <div className={classes.teamContainer}>
                <Paper className={classes.membersContainer}>
                    {member_list}
                </Paper>

            </div>
        );
    }

}

export default withStyles(styles, { withTheme: true })(MembersList);