import "../sass/components/tags.sass"

const Tags = ({ items, className }) => {
    return (
        <ul className={`tagsList ${className || ""}`}>
            {items.map((item, index) => (
                <li className="tagItem" key={index}>{item}</li>
            ))}
        </ul>
    )
}

export default Tags