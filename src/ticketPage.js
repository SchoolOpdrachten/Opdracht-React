import React from "react";
import Calender from './calendar';
import TicketBox from './ticketBox.js'

export default class TicketPage extends React.Component {
    constructor(props) {
        super(props);
        this.totaalPrijs = this.totaalPrijs.bind(this);
        this.state = {
            personen: [
                {
                    persoon: 'Volwassen',
                    prijs: 20.00,
                    aantal: 2,
                },
                {
                    persoon: 'Kinderen',
                    prijs: 15.00,
                    aantal: 1,
                },
                {
                    persoon: 'Ouderen',
                    prijs: 17.00,
                    aantal: 0,
                },
            ]
        }
    }

    totaalPrijs() {
        let totaalPrijs = 0;
        this.state.personen.map((persoon) => totaalPrijs += persoon.prijs * persoon.aantal);
        return totaalPrijs;
    }

    handleMinClick(persoon) {
        if (persoon.aantal > 0) this.setState(() => { persoon.aantal -= 0.5; return this.state; })
        console.log(persoon.aantal);
    }
    handlePlusClick(persoon) {
        this.setState(() => { persoon.aantal += 0.5; return this.state; })

        console.log('plus');
        console.log(persoon);
}

render() {
    return (
        <main>
            <section className="feature-box">
                {this.state.personen.map((persoon, index) =>
                    <TicketBox info={persoon} minClick={() => this.handleMinClick(persoon)} plusClick={() => this.handlePlusClick(persoon)} />
                )}
                <p className="totaalBedrag">totaal bedrag tickets: €<span>{this.totaalPrijs()}</span></p>

                <div className="flex-box">
                    <div className='calendar'>
                        <Calender />
                    </div>
                </div>
                <div className="flex-box">
                    <button type="button" onClick={() => alert('lukas, je suckt')} className="buy-ticket">KOOP JE TICKET</button>
                </div>
            </section>
        </main>
    );
}
}