
function Navbar() {
    return (
        <nav className="navbar">

            {/* LOGO / BRAND */}
            <div className="navbar__brand">
                <h2>Unblocked Aura Games</h2>
            </div>

            {/* NAVIGATION LINKS */}
            <div className="navbar__links">
                <a href="#best-games">Best Games</a>
                <a href="#trending">Trending</a>
                <a href="#driving-games">Driving Games</a>
                <a href="#other">Other</a>
            </div>

            {/* SEARCH */}
            <div className="navbar__search">
                <button>Search</button>  
            </div>

        </nav>
    );
}

export default Navbar;

