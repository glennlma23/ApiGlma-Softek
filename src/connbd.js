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
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerdatos = exports.insertarDatos = void 0;
const awsbd_1 = require("./awsbd");
const obtenerdatos = (id, tipo) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        TableName: 'extras',
        Key: {
            id: id,
            tipo: tipo
        },
    };
    try {
        const data = yield awsbd_1.dynamoDB.get(params).promise();
        if (data.Item) {
            return data.Item;
        }
        else {
            return 'No hay datos';
        }
    }
    catch (error) {
        throw error;
    }
});
exports.obtenerdatos = obtenerdatos;
const insertarDatos = (item) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        TableName: 'extras',
        Item: item
    };
    try {
        const data = yield awsbd_1.dynamoDB.put(params).promise();
        return 'se registró un extra';
    }
    catch (error) {
        throw error;
    }
});
exports.insertarDatos = insertarDatos;
