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
    const APIKEY = '6a04cc40aa6af771ca69ae0125bd3086';
    const BASEURL ='https://api.themoviedb.org/3/'; 

    const url = `${BASEURL}movie/${filter}/videos?api_key=${APIKEY}&language=en-US&page=1`;
    console.log(url);
     fetch(url)
    .then(Response => Response.json())
    .then(({results}) => {
        console.log(results);
        let items = [];
        if (results.length > 0) {   
                $.each(results, function (index,p) {                           
                     items.push(`<iframe class="embed-responsive-item" src='https://www.youtube.com/embed/${p.key}' frameborder="0" title="YouTube video player" frameborder="0" 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                     ></iframe>`);      
                });
            $(items.join()).appendTo('#lResults');
        }
        else
        {
            $('<p>¡No se encontraron datos!</p>').appendTo('#lResults');
        }
            

    });

    // $.getJSON(`peliculas?id=${filter}`, function (data) {
    //     console.log(`dato de la peli ${data}`);
    //     let items = [];

    //     if (data.length > 0) {
    //         $.each(data, function (index,p) {              
    //             items.push(`<iframe class="embed-responsive-item" src='${p.url}' frameborder="0" title="YouTube video player" frameborder="0" 
    //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
    //             ></iframe>`);
    //         });
    //         $(items.join()).appendTo('#lResults');
    //     }
    // });   
});

});
    