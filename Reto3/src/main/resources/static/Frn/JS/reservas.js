function traerInformacionReservacion(){
    $.ajax({
        url:"http://129.151.112.171/api/Reservation/all",
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
        myTable+="<td> <button onclick='borrarElementosReservacion("+respuesta[i].idReservation+")'>Borrar</button>";
        myTable+= '<td><button onclick="llamarInformacionReservacion('+respuesta[i].idReservation+' )">Editar</button>';
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado5").html(myTable);
}

function guardarInformacionReservacion(){
    let myData={
        
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        status:$("#status").val()
    };

    let dataToSend=JSON.stringify(myData);
        $.ajax({
        url:"http://129.151.112.171/api/Reservation/save",
        type:"POST",
        data:dataToSend,
        datatype:"JSON",
        contentType: "application/json; charset=utf-8",
        success:function(){
            $("#resultado").empty();
            $("#startDate").val("");
            $("#devolutionDate").val("");
            $("#status").val("");
            traerInformacionReservacion();
            alert("se ha guardado el dato");
        }
    });
}
function llamarInformacionReservacion (idReservation){
	$.ajax({    
		url : "http://129.151.112.171/api/Reservation/"+idReservation,
		
		type : 'GET',
		dataType : 'json',
		contentType: "application/json; charset=utf-8",
  
    success : function(respuesta) {
		console.log(respuesta);
        var item=respuesta;
            $("#idReservation").val(item.idReservation);
            $("#startDate").val(item.startDate);
			$("#devolutionDate").val(item.devolutionDate);
			$("#status").val(item.status);
			
        },
      
        error: function(jqXHR, textStatus, errorThrown) {
              
        }
    });
  
  }
function editarInformacionReservacion(){
    let myData={
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        status:$("#status").val()
        
    
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.112.171/api/Reservation/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado5").empty();
            $("#idReservation").val("");
            $("#startDate").val("");
            $("#devolutionDate").val("");
            $("#status").val("");
           
            traerInformacionReservacion();
            alert("se ha Actualizado")
        }
    });
}
function borrarElementosReservacion(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.112.171/api/Reservation/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionReservacion();
            alert("Se ha Eliminado.")
        }
    });
}


            
           
        

