const Categories = ({ id, title, active, setSelectedBtnId }) => {
    return (
        <li className={active ? "active-btn" : ""} onClick={() => setSelectedBtnId(id)}>
            <button>{title}</button>
            <hr />
        </li>
    );
}

export default Categories;