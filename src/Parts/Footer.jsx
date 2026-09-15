function Footer() {

    return (
        <footer className="footer">
            <div className="footer__container">

                {/*GAMES*/}
                <div className="footer__games">
                    <h2>Unblocked Aura Games</h2>
                    <p>
                        Play the best unblocked games online!
                    </p>
                  </div>

                {/*ABOUT*/}
                <div className="footer__about">
                    <h3>About</h3>
                    <p>
                        Learn more about our platform and the games we offer.
                    </p>
                </div>

                {/*BOTTOM SECTION*/}
                <div className="footer__bottom">
                    <p>
                        © 2026 Unblocked Aura Games. All rights reserved.
                    </p>
                </div>

                {/*SOCIAL MEDIA*/}
                    <div className="footer__socials">
                        <a href="https://www.instagram.com/unblockedaura">Instagram</a>
                        <a href="https://www.facebook.com/unblockedaura">Facebook</a>
                    </div>
                </div>
        </footer>
    );
}

export default Footer;