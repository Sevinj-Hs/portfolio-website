import SocialMedia from '../Other/SocialMedia';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        <div className="content d-flex">
                            <div className="sevinj">
                                <a href="#home"><h4>SEVINJ</h4></a>
                            </div>

                            <SocialMedia />

                            <div className="copyright">
                                <p>Copyright 2023. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;