function traerInformacionCategorias(){
    $.ajax({
        url:"http://129.151.112.171/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta1){
            console.log(respuesta1);
            $("#resultado1").empty();
            pintarRespuestacat(respuesta1);
        }
    });
}

function pintarRespuestacat(respuesta1){

    let myTable="<table>";
    for(i=0;i<respuesta1.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta1[i].name+"</td>";
        myTable+="<td>"+respuesta1[i].description+"</td>";
        myTable+="<td> <button onclick='borrarElementosCategorias("+respuesta1[i].id+")'>Borrar</button>";
        myTable+= '<td><button onclick="llamarInformacionCategorias('+respuesta1[i].id+' )">Editar</button>';
        
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").append(myTable);
}

function guardarInformacionCategorias(){
    let myData = {
        name:$("#name").val(),
        description:$("#description").val()
        };

        let dataToSend=JSON.stringify(myData);
        $.ajax({
        url:"http://129.151.112.171/api/Category/save",    
        type:'POST',
        data:dataToSend,
        dataType: 'JSON',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(myData),
        
        success:function() {
            $("#resultado1").empty();
            $("#id").val("");
            $("#name").val("");
            $("#description").val("");

            traerInformacionCategorias();
            alert("se ha guardado el dato");

       
        }
        });
//////////////////////////////////////////////////////////////////////////////////////
}
function llamarInformacionCategorias (idcategory){
	$.ajax({    
		url : "http://129.151.112.171/api/Category/"+idcategory,
		
		type : 'GET',
		dataType : 'json',
		contentType: "application/json; charset=utf-8",
  
    success : function(respuesta) {
		console.log(respuesta);
        var item=respuesta;
            $("#id").val(item.id);
			$("#name").val(item.name);
			$("#description").val(item.description);
			
        },
      
        error: function(jqXHR, textStatus, errorThrown) {
              
        }
    });
  
  }
function editarInformacionCategorias(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        description:$("#description").val()
        
    
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.112.171/api/Category/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta1){
            
            $("#id").val("");
            $("#name").val("");
            $("#descripcion").val("");
           
            traerInformacionCategorias();
            alert("se ha Actualizado")
        }
    });
}
function borrarElementosCategorias(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.112.171/api/Category/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta1){
            $("#resultado").empty();
            traerInformacionCategorias();
            alert("Se ha Eliminado.")
        }
    });
}
