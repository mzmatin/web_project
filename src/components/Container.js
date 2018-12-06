import React from 'react';
import AppNavBar from "./AppNavBar";
import MainPage from "./pages/mainPage/MainPage";
import RTL from "./utils/RTL";


class Container extends React.Component{
    render() {
        return (
            <RTL>
                <AppNavBar />
                <MainPage />
            </RTL>
        );
    }
}

export default Container;