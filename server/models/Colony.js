import { Schema } from "mongoose";

export const ColonySchema = new Schema({
    name: { type: String, required: true},
    population: { type: Number, required: true, max: 10000},
    planetId: { type: Schema.Types.ObjectId, required: true, ref: 'Planet'},
    speciesId: {type: Schema.Types.ObjectId, required: true, ref: 'Species'}
},
    { timestamps: true, toJSON: { virtuals: true}})

    ColonySchema.virtual('planet', {
        localField: 'planetId',
        foreignField: '_id',
        justOne: true,
        ref: 'Planet'
    })

