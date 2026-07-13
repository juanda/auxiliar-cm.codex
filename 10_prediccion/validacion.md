# Validación y mantenimiento

## Ejecución

Desde la raíz del repositorio:

```bash
python 10_prediccion/generar_prediccion.py
```

El script utiliza únicamente la biblioteca estándar de Python y genera `prediccion_calculada.csv`.

## Entradas

- `02_preguntas_extraidas/preguntas_normalizadas.json`: evidencia histórica.
- `10_prediccion/factores_manuales.csv`: novedad y testabilidad.

Los factores manuales están separados para que puedan revisarse y discutirse sin alterar los datos históricos.

## Comprobaciones

Antes de publicar una revisión:

- El total por temas debe ser 225.
- Deben aparecer exactamente 21 temas.
- Ninguna puntuación puede interpretarse como probabilidad porcentual.
- Los factores manuales deben tener valores entre 0 y 100.
- Las horquillas deben sumar 30 preguntas en su escenario central.
- Los cambios normativos deben documentarse con fecha y fuente.
- Debe ejecutarse el backtesting descrito en `metodologia.md`.

## Diferencia entre CSV

- `prediccion_calculada.csv`: salida reproducible de las cinco señales.
- `prediccion_temas.csv`: presentación editorial con materia, históricos, confianza y conceptos prioritarios.

Si divergen, prevalece la salida calculada para la puntuación y debe actualizarse la tabla editorial.
