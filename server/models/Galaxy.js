import { Schema } from "mongoose";

export const GalaxySchema = new Schema({
    name: { type: String, required: true, maxLength: 50}
},
    { timestamps: true, toJSON: {virtuals: true}})