import { NavLink } from "react-router-dom";

export default function MenuLink({ to, text }) {
    return (
        <NavLink to={to} style={({ isActive }) => ({ 
            color: isActive ? '#2B6CB0' : '#1A202C',
            fontWeight: isActive ? 'bold' : 'normal',
        })} >
            {text}
        </NavLink>
    )
}