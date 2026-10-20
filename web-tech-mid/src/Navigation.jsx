function Navigation({ onNavigate }){
    const handleClick = (event, page) => {
        event.preventDefault();
        onNavigate(page);
    };

    return <nav>
        <ul className="nav">
            <li><a href="/" onClick={(event) => handleClick(event, "home")}>Home</a></li>
            <li><a href="/about" onClick={(event) => handleClick(event, "about")}>About Us</a></li>
            <li><a href="/services" onClick={(event) => handleClick(event, "services")}>Services</a></li>
            <li><a href="/events" onClick={(event) => handleClick(event, "events")}>Events</a></li>
            <li><a href="/featured" onClick={(event) => handleClick(event, "featured")}>Featured Books</a></li>
            <li><a href="/contact" onClick={(event) => handleClick(event, "contact")}>Contact Us</a></li>
        </ul>

    </nav>
}
export default Navigation;