

function traerInformacionuno(){
    $.ajax({
        url:"http://129.151.112.171/api/Client/all",
        type: "GET",
        datatype: "JSON",
        success:function(respuesta){
            console.log(respuesta);
            $("#resultado").empty();
            pintarRespuestauno(respuesta);
        }

    });

}



function pintarRespuestauno(respuesta){

    let myTable ="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].idClient+"</td>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+= '<td><button onclick="llamarInformacionuno('+respuesta[i].idClient+' )">Editar</button>';
        myTable+="<td> <button onclick='borrarElementouno("+respuesta[i].idClient+")'>Borrar</button>";
        
        myTable+="</tr>";

    }
    myTable+="</table>";
    $("#resultado").append(myTable);

}
function guardarInformacionuno(){
    let myData={
        idClient:$("#idClient").val(),
        email:$("#email").val(),
        password:$("#password").val(),
        name:$("#name").val(),
        age:$("#age").val()
      
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.112.171/api/Client/save",
        type:"POST",
        data:dataToSend,
        datatype:"JSON",
        contentType: "application/json; charset=utf-8",
        success:function(){
            $("#resultado").empty();
            $("#idClient").val(),
            $("#email").val(),
            $("#password").val(),
            $("#name").val("");
            $("#age").val("");
            traerInformacionuno();
            alert("se ha guardado el dato")
        }
    });
}
function llamarInformacionuno (idclient){
	$.ajax({    
		url : "http://129.151.112.171/api/Client/"+idclient,
		
		type : 'GET',
		dataType : 'json',
		contentType: "application/json; charset=utf-8",
  
    success : function(respuesta) {
		console.log(respuesta);
        var item=respuesta;
			$("#idClient").val(item.idClient);
            $("#email").val(item.email);
            $("#password").val(item.password),
			$("#name").val(item.name);
			$("#age").val(item.age);
			
        },
      
        error: function(jqXHR, textStatus, errorThrown) {
              
        }
    });
  
  }
function editarInformacionuno(){
    let myData={
        idClient:$("#idClient").val(),
        email:$("#email").val(),
        password:$("#password").val(),
        name:$("#name").val(),
        age:$("#age").val()
    
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.112.171/api/Client/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#email").val("");
            $("#password").val(),
            $("#name").val("");
            $("#age").val("");
            traerInformacionuno();
            alert("se ha Actualizado")
        }
    });
}
function borrarElementouno(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.112.171/api/Client/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionuno();
            alert("Se ha Eliminado.")
        }
    });
}


