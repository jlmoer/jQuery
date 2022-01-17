$(() =>  {
    $(".btn").click(() => {
        function changeSquareColor(){
            $("#square").css("background-color", "red")
        };
        changeSquareColor();
    });
});