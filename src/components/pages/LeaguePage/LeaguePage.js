import React from 'react';
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/es/Typography/Typography";
import Paper from "@material-ui/core/Paper/Paper";
import Ranking from "./Ranking";

const styles = theme => ({
    leagueMainPageContainer : {
        display : 'flex',
        flexDirection : 'column',
        justifyContent: 'space-between',
        marginTop: '80px',
        height : '85vh',
        width : '100vw',
    },
    leagueTables: {
        display: 'flex',
        flexDirection : 'row',
        justifyContent: 'space-evenly',
        flexShrink: '0',
    },
    comeCenter : {
        alignSelf: 'center',
        flexGrow: '1',
    },
});

class LeaguePage extends React.Component{
    render() {
        const {classes} = this.props;
        return (
          <div className={classes.leagueMainPageContainer}>
              <div className={classes.comeCenter}>
                  <Paper>
                      <Typography variant="h2" gutterBottom>
                          {this.props.name + " " + this.props.season}
                      </Typography>
                  </Paper>
              </div>
              <div className={classes.leagueTables}>
                  <div>
                      <Ranking ranks={this.getLeagueRanking(this.props.name, this.props.season)}/>
                  </div>
                  <div>
                      matches
                  </div>
              </div>
              <div className={classes.comeCenter}>
                  sa
              </div>
          </div>
        );
    }

    getLeagueRanking(name, seson) {
        // TODO get desred league ranking from server
        return [
            {'name' : 'چلسی', 'avatar' : 'http://pluspng.com/img-png/chelsea-png-chelsea-fc-1024.png',
            'numOfMatches': 20, 'goalDiff' : 12, 'pts': 46},
            {'name' : 'چلسی', 'avatar' : 'http://pluspng.com/img-png/chelsea-png-chelsea-fc-1024.png',
                'numOfMatches': 20, 'goalDiff' : 12, 'pts': 46},
            {'name' : 'چلسی', 'avatar' : 'http://pluspng.com/img-png/chelsea-png-chelsea-fc-1024.png',
                'numOfMatches': 20, 'goalDiff' : 12, 'pts': 46},
            {'name' : 'چلسی', 'avatar' : 'http://pluspng.com/img-png/chelsea-png-chelsea-fc-1024.png',
                'numOfMatches': 20, 'goalDiff' : 12, 'pts': 46},
            {'name' : 'چلسی', 'avatar' : 'http://pluspng.com/img-png/chelsea-png-chelsea-fc-1024.png',
                'numOfMatches': 20, 'goalDiff' : 12, 'pts': 46},
            {'name' : 'چلسی', 'avatar' : 'http://pluspng.com/img-png/chelsea-png-chelsea-fc-1024.png',
                'numOfMatches': 20, 'goalDiff' : 12, 'pts': 46},
            {'name' : 'چلسی', 'avatar' : 'http://pluspng.com/img-png/chelsea-png-chelsea-fc-1024.png',
                'numOfMatches': 20, 'goalDiff' : 12, 'pts': 10},
            {'name' : 'چلسی', 'avatar' : 'http://pluspng.com/img-png/chelsea-png-chelsea-fc-1024.png',
                'numOfMatches': 20, 'goalDiff' : 12, 'pts': 46},
            {'name' : 'چلسی', 'avatar' : 'http://pluspng.com/img-png/chelsea-png-chelsea-fc-1024.png',
                'numOfMatches': 20, 'goalDiff' : 12, 'pts': 46},
            {'name' : 'چلسی', 'avatar' : 'http://pluspng.com/img-png/chelsea-png-chelsea-fc-1024.png',
                'numOfMatches': 20, 'goalDiff' : 12, 'pts': 46},
            {'name' : 'بارسلونا', 'avatar' : 'http://pngimg.com/uploads/fcb_logo/fcb_logo_PNG4.png',
                'numOfMatches': 20, 'goalDiff' : 12, 'pts': 46},
        ];
    }
}

export default withStyles(styles, { withTheme: true })(LeaguePage);