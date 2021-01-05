import mongoose, { Document, Model, Schema } from 'mongoose';

const ListedHouseSchema: Schema = new mongoose.Schema({
  owner_fullName: { type: String, required: true },
  owner_email: { type: String, required: true },

  house_images: { type: Array, required: true },
  house_provinceLocation: { type: String, required: true },
  house_streetLocation: { type: String, required: true },
  house_type: { type: String, required: true },
  house_garageNumber: { type: Number, required: true },
  house_bedroomNumber: { type: Number, required: true },
  house_bathroomNumber: { type: String, required: true }
});

export const ListHouseModel: Model<Document> = mongoose.model(
  'listedHouseModel',
  ListedHouseSchema
);
