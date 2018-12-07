import React, { Component, Fragment } from "react";
import Expand from "react-expand-animated";

import {
    Header,
    Main,
    BoxToggle,
    BoxExpand,
    BoxExpand1,
    Button,
    ExpandBoxes
} from "./EEStyles";

class ExpandExample extends Component {
    state = { open: false };

    toggle = () => {
        this.setState(prevState => ({ open: !prevState.open }));
    };

    render() {
        const styles = {
            open: { background: "#ecf0f1" }
        };
        const transitions = ["height", "opacity", "background"];

        return (
            <Fragment>
                <Header>React Expand</Header>
                <Main>
                    <BoxToggle>
                        <Button onClick={this.toggle}>Open</Button>
                    </BoxToggle>
                    <Expand
                        open={this.state.open}
                        duration={1000}
                        styles={styles}
                        transitions={transitions}
                    >
                        <ExpandBoxes>
                            <BoxExpand>Hello</BoxExpand>
                            <BoxExpand1>Hallo</BoxExpand1>
                        </ExpandBoxes>
                    </Expand>
                </Main>
            </Fragment>
        );
    }
}

export default ExpandExample;
