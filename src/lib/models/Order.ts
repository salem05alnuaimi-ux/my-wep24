import mongoose, { Schema, model, models } from "mongoose";

const orderItemSchema = new Schema({
  productId: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  image: { type: String },
});

const orderSchema = new Schema(
  {
    userId: { type: String },
    items: [orderItemSchema],
    total: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    shippingAddress: {
      name: String,
      phone: String,
      address: String,
      city: String,
    },
  },
  { timestamps: true }
);

export const Order = models.Order || model("Order", orderSchema);
