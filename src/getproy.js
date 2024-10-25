"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const config_1 = require("./config");
const axios_1 = __importDefault(require("axios"));
const traductor_1 = require("./traductor");
const connbd_1 = require("./connbd");
const getData = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const tipo = event.tipo;
    const id = Number(event.id);
    try {
        const response = yield axios_1.default.get(`${config_1.uri_api}${tipo}/${id}/`);
        const datatraducida = (0, traductor_1.traduciratributos)(response.data);
        return datatraducida;
    }
    catch (error) {
        const dataaws = yield (0, connbd_1.obtenerdatos)(id, tipo);
        return dataaws;
    }
});
exports.getData = getData;
