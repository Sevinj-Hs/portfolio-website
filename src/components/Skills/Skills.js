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
                            <ProgressBar skill={'HTML5, CSS3'} progressPercent={'90%'} progressWidth={'90%'} />
                            <ProgressBar skill={'SCSS, Bootstrap 4'} progressPercent={'90%'} progressWidth={'90%'} />
                            <ProgressBar skill={'Material UI'} progressPercent={'60%'} progressWidth={'60%'} />
                            <ProgressBar skill={'Javascript, Typescript, JQuery'} progressPercent={'70%'} progressWidth={'70%'} />
                            <ProgressBar skill={'React (Redux, Context API)'} progressPercent={'70%'} progressWidth={'70%'} />
                            <ProgressBar skill={'Next Js'} progressPercent={'60%'} progressWidth={'60%'} />
                            <ProgressBar skill={'Github'} progressPercent={'80%'} progressWidth={'80%'} />
                            <ProgressBar skill={'Figma'} progressPercent={'70%'} progressWidth={'70%'} />
                            <ProgressBar skill={'Photoshop'} progressPercent={'50%'} progressWidth={'50%'} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;