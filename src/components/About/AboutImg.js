import MyImg from '../../assets/img/other/sevinc.jpeg';

const AboutImg = () => {
    return (
        <div className="my-img-wrapper">
            <div className="my-img-wrapper2">
                <img className="img-fluid" src={MyImg} alt="Sevinj" />
            </div>
        </div>
    )
}

export default AboutImg;