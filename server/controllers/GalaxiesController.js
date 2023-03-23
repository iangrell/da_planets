import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";




export class GalaxiesController extends BaseController {
    constructor() {
        super('api/galaxies')
        this.router
        .get('', this.getGalaxies)
        .post('', this.createGalaxy)
    }

    async getGalaxies(req, res, next) {
        try {
            const query = req.query
            const galaxies = await galaxiesService.getGalaxies(query)
            res.send(galaxies)
        } catch (error) {
            next(error)
        }
    }

    async createGalaxy(req, res, next) {
        try {
            const galaxyData = req.body
            const galaxy = await galaxiesService.createGalaxy(galaxyData)
            res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }
}