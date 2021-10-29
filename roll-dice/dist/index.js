"use strict";
// TODO: Implemente de acordo com o enunciado 
var Dado = /** @class */ (function () {
    function Dado() {
        this._face = this.jogar();
    }
    Object.defineProperty(Dado.prototype, "face", {
        get: function () {
            return this._face;
        },
        set: function (face) {
            this._face = face;
        },
        enumerable: false,
        configurable: true
    });
    Dado.prototype.jogar = function () {
        return Math.floor(Math.random() * 6 + 1);
    };
    return Dado;
}());
var n = 15;
var total = 0;
var vetor = [new Dado()];
function start() {
    var _a;
    (_a = document.getElementById("roll-button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", rollDice);
    var dice = document.getElementById("dice-container");
    for (var i = 0; i < n; i++) {
        var img = document.createElement("img");
        img.setAttribute("src", "../src/img/die" + vetor[i].face + ".png");
        dice === null || dice === void 0 ? void 0 : dice.appendChild(img);
        img.setAttribute("id", "dice" + i);
        if (i + 1 < n) {
            vetor.push(new Dado());
        }
    }
    document.getElementById("dice-qty").textContent = n.toString();
    UpdateFreq();
    UpdatePerc();
}
function rollDice() {
    var _a;
    var dice = document.getElementById("dice-container");
    for (var i = 0; i < n; i++) {
        if (document.getElementById("dice" + i) != null) {
            vetor[i].face = vetor[i].jogar();
            (_a = document.getElementById("dice" + i)) === null || _a === void 0 ? void 0 : _a.setAttribute("src", "../src/img/die" + vetor[i].face + ".png");
        }
    }
    UpdateFreq();
    UpdatePerc();
}
function UpdateFreq() {
    var _a, _b;
    for (var i = 1; i <= 6; i++) {
        var aux = parseInt(((_b = (_a = document.getElementById("freq-" + i)) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.toString()) || "0");
        for (var j = 0; j < n; j++) {
            if (vetor[j].face == i) {
                aux++;
            }
        }
        document.getElementById("freq-" + i).textContent = aux.toString();
        total = total + aux;
    }
}
function UpdatePerc() {
    var _a, _b;
    for (var i = 1; i <= 6; i++) {
        var aux = parseInt(((_b = (_a = document.getElementById("freq-" + i)) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.toString()) || "0");
        var aux2 = ((aux / total) * 100).toFixed(3);
        document.getElementById("perc-" + i).textContent = aux2.toString();
    }
}
window.addEventListener("load", start);
