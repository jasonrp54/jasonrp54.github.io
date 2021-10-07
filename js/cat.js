$(function() {
    console.log('DOM ready'); 

    btnAccion.addEventListener('click', event =>
    {
        event.preventDefault();
        const filter = "Accion";
        console.log(filter);
        if (filter !== '') {
             $("#lResults").empty().hide();
            $.getJSON(`peliculas?clasificacion=${filter}`, function (data) {
                console.log(data);
                let items = [];        
                if (data.length > 0) {
                    $.each(data, function (index,p) {              
                        items.push(`<li data-id='${p.id}'>
                        <a href="#">
                        <img src='${p.imagen}' class="img-fluid" width="345" height="500"/>             
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
    });

    btncomedia.addEventListener('click', event =>
    {
        event.preventDefault();
        const filter = "Comedia";
        console.log(filter);
        if (filter !== '') {
             $("#lResults").empty().hide();
            $.getJSON(`peliculas?clasificacion=${filter}`, function (data) {
                console.log(data);
                let items = [];        
                if (data.length > 0) {
                    $.each(data, function (index,p) {              
                        items.push(`<li data-id='${p.id}'>
                        <a href="#" >
                        <img src='${p.imagen}' width="345" height="500" alt=""/>             
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
    });

    btndocumental.addEventListener('click', event =>
    {
        event.preventDefault();
        const filter = "Documental";
        console.log(filter);
        if (filter !== '') {
             $("#lResults").empty().hide();
            $.getJSON(`peliculas?clasificacion=${filter}`, function (data) {
                console.log(data);
                let items = [];        
                if (data.length > 0) {
                    $.each(data, function (index,p) {              
                        items.push(`<li data-id='${p.id}'>
                        <a href="" >
                        <img src='${p.imagen}' width="345" height="500" alt=""/>             
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
    });

    btndrama.addEventListener('click', event =>
    {
        event.preventDefault();
        const filter = "Drama";
        console.log(filter);
        if (filter !== '') {
             $("#lResults").empty().hide();
            $.getJSON(`peliculas?clasificacion=${filter}`, function (data) {
                console.log(data);
                let items = [];        
                if (data.length > 0) {
                    $.each(data, function (index,p) {              
                        items.push(`<li data-id='${p.id}'>
                        <a href="#" >
                        <img src='${p.imagen}' width="345" height="500" alt=""/>             
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
    });

    $(document).ready(function() {
        $('#lResults li').on('click',function () {
            let id=$(this).attr('data-id');
            console.log('ID:', id);
            parent.location.href="players.html?"+id;
        });
    });

});