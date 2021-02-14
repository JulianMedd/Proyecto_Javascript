let HTMLCard = ""

$.ajax({
    url: "assent/js/api.json",
    dataType: "json",
    success: function(data){
        $.each(data, function(i){
            HTMLCard += `<article class="producto">
                            <div class="img">
                                <img src="${data[i].image}" alt="">
                            </div>
                            <h3>${data[i].nombreProducto}</h3>
                            <p>${data[i].descripcion}</p>
                            <p class="producto__precio">${data[i].valorInicial}</p>
                            <input type="button" class="btn" id="${data[i].idProducto}" value="OFRECER MAS">
                        </article>`
        })
        $("#productos").html(HTMLCard)
    },
    error: function(){
        HTMLCard = `<div> 
                        <h4>El contenido no está disponible.</h4> 
                        <h5>Intenta en unos minutos, por favor.</h5>
                    </div>`
         $("#productos").html(HTMLCard)
    }
})

$(window).ready(function(){
    $("#productos").fadeIn();
})
