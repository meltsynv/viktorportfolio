import React from "react";
import TextField from '@material-ui/core/TextField';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faPaperPlane} from "@fortawesome/free-solid-svg-icons";


const Contact = () => {

    return (
        <div className={"contact"}>
            <div className={"contact-header"}>
                <div className={"vertical-line"}/>
                <div className={"title"}>
                    <h1>Jetzt deine Anfrage stellen!</h1>
                </div>
                <div className={"vertical-line"}/>
            </div>
            <div className={"contact-body"}>
                <form name="contact" action={"POST"} data-netlify="true">
                    <div className={"form-group"}>
                        <TextField className={"custom-form-label"} id="outlined-basic" label="Name" type="text"
                                   variant="outlined"
                                   placeholder={"Max Mustermann"} name={"name"}/>
                        <TextField className={"custom-form-label"} id="outlined-basic" label="E-mail" type="email"
                                   variant="outlined"
                                   placeholder={"max@mustermann.de"} name={"email"}/>
                        <textarea type={"text"} placeholder={"Deine Nachricht an mich.."} name={"message"}/>
                    </div>
                    <button type={"submit"} className={"send-btn"}><span>Senden <FontAwesomeIcon icon={faPaperPlane}/></span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;