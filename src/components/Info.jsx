import React from "react"
import mail from "../img/mail.png"
import linkedin from "../img/linkedin.png"


export default function Info() {
    return (
        <>
            <div className="info">
                <h1 className="name">Laura Smith</h1>
                <h3 className="profession">Frontend Developer</h3>
                <p className="email">sharky.website</p>
                <div className="fastContact">
                    <button className="btn-mail"><i class="fa fa-envelope"></i> Email</button>
                    <button className="btn-linkedin"><i class="fa fa-linkedin"></i> LinkedIn</button>
                </div>
                
            </div>
        </>
    )
}