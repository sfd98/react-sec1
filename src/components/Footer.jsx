import React from "react"
import twitterIcon from "../img/twitter-icon.png"
import facebookIcon from "../img/facebook-icon.png"
import instagramIcon from "../img/instagram-icon.png"
import githubIcon from "../img/github-icon.png"

export default function Footer() {
    return (
        <>
            <div className="footer">
                <img src={twitterIcon} />
                <img src={facebookIcon} />
                <img src={instagramIcon} />
                <img src={githubIcon} />
            </div>
        </>
    )
}