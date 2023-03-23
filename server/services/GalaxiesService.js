import { dbContext } from "../db/DbContext.js"




class GalaxiesService {
    
    async getGalaxies(query) {
        const galaxies = await dbContext.Galaxies.find(query)
        return galaxies
    }

    async createGalaxy(galaxyData) {
        const galaxy = await dbContext.Galaxies.create(galaxyData)
        return galaxy
    }

}



export const galaxiesService = new GalaxiesService()