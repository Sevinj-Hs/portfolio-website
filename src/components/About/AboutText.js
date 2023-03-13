import Resume from '../../assets/resume/RufatGarayev.pdf';

const AboutText = () => {
    return (
        <div className="info-wrapper">
            <div className="top-info">
                <h6>Hello,</h6>
                <p>
                    I am a Junior Front-End Developer.
                    I've built several websites using SCSS, Javascript, Typescript, React, Redux, Next Js and so on.
                    At the moment, I am trying to improve the technologies I know and learn new technologies.
                </p>
            </div>
            <div className="bottom-info">
                <div className="col-md-12 p-0">
                    <div className="row no-gutters">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="left-info">
                                <p><span>Name:</span> Rufat Garayev</p>
                                <p><span>Birthdate:</span> 11.12.1993</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="right-info d-flex">
                                <p><span>Email:</span> rufathg@code.edu.az</p>
                                <p><span>Address:</span> Baku, Azerbaijan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn-wrapper">
                <a href={Resume} download className="download">
                    Download CV
                </a>
            </div>
        </div>
    )
}

export default AboutText;