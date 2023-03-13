import { useState } from 'react';
import { NavMenuData } from './NavMenuData';

const Header = () => {
    const [backgroundColor, setBackgroundColor] = useState(false);
    const [hamburger, setHamburger] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 250) {
            setBackgroundColor(true);
        } else {
            setBackgroundColor(false);
        }
    });

    return (
        <header className={backgroundColor ? "active" : ""}>
            <div className="container">
                <div className="content">
                    <div className="sevinj">
                        <h4><a href="#home">SEVINJ</a></h4>
                    </div>
                    <div className={hamburger ? "nav-menu-wrapper show-nav-menu" : "nav-menu-wrapper"}>
                        <ul className="nav-menu">
                            {
                                NavMenuData.map((item) => {
                                    return (
                                        <li className={item.class} key={item.id} onClick={() => { setHamburger(false) }}>
                                            <a href={item.href}>{item.title}</a>
                                            <hr />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="hamburger-wrapper">
                        <div className={hamburger ? "hamburger-btn change" : "hamburger-btn"} onClick={() => { setHamburger(!hamburger) }}>
                            <div id="bar1" className="bar"></div>
                            <div id="bar2" className="bar"></div>
                            <div id="bar3" className="bar"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;