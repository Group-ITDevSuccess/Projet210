import {Link, useMatch, useResolvedPath} from "react-router-dom";

export default  function Navbar(){

    return <nav className="nav">
        <Link to="/" className="site-title">Success-esti</Link>
        <ul>
            <CustomLink to="/" >DashBoard</CustomLink>
            <CustomLink to="/agenda" >Agenda</CustomLink>
            <CustomLink to="/enseignant" >Enseigants</CustomLink>
            <CustomLink to="/etudiant" >Etudiants</CustomLink>
            <CustomLink to="/module" >Modules</CustomLink>
            <CustomLink to="/salle" >Salles</CustomLink>
            <CustomLink to="/cahier" >Cahier de Text</CustomLink>
        </ul>
    </nav>
}

function  CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active": ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}