import Title from '../Other/Title';
import ProgressBar from './ProgressBar';

const Skills = () => {
    return (
        <section id="skills">
            <div className="container">
                <div className="row">
                    <Title title={"My Skills"} />
                </div>
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="skills-holder">
                            <ProgressBar skill={'C++'} progressPercent={'80%'} progressWidth={'80%'} />
                            <ProgressBar skill={'SQL'} progressPercent={'60%'} progressWidth={'60%'} />
                            <ProgressBar skill={'PHP'} progressPercent={'60%'} progressWidth={'60%'} />
                            <ProgressBar skill={'JavaScript'} progressPercent={'70%'} progressWidth={'70%'} />
                            <ProgressBar skill={'HTML5, CSS3'} progressPercent={'90%'} progressWidth={'90%'} />
                            <ProgressBar skill={'Adobe Photoshop'} progressPercent={'90%'} progressWidth={'90%'} />
                            <ProgressBar skill={'Adobe Illustrator'} progressPercent={'90%'} progressWidth={'90%'} />
                            <ProgressBar skill={'Adobe Premiere'} progressPercent={'70%'} progressWidth={'70%'} />
                            <ProgressBar skill={'UI,UX design'} progressPercent={'70%'} progressWidth={'70%'} />
                            <ProgressBar skill={'AutoCad'} progressPercent={'40%'} progressWidth={'40%'} />
                            <ProgressBar skill={'Microsoft Word'} progressPercent={'90%'} progressWidth={'90%'} />
                            <ProgressBar skill={'Microsoft PowerPoint'} progressPercent={'90%'} progressWidth={'90%'} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;