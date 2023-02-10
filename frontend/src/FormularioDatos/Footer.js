import React from "react";
import './footer.css';

function Footer () {
    return(
        <div class="footer-basic">
            <footer>
                <div class="social">
                    <a href="https://www.instagram.com/nicodelaw/">
                        <i class="icon ion-social-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/nicol%C3%A1s-pardo-vera-428a81158/">
                        <i class="icon ion-social-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/nicodelaw">
                        <i class="icon ion-social-twitter"></i>
                    </a>
                    <a href="https://github.com/nicodelaw">
                        <i class="icon ion-social-github"></i>
                    </a>
                </div>
                <p class="copyright">nicodelaw © 2023</p>
            </footer>
        </div>
    )
}

export { Footer }