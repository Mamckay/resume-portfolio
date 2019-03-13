function setup() {
    $(document).ready(function () {
        // $('.portfolio-button').on('click', event => {
        //     document.getElementById('portfolio-station').scrollIntoView({
        //         behavior: 'smooth'
        //     });
        //     event.preventDefault();
        // });

        $(document).ready(function () {
            $('.portfolio-button').on('click', event => {
                window.scrollTo(0, window.screen.height);
                event.preventDefault();
            });
        });

    });
}