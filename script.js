'use strict';
var section = document.querySelector('section');
const add = document.getElementById('add');

var requestURL = 'listtache.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
	var listJson = request.response;
	showList();
  }

var JSONfile ={
	"taches" : [
	  {
		"name" : "Fifi",
		"etat" : "à faire"
	  },
	  {
		  "name" : "Loulou",
		  "etat" : "à faire"
		},
		{
		  "name" : "Toto",
		  "etat" : "à faire"
		}
	]
  };

//var taches = listJson['taches'];
var taches = JSONfile['taches'];

var input= document.getElementById("nom").value;

//Genere list
  function showList() {	

	for (var i = 0; i < taches.length; i++) {
	  var myArticle = document.createElement('article');
	  var nomTache = document.createElement('h2');
	  var etat = document.createElement('p');
	  var supp = document.createElement('button');
	
  
	  nomTache.textContent = taches[i].name;
	  etat.textContent = 'Etat: ' + taches[i].etat;
	  supp.textContent ="X" ;
  
	 
	  myArticle.appendChild(nomTache);
	  myArticle.appendChild(etat);
	  myArticle.appendChild(supp);

	  section.appendChild(myArticle);

	  nomTache.addEventListener('click', event => {
        console.log("modif");
        var etat = document.createElement('form');
	  });
	
	}
	
  }

//AJOUT
  add.addEventListener('click', event => {
	event.preventDefault();
	console.log(input);
	taches.push({ "name": input, "etat": "A faire" });
    console.log(taches);
    section.innerHTML= "";
	showList();
  });
//SUPP
  /*supp.addEventListener('click', event => {
	console.log("supp");
	suppElmt(1);
  });*/

  function suppElmt(x){
	var newlist = taches.splice(x, 0);
	console.log(newlist)
	showList();
}



