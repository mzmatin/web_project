import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import PlayerAvatar from "./PlayerAvatar";
import PlayerTable from "./PlayerInfTable";
import PlayerStatTable from "./PlayerStatTable";
import SimpleSelect from "../../SimpleSelect";

const styles = ({
    playerPageContainer : {
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-around',
        height : '85vh',
        marginTop: '100px',
    },
    rowContainer : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }
});


class PlayerPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            season : "۱۳۹۴-۱۳۹۵",
        }
    }
    render() {
        const { classes} = this.props;
        const information = this.getInformation(this.props.playerCode);
        const name = this.getPlayerName(this.props.playerCode);
        const address = this.getAddress(this.props.playerCode);
        const stat = this.getStat(1);
        return (

            <div className={classes.playerPageContainer}>
                <div className={classes.rowContainer}>
                    <div>
                        <PlayerAvatar name={name} avatar={address}/>
                    </div>
                    <div>
                        <PlayerTable information={information}/>
                    </div>
                </div>
                <div className={classes.rowContainer}>
                    <div>
                        <SimpleSelect subject={"فصل"} items={["۱۳۹۶-۱۳۹۷", "۱۳۹۵-۱۳۹۶"]}
                                      value={this.state.season}
                                      leagueChange={(league) => {
                            this.setState({season: league});
                        }}/>
                        <PlayerStatTable information={stat}/>
                    </div>
                    <div>
                        related
                    </div>
                </div>
            </div>
        );
    }

    getInformation() {
        return {
          'age' : "۳۱",
          'height': '۱۷۰cm',
          'weight': '71kg',
          'nationality': 'آرژانتین',
          'position': 'مهاجم',
          'team': 'بارسلونا',
        };
    }


    getPlayerName(PlayerCode) {
        return "مسی";
    }

    getAddress(PlayerCode) {
        return "https://static.farakav.com/files/pictures/01096693.jpg";
    }

    getStat(playerCode) {
        if (playerCode===1) {
            if (this.state.season === "۱۳۹۶-۱۳۹۷"){
                return {
                    "type": "football",
                    "goal": "۴۵",
                    "assist": "۱۷",
                    "numOfMatches": "۳۰",
                    "yellowCard": "۳",
                    "redCard": "۱",
                    "manOfTheMatch": "۲۰",
                }
            } else {
                return {
                    "type": "football",
                    "goal": "۵۵",
                    "assist": "۲۷",
                    "numOfMatches": "۳۳",
                    "yellowCard": "۵",
                    "redCard": "۲",
                    "manOfTheMatch": "۱۴",
                }
            }
        } else {
            if (this.state.season === "۱۳۹۶-۱۳۹۷"){
                return {
                    "type": "basketball",
                    "score": "۲۰۰",
                    "3score": "۴۰",
                    "2score": "۴۰",
                    "rebound": "۳۷",
                    "maxScore": "۵۶",
                    "manOfTheMatch": "۱۲",
                }
            } else {
                return {
                    "type": "basketball",
                    "score": "۱۸۰",
                    "3score": "۳۴",
                    "2score": "۳۹",
                    "rebound": "۵۰",
                    "maxScore": "۴۰",
                    "manOfTheMatch": "۲۰",
                }
            }
        }
    }
}

PlayerPage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PlayerPage);
