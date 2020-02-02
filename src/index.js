class SwapiService {

  _apiBase = 'https://swapi.co/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResource(`/people/${id}`);
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results;
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}`);
  }

  async getAllStarships(){
    const res = await this.getResourse(`/starships/`);
    return res.results;
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}`)
  }
}

const swapi = new SwapiService();

swapi.getStarship('9')
  .then((planet) => {
    console.log(planet.name);
  })

// swapi.getAllPlanets()
//   .then((planets) => {
//     console.log(planets);
//   })
