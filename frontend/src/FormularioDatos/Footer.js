import React from "react";
import './footer.css';

function Footer () {
    return(
        <div class="footer-basic">
            <footer>
                <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-linkedin"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-github"></i></a></div>
                <p class="copyright">nicodelaw © 2023</p>
            </footer>
        </div>
    )
}

export { Footer }