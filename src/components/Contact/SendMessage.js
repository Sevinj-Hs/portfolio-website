import { useState } from 'react';
import emailjs from 'emailjs-com';

const SendMessage = () => {
    const [nameMoveUp, setNameMoveUp] = useState(false);
    const [emailMoveUp, setEmailMoveUp] = useState(false);
    const [subjectMoveUp, setSubjectMoveUp] = useState(false);
    const [messageMoveUp, setMessageMoveUp] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        if (name !== "" && email !== "" && subject !== "" && message !== "") {
            emailjs.sendForm('gmail', 'portfolio-template0709', e.target, 'user_sebeNjrWNdcdSKTfAfcN8')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });

            setName("");
            setEmail("");
            setSubject("");
            setMessage("");

            setNameMoveUp(false);
            setEmailMoveUp(false);
            setSubjectMoveUp(false);
            setMessageMoveUp(false);

            return true;
        } else {
            let alert = document.querySelector(".form-alert");
            let btnWrapper = document.querySelector("form .btn-wrapper");

            alert.innerText = "Please fill out all fields.";
            btnWrapper.style.transform = "translateY(20px)";

            setTimeout(() => {
                alert.innerText = "";
                btnWrapper.style.transform = "translateY(0px)";
            }, 3000);

            return false;
        }
    }

    return (
        <div className="col-lg-8">
            <form onSubmit={sendEmail}>
                <div className="form-row">
                    <div className="col-lg-6">
                        {/* ======= Name ======= */}
                        <div className="name wrapper">
                            <label className={nameMoveUp ? "move-up" : "form-label"}>Name</label>
                            <input type="text"
                                className="form-control"
                                name="name"
                                spellCheck="false"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                onFocus={() => {setNameMoveUp(true)}}
                                onBlur={(e) => {if(!e.target.value) setNameMoveUp(false)}}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        {/* ======= Email ======= */}
                        <div className="email wrapper">
                            <label className={emailMoveUp ? "move-up-email" : "form-label"}>Email</label>
                            <input type="text"
                                className="form-control"
                                name="email"
                                spellCheck="false"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onFocus={(e) => {setEmailMoveUp(true)}}
                                onBlur={(e) => {if(!e.target.value) setEmailMoveUp(false)}}
                            />
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-12">
                        {/* ======= Subject ======= */}
                        <div className="subject wrapper">
                            <label className={subjectMoveUp ? "move-up" : "form-label"}>Subject</label>
                            <input type="text"
                                className="form-control"
                                name="subject"
                                spellCheck="false"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                onFocus={() => {setSubjectMoveUp(true)}}
                                onBlur={(e) => {if(!e.target.value) setSubjectMoveUp(false)}}
                            />
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-12">
                        {/* ======= Message ======= */}
                        <div className="textarea wrapper">
                            <label className={messageMoveUp ? "move-up" : "form-label"}>Message</label>
                            <textarea
                                className="form-control"
                                name="message"
                                rows="5"
                                spellCheck="false"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onFocus={() => {setMessageMoveUp(true)}}
                                onBlur={(e) => {if(!e.target.value) setMessageMoveUp(false)}}
                            >
                            </textarea>
                        </div>
                    </div>
                </div>
                {/* ======= Alert ======= */}
                <div className="form-alert text-right"></div>
                {/* ======= Button ======= */}
                <div className="btn-wrapper d-flex">
                    <input type="submit" value="Send Message" className="btn" />
                </div>
            </form>
        </div>
    )
}

export default SendMessage;