import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import './knockout.css'
import Paper from "@material-ui/core/Paper/Paper";

const styles = theme => ({
});



class Knockout extends React.Component{
    getRound(round){
        let result = [];
        for (let i = 0; i < round.length; i++){
            result.push(<li className="spacer">&nbsp;</li>);
            result.push(<li className="game game-top winner"><img src={round[i].avatar1} width={40} height={40}/>{round[i].name1}<span style={{position:'relative', top:'20px'}}>{round[i].score1}</span></li>);
            result.push(<li className="game game-spacer">&nbsp;</li>);
            result.push(<li className="game game-bottom "><img src={round[i].avatar2} width={40} height={40}/>{round[i].name2}<span style={{position:'relative', top:'20px'}}>{round[i].score2}</span></li>);
        }
        return result;
    }
    getTable(teams){
        let result = [];
        for (let i = 0; i < teams.length; i++){
            result.push(
                <ul className={"round round-"+(i+1).toString()}>
                    {this.getRound(teams[i])}
                    <li className="spacer">&nbsp;</li>
                </ul>
            );
        }
        return result;
    }
    render() {
        const { classes} = this.props;
        const games = this.getTable(this.props.teams);
        return (
            <Paper style={{padding:'75px'}}>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <h1>{this.props.name}</h1>
                </div>
                <main id="tournament">
                    {games}
                </main>
            </Paper>
        );
        // return (
        //     <main id="tournament">
        //         <ul className="round round-1">
        //             <li className="spacer">&nbsp;</li>
        //
        //             <li className="game game-top winner">Lousville <span>79</span></li>
        //             <li className="game game-spacer">&nbsp;</li>
        //             <li className="game game-bottom ">NC A&T <span>48</span></li>
        //
        //             <li className="spacer">&nbsp;</li>
        //
        //             <li className="game game-top winner">Colo St <span>84</span></li>
        //             <li className="game game-spacer">&nbsp;</li>
        //             <li className="game game-bottom ">Missouri <span>72</span></li>
        //
        //             <li className="spacer">&nbsp;</li>
        //
        //             <li className="game game-top ">Oklahoma St <span>55</span></li>
        //             <li className="game game-spacer">&nbsp;</li>
        //             <li className="game game-bottom winner">Oregon <span>68</span></li>
        //
        //             <li className="spacer">&nbsp;</li>
        //
        //             <li className="game game-top winner">Saint Louis <span>64</span></li>
        //             <li className="game game-spacer">&nbsp;</li>
        //             <li className="game game-bottom ">New Mexico St <span>44</span></li>
        //
        //             <li className="spacer">&nbsp;</li>
        //
        //             <li className="game game-top winner">Memphis <span>54</span></li>
        //             <li className="game game-spacer">&nbsp;</li>
        //             <li className="game game-bottom ">St Mary's <span>52</span></li>
        //
        //             <li className="spacer">&nbsp;</li>
        //
        //             <li className="game game-top winner">Mich St <span>65</span></li>
        //             <li className="game game-spacer">&nbsp;</li>
        //             <li className="game game-bottom ">Valparaiso <span>54</span></li>
        //
        //             <li className="spacer">&nbsp;</li>
        //
        //             <li className="game game-top winner">Creighton <span>67</span></li>
        //             <li className="game game-spacer">&nbsp;</li>
        //             <li className="game game-bottom ">Cincinnati <span>63</span></li>
        //
        //             <li className="spacer">&nbsp;</li>
        //
        //             <li className="game game-top winner">Duke <span>73</span></li>
        //             <li className="game game-spacer">&nbsp;</li>
        //             <li className="game game-bottom ">Albany <span>61</span></li>
        //
        //             <li className="spacer">&nbsp;</li>
        //         </ul>
        //         <ul className="round round-2">
        //             <li className="spacer">&nbsp;</li>
        //
        //             <li className="game game-top winner">Lousville <span>82</span></li>
        //             <li className="game game-spacer">&nbsp;</li>
        //             <li className="game game-bottom ">Colo St <span>56</span></li>
        //
        //             <li className="spacer">&nbsp;</li>
        //
        //             <li className="game game-top winner">Oregon <span>74</span></li>
        //             <li className="game game-spacer">&nbsp;</li>
        //             <li className="game game-bottom ">Saint Louis <span>57</span></li>
        //
        //             <li className="spacer">&nbsp;</li>
        //
        //             <li className="game game-top ">Memphis <span>48</span></li>
        //             <li className="game game-spacer">&nbsp;</li>
        //             <li className="game game-bottom winner">Mich St <span>70</span></li>
        //
        //             <li className="spacer">&nbsp;</li>
        //
        //             <li className="game game-top ">Creighton <span>50</span></li>
        //             <li className="game game-spacer">&nbsp;</li>
        //             <li className="game game-bottom winner">Duke <span>66</span></li>
        //
        //             <li className="spacer">&nbsp;</li>
        //         </ul>
        //         <ul className="round round-3">
        //             <li className="spacer">&nbsp;</li>
        //
        //             <li className="game game-top winner">Lousville <span>77</span></li>
        //             <li className="game game-spacer">&nbsp;</li>
        //             <li className="game game-bottom ">Oregon <span>69</span></li>
        //
        //             <li className="spacer">&nbsp;</li>
        //
        //             <li className="game game-top ">Mich St <span>61</span></li>
        //             <li className="game game-spacer">&nbsp;</li>
        //             <li className="game game-bottom winner">Duke <span>71</span></li>
        //
        //             <li className="spacer">&nbsp;</li>
        //         </ul>
        //         <ul className="round round-4">
        //             <li className="spacer">&nbsp;</li>
        //
        //             <li className="game game-top winner">Lousville <span>85</span></li>
        //             <li className="game game-spacer">&nbsp;</li>
        //             <li className="game game-bottom ">Duke <span>63</span></li>
        //
        //             <li className="spacer">&nbsp;</li>
        //         </ul>
        //     </main>
        // );
    }
}

export default withStyles(styles, { withTheme: true })(Knockout);