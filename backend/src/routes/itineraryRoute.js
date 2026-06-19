import express from "express";
import {
  createItinerary,
  getAllItineraries,
  getItinerary,
} from "../controllers/itineraryConroller.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/generate", createItinerary);

router.get("/:id", authMiddleware, getItinerary);
router.get("/", authMiddleware, getAllItineraries);

export default router;