const ProgressBar = ({ skill, progressPercent, progressWidth }) => {
    return (
        <div className="skill-item">
            <div className="skill-title-and-percent d-flex">
                <h6>{skill}</h6>
                <span>{progressPercent}</span>
            </div>
            <div className="bar-holder">
                <div className="bar" style={{width: progressWidth}}></div>
            </div>
        </div>
    );
}


export default ProgressBar;