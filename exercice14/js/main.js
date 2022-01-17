$(() => {
    $(".btn").click(() => {
        function changeFontPosition() {
            $("#text").attr("class", "float-right");
        };
        changeFontPosition();
    });
});