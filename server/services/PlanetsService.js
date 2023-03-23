import { dbContext } from "../db/DbContext.js"




class PlanetsService {
    
    async getPlanets(query) {
        const planets = await dbContext.Planets.find(query)
        return planets
    }
    
    async createPlanet(planetData) {
        const planet = await dbContext.Planets.create(planetData)
        return planet
    }

}

export const planetsService = new PlanetsService()