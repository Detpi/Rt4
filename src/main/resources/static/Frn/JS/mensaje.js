function llamarInformacionMensajes(){
    $.ajax({
        url:"http://129.151.112.171/api/Message/all",
        type: "GET",
        datatype: "JSON",
        success:function(respuesta){
            console.log(respuesta);
            $("#resultado4").empty();
            pintarRespuestaMensajes(respuesta);
        }

    });

}

function pintarRespuestaMensajes(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].idMessage+"</td>";
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="<td> <button onclick='borrarElementod("+respuesta[i].idMessage+")'>Borrar</button>";
        myTable+= '<td><button onclick="traerInformaciondos('+respuesta[i].idMessage+' )">Editar</button>';
      
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado4").append(myTable);
}

function guardarInformacionMensajes(){
    let myData = {
        idMessage:$("#idMessage+").val(),
        messageText:$("#messageText").val()
        };

        let dataToSend=JSON.stringify(myData);
        $.ajax({
        url:"http://129.151.112.171/api/Message/save",    
        type:'POST',
        data:dataToSend,
        dataType: 'JSON',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(myData),
        
       
        
        success:function() {
            $("#resultado4").empty();
            $("#idMessage").val("");
            $("#messageText").val("");
            

            llamarInformacionMensajes();
            alert("se ha guardado el dato");

       
        }
        });

}
function traerInformaciondos(idMessage){
	$.ajax({    
		url : "http://129.151.112.171/api/Message/"+idMessage,
		
		type : 'GET',
		dataType : 'json',
		contentType: "application/json; charset=utf-8",
  
    success : function(respuesta) {
		console.log(respuesta);
        var item=respuesta;
            $("#idMessage").val(item.idMesaage);
			$("#messageText").val(item.messageText);
			
			
        },
      
        error: function(jqXHR, textStatus, errorThrown) {
              
        }
    });
  
  }

function editarInformaciondos(){
    let myData={
        idMessage:$("#idMessage").val(),
        messageText:$("#messageText").val()
        
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.112.171/api/Message/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            
            $("#idMessage").val("");
            $("#messageText").val("");
            
           
            llamarInformacionMensajes();
            alert("se ha Actualizado")
        }
    });
}
function borrarElementod(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.112.171/api/Message/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            llamarInformacionMensajes();
            alert("Se ha Eliminado.")
        }
    });
}