$(".nav-button").on("mouseenter", event => {
    $(event.currentTarget).animate({
        fontSize: "35px"
    }, 100);
}).on("mouseleave", event => {
    $(event.currentTarget).animate({
        fontSize: "30px"
    }, 100);
});