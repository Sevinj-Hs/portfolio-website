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
                            <Education school={"Sumgait Chemical Industrial Park"} specialty={"Web designer and software"} year={"2022-2023"} />
                            <Education school={"Istanbul University"} specialty={"-"} year={"2015-frozen"} />
                            <Education school={"Friedrich"} specialty={"Gymnasium"} year={"2012 january-june"} />
                            <Education school={"Humboldt"} specialty={"Gymnasium"} year={"2011 september-december"} />
                            <Education school={"Sumgait city secondary school number 11"} year={"2002-2013"} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        {/* ======= Experience ======= */}
                        <div className="exp-wrapper">
                            <h2>Experience</h2>
                            <Experience
                                company={"”Rabitabank” ASC"}
                                position={"1st class operative"}
                                year={"2018-2020"}
                            />
                            <Experience
                                company={"”Gunaybank” ASC"}
                                position={"Operating treasurer"}
                                year={"2016-2018"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume;