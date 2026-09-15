function Homepage() {
    return (
        <>
            <div className="homepage">

            <div className="homepage__hero">
                <h1 id="home_page_title">
                    UNBLOCKED AURA GAMES
                </h1>

                <h3>
                    Find all the best unblocked games here!
                </h3>
            </div>
            
            <div className="homepage__search">
              <input
                 type="text"
                  placeholder="Search for a game..."
              />
             <button>
               Search
             </button>
            </div>

          {/* HERO DATA */}
            <div className="homepage__description">
                <p className="home_page_description">
                    Play the best online games directly in your browser.
                    No downloads, no restrictions.
                </p>

                <p className="hero__description"> 
                    Discover and play thousands of games directly in your
                    browser. No downloads. No limits. Just play. 
                </p>
            </div>

          {/* GENERAL SECTIONS */}
            <div className="hero__buttons">
                <button className="hero__button">
                    Browse Games
                </button>

                <button className="hero__button">
                    Hot Games
                </button>

                <button className="hero__button">
                    Driving Games
                </button>

                <button className="hero__button">
                    Popular Games
                </button>

                <button className="hero__button">
                    Skill Games
                </button>
            </div>

            </div>
        </>
    );
}

export default Homepage;