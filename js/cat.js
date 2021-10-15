$(function() {
    console.log('DOM ready'); 

    btnAccion.addEventListener('click', event =>
    {
        event.preventDefault();
        const filter = "En cines";
        console.log(filter);
        const APIKEY = '6a04cc40aa6af771ca69ae0125bd3086';
        const BASEURL ='https://api.themoviedb.org/3/'; 
    
        const url = `${BASEURL}discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${APIKEY}`;
        console.log(url);

        if (filter !== '') {
            $("#lResults").empty().hide();
            fetch(url)
           .then(Response => Response.json())
           .then(({results}) => {
            console.log(results);
            let items = [];
            if (results.length > 0) {
                $.each(results, function (index,p) {              
                items.push(`               
                <div class="col-12 col-md-4 col-lg-3 forma" data-id='${p.id}'>      
                <a href="#">            
                <img id="imagenli" src='https://image.tmdb.org/t/p/w300_and_h450_bestv2${p.poster_path}'  class="img-fluid"/>
                </a> 
                <h4>'${p.title}'</h4>  
                <h6>${p.overview}</h6>                       
                </div>`);
            });
            $(items.join()).appendTo('#lResults');
            $("#lResults").slideDown(600);
        }
        else
        {
            $('<p>¡No se encontraron datos!</p>').appendTo('#lResults');
        }
            

       });

        }        
    });

    btncomedia.addEventListener('click', event =>
    {
        event.preventDefault();
        const filter = "Comedia";
        console.log(filter);
        const APIKEY = '6a04cc40aa6af771ca69ae0125bd3086';
        const BASEURL ='https://api.themoviedb.org/3/'; 
    
        const url = `${BASEURL}discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${APIKEY}`;
        console.log(url);

        if (filter !== '') {
            $("#lResults").empty().hide();
            fetch(url)
           .then(Response => Response.json())
           .then(({results}) => {
            console.log(results);
            let items = [];
            if (results.length > 0) {
                $.each(results, function (index,p) {              
                items.push(`               
                <div class="col-12 col-md-4 col-lg-3 forma" data-id='${p.id}'>      
                <a href="#">            
                <img id="imagenli" src='https://image.tmdb.org/t/p/w300_and_h450_bestv2${p.poster_path}'  class="img-fluid"/>
                </a> 
                <h4>'${p.title}'</h4>  
                <h6>${p.overview}</h6>                       
                </div>`);
            });
            $(items.join()).appendTo('#lResults');
            $("#lResults").slideDown(600);
        }
        else
        {
            $('<p>¡No se encontraron datos!</p>').appendTo('#lResults');
        }
            

       });

        }         
    });

    btndocumental.addEventListener('click', event =>
    {
        event.preventDefault();
        const filter = "Documental";
        console.log(filter);
        const APIKEY = '6a04cc40aa6af771ca69ae0125bd3086';
        const BASEURL ='https://api.themoviedb.org/3/'; 
    
        const url = `${BASEURL}discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc&api_key=${APIKEY}`;
        console.log(url);

        if (filter !== '') {
            $("#lResults").empty().hide();
            fetch(url)
           .then(Response => Response.json())
           .then(({results}) => {
            console.log(results);
            let items = [];
            if (results.length > 0) {
                $.each(results, function (index,p) {              
                items.push(`               
                <div class="col-12 col-md-4 col-lg-3 forma" data-id='${p.id}'>      
                <a href="#">            
                <img id="imagenli" src='https://image.tmdb.org/t/p/w300_and_h450_bestv2${p.poster_path}'  class="img-fluid"/>
                </a> 
                <h4>'${p.title}'</h4>  
                <h6>${p.overview}</h6>                       
                </div>`);
            });
            $(items.join()).appendTo('#lResults');
            $("#lResults").slideDown(600);
        }
        else
        {
            $('<p>¡No se encontraron datos!</p>').appendTo('#lResults');
        }
            

       });

        }    
    });

    btndrama.addEventListener('click', event =>
    {
        event.preventDefault();
        const filter = "Mejores Dramas";
        console.log(filter);

        const APIKEY = '6a04cc40aa6af771ca69ae0125bd3086';
        const BASEURL ='https://api.themoviedb.org/3/'; 
    
        const url = `${BASEURL}discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&api_key=${APIKEY}`;
        console.log(url);

        if (filter !== '') {
            $("#lResults").empty().hide();
            fetch(url)
           .then(Response => Response.json())
           .then(({results}) => {
            console.log(results);
            let items = [];
            if (results.length > 0) {
                $.each(results, function (index,p) {              
                items.push(`               
                <div class="col-12 col-md-4 col-lg-3 forma" data-id='${p.id}'>      
                <a href="#">            
                <img id="imagenli" src='https://image.tmdb.org/t/p/w300_and_h450_bestv2${p.poster_path}'  class="img-fluid"/>
                </a> 
                <h4>'${p.title}'</h4>  
                <h6>${p.overview}</h6>                       
                </div>`);
            });
            $(items.join()).appendTo('#lResults');
            $("#lResults").slideDown(600);
        }
        else
        {
            $('<p>¡No se encontraron datos!</p>').appendTo('#lResults');
        }
            

       });

        }        
        
    });

// document.addEventListener('click', event =>
// {
//     $('#lResults li').on('click',function () {
//         let id=$(this).attr('data-id');
//         console.log('ID:', id);
//         parent.location.href="players.html?"+id;
//     });
// });

    $(document).ready(function() {
        $('#lResults').on('click','div',function () {
            let id=$(this).attr('data-id');
            console.log('ID:', id);
            parent.location.href="players.html?"+id;
        });
    });

});