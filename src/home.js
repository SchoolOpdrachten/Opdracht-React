import React from "react";

export default function Home() {
    return (
        <>
            <main>
                <section className="feature-box">
                    <div className="text-with-img">
                        <div className="flex-item">
                            <p>BOEE, ben jij ready voor een halloween avond?</p>
                            <p>Koop <a href="/tickets.html">hier</a> je tickets om ons te bezoeken!</p>
                        </div>
                        <div className="flex-item">
                            <a href="/tickets.html"><img src="./images/kinderen-bij-fontein.jpg" alt="Tickets" /></a>
                        </div>
                    </div>
                </section>
                <section className="feature-box">
                    <div className="text-with-img">
                        <div className="flex-item">
                            <a href="/contact.html"><img src="./images/water-kasteel.jpg" alt="Contact/Over ons" /></a>
                        </div>
                        <div className="flex-item">
                            <p>Ons pretpark bestaat uit 8 super leuke attractes en nog veel meer. Er is bij ons genoeg leuke
                                dingen
                                te
                                doen! Er is voor iedereen iets leuks te vinden</p>
                            <p>Voor meer informatie, ga naar onze "<a href="/contact.html">Over ons</a>" pagina!</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}