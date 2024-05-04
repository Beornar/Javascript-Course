import propTypes from 'prop-types';

const Header = ({ title, navElements }) => {
    return (
        <header className="app-level-header">
            <div>
                <h1>{title}</h1>
            </div>
            <div className="app-level-navbar">
                <nav>
                    <ul>
                        {navElements.map(element => {
                            return <li key={element}><a href="#">{element}</a></li>
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: "Default Title",
    navElements: ["Nav1", "Nav2", "Nav3"]
}
Header.propTypes = {
    title: propTypes.string.isRequired,
    navElements: propTypes.arrayOf(propTypes.string).isRequired
}
export default Header;