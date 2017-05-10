function MiembrosSquad(id,nombre,apellido,edad,hobbies){
	this.id=id;
	this.nombre=nombre;
	this.apellido=apellido;
	this.edad=edad;
	this.hobbies=hobbies;
}
var comentario=[];
function Comentario(idGente, comentarios,likes){
	this.idGente=idGente;
	this.comentarios=comentarios;
	this.likes=likes;
}

var squad=[];
//instancia de cada amiga
var mili= new MiembrosSquad(1,"Mili","Rivas", 15,["canta","come","baila"]);
var vale= new MiembrosSquad(2,"Vale","Perez", 19,["dormir","come","baila"]);
var pis= new MiembrosSquad(3,"Pis","Rojo", 21,["toma","mani","V.I.P"]);

squad.push(mili,vale,pis);

function imprimir(gente){
	var contiene= document.getElementById("amigas");
	var texto= "";
	//recorro mi arreglo
	squad.forEach(function(gente){
		//agrego a mi variable texto de manera dinamica mi estructura de html 
		texto +=
		"<div>" + "<img src=img/" + gente.id + ".png>" + "</div>" +"<div>" + gente.nombre + " " + gente.apellido + " " + gente.edad +"</div>"
	
		gente.hobbies.forEach(function(hobbies){

		texto += "<li>" + hobbies + "</li>";
		
		});
		texto += "<h3> Comentarios </h3>" + "<div id='contenido" + gente.id + "'>"+"</div>" + "<textarea id='text" + gente.id + "'>" + "</textarea>" + "<button onclick='agrega(" + gente.id +  ")'>"+"</button>";
			

	});
	//imprimo toda mi variable y le paso el texto

	contiene.innerHTML = texto;

}
//agregar los comentarios
function agrega(genteId){
	console.log('id', genteId);

//Se rescata el valor del textarea con su id mas la propiedad.id
 var textArea= document.getElementById('text' + genteId).value;
 
 //llamo a genteId para rescatar el valor y asociarlo al id 
 var cajaComentario= document.getElementById('contenido' + genteId);
 console.log(cajaComentario);

 	//creo mi instancia y le paso los paramatres , que usaré la id de la gente , lo que tengo en mi textarea y mi contador q comienza en cero
	var coment = new Comentario(genteId,textArea,0);

	comentario.push(coment);
	//para imprimier el comentario llamo a mi caja contenedora que recibe ese Id , y lo imprimo agregando dinamicamente los comentarios
	//para eso le paso mi instancia con la propiedad de mi constructor comentario que en este caso se llama comentarios
	cajaComentario.innerHTML += "<p>" + coment.comentarios + "</p>" + "<button id='boton' onclick='darLike(this)'>"+"</button>" + "<span>" + 0 + "</span>";
	
	 
	 // para limpiar el comentario
	 textArea=" ";


}

function darLike(click){
//contador para los like del corazón, le asigno una variable que sume mis likes y pongo mi parametro y le paso la propiedad nextSibling, que hace que me tome 
//el hermano que sigue a la etiqueta que tiene la funcion darLike, en este caso el hermano del botón es el span 
//luego le paso la variable suma lo imprimo en html , le pongo +1 para que se agregue de uno en uno a medida que hago click. 
	var suma= click.nextSibling;
	suma.innerHTML = parseInt(suma.innerHTML) + 1;
	
}

//llamo a mi función imprimir 
imprimir();
