const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const wheelDataSchema = new Schema(
  {
    name: { type: String, required: true },
    data: { type: String, required: true },
    // Cyberdeck: { AI: String, "Fuji Electric": String },
    // Comlink: String,
    // Icebreaker: String,
    // "ROM construct": String,
    // Cowboy: String,
    // "Emperor Norton": String,
    // Cyberjack: String,
    // Ratz: { "Zion Cluster": String, "Chiba City": String },
    // Holografix: { "Asano Computing": String, "Hitachi Biotech": String },
    // "Larry Moe": { Cryptology: String },
    // PAX: { "Space colony": String, "Holy Joystick": String },
    // "Skill chips": { "Bank of Berne": String },
    // "Shin's Pawn": { Spacedock: String, "Ono-Sendai": String },
    // "Gentleman Loser": { "Marcus Garvey": String, "Bank of Zurich": String },
    // "Maas Biolabs": { "Compu-judge": String },
    // "Justice Booth": { flatline: String },
  },
  {
    timestamps: true,
  }
);

const WheelData = mongoose.model("Neuromancer", wheelDataSchema);

module.exports = WheelData;
