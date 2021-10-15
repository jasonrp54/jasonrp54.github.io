$(function() {
    console.log('DOM ready'); 
    const APIKEY = '6a04cc40aa6af771ca69ae0125bd3086';
    const BASEURL ='https://api.themoviedb.org/3/'; 

    const url = `${BASEURL}discover/movie?sort_by=popularity.desc&api_key=${APIKEY}`;
    console.log(url);
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
        }
        else
        {
            $('<p>¡No se encontraron datos!</p>').appendTo('#lResults');
        }
            

    });

   
$('form').on('submit', function (event) {
   event.preventDefault();
   console.log('submiting...');
   
   const filter =$('#iSearch').val();  

   if (filter !== '') {
    $("#lResults").empty().hide();
    const APIKEY = '6a04cc40aa6af771ca69ae0125bd3086';
    const BASEURL ='https://api.themoviedb.org/3/'; 
    const url = `${BASEURL}search/movie?api_key=${APIKEY}&language=en-US&query=${filter}&page=1&include_adult=false`;
    console.log(url);
  
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
            swal ( "Info" ,  "No se encontro pelicula con el nombre a buscar!" ,  "info" ); 
            console.log('Error');
        }           

    });
   }
   else
   {
       swal ( "Info" ,  "Digite el nombre de la pelicula!" ,  "info" ); 
      
   }

  });
 
$(document).ready(function() {
    $('#lResults').on('click','div',function () {
        let id=$(this).attr('data-id');
        console.log('ID:', id);
        parent.location.href="players.html?"+id;
    });
});


});