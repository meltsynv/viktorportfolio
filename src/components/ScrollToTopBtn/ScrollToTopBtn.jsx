import React, {Component} from 'react';
import './ScrollToTopBtn.style.css';
//Fontawesome-icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";

class ScrollToTopBtn extends Component {
    state = {
        activeClass: ''
    }

    componentDidMount = () => {
        window.addEventListener('scroll', () => {
            let activeClass = 'hidden';
            if (window.scrollY >= 100) {
                activeClass = 'active';
            }
            this.setState({activeClass});
        });
    };

    render() {
        return (
            <div className={`scroll-to-top ${this.state.activeClass}`}
                 onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <span><FontAwesomeIcon icon={faArrowUp}/></span>
            </div>
        );
    }
}

export default ScrollToTopBtn;