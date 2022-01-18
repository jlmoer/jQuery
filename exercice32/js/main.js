$(".btn").click(() => {
    $.ajax({
        url: 'https://restcountries.com/v3.1/name/france',
        success: function(data, statuts, response) {
            console.log('#2');
            console.log(data[0].name);
            console.log(data[0].capital);
        }
    });

});

console.log('#3');