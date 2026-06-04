# Calculadora

David Alejandro Botache 1006 Frank Edier González Buitrago

1. El Usuario escribe los datos

El usuario escribe un `1` en la primera casilla y un `2` en la segunda casilla.
Esas casillas simplemente guardan esos números de forma visible en la pantalla a la espera de que el usuario decida qué hacer con ellos.

2. El Botón avisa al sistema

Digamos le da clic al botón que dice "sumar".
Ese botón tiene una instrucción oculta (`onclick="suma()"`). Al recibir el clic, esa instrucción funciona como un interruptor de luz: se activa y le ordena al archivo de JavaScript ejecutar la dicha funcion

3. El Código calcula

El código realiza la función de la suma y ejecuta tres órdenes rápidas:
Primero va a la primera casilla y copia el `1`.
Segundo Va a la segunda casilla y copia el `2`.
Tercero Como el navegador inicialmente ve esos números como si fueran letras, el comando `parseInt` los convierte en números de verdad para poder sumarlos (1 + 2) y dar el resultado: `3`.

4. La Pantalla muestra el resultado decorado

El comando `.innerHTML` toma ese `3` final y lo mete a la fuerza dentro del cuadro vacío llamado `resultado`.
Al meterse el número ahí, el archivo `styles.css` lo detecta automáticamente y lo pinta con el fondo verde, la letra gigante y la negrita que se puso en el codigo.
