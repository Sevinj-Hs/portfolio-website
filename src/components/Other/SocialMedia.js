const SocialMedia = () => {
    return (
        <div className="social-media-wrapper">
            <ul>
                <li>
                    <a href="https://www.facebook.com/rgarayev/" target="__blank">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/rufatgarayev/" target="__blank">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </li>
                <li>
                    <a href="/" onClick={(e) => e.preventDefault()}>
                        <i className="fab fa-instagram"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialMedia;