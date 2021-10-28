function llamarInformacionMensajes(){
    $.ajax({
        url:"http://localhost:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
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
    let var4 = {

        
        messageText:$("#messageText").val()
        
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://localhost:8080/api/Message/save",
       
        
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
function traerInformaciondos(){
    $.ajax({
        url:"http://localhost:8080/api/Message/"+idMessage,
        type: "GET",
        datatype: "JSON",
        success:function(respuesta){
            console.log(respuesta);
            $("#resultado4").empty();
            pintarRespuestados(respuesta);
        }

    });

}

function pintarRespuestados(respuesta){
    
    let myTable ="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].idMessage+"</td>";
        myTable+="<td>"+respuesta[i].messagetext+"</td>";
       
        myTable+="</tr>";

    }
    myTable+="</table>";
    $("#resultado4").append(myTable);

}
function guardarInformaciondos(){
    let myData={
        idMessage:$("#idMessage").val(),
        messagetext:$("#messagetext").val()
     
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://localhost:8080/api/Message/save",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            $("#idMessage").empty();
            $("#messagetext").val("");
            
            traerInformaciondos();
            alert("se ha guardado el dato")
        }
    });
}
function editarInformaciondos(){
    let myData={
        idMessage:$("#idMessage").val(),
        messagetext:$("#messagetext").val()

        
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://localhost:8080/api/Message/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            $("#idMessage").val("");
            $("#messagetext").val("");
          
            traerInformaciondos();
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
        url:"http://localhost:8080/api/Message/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            traerInformaciondos();
            alert("Se ha Eliminado.")
        }
    });
}