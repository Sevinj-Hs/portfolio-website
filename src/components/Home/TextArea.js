import Typical from 'react-typical';

const TextArea = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="text-main-wrapper" style={{ zIndex: 7 }}>
                    <div className="text-secondary-wrapper">
                        <h1>Welcome</h1>
                        <h4>
                            <span>I am a {""}</span>
                            <Typical
                                steps={['Web Designer', 2000, 'Web Developer', 1500]}
                                loop={Infinity}
                                wrapper="b"
                            />
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextArea;