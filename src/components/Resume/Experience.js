const Experience = ({ company, position, year }) => {
    return (
        <div className="exp-item item">
            <div className="top d-flex">
                <h4>{company}</h4>
                <span>{year}</span>
            </div>
            <div className="bottom">
                <h6>{position}</h6>
            </div>
        </div>
    )
}


export default Experience;