/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const ButtonComponent = ({to, label}) => {
    return (
        <Link to={to}>
            <button style={btn}>{label}</button>
        </Link>
    )
}

export default ButtonComponent

const btn = {
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    width: '300px',
    height: '70px',
    marginBottom: '50px',
    fontSize: '20px'
}