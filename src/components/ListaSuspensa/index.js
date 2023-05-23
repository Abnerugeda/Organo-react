import "./ListaSuspensa.css"

const ListaSuspensa = (props) => {
    
    
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select value={props.valor} required={props.obrigatorio} onChange={event => props.aoAlterado(event.target.value)}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa