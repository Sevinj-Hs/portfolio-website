import SocialMedia from '../Other/SocialMedia';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        <div className="content d-flex">
                            {/* ======= Rufat ======= */}
                            <div className="rufat">
                                <a href="#home"><h4>RUFAT</h4></a>
                            </div>

                            {/* ======= Social Media ======= */}
                            <SocialMedia />

                            {/* ======= Copyright ======= */}
                            <div className="copyright">
                                <p>Copyright 2021. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;