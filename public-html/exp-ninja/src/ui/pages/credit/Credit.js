import React from "react";
import {Menu} from "../../shared/menu/Menu";
import kakashiCredit from "./kakashi-3d-credit.png"
import korraCredit from "./korra-3d-credit.png"
import gokuCredit from "./goku-3d-credit.png"
import narutoCredit from "./naruto-3d-credit.png"
import coinCredit from "./coin-credit.png"
import trainerKorra from "./korra-trainer-credit.png"
import blueWavyBackground from "./blue-wavy-background-credit.png"
import neonWaveBackground from "./neon-synthwave-credit.png"
import favIcon from "./favicon.ico"
import './credit-style.css'
import {Button, Row} from "react-bootstrap";
import "../../shared/main-nav/sign-in/menuStyle.css"


export const Credit = () => {
    return (
        <>
            <Row>
                <Button className="menuButtonAnimation border-0" size="lg" href='/' >
                    Return Home
                </Button>
            </Row>
            <h1>Credit/Attribution</h1>

            <div className="card mb-3 bg-dark border-white ms-3" style={{maxWidth: "540px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={kakashiCredit} className="card-img" alt="Kakashi Credit" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">Kakashi 3-d model</h2>
                            <p className="card-text"> By gabrieel22 on
                            <a rel="noreferrer" href="https://sketchfab.com/3d-models/hatake-kakashi-d6958798fee34e68a57a1d0c05ba0ef3" target="_blank"> Sketchfab</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3 bg-dark border-white ms-3" style={{maxWidth: "540px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={narutoCredit} className="card-img" alt="Naruto Credit" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">Naruto 3-d model</h2>
                            <p className="card-text"> By gabrieel22 on
                                <a rel="noreferrer" href="https://sketchfab.com/3d-models/naruto-modo-sabio-de-los-6-caminos-d3691cfc7b76472496e5e03386659963" target="_blank"> Sketchfab</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3 bg-dark border-white ms-3" style={{maxWidth: "540px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={korraCredit} className="card-img" alt="korra Credit" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">Korra 3-d model</h2>
                            <p className="card-text"> By asifaj on
                                <a rel="noreferrer" href="https://sketchfab.com/3d-models/korra-085e432a2c254176b1d0d770adc8a637" target="_blank"> Sketchfab</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3 bg-dark border-white ms-3" style={{maxWidth: "540px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={gokuCredit} className="card-img" alt="Goku Credit" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">Goku 3-d model</h2>
                            <p className="card-text"> By lechitachan on
                                <a rel="noreferrer" href="https://sketchfab.com/3d-models/goku-76acf6680f024dc4ac08811914fc9520" target="_blank"> Sketchfab</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3 bg-dark border-white ms-3" style={{maxWidth: "540px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={coinCredit} className="card-img" alt="Coin Credit" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">Coin icon</h2>
                            <p className="card-text"> By Delapouite on
                                <a rel="noreferrer" href="https://game-icons.net/1x1/delapouite/two-coins.html#download" target="_blank"> Game-icons.net</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3 bg-dark border-white ms-3" style={{maxWidth: "540px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={trainerKorra} className="card-img" alt="Korra Trainer Credit" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">Trainer Korra</h2>
                            <p className="card-text"> By steeven7620 on
                                <a rel="noreferrer" href="https://www.deviantart.com/steeven7620/art/korra-season-2-582716041" target="_blank"> Deviant Art</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3 bg-dark border-white ms-3" style={{maxWidth: "540px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={blueWavyBackground} className="card-img" alt="blue wavy background credit" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">Blue Wavy Background</h2>
                            <p className="card-text">
                                <a rel="noreferrer" href="https://www.freepik.com/free-vector/blue-wavy-line-with-light-effect-background_14446119.htm#page=13&query=line&position=46" target="_blank"> freepik</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3 bg-dark border-white ms-3" style={{maxWidth: "540px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={neonWaveBackground} className="card-img" alt="neon wave background credit" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">Neon Wave Background</h2>
                            <p className="card-text">
                                <a rel="noreferrer" href="https://www.freepik.com/free-vector/neon-synthwave-border-squared-dark-blue-template_14549276.htm?query=geometric%20pattern%20blue%20background" target="_blank"> freepik</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3 bg-dark border-white ms-3" style={{maxWidth: "540px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={favIcon} className="card-img" alt="favicon Credit" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">Fav icon</h2>
                            <p className="card-text"> By Lorc on
                                <a rel="noreferrer" href="https://game-icons.net/1x1/lorc/fire-dash.html#download" target="_blank"> Game-icons.net</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
