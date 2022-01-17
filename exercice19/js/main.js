$(() => {
    $(".btn").click(() => {
        function reableInput() {
           $("input").prop("disabled", false);
        };
        reableInput();
    });
});