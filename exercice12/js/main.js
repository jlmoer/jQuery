$(() => {
    $(".btn").click(() => {
        function changeWidth(){
            $("#square").css("width", "500px");
        };
        changeWidth();
    });
});