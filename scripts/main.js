const contactBody = `<div id='landing-div'>
                        <div class='nav-container'>
                            <div class='nav shadow'>
                                <a class='return'>Home</a>
                            </div>
                        </div>
                        <div class='container'>
                            <div class='custom-hr'></div>
                        </div>
                        <div class='contact-container'>
                            <a href="https://github.com/Mamckay">
                                <img class='contact-img' src='./assets/Github.png'/>
                            </a>
                            <a href="https://www.linkedin.com/in/michaelcmckay/">
                                <img class='contact-img' src='./assets/linkedin.png'/>
                            <a/>
                            <a href="https://github.com/Mamckay">
                                <img class='contact-img' src='./assets/Twitter.png'/>
                            <a/>
                            <a class='phone'>
                                <img class='contact-img' src='./assets/phone-flat.png'/>
                                <span class='phone-string'>720-534-7720</span>
                            <a/>
                            <a class='email'>
                                <img class='contact-img' src='./assets/email-icon.png'/>
                                <div class='email-string'>mamckay89@gmail.com</div>
                            <a/>
                        </div>
                    </div>`;

const pageBody = `<div id='landing-div'>
                    <div class='nav-container'>
                        <div class='nav shadow'>
                            <a class='portfolio-link'>
                                Portfolio
                            </a>
                            <span>
                                Michael McKay
                            </span>
                            <a class='contact-link'>
                                Contact
                            </a>
                        </div>
                    </div>
                    <div class='container'>
                        <div class='custom-hr'></div>
                    </div>
                    <p class='quote'> “It is not the mountain we conquer, but ourselves."</p>
                    <div class='container'>
                        <img class='landing-pic dark-wrapper' src="./assets/menormal.jpg" />
                    </div>
                    </div>
                    <div id='portfolio-div'>
                    <img class='arrow-link' src='./assets/arrow.png'></img>
                        <div class='portfolio-container'>
                            <div>
                                <h2> Double Jump </h2>
                                <div class='portfolio-card light-wrapper'>
                                    <a href="https://doublejumps.herokuapp.com/">
                                        <img class='portfolio-img' src='./assets/Doublejump.PNG' />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h2> Helpful </h2>
                                <div class='portfolio-card light-wrapper'>
                                    <a href="https://helpful-client.herokuapp.com/">
                                        <img class='portfolio-img' src='./assets/Helpful.PNG' />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h2> Loggernaut </h2>
                                <div class='portfolio-card light-wrapper'>
                                    <a href="https://helpful-client.herokuapp.com/">
                                        <img class='portfolio-img' src='./assets/comingsoon.jpg' />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h2> Cryptotracker </h2>
                                <div class='portfolio-card light-wrapper'>
                                    <a href="https://doublejumps.herokuapp.com/">
                                        <img class='portfolio-img' src='./assets/comingsoon.jpg' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>`;

function setContact() {
    $('.insert').html(`${contactBody}`);
    $('.return').on('click', event => {
        console.log('hello');
        setLanding();
    });
}


function setLanding() {
    $('.insert').html(`${pageBody}`);
    $('.portfolio-link').on('click', event => {
        document.getElementById('portfolio-div').scrollIntoView({
            behavior: 'smooth'
        });
        event.preventDefault();
    });

    $('.arrow-link').on('click', event => {
        document.getElementById('landing-div').scrollIntoView({
            behavior: 'smooth'
        });
        event.preventDefault();
    });

    $('.contact-link').on('click', event => {
        setContact();
    });
}


function setup() {
    $(document).ready(function () {
        setLanding();
    });
}