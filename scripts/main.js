function setup() {
    $(document).ready(function () {
        // $('.portfolio-button').on('click', event => {
        //     document.getElementById('portfolio-station').scrollIntoView({
        //         behavior: 'smooth'
        //     });
        //     event.preventDefault();
        // });

        $(document).ready(function () {
            $('#portfolio-button').on('click', event => {
                console.log(document.getElementById("nav-link").style.display);

                if (document.getElementById("nav-link").style.display === "flex") {
                    document.getElementById("nav-link").style.display = "none";
                } else {
                    document.getElementById("nav-link").style.display = "flex";
                    document.getElementById("nav-link").style.flexDirection = "column";
                    document.getElementById("nav-link").style.position = "fixed";
                }

                // if (document.getElementById('portfolio-button').value === 'skills') {
                //     window.scrollTo(0, $('.skills-title').position().top - 50);
                //     event.preventDefault();
                // }
                // else if (document.getElementById('portfolio-button').value === 'portfolio') {
                //     window.scrollTo(0, $('.portfolio-title').position().top - 50);
                //     event.preventDefault();
                //     $
                //     // document.getElementById('portfolio-station').scrollIntoView({
                //     //     behavior: 'smooth'
                //     // });
                // }
                // else if (document.getElementById('portfolio-button').value === 'home') {
                //     window.scrollTo(0, 0);
                //     event.preventDefault();
                // }
            });
            $('#home').on('click', event => {
                window.scrollTo(0, 0);
            })
            $('#skills').on('click', event => {
                window.scrollTo(0, $('.skills-title').position().top - 50);
            })
            $('#portfolio').on('click', event => {
                window.scrollTo(0, $('.portfolio-title').position().top - 50);
            })
        });



    });
}