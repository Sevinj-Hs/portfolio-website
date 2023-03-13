import Title from '../Other/Title';
import Education from './Education';
import Experience from './Experience';

const Resume = () => {
    return (
        <section id="resume">
            <div className="container">
                <div className="row">
                    <Title title={"My Resume"} />
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        {/* ======= Education ======= */}
                        <div className="edu-wrapper">
                            <h2>Education</h2>
                            <Education school={"Code Academy"} specialty={"Full-Stack Web Programming"} year={"2020-2021"} />
                            <Education school={"Military Service"} specialty={"Peacekeeping Forces"} year={"2015-2016"} />
                            <Education school={"Baku Slavic University"} specialty={"International Relations"} year={"2011-2015"} />
                            <Education school={"Ideal Computers"} specialty={"Computer Basics"} year={"2010"} />
                            <Education school={"Secondary School"} year={"2000-2011"} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        {/* ======= Experience ======= */}
                        <div className="exp-wrapper">
                            <h2>Experience</h2>
                            <Experience
                                company={"SAFFRON Restaurant Group"}
                                position={"Waiter"}
                                year={"2018-2020"}
                            />
                            <Experience
                                company={"Baku Inn Hotel"}
                                position={"Barman"}
                                year={"2017-2018"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume;