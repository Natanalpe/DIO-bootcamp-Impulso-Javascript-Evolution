"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 3000;
const app = (0, express_1.default)();
app.get('/status', (req, res, next) => {
    res.status(200).send({ foo: 'bar' });
});
app.listen(port, () => {
    console.log(`Aplicação está m execução na porta: ${port}\ http://localhost:${port}`);
});
