$(() => {
    $(".btn").click(() => {
        function changeFontSize() {
            $("#text").css("font-size", "50px");
        };
        changeFontSize();
    });
});