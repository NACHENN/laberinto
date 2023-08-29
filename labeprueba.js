// Tamaño del laberinto
const rows = 10;
const cols = 10;

// Crear un laberinto vacío
const maze = Array.from({ length: rows }, () => Array(cols).fill(0));

// Función para imprimir el laberinto
function printMaze() {
  for (const row of maze) {
    console.log(row.join(" "));
  }
}

// Función para generar el laberinto utilizando recursión
function generateMaze(row, col) {
  if (
    row < 0 || row >= rows || col < 0 || col >= cols || maze[row][col] !== 0
  ) {
    return;
  }

  maze[row][col] = 1; // Marcar la celda como visitada (pared)

  // Definir los movimientos posibles (arriba, abajo, izquierda, derecha)
  const directions = [
    [-1, 0], // Arriba
    [1, 0],  // Abajo
    [0, -1], // Izquierda
    [0, 1]   // Derecha
  ];

  // Barajar aleatoriamente las direcciones para un recorrido más interesante del laberinto
  directions.sort(() => Math.random() - 0.5);

  // Explorar las direcciones
  for (const [dx, dy] of directions) {
    generateMaze(row + dx, col + dy);
  }
}

// Generar el laberinto comenzando desde la esquina superior izquierda
generateMaze(0, 0);

// Imprimir el laberinto generado
console.log("Laberinto generado:");
printMaze();

// Resolver el laberinto automáticamente utilizando DFS
function solveMaze(row, col) {
  if (
    row < 0 || row >= rows || col < 0 || col >= cols || maze[row][col] !== 0
  ) {
    return false;
  }

  if (row === rows - 1 && col === cols - 1) {
    maze[row][col] = 2; // Marcar la salida
    return true;
  }

  maze[row][col] = 3; // Marcar la celda como parte del camino de solución

  // Direcciones de movimiento en el orden de arriba, abajo, izquierda, derecha
  const directions = [
    [-1, 0], // Arriba
    [1, 0],  // Abajo
    [0, -1], // Izquierda
    [0, 1]   // Derecha
  ];

  for (const [dx, dy] of directions) {
    if (solveMaze(row + dx, col + dy)) {
      return true;
    }
  }

  maze[row][col] = 0; // Retroceder si no se encuentra solución
  return false;
}

// Resolver el laberinto comenzando desde la esquina superior izquierda
solveMaze(0, 0);

// Imprimir el laberinto resuelto
console.log("\nLaberinto resuelto:");
printMaze();


