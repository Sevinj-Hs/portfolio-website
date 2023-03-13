const Education = ({ school, specialty, year }) => {
    return (
        <div className="edu-item item">
            <div className="top d-flex">
                <h4>{school}</h4>
                <span>{year}</span>
            </div>
            <div className="bottom">
                <h6>{specialty}</h6>
            </div>
        </div>
    )
}


export default Education;