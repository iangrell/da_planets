import { Schema } from "mongoose";


export const PlanetSchema = new Schema({
    name: { type: String, required: true, maxLength: 50},
    description: { type: String, maxLength: 500},
    positionFromSun: { type: Number, required: true},
    supportsLife: { type: Boolean, required: true, default: false},
    galaxyId: { type: Schema.Types.ObjectId, required: true, ref: 'Galaxy'}
},
    { timestamps: true, toJSON: {virtuals: true}})