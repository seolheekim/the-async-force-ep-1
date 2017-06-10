(function (){
  //Dark Vader
  function getPerson4(){
    var person = JSON.parse(this.responseText);
    // console.log(person)
    var person4Name = document.getElementById('person4Name');
    person4Name.innerHTML = person.name;
  }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', getPerson4);
    oReq.open('GET', `http://www.swapi.co/api/people/4`);
    oReq.send();

  //Dark vader HomeWorld
  function getHomeWorld4(){
    var home = JSON.parse(this.responseText);
    // console.log(home)
    var homeWorld4 = document.getElementById('person4HomeWorld');
    homeWorld4.innerHTML = home.name;
  }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', getHomeWorld4);
    oReq.open('GET', `http://www.swapi.co/api/planets/1`);
    oReq.send();

  //Han Solo name
  function getPerson14(){
    var person = JSON.parse(this.responseText);
    // console.log(person)
    var person14Name = document.getElementById('person14Name');
    person14Name.innerHTML = person.name;

  }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', getPerson14);
    oReq.open('GET', `http://www.swapi.co/api/people/14`);
    oReq.send();

  //Han Solo Species
  function getSpecies14(){
    var species = JSON.parse(this.responseText);
    // console.log(species)
    var species14 = document.getElementById("person14Species");
    species14.innerHTML = species.name;
  }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', getSpecies14);
    oReq.open('GET', `http://www.swapi.co/api/species/1`);
    oReq.send();

var filmListContainer = document.getElementById("filmList");

//film list elements
  function getFilmElemets() {
    var films = JSON.parse(this.responseText);

    // var filmRes = films.results

    for(var i = 0; i < films.results.length; i++){
      var film = document.createElement("li");
      film.className = "film";

      var filmTitle = document.createElement("h2");
      filmTitle.className = "filmTitle"
      filmTitle.innerHTML = films.results[i].title
      filmListContainer.appendChild(filmTitle);

        var filmPlanetsContainer = document.createElement("ul");
        filmPlanetsContainer.className = "filmPlanets";
        filmListContainer.appendChild(filmPlanetsContainer);

        //getting the film planet names

        for(var p = 0; p < films.results[i].planets.length; p++){

          (function(myPlanets) {
            var pReq = new XMLHttpRequest();
            pReq.addEventListener('load', function(){
              var getPlanet = JSON.parse(this.responseText);

              var planetLists = document.createElement("li");
              planetLists.className = "planets";
              planetLists.innerHTML = JSON.parse(this.responseText).name
              filmPlanetsContainer.appendChild(planetLists);

              var planetName = document.createElement("h4");
              planetName.className = "planetName";
              planetName.innerHTML = getPlanet.name
              myPlanets.appendChild(planetName)

            })//ends the eventListener
            pReq.open('GET', films.results[i].planets[p])
            pReq.send()

          })(filmPlanetsContainer);
        }//ends the planets foorloop

     }//ends film foorloop
  };
  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', getFilmElemets);
  oReq.open('GET', `http://www.swapi.co/api/films/`);
  oReq.send();


  // //film planet elemets
  // function getFilmPlanets(){
  //   var getPlanet = JSON.parse(this.responseText).results;
  //   console.log(getPlanet)


  //   for(var i = 0; i < getPlanet.length; i++){
  //     var planets = document.createElement("li");
  //     planets.className = "planets";
  //     film.appendChild(planets);

  //     var planetName = document.createElement("h4");
  //     planetName.className = "planetName";
  //     planetName.innerHTML = getPlanet[i].name
  //     planets.appendChild(planetName)
  //   }
  // }


  // console.log("hello")
})()