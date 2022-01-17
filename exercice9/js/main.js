$(() =>  {
    $(".btn").click(() => {
        function addHiddenText(){
            $("#text").css("display", "flex")
        };
        addHiddenText();
    });
});