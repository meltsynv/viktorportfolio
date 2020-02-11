import React from "react";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import PortfolioImg from "../../assets/images/01.jpg";
//Fontawesome-icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faSortUp, faTimes} from "@fortawesome/free-solid-svg-icons";

class Nav extends React.Component {
    state = {
        navActive: '',
        impActive: '',
    }

    targetElement = null;

    componentDidMount() {
        this.targetElement = document.querySelector('.App');
    }

    showMenu = () => {
        this.state.navActive === 'active' ? this.setState({navActive: ''}) : this.setState({navActive: 'active'})

        let app = document.querySelector('.header');

        app.addEventListener('click', function(){
            this.setState({navActive: ''});
        }.bind(this));
    };

    showImp = () => {
        let disableLink = document.querySelector("a.custom-link");
        let impArrow = document.querySelector('#imp-arrow');
        if (this.state.impActive === 'active-imp'){
            this.setState({impActive: ''});
            enableBodyScroll(this.targetElement);
            impArrow.style = 'transform: rotate(0deg)';
            disableLink.style = "pointer-events: all";
        } else {
            this.setState({impActive: 'active-imp'})
            disableBodyScroll(this.targetElement);
            impArrow.style = 'transform: rotate(180deg)';
            disableLink.style = "pointer-events:none";
        }
    }

    componentWillUnmount() {
        clearAllBodyScrollLocks();
    }

    render() {
        return (
          <>
            <div className={"nav"}>
              <div className={""}>
                <span>viktor meltsyn</span>
              </div>
              <div
                className={"avatar-img"}
                style={{ backgroundImage: `url(${PortfolioImg})` }}
                onClick={() => this.showMenu()}
              />
              <div className={`nav-menu ${this.state.navActive}`}>
                <FontAwesomeIcon className={"arrow-up"} icon={faSortUp} />
                <p className={"nav-list"}>
                  <a href="mailto:meltsynv@yahoo.com">meltsynv@yahoo.com</a>
                </p>
                <p onClick={() => this.showImp()} className={"nav-list"}>
                  Impressum
                  <FontAwesomeIcon id={"imp-arrow"} icon={faArrowLeft} />
                </p>
              </div>
            </div>
            <div className={`imp-modal ${this.state.impActive}`}>
              <FontAwesomeIcon onClick={() => this.showImp()} icon={faTimes} />
              <div className={"imp-list"}>
                <p>Viktor Meltsyn</p>
                <p>E-Mail: meltsynv@yahoo.com</p>
                <p>&copy; Viktor Meltsyn 2020</p>
              </div>
            </div>
          </>
        );
    }
}

export default Nav;