import Navigation from "./Navigation";

function Header({ onNavigate }){
    return<header className="header">
        <h1>Bright Future Library</h1>
        <p>This library gives you books for you to have a bright future.</p>
        <Navigation onNavigate={onNavigate} />
    </header>
}
export default Header;