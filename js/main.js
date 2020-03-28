$(document).ready(()=>{

	$('.galeria').bxSlider({ //Slider de fotos 
	    mode: 'fade',     	 //tipo de animacion
	    captions: true,		 //caption
	    slideWidth: 900	,	//tamaño de la foto
	    speed: (700)
	  });

	//Posts
	var posts = [
	{
		title: "Prueba de titulo 1",
		date: "Publicado el día "+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
		content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non	proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		title: "Prueba de titulo 2",
		date: "Publicado el día "+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
		content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non	proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		title: "Prueba de titulo 3",
		date: "Publicado el día "+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
		content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non	proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		title: "Prueba de titulo 4",
		date: "Publicado el día "+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
		content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non	proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}

	];

	posts.forEach((item,index)=>{
		var post = `
				<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>${item.content}</p>

					<a href="#" class="ver-mas">Ver Más</a>
				</article>
				`;

		$("#posts").append(post);

	});

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
});