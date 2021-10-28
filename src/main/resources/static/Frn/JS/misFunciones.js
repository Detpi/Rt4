function printSelect(){
	$.ajax({    
		url : "http://129.151.112.171/api/Motorbike/all",
		type : 'GET',
		dataType : 'json',
		contentType: "application/json; charset=utf-8",
  
    success : function(respuesta) {
		console.log(respuesta);
		$("#cat").empty();
		miSelect='<option id="" ></option>';
		for (i=0; i<respuesta.length; i++){
			miSelect += '<option value='+ respuesta[i].id+'>'+respuesta[i].name+'</option>'
		}
		$("#cat").append(miSelect);
	},
   
error : function(xhr, status) {
        alert('ha sucedido un problema:'+ status);
    }
});
}

function traerInformacion(){
    $.ajax({
        url:"http://129.151.112.171/api/Motorbike/all",
        type: "GET",
        datatype: "JSON",
        success:function(respuesta){
            console.log(respuesta);
            $("#resultado").empty();
            pintarRespuesta(respuesta);
        }

    });

}

function pintarRespuesta(respuesta){

    let myTable ="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].id+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].year+"</td>";
        myTable+="<td>"+respuesta[i].category.name+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+respuesta[i].id+")'>Borrar</button>";
        myTable+= '<td><button onclick="llamarInformacion('+respuesta[i].id+' )">Editar</button>';
        printSelect();
        myTable+="</tr>";

    }
    myTable+="</table>";
    $("#resultado").append(myTable);

}
function guardarInformacion(){
    let selected = $("#cat").children(":selected").attr("value");
    let myData={
        
        name:$("#name").val(),
        brand:$("#brand").val(),
        year:$("#year").val(),
        description:$("#description").val(),
        category:{id:selected}
    };

    let dataToSend=JSON.stringify(myData);
        $.ajax({
        url:"http://129.151.112.171/api/Motorbike/save",
        type:"POST",
        data:dataToSend,
        datatype:"JSON",
        contentType: "application/json; charset=utf-8",
        success:function(){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#brand").val("");
            $("#year").val("");
            $("#description").val("");
            $("#category").val("");
            traerInformacion();
            alert("se ha guardado el dato");
        }
    });
}
function llamarInformacion (idmoto){
	$.ajax({    
		url : "http://129.151.112.171/api/Motorbike/"+idmoto,
			type : 'GET',
		dataType : 'json',
		contentType: "application/json; charset=utf-8",
  
    success : function(respuesta) {
		console.log(respuesta);
        var item=respuesta;
			$("#id").val(item.id);
			$("#name").val(item.name);
			$("#brand").val(item.brand);
			$("#year").val(item.year);
			$("#cat").val(item.category.id);
            $("#description").val(item.description);
        },
      
        error: function(jqXHR, textStatus, errorThrown) {
              
        }
    });
  
  }
function editarInformacion(){
    let selected = $("#cat").children(":selected").attr("value");
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        brand:$("#brand").val(),
        year:$("#year").val(),
        description:$("#description").val(),
        category:{id:selected}
        
    };
    
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.112.171/api/Motorbike/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#brand").val("");
            $("#year").val("");
            $("#description").val("");
            $("#category").val("");
            traerInformacion();
            alert("se ha Actualizado")
        }
    });
}
function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.112.171/api/Motorbike/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha Eliminado.")
        }
    });
}
















