import React from "react";
import "./home.css"
import payPalImage from "../images/pay-pal-donate-button.png"


export const BigDonatePayPal = () => {
    return (
        <form action="https://www.paypal.com/donate" method="post" target="_top" >
            <input type="hidden" name="business" value="EG9HM5HELD9QY" />
            <input type="hidden" name="no_recurring" value="1" />
            <input type="hidden" name="item_name" value="Send a solidarity donation towards clothing needs in Central Navajo Nation." />
            <input type="hidden" name="currency_code" value="USD" />
            <input className="bigDonateButton" type="image" src={payPalImage} border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
    )
}
