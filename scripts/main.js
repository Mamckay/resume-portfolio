function setup() {
    $(document).ready(function () {
        // $('.portfolio-button').on('click', event => {
        //     document.getElementById('portfolio-station').scrollIntoView({
        //         behavior: 'smooth'
        //     });
        //     event.preventDefault();
        // });

        $(document).ready(function () {
            $('#portfolio-button').on('change', event => {
                console.log(document.getElementById('portfolio-button').value);

                if (document.getElementById('portfolio-button').value === 'skills') {
                    window.scrollTo(0, window.screen.availHeight - 100);
                    event.preventDefault();
                }
                else if (document.getElementById('portfolio-button').value === 'portfolio') {
                    window.scrollTo(0, window.screen.availHeight - 100);
                    event.preventDefault();
                }
                else if (document.getElementById('portfolio-button').value === 'home') {
                    window.scrollTo(0, 0);
                    event.preventDefault();
                }
            });
        });



    });
}