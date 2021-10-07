$(function() {
    console.log('DOM ready'); 
    $.getJSON('peliculas', function (data) {
        console.log(data);
        let items = [];

        if (data.length > 0) {
            $.each(data, function (index,p) {              
                items.push(`
                <li data-id='${p.id}'>       
                <a href="#">        
                <img id="imagenli" src='${p.imagen}' width="345" height="500"/>
                </a>
                <p>${p.nombre} <br>
                Director: ${p.director} <br>
                <small>${p.clasificacion}</small>
                </p>  
                </li>`);
            });
            $(items.join()).appendTo('#lResults');
            $("#lResults").slideDown(600);
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
   console.log(`Search: ${filter}`);

   if (filter !== '') {
    $("#lResults").empty().hide();
    $.getJSON(`peliculas?nombre_like=${filter}`, function (data) {
        console.log(data);
        let items = [];

        if (data.length > 0) {
            $.each(data, function (index,p) {              
                items.push(`<li data-id='${p.id}'>
                <a href="#">
                <img id="imagenli" src='${p.imagen}' width="345" height="500" alt="" class="img-fluid"/>             
                <p>${p.nombre}
                <br>
                Director: ${p.director}
                <br>
                <small>${p.clasificacion}</small>
                </p>
                </a>                               
                </li>`);
            });
            $(items.join()).appendTo('#lResults');
            $("#lResults").slideDown(600);
        }
        else
        {
            swal ( "Error" ,  "No se encontrarón datos!" ,  "error" ); 
           
        }
    });

   }
   else
   {
       swal ( "Info" ,  "Digite el nombre de la pelicula!" ,  "info" ); 
      
   }

  });
$(document).ready(function() {
    $('#lResults li').on('click',function () {
        let id=$(this).attr('data-id');
        console.log('ID:', id);
        parent.location.href="players.html?"+id;
    });
});


});