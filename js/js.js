$(function() {
console.log('DOM ready');

$(function getparametros() {
    var idx = document.URL.indexOf('?');
    console.log(`idx= ${idx}`);
    var params = new Array();
    if (idx != -1) {
       var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
       console.log(`pairs= ${pairs}`);
       for (var i=0; i<pairs.length; i++) {
           nameVal = pairs[i].split('=');
           params[nameVal[0]] = nameVal[1];
        }
    }
    console.log(`El parametro resubido: ${params}`);
    const filter =pairs;   
    $.getJSON(`peliculas?id=${filter}`, function (data) {
        console.log(`dato de la peli ${data}`);
        let items = [];

        if (data.length > 0) {
            $.each(data, function (index,p) {              
                items.push(`<iframe class="embed-responsive-item" src='${p.url}' frameborder="0" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                ></iframe>`);
            });
            $(items.join()).appendTo('#lResults');
        }
    });   
});

});
    