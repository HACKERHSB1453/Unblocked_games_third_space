
import { useState } from "react";


{/* FEATURED GAMES */}
const featuredgames = [
  {
    id: 1,
    name: "Snow Rider 3D",
    category: "Driving",
    image: "/games/game1.jpg",
  },

  {
    id: 2,
    name: "Slope",
    category: "Skill",
    image: "/games/game2.jpg",
  },

  {
    id: 3,
    name: "Moto X3M",
    category: "Driving",
    image: "/games/game3.jpg",
  },

  {
    id: 4,
    name: "Drift Hunters",
    category: "Driving",
    image: "/games/drift-hunters.jpg",
  },

  {
    id: 5,
    name: "1v1.LOL",
    category: "Shooting",
    image: "/games/1v1-lol.jpg",
  },
];


{/* HOT GAMES */}
const hotgames = [
  {
    id: 1,
    name: "Snow Rider 3D",
    category: "Driving",
    image: "/games/game1.jpg",
  },

  {
    id: 2,
    name: "Slope",
    category: "Skill",
    image: "/games/game2.jpg",
  },

  {
    id: 3,
    name: "Moto X3M",
    category: "Driving",
    image: "/games/game3.jpg",
  },

  {
    id: 4,
    name: "Drift Hunters",
    category: "Driving",
    image: "/games/drift-hunters.jpg",
  },

  {
    id: 5,
    name: "1v1.LOL",
    category: "Shooting",
    image: "/games/1v1-lol.jpg",
  },
];


function Homepage() {

    const [recentGames, setRecentGames] = useState([]);


    function playGame(game) {

        setRecentGames((currentGames) => {

            const filteredGames = currentGames.filter(
                (item) => item.id !== game.id
            );

            return [game, ...filteredGames].slice(0, 5);
        });

    }


    return (
        <div className="homepage">


            {/* HERO */}
            <div className="homepage__hero">

                <h1 id="home_page_title">
                    UNBLOCKED AURA GAMES
                </h1>

                <h3>
                    Find all the best unblocked games here!
                </h3>

            </div>


            {/* SEARCH */}
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


            {/* FEATURED GAMES */}
            <section className="games-section">

                <h2>
                    Featured Games
                </h2>

                <div className="games-grid">

                    {featuredgames.map((game) => (

                        <div className="game-card" key={game.id}>

                            <img
                                src={game.image}
                                alt={game.name}
                            />

                            <h3>
                                {game.name}
                            </h3>

                            <p>
                                {game.category}
                            </p>

                            <button onClick={() => playGame(game)}>
                                Play Now
                            </button>

                        </div>

                    ))}

                </div>

            </section>


            {/* HOT GAMES */}
            <section className="games-section">

                <h2>
                    Hot Games
                </h2>

                <div className="games-grid">

                    {hotgames.map((game) => (

                        <div className="game-card" key={game.id}>

                            <img
                                src={game.image}
                                alt={game.name}
                            />

                            <h3>
                                {game.name}
                            </h3>

                            <p>
                                {game.category}
                            </p>

                            <button onClick={() => playGame(game)}>
                                Play Now
                            </button>

                        </div>

                    ))}

                </div>

            </section>


            {/* RECENTLY PLAYED */}
            {recentGames.length > 0 && (

                <section className="games-section">

                    <h2>
                        Recently Played
                    </h2>

                    <div className="games-grid">

                        {recentGames.map((game) => (

                            <div className="game-card" key={game.id}>

                                <img
                                    src={game.image}
                                    alt={game.name}
                                />

                                <h3>
                                    {game.name}
                                </h3>

                                <p>
                                    {game.category}
                                </p>

                                <button onClick={() => playGame(game)}>
                                    Play Again
                                </button>

                            </div>

                        ))}

                    </div>

                </section>

            )}


        </div>
    );
}
