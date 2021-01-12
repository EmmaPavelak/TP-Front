'use strict';
var section = document.querySelector('section');
var add = document.getElementById('add');
var input= document.getElementById("nom").value;

var requestURL = 'listtache.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
	var listJson = request.response;
    showList(listJson);

    //AJOUT
  add.addEventListener('click', event => {
    //event.preventDefault();
    console.log(input);
	listJson['taches'].push({ "name": input, "etat": "A faire" });   
    section.innerHTML= "";
	showList(listJson);
  });	
    
  }

//Genere list
  function showList(objJson) {	
    var taches = objJson['taches'];
    
	for (var i = 0; i < taches.length; i++) {
	  var myArticle = document.createElement('article');
	  var nomTache = document.createElement('h2');
	  var etat = document.createElement('p');
	  var form = document.createElement('form');
	  var editnom = document.createElement('input');
	  var submit = document.createElement('input');
	  var supp = document.createElement('button');
	
  
	  nomTache.textContent = taches[i].name;
	  etat.textContent = 'Etat: ' + taches[i].etat;
	  supp.textContent ="X" ;
	  editnom.value = taches[i].name;

	  form.classList.add("hide");
	  editnom.setAttribute("type", "textt");
	  submit.setAttribute("type", "submit");

	 	//EDIT
		 nomTache.addEventListener('click', event => {
			form.classList.remove("hide");
			nomTache.classList.add("hide");
		  });

		  submit.addEventListener('click', event => {
			console.log(edit);
		  });

	  myArticle.appendChild(nomTache);
	  myArticle.appendChild(form);
	  form.appendChild(editnom);
	  form.appendChild(submit);
	  myArticle.appendChild(etat);
	  myArticle.appendChild(supp);

	  section.appendChild(myArticle);

	//SUPP
	  supp.addEventListener('click', event => {
	
		console.log("supp");
		var newlist = taches.splice(1, 0);
		console.log(newlist);
		
	});
	
	}


	
  }








