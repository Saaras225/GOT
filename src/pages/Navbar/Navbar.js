import './navbar.css'
import {Link, useMatch, useResolvedPath} from 'react-router-dom';

const Navbar =()=> {
    return(
        <nav className="nav">
            <Link to="/home" className="site-title">GOT</Link>
            <ul>
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/books">Books</CustomLink>
                <CustomLink to="/formBook">Add Book</CustomLink>
                <CustomLink to="/fav">Favs</CustomLink>

            </ul>
        </nav>
    );
};

function CustomLink({to, children, ...props}){
    const resolvedPath= useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
    <li className={isActive? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
    );
}

export default Navbar
