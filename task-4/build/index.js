"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const console = __importStar(require("node:console"));
const musicals_json_1 = __importDefault(require("../data/musicals.json"));
const port = 3001;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});
app.get("/", (req, res) => {
    if (musicals_json_1.default === undefined) {
        res.status(404).send("No musicals found");
    }
    res.send(musicals_json_1.default);
});
app.get("/:id", (req, res) => {
    if (musicals_json_1.default[Number(req.params.id)] === undefined) {
        res.status(404).send("Musical not found");
    }
    res.send(musicals_json_1.default[Number(req.params.id)]);
});
