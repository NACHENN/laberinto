function direcciones(laberinto) {
    const aExplorar = [['', laberinto]];

    while (aExplorar.length != 0) {
        const [camino, objeto] = aExplorar.shift()

        for (let [direccion, casilla] of Object.entries(objeto)) {
            if (casilla == 'meta') {
                return camino + direccion;
            }

            if (casilla != 'pared') {
                aExplorar.push([camino + direccion, casilla])
            }
        }
    }

    return "" // Retornamos vacío si no hay camino
}
