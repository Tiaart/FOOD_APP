const del = require("del");

// Кофигурация
const path = require("../config/path.js");

// Удаление директории
const clear = () => {
    return del(path.root);
}

module.exports = clear;