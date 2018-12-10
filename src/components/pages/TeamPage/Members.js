import React from 'react';
import {withStyles} from "@material-ui/core";
import MembersList from "./MembersList";

const styles = theme => ({

});

class Members extends React.Component{
    render() {
        const { classes} = this.props;
        const member_list = this.getTeamMembers(this.props.teamCode);
        return (
          <div>
              <MembersList members={member_list}/>
          </div>
        );
    }

    getTeamMembers(teamCode) {
        // TODO get team Members Based on the team code from server
        if (teamCode === 0) { // soccer
            return [
                {'name': "علی", 'address': 'http://pngimg.com/uploads/fcb_logo/fcb_logo_PNG4.png', "position": "gk"},
                {'name': "علی", 'address': 'http://pngimg.com/uploads/fcb_logo/fcb_logo_PNG4.png', "position": "dc"},
                {'name': "علی", 'address': 'http://pngimg.com/uploads/fcb_logo/fcb_logo_PNG4.png', "position": "dr"},
                {'name': "علی", 'address': 'http://pngimg.com/uploads/fcb_logo/fcb_logo_PNG4.png', "position": "dl"},
                {'name': "علی", 'address': 'http://pngimg.com/uploads/fcb_logo/fcb_logo_PNG4.png', "position": "mr"},
                {'name': "علی", 'address': 'http://pngimg.com/uploads/fcb_logo/fcb_logo_PNG4.png', "position": 'mc'},
                {'name': "علی", 'address': 'http://pngimg.com/uploads/fcb_logo/fcb_logo_PNG4.png', "position": "ml"},
                {'name': "علی", 'address': 'http://pngimg.com/uploads/fcb_logo/fcb_logo_PNG4.png', "position": "fc"},
                {'name': "علی", 'address': 'http://pngimg.com/uploads/fcb_logo/fcb_logo_PNG4.png', "position": "fl"},
                {'name': "علی", 'address': 'http://pngimg.com/uploads/fcb_logo/fcb_logo_PNG4.png', "position": "fr"},
                {'name': "علی", 'address': 'http://pngimg.com/uploads/fcb_logo/fcb_logo_PNG4.png', "position": "coach"},
                {
                    'name': "علی",
                    'address': 'http://pngimg.com/uploads/fcb_logo/fcb_logo_PNG4.png',
                    "position": "gk_trainer"
                },
                {
                    'name': "علی",
                    'address': 'http://pngimg.com/uploads/fcb_logo/fcb_logo_PNG4.png',
                    "position": "trainer"
                },
                {
                    'name': "علی",
                    'address': 'http://pngimg.com/uploads/fcb_logo/fcb_logo_PNG4.png',
                    "position": "trainer"
                },
            ];
        }
    }
}

export default withStyles(styles, { withTheme: true })(Members);