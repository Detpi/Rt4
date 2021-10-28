function traerInformacionReservacion(){
    $.ajax({
        url:"http://129.151.112.171:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaReservacion(respuesta);
        }
    });
}

function  pintarRespuestaReservacion(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="<td>"+respuesta[i].status+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+respuesta[i].id+")'>Borrar</button>";
        myTable+= '<td><button onclick="llamarInformacionCategorias('+respuesta[i].id+' )">Editar</button>';
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado5").html(myTable);
}

function guardarInformacionReservacion(){
    let var4 = {
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDated").val(),
        status:$("#status").val()
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://129.151.112.171:8080/api/Reservation/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}