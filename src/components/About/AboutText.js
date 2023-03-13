import Resume from '../../assets/resume/SevinjHasanova.pdf';

const AboutText = () => {
    return (
        <div className="info-wrapper">
            <div className="top-info">
                <h6>Hello,</h6>
                <p>
                    I am disciplined, precise in my work, flexible, eager to work with a team.
                    You can rate me as a person who is willing to learn and has potential.
                    I am sure that I will cope with all the tasks given to me by working accurately and honestly.
                </p>
            </div>
            <div className="bottom-info">
                <div className="col-md-12 p-0">
                    <div className="row no-gutters">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="left-info">
                                <p><span>Name:</span> Sevinj Hasanova</p>
                                <p><span>Birthdate:</span> 01.01.2000</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="right-info d-flex">
                                <p><span>Email:</span> sevinc.ghasanova@gmail.com</p>
                                <p><span>Address:</span> Sumgait, Azerbaijan</p>
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