import React from "react";
import Fade from 'react-reveal/Fade';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faXing} from "@fortawesome/free-brands-svg-icons";

class Outro extends React.Component {
    state = {
        experienceStart: 0,
        experienceEnd: 5,
        projectsStart: 0,
        projectsEnd: 15,
        clientsStart: 0,
        clientsEnd: 100,
    }

    porcentage = () => {
        if (this.state.experienceStart < this.state.experienceEnd) {
            this.setState({
                experienceStart: this.state.experienceStart + 1
            })
        }
        if (this.state.projectsStart < this.state.projectsEnd) {
            this.setState({
                projectsStart: this.state.projectsStart + 1
            })
        }
        if (this.state.clientsStart < this.state.clientsEnd) {
            this.setState({
                clientsStart: this.state.clientsStart + 1
            })
        }
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.porcentage()
        }, 150)
    }

    render() {
        return (
            <div className={"outro"}>
                <div className={"outro-header"}>
                    <div className={"vertical-line"}/>
                    <div className={"title"}>
                        <h1>Danke für dein besuch</h1>
                    </div>
                    <div className={"vertical-line"}/>
                </div>
                <div className={"outro-body"}>
                    <div className={"outro-wrapper"}>
                        <Fade onReveal={() => this.porcentage()}>
                            <div className='outro-card'>
                                <span> {this.state.experienceStart} </span>
                                <h1>Jahre Erfahrung</h1>
                            </div>
                        </Fade>
                        <Fade onReveal={() => this.porcentage()}>
                            <div className='outro-card'>
                                <span> {this.state.projectsStart} +</span>
                                <h1>Projekte</h1>
                            </div>
                        </Fade>
                        <Fade onReveal={() => this.porcentage()}>
                            <div className='outro-card'>
                                <span> {this.state.clientsStart} +</span>
                                <h1>Kunden</h1>
                            </div>
                        </Fade>
                    </div>
                    <div className={"outro-wrapper"}>
                        <div className={"social-links"}>
                            <FontAwesomeIcon icon={faInstagram}/>
                            <FontAwesomeIcon icon={faXing}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Outro;