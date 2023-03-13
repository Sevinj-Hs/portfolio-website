import Title from '../Other/Title';
import { ContactItems } from './ContactItems';
import SendMessage from './SendMessage';

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                {/* ======= Title ======= */}
                <div className="row">
                    <Title title={"Contact"} />
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        {/* ======= Contact Items ======= */}
                        <ul className="contact-items">
                            {
                                ContactItems.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <h6 className="d-flex justify-content-center">
                                                {item.icon}
                                                <span>{item.content}</span>
                                            </h6>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>

                    {/* ======= Message ======= */}
                    <SendMessage />
                </div>
            </div>
        </section>
    )
}

export default Contact;