import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Chip from '@material-ui/core/Chip';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PaperSheet from "./PaperSheet";
import PersianNumber from './utils/PersianNumber';


const styles = theme => ({
    root: {
        display: 'flex',
        maxWidth: 800,
        flexDirection: 'column',
    },
    resourceChipContainer: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    tagChipContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        marginRight: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    },
    card: {
        display: 'flex',
        maxWidth: 800,
    },
    summary: {
        borderRadius: theme.spacing.unit * 1,
        backgroundColor: 'pink',
        padding: theme.spacing.unit * 1,
    },
    newsInfo: {
        display: 'flex',
        marginTop: theme.spacing.unit * 4,
        color: 'grey',
        justifyContent: 'space-between',
    },
    newsInfoSection: {
    },
    newsBody: {
        textAlign: 'justify',
        padding: theme.spacing.unit * 3,
        marginTop: theme.spacing.unit * 2,
    },
    viewsCount: {
        position: 'relative',
        '&::before':{
            content: '\\F06E',
            fontFamily: 'FontAwesome',
            fontStyle: 'normal',
            fontWeight: 'normal',
            textDecoration: 'inherit',
        }
    },
    button: {
        margin: theme.spacing.unit,
        paddingTop: theme.spacing.unit * 0.25,
        paddingBottom: theme.spacing.unit * 0.25,
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
    },
    resourceChip: {
        margin: theme.spacing.unit,
    },
    tagChip: {
        margin: theme.spacing.unit,
        color: 'green',
    },
    likeContainer: {
        display: 'flex',
        marginRight: theme.spacing.unit * 2,
    },
    cardSection: {
        display: 'flex',
        width: '50%',
        flexDirection: 'column',
    },
    rightIcon: {
        marginLeft: theme.spacing.unit * 3,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class RecipeReviewCard extends React.Component {

    state = {
        like: false,
        disLike: false,
    };



    handleTagChipClick = (event, label) => {
        //TODO: go to news page with the clicked tag
        console.log("clicked on tag " + label)
    };

    handleLike = () => {
        //TODO: request for like
        this.setState({like : !this.state.like, disLike : false});
        console.log("clicked on like ")

    };

    handleDisLike = () => {
        //TODO: request for disLike
        this.setState({disLike : !this.state.disLike, like: false});
        console.log("clicked on dislike ")

    };

    handleSourceChipClick = (event, label) => {
        //TODO: go to news page with the clicked source
        console.log("clicked on source " + label);
    };

    render() {
        const { classes } = this.props;
        const { like, disLike } = this.state;

        // let resources = [];
        // for (let i = 0; i < this.props.resourceChips.length; i++) {
        //     resources.push(
                {/*<Chip key={i} onClick={(e) => {this.handleSourceChipClick(e, this.props.resourceChips[i])}} label={this.props.resourceChips[i]} className={classes.resourceChip} variant="outlined" />*/}
            // )
        // }

        // let tags = [];
        // for (let i = 0; i < this.props.tagChips.length; i++) {
        //     tags.push(
                {/*<Chip key={i} onClick={(e) => {this.handleSourceChipClick(e, this.props.tagChips[i])}} label={this.props.tagChips[i]} className={classes.tagChip} variant="outlined" />*/}
            // )
        // }

        return (
            <div className={classes.root}>
                <div className={classes.resourceChipContainer}>
                    <Chip onClick={(e) => {this.handleSourceChipClick(e, "فارس نیوز")}} label={"فارس نیوز"} className={classes.resourceChip} variant="outlined" />
                    <Chip onClick={(e) => {this.handleSourceChipClick(e, "عرب نیوز")}} label={"عرب نیوز"} className={classes.resourceChip} variant="outlined" />
                    {/*{resources}*/}
                </div>
                <Card className={classes.card}>
                    <div className={classes.cardSection}>
                        <CardMedia
                            className={classes.media}
                            image = 'http://www.logologo.com/logos/letter-a-logo.jpg'
                            // image = {this.props.imageUrl}
                            title="Paella dish"
                            // title={this.props.title}
                        />
                    </div>
                    <CardContent className={classes.cardSection}>
                        <h3>شوک به فوتبال ایران</h3>
                        {/*<h3>{this.props.title}</h3>*/}
                        <Typography className={classes.summary} component="p">
                            {/*{this.props.summary}*/}
                            برخی منابع موثق از حضور نیافتن رییس فدراسیون فوتبال در محل کار خود خبر می‌دهند.
                        </Typography>
                        <div className={classes.newsInfo}>
                            <div className={classes.newsInfoSection}>
                                <FontAwesomeIcon
                                    icon="eye"
                                    color="grey"
                                    size="2sm"
                                />
                                {/*{this.props.views}*/}
                                {' '}۲۱۳۱۴
                            </div>
                            <div className={classes.newsInfoSection}>
                                {/*{this.props.time}*/}
                                ۲۱:۳۴
                            </div>
                            <div className={classes.newsInfoSection}>
                                {/*{this.props.date}*/}
                                ۱۳۹۷/۲/۲۱
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Paper>
                    <Typography className={classes.newsBody}>
                        به گزارش وبسایت نود، ادامه سکوت وزارت ورزش درباره تعیین تکلیف فدراسیون فوتبال و پاسخ ندادن به نامه‌های مکرر فدراسیون باعث بروز مشکلات در این فدراسیون برای آماده‌سازی تیم‌های ملی به ویژه تیم‌ملی بزرگسالان شده است

                        در تازه‌ترین تحولات، مرد اول ساختمان سئول امروز بعد از پایان مهلت قانونی به محل کار خود مراجعه نکرد تا فوتبال ایران با یک شوک احتمالی مواجه شود.

                        اتفاقی که صرف نظر از واکنش‌های بین‌المللی مشخص نیست وضعیت فوتبال ما را در آستانه جام ملت‌ها با چه روندی روبرو خواهد ساخت‌.

                        پیش از این حمیدرضا گرشاسبی که او هم مشمول قانون منع به کارگیری بازنشستگان محسوب می شد، در محل کارش در باشگاه پرسپولیس حاضر شده بود.
                    </Typography>
                    {/*{this.props.content}*/}
                    <div className={classes.likeContainer}>
                        <Button onClick={this.handleLike} variant="contained" color="default" className={classes.button}>
                            <FontAwesomeIcon className={classes.rightIcon}
                                icon="thumbs-up"
                                color={like ? 'green' : 'grey'}
                                size="2sm"
                            />
                            {/*{<PersianNumber>{String(this.props.likeCount + (like ? 1 : 0))}</PersianNumber>}*/}
                            {' '}۲۵۶
                        </Button>
                        <Button onClick={this.handleDisLike} variant="contained" color="default" className={classes.button}>
                            <FontAwesomeIcon className={classes.rightIcon}
                                icon="thumbs-down"
                                color={disLike ? 'red' : 'grey'}
                                size="2sm"
                            />
                            {/*{' '}{<PersianNumber>{String(this.props.disLikeCount + (disLike ? 1 : 0))}</PersianNumber>}*/}
                            {' '}{<PersianNumber>35</PersianNumber>}
                        </Button>
                    </div>
                    <div className={classes.tagChipContainer}>
                        <Chip onClick={(e) => {this.handleTagChipClick(e, "فارس نیوز")}} label={"فارس نیوز"} className={classes.tagChip} variant="outlined" />
                        <Chip onClick={(e) => {this.handleTagChipClick(e, "عرب نیوز")}} label={"عرب نیوز"} className={classes.tagChip} variant="outlined" />
                        {/*{tags}*/}
                    </div>
                </Paper>
            </div>

        );
    }
}

RecipeReviewCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
