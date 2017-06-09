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


//film list elements
  function getFilmElemets() {
    var films = JSON.parse(this.responseText);
    // console.log(films)
    // console.log(films.results)

    var filmListElements = document.getElementById("filmList");

    var filmRes = films.results
    for(var i = 0; i < filmRes.length; i++){
      var film = document.createElement("li");
      film.className = "film";
      filmListElements.appendChild(film);

      var filmTitle = document.createElement("h2");
      filmTitle.className = "filmTitle"
      filmTitle.innerHTML = filmRes[i].title
      film.appendChild(filmTitle);

        //getting the film planet names
        var filmPlanets = document.createElement("ul");
        filmPlanets.className = "filmPlanets";
        filmListElements.appendChild(filmPlanets);

        // var filmResPlanet = films.results[i].planets
        // console.log(filmResPlanet)

        function filmPlateElement() {
          var planets = JSON.parse(this.responseText);
          // console.log(getPlanet)
          var planetData = getPlanet.planets.name
          console.log(planetData)

          for(var p = 0; p < films.planets.length; p++){
            console.log(films.planets)
              var planet = new XMLHttpRequest();
              planet.addEventListener('load', filmPlateElement);
              var planetLists = document.createElement("li");
              planetLists.className = "planets";
              filmPlanets.appendChild(planetLists);

              var planetName = document.createElement("h4");
              planetName.className = "planetName";
              planetName.innerHTML = filmResPlanet[i].name
              planetLists.appendChild(planetName)
            }
            planet.open('GET', films.planets[i]);
            planet.send();
        }//ends filmPlateElement
  }
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