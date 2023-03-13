import { useState, useEffect } from 'react';
import Title from '../Other/Title';
import { Projects } from './ProjectsData';
import Categories from './CategoryList';

const Portfolio = () => {
    const [selectedBtnId, setSelectedBtnId] = useState("all");
    const [data, setData] = useState([]);

    // Categories
    const categories = [
        {
            id: "all",
            title: "All",
        },
        {
            id: "photos",
            title: "Photos",
        },
        {
            id: "gif",
            title: "Gif",
        }
    ];

    // Sorting projects by id
    useEffect(() => {
        Projects.sort((a, b) => (a.id < b.id ? 1 : -1));
    }, []);

    // Sorting projects by category
    useEffect(() => {
        switch (selectedBtnId) {
            case "all":
                setData(Projects);
                break;
            case "photos":
                setData(Projects.filter(project => project.category === "photos"));
                break;
            case "gif":
                setData(Projects.filter(project => project.category === "gif"));
                break;
            default:
                setData(Projects);
        }
    }, [selectedBtnId]);

    return (
        <section id="portfolio">
            <div className="container">
                {/* ======= Title ======= */}
                <div className="row">
                    <Title title={"My Projects"} />
                </div>
                <div className="row">
                    <div className="col-12">
                        {/* ======= Categories ======= */}
                        <div className="categories d-flex">
                            <ul className="d-flex">
                                {
                                    categories.map((category) => {
                                        return (
                                            <Categories
                                                id={category.id}
                                                key={category.id}
                                                title={category.title}
                                                active={selectedBtnId === category.id}
                                                setSelectedBtnId={setSelectedBtnId}
                                            />
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        {/* ======= Projects ======= */}
                        <div className="row">
                            {
                                data.map((project) => {
                                    return (
                                        <div className="col-lg-4 col-md-6" key={project.id}>
                                            <div className="project-item">
                                                <div className="project-img">
                                                    <a href={project.link} target='__blank'>
                                                        <img className="img-fluid" src={project.img} alt="project" />
                                                    </a>
                                                </div>
                                                <div className="title-and-technologies">
                                                    <h5>
                                                        <a href={"/"}>
                                                            {project.title}
                                                        </a>
                                                    </h5>
                                                    <p className="text-center">{project.technologies}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;