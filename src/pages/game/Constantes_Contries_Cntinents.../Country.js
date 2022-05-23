import React from "react"
import invert from "invert-color";

export default class Country{

    // id: nombre del pais (unico)
    // d: contorno del pais
    // coord: donde esta situado pais en la pantalla
    // countryState: partidas asincronas, estado del pais
    // colour e initialColour: a la hora de seleccionar pais, cambiar de color. Necesitamos guardar
    //  color inicial
    // isSelected: ha sido seleccionado por user
    // numTroops: tropas del pais
    // belongToPlayer: jugador al que pertenece pais

    constructor(id, d, coord, colour, countryState = null) {
        this.id = id
        this.d = d
        this.coord = coord

        this.colour = colour
        this.initialColour = colour

        this.numTroops = 0
        this.belongToPlayer = ''

        this.isSelected = false
    }

    getId() {
        return this.id
    }

    setId(newId) {
        this.id = newId
    }

    getColour() {
        return this.colour
    }

    setColour(newColour) {
        this.colour = newColour
    }

    setInitialColour() {
        this.setColour(this.initialColour)
    }

    getNumTroops() {
        return this.numTroops
    }

    setNumTroops(newNumTroops) {
        this.numTroops = newNumTroops
    }

    getBelongToPlayer() {
        return this.belongToPlayer
    }

    setBelongToPlayer(newBelongToPlayer) {
        this.belongToPlayer = newBelongToPlayer
    }

    getIsSelected() {
        return this.isSelected
    }

    setIsSelected(newIsSelected) {
        this.isSelected = newIsSelected
    }

    getSVG() {
        const text = React.createElement("text", {
            x: this.coord[0],
            y: this.coord[1],
            fontFamily: "Verdana",
            fontSize: "15",
            fill: "white",
            style: {
                pointerEvents: "none",
                fill: invert(this.colour, true),
                userSelect: "none"
            },
            children: this.numTroops,
        });

        const d = React.createElement("path", {
            id: this.id,
            d: this.d,
            stroke: invert(this.colour, true),
            strokeMiterlimit: "4.32165",
            style: {
                cursor: "pointer",
                fill: this.isSelected ? "#d9b51c" : this.colour,
            },
        });
        const g = React.createElement("g", null, d, text);

        return g;
    }
}
