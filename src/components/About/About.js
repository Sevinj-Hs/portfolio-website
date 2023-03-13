import Title from '../Other/Title';
import AboutImg from './AboutImg';
import AboutText from './AboutText';

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="row">
                    <Title title={"About Me"} />
                </div>
                <div className="row">
                    <div className="col-lg-5 col-md-4">
                        <AboutImg />
                    </div>
                    <div className="col-lg-7 col-md-8">
                        <AboutText />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;