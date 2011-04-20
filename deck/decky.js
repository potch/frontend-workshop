(function() {
    var $slides = $("section"),
        numSlides = $slides.length,
        current = 1;

    $slides.each(function(n) {
        $(this).attr("id", n+1);
    });
    $("body").delegate("section", "click", next);
    $(document).keydown(function(e) {
        switch (e.which) {
            case 37:
            case 38:
                prev();
                break;
            case 39:
            case 40:
                next();
                break;
            e.preventDefault();
        }
    });

    function next() {
        goto(current+1);
    }

    function prev() {
        goto(current-1);
    }

    function goto(n) {
        if (n !== current) {
            n = n < 1 ? 1 : (n > numSlides ? numSlides : n);
            window.location.hash = "#"+n;
            current = n;
        }
    }

    $(window).bind("hashchange", function() {
        var newSlide = parseInt(window.location.hash.substr(1), 10);
        if (newSlide && newSlide != current) {
            goto(newSlide);
        }
    });
})();
