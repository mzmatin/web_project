import React from 'react';
import withStyles from "@material-ui/core/es/styles/withStyles";
import Members from "./Members";
import MatchesList from "../../MatchesList";
import Grid from "../../utils/Grid";

const styles = theme => ({
    teamPageContainer:{
        display : 'flex',
        flexDirection: 'column',
        alignItems : 'center',
    },
    matchNewsContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:'100px',
        width: '60vw',
    }
});

class TeamPage extends React.Component{
    render() {
        const { classes} = this.props;
        const teamCode = this.getTeamCode();
        const newsList = this.getRelatedTeamNews(teamCode);
        return (
            <div className={classes.teamPageContainer}>
                <Members teamCode={teamCode}/>
                <div className={classes.matchNewsContainer}>
                    <div style={{marginLeft:'20px'}}>
                        <MatchesList matches={this.getTeamMatchesList(teamCode)} height={'60vh'}/>
                    </div>
                    <Grid listItems={newsList} listTitle={"اخبار مرتبط"} width={'auto'} columns={2}/>
                </div>
            </div>
        );
    }

    getTeamCode() {
        // TODO get the desired teamCode {it will handle later by routing in site}
        return 1;
    }

    getTeamMatchesList(teamCode) {
        // TODO get team matches from the server
        return [
            {
                "type": "فوتبال",
                "address1": 'http://pngimg.com/uploads/fcb_logo/fcb_logo_PNG4.png', "name1": "بارسلونا",
                "address2": 'http://pluspng.com/img-png/chelsea-png-chelsea-fc-1024.png', 'name2': 'چلسی',
                "result": "۲-۲", "subtitle": "۲۳آذر : ۲۱:۰۰ "
            },
            {
                "type": "فوتبال",
                "address1": 'http://pngimg.com/uploads/fcb_logo/fcb_logo_PNG4.png', "name1": "بارسلونا",
                "address2": 'http://pluspng.com/img-png/chelsea-png-chelsea-fc-1024.png', 'name2': 'چلسی',
                "result": "۲-۴", "subtitle": "۴ دی: ۲۱:۰۰ "
            },
            {
                "type": "فوتبال",
                "address1": 'http://pngimg.com/uploads/fcb_logo/fcb_logo_PNG4.png', "name1": "بارسلونا",
                "address2": 'http://pluspng.com/img-png/chelsea-png-chelsea-fc-1024.png', 'name2': 'چلسی',
                "result": "۲-۴", "subtitle": "۲ بهمن: ۲۱:۰۰ "
            },
            {
                "type": "فوتبال",
                "address1": 'http://pngimg.com/uploads/fcb_logo/fcb_logo_PNG4.png', "name1": "بارسلونا",
                "address2": 'http://pluspng.com/img-png/chelsea-png-chelsea-fc-1024.png', 'name2': 'چلسی',
                "result": "۲-۴", "subtitle": "۳ مهر: ۲۱:۰۰ "
            },
            {
                "type": "فوتبال",
                "address1": 'http://pngimg.com/uploads/fcb_logo/fcb_logo_PNG4.png', "name1": "بارسلونا",
                "address2": 'http://pluspng.com/img-png/chelsea-png-chelsea-fc-1024.png', 'name2': 'چلسی',
                "result": "۲-۴", "subtitle": "۴دی: ۲۱:۰۰ "
            },
            {
                "type": "فوتبال",
                "address1": 'http://pngimg.com/uploads/fcb_logo/fcb_logo_PNG4.png', "name1": "بارسلونا",
                "address2": 'http://pluspng.com/img-png/chelsea-png-chelsea-fc-1024.png', 'name2': 'چلسی',
                "result": "۲-۴", "subtitle": "۷ اسفند: ۲۱:۰۰ "
            },
        ]
    }

    getRelatedTeamNews(teamCode) {
        // TODO get related news to the team from the server
        return [
            {"text": "پله: مارادونا همه چیز داشت، مسی نه ",
                "address": "https://static.farakav.com/files/pictures/thumb/01360957.jpg",
                "subtitle" : "۱۳۹۷/۰۹/۱۵"
            },
            {"text": "والورده: مصدومیت مسی جدی نیست",
                "address": "https://static.farakav.com/files/pictures/thumb/01354229.jpg",
                "subtitle" : "۱۳۹۷/۰۹/۱۱"
            },
            {"text": "مسی چند کلاس بالاتر از مودریچ است ",
                "address": "https://static.farakav.com/files/pictures/thumb/01360776.jpg",
                "subtitle" : "۱۳۹۷/۰۹/۱۴"
            },
            {"text": "پله: مارادونا همه چیز داشت، مسی نه ",
                "address": "https://static.farakav.com/files/pictures/thumb/01360957.jpg",
                "subtitle" : "۱۳۹۷/۰۹/۱۵"
            },
            {"text": "والورده: مصدومیت مسی جدی نیست",
                "address": "https://static.farakav.com/files/pictures/thumb/01354229.jpg",
                "subtitle" : "۱۳۹۷/۰۹/۱۱"
            },
            {"text": "مسی چند کلاس بالاتر از مودریچ است ",
                "address": "https://static.farakav.com/files/pictures/thumb/01360776.jpg",
                "subtitle" : "۱۳۹۷/۰۹/۱۴"
            },
        ];
    }
}

export default withStyles(styles, { withTheme: true })(TeamPage);