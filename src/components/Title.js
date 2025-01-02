import "../sass/components/title.sass"

const Title = ({ children, className }) => {
    return (
        <h2 className={`title ${className || ""}`}>
            {children}
        </h2>
    )
}

export default Title