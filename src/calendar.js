import React from 'react';

class Calender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totaalDagen: 7 * 4,
        };
    }

    render() {
        return <>
            <div className="calender-menu">
                <button>Vorige</button>
                <h3>November 2022</h3>
                <button>Volgende</button>
            </div>
            <CalendarRow maand='Nov' dagen={[1, 2, 3, 4, 5, 6, 7]} />
            <CalendarRow maand='Nov' dagen={[8, 9, 10, 1, 12, 13, 14]} />
            <CalendarRow maand='Nov' dagen={[15, 16, 17, 18, 19, 20, 21]} />
            <CalendarRow maand='Nov' dagen={[22, 23, 24, 25, 26, 27, 28]} />
        </>
    }
}

function CalendarRow({ maand, dagen }) {
    return <div className='calendar-row'>{
        dagen.map((dag, index) => <button className='calendar-item'>{dag}<br /> {maand}</button>)
    }</div>
}

export default Calender;

/*
<div className="calendar-row">
                <button className="calendar-item">1<br />Nov</button>
                <button className="calendar-item">2<br />Nov</button>
                <button className="calendar-item">3<br />Nov</button>
                <button className="calendar-item">4<br />Nov</button>
                <button className="calendar-item">5<br />Nov</button>
                <button className="calendar-item">6<br />Nov</button>
                <button className="calendar-item">7<br />Nov</button>
            </div>
            */