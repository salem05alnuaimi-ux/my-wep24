import mongoose, { Schema } from "mongoose";

const BilingualText = { ar: String, en: String };

const ProductSchema = new Schema({
  slug: { type: String, required: true, unique: true },
  name: BilingualText,
  description: BilingualText,
  shortDescription: BilingualText,
  price: { type: Number, required: true },
  originalPrice: Number,
  currency: { type: String, default: "OMR" },
  category: { type: String, required: true },
  images: [String],
  variants: [{
    id: String,
    name: BilingualText,
    type: { type: String },
    value: String,
    image: String,
    stock: Number,
    priceModifier: Number,
  }],
  features: [BilingualText],
  specs: [{ label: BilingualText, value: BilingualText }],
  rating: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 },
  inStock: { type: Boolean, default: true },
  stockCount: { type: Number, default: 0 },
  isNewArrival: Boolean,
  isBestseller: Boolean,
  tags: [String],
}, { timestamps: true });

export const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);