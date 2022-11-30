import React from 'react'

export default function TicketBox({ info, minClick, plusClick}) {
    return (
        <div className="ticket-box">
            <h3 className="flex-item">{info.persoon}</h3>
            <p className="flex-item">{formatPrijs(info.prijs)}</p>
            <div className="ticket-teller flex-item">
                <button onClick={minClick}>-</button>
                <span><span>Aantal: </span><span id="aantal">{info.aantal}</span></span>
                <button onClick={plusClick}>+</button>
            </div>
        </div>
    );
}

function formatPrijs(prijs) {
    return '€'+ prijs
}
