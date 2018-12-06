import React from 'react';
import AppNavBar from "./AppNavBar";
import RTL from "./utils/RTL";
import PlayerPage from "./pages/playerPage/PlayerPage";


class Container extends React.Component{
    render() {
        return (
            <RTL>
                <AppNavBar />
                <PlayerPage />
            </RTL>
        );
    }
}

export default Container;