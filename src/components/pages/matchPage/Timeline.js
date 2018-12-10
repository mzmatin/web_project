import {Timeline, TimelineEvent, TimelineBlip} from 'react-event-timeline'
import React from "react";
import {withStyles} from "@material-ui/core";

class Timeline extends React.Component{
    render () {
        return (
            <Timeline orientation={'right'}>
                <TimelineEvent title="John Doe sent a SMS"
                               icon={<i className="material-icons md-18">textsms</i>}
                              orientation={'right'}
                >
                </TimelineEvent>
                <TimelineEvent
                    title="You sent an email to John Doe"
                    createdAt="2016-09-11 09:06 AM"
                    icon={<i className="material-icons md-18">email</i>}
                >
                    Like we talked, you said that you would share the shipment details? This is an urgent order and so I
                    am losing patience. Can you expedite the process and pls do share the details asap. Consider this a
                    gentle reminder if you are on track already!
                </TimelineEvent>
            </Timeline>
        );
    }
}

export default (Timeline);