function setup() {
    $(document).ready(function () {
        $('.portfolio-button').on('click', event => {
            document.getElementById('portfolio-station').scrollIntoView({
                behavior: 'smooth'
            });
            event.preventDefault();
        });


    });
}