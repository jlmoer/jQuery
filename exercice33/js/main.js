$(".btn").click(() => {
    $.ajax({
        url: 'https://restcountries.com/v3.1/name/france',
        success: function(data, statuts, response) {
            console.log('#2');
            $("#country").html(data[0].name.common);
            $("#capital").html(data[0].capital[0]);
        }
    });

});

console.log('#3');