$(document).ready(()=>{

	
	//Selector de Tema

	var tema  = $("#tema");

	$("#to-rojo").click(()=>{
		tema.attr("href","css/rojo.css");
	});

	$("#to-azul").click(()=>{
		tema.attr("href","css/azul.css");
	});

	$("#to-amarillo").click(()=>{
		tema.attr("href","css/amarillo.css");
	});

	$("#to-morado").click(()=>{
		tema.attr("href","css/morado.css");
	});	

	//Login Falso

	$("#login form").submit(function(){
		var usu_name = $("#usu_name").val();

		localStorage.setItem("usu_name",usu_name);
		location.reload();
	});

	var usu_name = localStorage.getItem("usu_name");
	
	if(usu_name != null && usu_name != "undefined"){
		var about_p = $("#about p");
		about_p.html("Bienvenido, "+usu_name+"<br><br>");
		about_p.append("<a href='#' id='cerrar_sesion'>Cerrar Sesión</a>");

		$("#login").hide();

		$("#cerrar_sesion").click(function(){
			localStorage.clear();
			location.reload();
		});
	}

	//Validacion
	$.validate({
   		 lang: 'es'
 	 });

	
});