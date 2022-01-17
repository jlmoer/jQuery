$(() => {
    $(".btn").click(() => {
        function changeFontPosition() {
            $("#text").addClass("float-right");
        };
        changeFontPosition();
    });
});