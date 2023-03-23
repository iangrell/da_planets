import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";




export class PlanetsController extends BaseController {
    constructor() {
        super('api/planets')
        this.router
        .get('', this.getPlanets)
        .post('', this.createPlanet)
    }

    async getPlanets(req, res, next) {
        try {
            const query = req.query
            const planets = await planetsService.getPlanets(query)
            res.send(planets)
        } catch (error) {
            next(error)
        }
    }

    async createPlanet(req, res, next) {
        try {

            const planetData = req.body
            
            const planet = await planetsService.createPlanet(planetData)
            res.send(planet)
        } catch (error) {
            next(error)
        }
    }
}