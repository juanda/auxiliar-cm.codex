# Test psicotecnico de atención

Primer ejercicio. Entrenamiento específico de búsqueda visual, comparación, conteo y filtrado de datos.

Tiempo recomendado: 15 minutos.

Criterio de corrección recomendado: `aciertos - errores / 3`. Las preguntas en blanco no suman ni restan.

Procedencia: preguntas generadas a partir de patrones históricos oficiales. No son preguntas oficiales.

## Preguntas

1. En la lista de grupos separados por espacios, cuantas veces aparece exactamente `AB7c`?
   Lista: AB7c AB7C A87c AB7c XAB7c AB7cA AB7c
   A. 3
   B. 2
   C. 4
   D. 5

2. Cuantos grupos son exactamente iguales en ambas matrices?
   Matriz A: 381 426 719 804 552 936
   Matriz B: 381 462 719 804 525 936
   A. 3
   B. 4
   C. 5
   D. 6

3. En la lista, cuantas veces aparece una `x` que no este inmediatamente después de una `o`?
   Lista: ax ox bx xo cx dox xz oo x
   A. 3
   B. 6
   C. 4
   D. 5

4. Cuantos códigos contienen exactamente dos letras y tres números?
   Códigos: AB123 A1B23 ABC12 XY789 99ZZ9 PQ456 MNO12 R4T55
   A. 3
   B. 5
   C. 4
   D. 6

5. Cuantos registros tienen departamento `RRHH` y mas de 100 horas?
   Tabla: Ana/RRHH/120; Luis/IT/140; Eva/RRHH/90; Omar/RRHH/130; Noa/Contabilidad/115
   A. 1
   B. 2
   C. 3
   D. 4

6. Cuantos teléfonos terminan en 5 y contienen también un 3?
   Teléfonos: 6382145, 6178025, 6239905, 6413335, 6001200, 6398815
   A. 2
   B. 4
   C. 3
   D. 5

7. Cuantas veces aparece exactamente `pNMeqbFY` como grupo separado?
   Lista: pNMeqbFY pMNeqbFY pNMeqbFY pNMeqBFY pNMeqbFy pNMeqbFY
   A. 2
   B. 4
   C. 5
   D. 3

8. Cuantos expedientes estan en archivador `PEP/3`?
   Registros: 01 PEP/3; 02 PEP/4; 03 ZPE/3; 04 PEP/3; 05 EZF/4; 06 PEP/3
   A. 2
   B. 4
   C. 5
   D. 3

9. Cuantos grupos de tres números empiezan por número par?
   Grupos: 247 581 602 913 846 135 420 771 064
   A. 4
   B. 6
   C. 5
   D. 7

10. Cuantas palabras tienen exactamente 6 letras?
    Palabras: archivo, trámite, acceso, dato, correo, agenda, registro, firma
    A. 3
    B. 2
    C. 4
    D. 5

11. Cuantas parejas son exactamente iguales?
    Parejas: 74A/74A; P3K/P3X; 918/918; Lm7/LM7; R22/R22; bca/bca
    A. 3
    B. 5
    C. 4
    D. 6

12. Cuantos registros cumplen las dos condiciones: ingreso anterior al 10/05/2020 y teléfono que acaba en 8?
    Registros: Ana 09/05/2020 600128; Luis 10/05/2020 611118; Eva 03/04/2020 622225; Omar 01/05/2019 633338; Noa 12/06/2018 644448
    A. 1
    B. 2
    C. 4
    D. 3

13. En la cadena `H7G1L7J6L9Q6J7L1Q7G`, cuantos caracteres son números impares?
    A. 7
    B. 5
    C. 6
    D. 8

14. Cuantos códigos contienen la secuencia `TR` sin invertir y en mayusculas?
    Códigos: TR45, tR45, RT45, AATR9, XTRX, TxR1, BTR2
    A. 3
    B. 4
    C. 5
    D. 6

15. Cuantos ciudadanos han solicitado exactamente cuatro servicios?
    Tabla: Ana=4; Luis=3; Eva=4; Omar=5; Noa=4; Lia=2
    A. 3
    B. 2
    C. 4
    D. 5

## Plantilla

| N. | Respuesta | Explicación |
| ---: | :---: | --- |
| 1 | A | Solo cuentan grupos separados exactamente iguales: posiciones 1, 4 y 7. |
| 2 | B | Coinciden 381, 719, 804 y 936: cuatro grupos. |
| 3 | B | Se excluyen las `x` de `ox` y `dox`; quedan seis apariciones válidas. |
| 4 | C | Cumplen AB123, A1B23, XY789 y PQ456. |
| 5 | B | Ana y Omar cumplen RRHH y mas de 100 horas. |
| 6 | C | Cumplen 6382145, 6413335 y 6398815. |
| 7 | D | Coinciden exactamente los grupos 1, 3 y 6. |
| 8 | D | PEP/3 aparece en los registros 01, 04 y 06. |
| 9 | C | Empiezan por par: 247, 602, 846, 420 y 064. |
| 10 | A | Tienen 6 letras: acceso, correo y agenda. |
| 11 | C | Coinciden 74A/74A, 918/918, R22/R22 y bca/bca. |
| 12 | D | Cumplen Ana, Omar y Noa; Luis no es anterior al 10/05/2020. |
| 13 | A | Números impares: 7, 1, 7, 9, 7, 1 y 7. |
| 14 | B | Contienen `TR` en mayusculas: TR45, AATR9, XTRX y BTR2. |
| 15 | A | Ana, Eva y Noa tienen exactamente cuatro servicios. |
