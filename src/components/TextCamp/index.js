import "./TextCamp.css"

const TextCamp = (props) => {
    const placeholderModificado = `${props.placeholder}...`

    return (
        <div className="campo-text">
            <label>{props.label}</label>
            <input placeholder={placeholderModificado}/>
        </div>
    )
}
export default TextCamp