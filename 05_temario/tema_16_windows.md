# Tema 16. El explorador de Windows

El explorador de Windows. Gestión de carpetas y archivos. Operaciones de búsqueda. Herramientas «Este equipo» y «Acceso rápido». Accesorios. Herramientas del sistema.

## 1. Resumen ejecutivo

La versión oficial para este tema es `Windows 10`, conforme al Anexo I, apartado Primero.2.2 de la convocatoria 2026. El examen pregunta Windows como herramienta de trabajo administrativo: localizar archivos, manejar carpetas, reconocer rutas, usar vistas, consultar propiedades, buscar documentos, acceder a unidades, usar herramientas básicas y conocer utilidades del sistema.

La estadística histórica disponible muestra 12 preguntas del Tema 16:

| Subtema | Preguntas históricas |
| --- | ---: |
| Explorador de archivos | 10 |
| Herramientas del sistema | 2 |

Los puntos con más rendimiento son:

- Explorador de archivos.
- Carpeta personal de usuario.
- Unidades de disco y propiedades.
- Ruta completa de una carpeta.
- Panel de vista previa.
- Extensiones de archivo.
- Asociación de archivos con aplicaciones.
- Compartir carpetas.
- Quitar de forma segura unidades USB.
- Agrupación de archivos.
- Administrador de tareas.
- Administrador de discos.

El enunciado oficial obliga además a estudiar en profundidad:

- Gestión de carpetas y archivos.
- Operaciones de búsqueda.
- Herramientas `Este equipo` y `Acceso rápido`.
- Accesorios.
- Herramientas del sistema.

Idea clave: el Explorador de archivos es la herramienta central para trabajar con documentos, carpetas, unidades y rutas en Windows 10. Casi todas las preguntas históricas se resuelven entendiendo qué muestra cada zona del Explorador y qué hacen las opciones de gestión.

## 2. Desarrollo

### 2.1. Explorador de archivos

El Explorador de archivos permite navegar por unidades, carpetas y archivos. Se abre, entre otros métodos, con la combinación `Windows + E`.

Pregunta histórica: `2025-E2-001`.

Partes principales:

| Elemento | Función |
| --- | --- |
| Barra de direcciones | Muestra la ruta de la ubicación actual. |
| Cuadro de búsqueda | Permite buscar en la carpeta o ubicación actual. |
| Panel de navegación | Acceso a ubicaciones como Acceso rápido, Este equipo, red y unidades. |
| Panel de contenido | Muestra archivos y carpetas. |
| Panel de vista previa | Muestra contenido de ciertos archivos sin abrirlos. |
| Panel de detalles | Muestra propiedades básicas del elemento seleccionado. |
| Barra de estado | Ofrece información resumida de la selección o carpeta. |

La ruta completa de una carpeta se ve en la barra de direcciones.

Pregunta histórica: `2025-E2-004`.

#### Acceso rápido

`Acceso rápido` muestra ubicaciones frecuentes y elementos anclados. Sirve para llegar rápidamente a carpetas de uso habitual.

| Acción | Qué significa |
| --- | --- |
| Anclar a Acceso rápido | Mantener una carpeta visible en Acceso rápido. |
| Desanclar | Quitarla de Acceso rápido sin borrar la carpeta real. |
| Carpetas frecuentes | Carpetas usadas habitualmente. |
| Archivos recientes | Archivos abiertos recientemente. |

Trampa: quitar una carpeta de `Acceso rápido` no elimina la carpeta del disco.

#### Este equipo

`Este equipo` concentra unidades, dispositivos y carpetas principales del usuario.

Desde `Este equipo` se pueden ver unidades de disco y consultar sus propiedades. Para ver el espacio libre de una unidad, puede usarse el Explorador de archivos, localizar la unidad en `Este equipo`, abrir su menú contextual y entrar en `Propiedades`.

Pregunta histórica: `2025-E2-003`.

| Elemento | Qué muestra |
| --- | --- |
| Unidades de disco | Disco local, unidades externas, particiones. |
| Dispositivos extraíbles | Memorias USB u otros dispositivos conectados. |
| Carpetas de usuario | Escritorio, Documentos, Descargas, Imágenes, etc. |
| Propiedades de unidad | Capacidad, espacio usado, espacio libre y sistema de archivos. |

### 2.2. Gestión de carpetas y archivos

Windows organiza la información en archivos y carpetas.

| Concepto | Definición |
| --- | --- |
| Archivo | Unidad de información con nombre, ubicación y extensión. |
| Carpeta | Contenedor de archivos y otras carpetas. |
| Ruta | Dirección que indica dónde está un archivo o carpeta. |
| Unidad | Dispositivo o partición donde se almacenan datos. |
| Extensión | Caracteres finales tras un punto que ayudan a identificar tipo de archivo. |

#### Carpeta personal

Windows 10 crea una carpeta personal para cada usuario del equipo. Dentro suelen estar ubicaciones como Escritorio, Documentos, Descargas, Imágenes, Música o Vídeos.

Pregunta histórica: `2023-E2-003`.

No debe confundirse `Documentos` con la carpeta personal: `Documentos` es una carpeta habitual dentro del perfil de usuario, pero la carpeta personal engloba varias ubicaciones.

#### Operaciones básicas

| Operación | Resultado |
| --- | --- |
| Crear carpeta | Añade un nuevo contenedor. |
| Copiar | Duplica el elemento en otra ubicación. |
| Cortar | Prepara el elemento para moverlo. |
| Pegar | Inserta lo copiado o cortado. |
| Mover | Cambia la ubicación del elemento. |
| Cambiar nombre | Modifica el nombre visible. |
| Eliminar | Envía a la Papelera o elimina definitivamente según operación. |
| Restaurar | Recupera un elemento de la Papelera. |
| Propiedades | Muestra información y opciones del elemento. |

#### Nombres y extensiones

La extensión suele aparecer al final del nombre de archivo, después de un punto. Normalmente son tres o cuatro caracteres e indican el tipo de archivo o la aplicación que puede abrirlo.

Ejemplos:

| Archivo | Extensión | Tipo orientativo |
| --- | --- | --- |
| `informe.docx` | `.docx` | Documento de Word. |
| `datos.xlsx` | `.xlsx` | Libro de Excel. |
| `convocatoria.pdf` | `.pdf` | Documento PDF. |
| `imagen.jpg` | `.jpg` | Imagen. |

Pregunta histórica: `2023-E2-019`.

Trampa: cambiar la extensión manualmente no convierte realmente el contenido del archivo.

#### Asociación de archivos

Windows asocia tipos de archivo con aplicaciones. Si se intenta abrir un archivo sin aplicación asociada, Windows muestra el cuadro `¿Cómo quieres abrir este archivo?` para elegir una aplicación.

Pregunta histórica: `2023-E2-033`.

#### Compartir carpetas

Compartir una carpeta significa hacer que su contenido sea accesible a otros usuarios de la red, según permisos.

Pregunta histórica: `2023-E2-025`.

| Permiso | Idea básica |
| --- | --- |
| Lectura | Ver o abrir contenido. |
| Escritura/modificación | Cambiar, crear o borrar contenido, si está permitido. |
| Compartir en red | Permitir acceso desde otros equipos o usuarios. |

No confundir compartir con comprimir: compartir facilita acceso; comprimir reduce tamaño o agrupa archivos.

#### Unidades USB y extracción segura

Cuando se usa una memoria USB u otro dispositivo externo, se recomienda quitarlo de forma segura para evitar pérdida de datos, especialmente si hay escritura pendiente.

Pregunta histórica: `2023-E2-011`.

### 2.3. Vistas, agrupación y paneles

El Explorador permite cambiar cómo se muestran los elementos.

| Vista | Utilidad |
| --- | --- |
| Iconos grandes/medianos/pequeños | Reconocer elementos visualmente. |
| Lista | Mostrar muchos elementos de forma compacta. |
| Detalles | Ver columnas como nombre, fecha, tipo y tamaño. |
| Mosaicos/contenido | Mostrar información ampliada. |

#### Agrupar y ordenar

Ordenar cambia el orden de presentación. Agrupar separa los elementos por categorías, como tipo, fecha o tamaño.

Cuando se agrupan archivos, el número entre paréntesis junto al nombre del grupo representa el número de archivos de ese grupo.

Pregunta histórica: `2023-E2-017`.

| Acción | Qué hace |
| --- | --- |
| Ordenar por tipo | Cambia el orden según tipo de archivo. |
| Agrupar por tipo | Separa elementos en grupos por tipo. |
| Ordenar por fecha | Ordena según fecha. |
| Agrupar por fecha | Crea grupos temporales. |

#### Panel de vista previa

El panel de vista previa permite ver el contenido de determinados archivos sin abrirlos. No funciona igual con todos los tipos de archivo, pero sí puede mostrar una vista preliminar cuando el archivo lo permite.

Pregunta histórica: `2025-E2-005`.

No confundir:

| Elemento | Función |
| --- | --- |
| Panel de vista previa | Muestra contenido sin abrir. |
| Panel de detalles | Muestra propiedades y metadatos. |
| Propiedades | Cuadro con información y opciones del elemento. |

### 2.4. Operaciones de búsqueda

Windows 10 permite buscar archivos y carpetas desde el Explorador y desde la búsqueda del sistema.

En el Explorador, el cuadro de búsqueda busca dentro de la ubicación actual. Si estamos en una carpeta concreta, la búsqueda se limita normalmente a esa carpeta y sus subcarpetas.

| Búsqueda | Ejemplo |
| --- | --- |
| Por nombre | `informe` |
| Por extensión | `*.pdf`, `*.docx` |
| Por tipo | Documentos, imágenes, carpetas. |
| Por fecha | Modificado recientemente, ayer, esta semana. |
| Por tamaño | Grande, pequeño, etc. |
| Por contenido | Texto dentro de ciertos archivos indexados. |

#### Comodines básicos

| Comodín | Uso |
| --- | --- |
| `*` | Sustituye cualquier cadena de caracteres. |
| `?` | Sustituye un único carácter. |

Ejemplos:

| Patrón | Puede encontrar |
| --- | --- |
| `*.pdf` | Archivos PDF. |
| `informe*` | Archivos que empiezan por informe. |
| `foto?.jpg` | `foto1.jpg`, `foto2.jpg`, etc. |

#### Indexación

La indexación permite acelerar búsquedas en ubicaciones habituales. Si una ubicación no está indexada, la búsqueda puede ser más lenta o menos completa para contenido interno.

### 2.5. Accesorios de Windows

Los accesorios son aplicaciones básicas incluidas en Windows 10. Pueden aparecer en preguntas de identificación funcional.

| Accesorio | Función |
| --- | --- |
| Bloc de notas | Editar texto sin formato. |
| WordPad | Editar texto enriquecido básico. |
| Paint | Crear o editar imágenes sencillas. |
| Recortes / Recorte y anotación | Capturar partes de la pantalla. |
| Calculadora | Realizar cálculos. |
| Mapa de caracteres | Insertar caracteres especiales. |
| Grabadora de voz | Grabar audio. |
| Conexión a Escritorio remoto | Conectarse a otro equipo si está permitido. |

Trampa: Word y Excel no son accesorios de Windows; son aplicaciones de Microsoft Office/Microsoft 365.

### 2.6. Herramientas del sistema

Las herramientas del sistema permiten administrar recursos, unidades, dispositivos, servicios y tareas.

#### Administrador de tareas

El Administrador de tareas permite ver en tiempo real procesos activos, rendimiento, aplicaciones de inicio y uso de recursos.

Pregunta histórica: `2025-E2-002`.

| Pestaña/zona | Utilidad |
| --- | --- |
| Procesos | Ver aplicaciones y procesos activos. |
| Rendimiento | CPU, memoria, disco, red, GPU. |
| Inicio | Aplicaciones que se inician con Windows. |
| Usuarios | Uso por usuario. |
| Detalles | Información técnica de procesos. |
| Servicios | Estado básico de servicios. |

#### Administrador de discos

El Administrador de discos permite gestionar discos, particiones y volúmenes. Con privilegios suficientes puede abrirse con `diskmgmt.msc`.

Pregunta histórica: `2025-E2-031`.

No confundir comandos:

| Comando | Abre |
| --- | --- |
| `diskmgmt.msc` | Administrador de discos. |
| `devmgmt.msc` | Administrador de dispositivos. |
| `services.msc` | Servicios. |
| `taskschd.msc` | Programador de tareas. |

#### Otras herramientas del sistema

| Herramienta | Para qué sirve |
| --- | --- |
| Administrador de dispositivos | Ver y gestionar hardware y controladores. |
| Servicios | Ver y administrar servicios del sistema. |
| Programador de tareas | Automatizar tareas. |
| Visor de eventos | Consultar registros del sistema. |
| Información del sistema | Ver datos de hardware, componentes y software. |
| Liberador de espacio / Sensor de almacenamiento | Ayudar a liberar espacio. |
| Restaurar sistema | Volver a un punto anterior si está configurado. |
| Seguridad de Windows | Antivirus, firewall y protección del sistema. |

### 2.7. Cobertura de la convocatoria

| Punto oficial | Dónde se trabaja |
| --- | --- |
| Explorador de Windows | Partes del Explorador, vistas, paneles, rutas, unidades. |
| Gestión de carpetas y archivos | Crear, copiar, mover, eliminar, propiedades, extensiones, asociaciones. |
| Operaciones de búsqueda | Cuadro de búsqueda, filtros, comodines, indexación. |
| Este equipo | Unidades, propiedades, espacio libre, carpetas principales. |
| Acceso rápido | Carpetas frecuentes, ancladas y archivos recientes. |
| Accesorios | Bloc de notas, WordPad, Paint, Recortes, Calculadora, etc. |
| Herramientas del sistema | Administrador de tareas, discos, dispositivos, servicios, tareas. |

## 3. Conceptos clave

| Concepto | Definición preguntable | Trampa habitual |
| --- | --- | --- |
| `Windows + E` | Abre el Explorador de archivos | Confundir con `Alt + Tab` |
| Barra de direcciones | Muestra la ruta actual | Confundir con barra de estado |
| Panel de vista previa | Permite ver contenido sin abrir | Confundir con propiedades |
| Carpeta personal | Carpeta propia de cada usuario | Confundir con Documentos |
| Extensión | Caracteres tras punto al final del nombre | Pensar que indica permisos |
| Compartir carpeta | Hacerla accesible a usuarios de red | Confundir con comprimir |
| Quitar USB con seguridad | Evitar pérdida de datos | Pensar que es por temperatura |
| Agrupar archivos | Separar por categorías | Confundir con ordenar |
| Número entre paréntesis | Cantidad de archivos del grupo | Confundir con número de orden |
| Este equipo | Unidades, dispositivos y carpetas principales | Confundir con Acceso rápido |
| Acceso rápido | Carpetas frecuentes o ancladas | Pensar que borrar de ahí borra del disco |
| Administrador de tareas | Procesos y rendimiento en tiempo real | Confundir con servicios |
| `diskmgmt.msc` | Administrador de discos | Confundir con `devmgmt.msc` |

## 4. Articulos importantes

No hay artículos legales aplicables. Es materia práctica de ofimática. Las referencias relevantes son funcionales:

| Área | Referencia práctica |
| --- | --- |
| Explorador | `Windows + E`, barra de direcciones, paneles, vistas. |
| Este equipo | Unidades, propiedades, espacio libre. |
| Acceso rápido | Carpetas ancladas, frecuentes y recientes. |
| Búsqueda | Cuadro de búsqueda, comodines, filtros e indexación. |
| Archivos | Extensiones, asociaciones, propiedades. |
| Sistema | Administrador de tareas, Administrador de discos, dispositivos, servicios. |
| Comandos `.msc` | `diskmgmt.msc`, `devmgmt.msc`, `services.msc`, `taskschd.msc`. |

## 5. Errores tipicos

| Error | Corrección |
| --- | --- |
| Confundir Acceso rápido con la ubicación real | Acceso rápido es un acceso, no la carpeta original. |
| Pensar que desanclar borra archivos | Desanclar sólo quita el acceso. |
| Confundir Este equipo con Acceso rápido | Este equipo muestra unidades y dispositivos. |
| Confundir barra de direcciones con barra de estado | La dirección muestra la ruta; la barra de estado resume información. |
| Pensar que el panel de vista previa abre el archivo | Lo previsualiza sin abrirlo como aplicación principal. |
| Confundir extensión con nombre completo | La extensión es la parte tras el punto final. |
| Cambiar extensión creyendo que convierte el archivo | Puede impedir abrirlo correctamente. |
| Confundir compartir con comprimir | Compartir da acceso; comprimir reduce o agrupa. |
| Quitar un USB sin seguridad durante escritura | Puede producir pérdida de datos. |
| Confundir ordenar y agrupar | Ordenar reordena; agrupar crea bloques por categoría. |
| Confundir Administrador de tareas con Administrador de discos | Tareas muestra procesos; discos gestiona volúmenes. |
| Confundir `diskmgmt.msc` con `devmgmt.msc` | `diskmgmt.msc` abre discos; `devmgmt.msc` dispositivos. |

## 6. Preguntas historicas

| Id | Subtema | Qué preguntó | Respuesta |
| --- | --- | --- | :---: |
| `2023-E2-003` | Explorador de archivos | Carpeta creada para cada usuario | C |
| `2023-E2-011` | Explorador de archivos | Quitar memoria USB de forma segura | C |
| `2023-E2-017` | Explorador de archivos | Número entre paréntesis al agrupar | B |
| `2023-E2-019` | Explorador de archivos | Qué es la extensión de archivo | A |
| `2023-E2-025` | Explorador de archivos | Qué es compartir una carpeta | B |
| `2023-E2-033` | Explorador de archivos | Archivo sin aplicación asociada | C |
| `2025-E2-001` | Explorador de archivos | Atajo para abrir Explorador | C |
| `2025-E2-002` | Herramientas del sistema | Ver procesos activos en tiempo real | B |
| `2025-E2-003` | Explorador de archivos | Ver espacio libre de una unidad | C |
| `2025-E2-004` | Explorador de archivos | Dónde ver ruta completa | A |
| `2025-E2-005` | Explorador de archivos | Ver contenido sin abrir archivo | A |
| `2025-E2-031` | Herramientas del sistema | Comando Administrador de discos | D |

## 7. Test de entrenamiento

1. ¿Qué combinación de teclas abre el Explorador de archivos en Windows 10?
   A. `Alt + Tab`
   B. `Ctrl + E`
   C. `Windows + E`
   D. `Alt + E`

2. ¿Dónde se ve la ruta completa de una carpeta abierta en el Explorador?
   A. Barra de direcciones
   B. Panel de vista previa
   C. Barra de estado
   D. Papelera

3. ¿Qué es la extensión de un archivo?
   A. El nombre del usuario que lo creó
   B. La parte final tras un punto que orienta sobre el tipo de archivo
   C. El permiso de red del archivo
   D. El tamaño físico del disco

4. ¿Qué permite el panel de vista previa?
   A. Ver contenido de ciertos archivos sin abrirlos
   B. Cambiar el nombre de todos los archivos
   C. Formatear una unidad
   D. Crear usuarios

5. En `Este equipo`, al abrir las propiedades de una unidad se puede ver:
   A. El espacio usado y libre
   B. La contraseña del usuario
   C. Los correos enviados
   D. Las reglas de Outlook

6. Compartir una carpeta significa:
   A. Reducir su tamaño
   B. Hacerla accesible a otros usuarios de la red
   C. Cambiar su extensión
   D. Eliminarla de Acceso rápido

7. ¿Por qué se recomienda quitar de forma segura una memoria USB?
   A. Para evitar pérdida de datos
   B. Para aumentar la memoria RAM
   C. Para borrar archivos temporales
   D. Para cambiar la letra de unidad

8. Al agrupar archivos por tipo, el número entre paréntesis junto al grupo indica:
   A. Número de orden del grupo
   B. Número de archivos del grupo
   C. Número de aplicaciones instaladas
   D. Número de usuarios conectados

9. Si un archivo no tiene aplicación asociada, Windows puede mostrar:
   A. `¿Cómo quieres abrir este archivo?`
   B. El Administrador de discos
   C. El Panel de control de red
   D. La Papelera

10. ¿Qué herramienta permite ver procesos activos en tiempo real?
    A. Administrador de tareas
    B. Bloc de notas
    C. Paint
    D. Mapa de caracteres

11. ¿Qué comando abre el Administrador de discos?
    A. `services.msc`
    B. `devmgmt.msc`
    C. `taskschd.msc`
    D. `diskmgmt.msc`

12. ¿Qué muestra principalmente `Acceso rápido`?
    A. Unidades físicas y particiones
    B. Carpetas frecuentes o ancladas y archivos recientes
    C. Sólo impresoras
    D. Sólo procesos activos

13. Desanclar una carpeta de Acceso rápido:
    A. Borra la carpeta del disco
    B. La comprime
    C. Quita el acceso sin borrar la carpeta real
    D. Cambia su extensión

14. ¿Qué patrón de búsqueda localizaría archivos PDF?
    A. `*.pdf`
    B. `?pdf`
    C. `pdf*.*.exe`
    D. `pdf:carpeta`

15. En búsquedas, el comodín `?` sustituye:
    A. Cualquier cadena de caracteres
    B. Un único carácter
    C. Una unidad de disco
    D. Una carpeta personal

16. ¿Qué diferencia hay entre ordenar y agrupar?
    A. Ordenar crea grupos; agrupar elimina archivos
    B. Ordenar cambia el orden; agrupar crea bloques por categoría
    C. Son exactamente lo mismo
    D. Agrupar sólo funciona en USB

17. ¿Qué accesorio sirve para editar texto sin formato?
    A. Bloc de notas
    B. Paint
    C. Calculadora
    D. Administrador de tareas

18. ¿Qué accesorio permite capturar una parte de la pantalla?
    A. Recortes / Recorte y anotación
    B. Administrador de discos
    C. Servicios
    D. Programador de tareas

19. ¿Qué herramienta se usa para ver y gestionar hardware y controladores?
    A. Administrador de dispositivos
    B. WordPad
    C. Acceso rápido
    D. Barra de estado

20. ¿Qué comando abre el Administrador de dispositivos?
    A. `diskmgmt.msc`
    B. `devmgmt.msc`
    C. `services.msc`
    D. `taskschd.msc`

21. ¿Qué comando abre Servicios?
    A. `services.msc`
    B. `diskmgmt.msc`
    C. `calc.exe`
    D. `notepad.exe`

22. ¿Qué comando abre el Programador de tareas?
    A. `taskschd.msc`
    B. `devmgmt.msc`
    C. `mspaint.exe`
    D. `explorer.exe`

23. ¿Qué vista del Explorador resulta especialmente útil para ver columnas como tipo, fecha y tamaño?
    A. Detalles
    B. Iconos grandes
    C. Diseño web
    D. Presentación

24. ¿Qué ocurre al cambiar manualmente una extensión?
    A. Siempre convierte el archivo correctamente
    B. Puede impedir que se abra correctamente
    C. Borra el archivo original
    D. Lo comparte en red

25. ¿Qué elemento muestra información resumida de la carpeta o selección?
    A. Barra de estado
    B. Cuadro de búsqueda
    C. Administrador de discos
    D. Papelera

26. ¿Qué herramienta permite consultar registros del sistema?
    A. Visor de eventos
    B. Paint
    C. Bloc de notas
    D. Calculadora

27. ¿Qué herramienta puede ayudar a liberar espacio en Windows 10?
    A. Sensor de almacenamiento
    B. Mapa de caracteres
    C. Acceso rápido
    D. WordPad

28. ¿Qué afirmación sobre `Este equipo` es correcta?
    A. Muestra unidades, dispositivos y carpetas principales
    B. Sólo muestra archivos recientes
    C. Sólo sirve para abrir Paint
    D. Es igual que el Administrador de tareas

29. ¿Qué función tiene la Papelera de reciclaje?
    A. Guardar temporalmente muchos elementos eliminados para posible restauración
    B. Mostrar procesos activos
    C. Administrar particiones
    D. Cambiar extensiones automáticamente

30. ¿Qué opción permite ver información como tipo, ubicación, tamaño o fechas de un archivo?
    A. Propiedades
    B. Compartir
    C. Acceso rápido
    D. Calculadora

31. ¿Qué significa mover un archivo?
    A. Cambiarlo de ubicación
    B. Crear siempre una copia idéntica
    C. Cambiar su extensión
    D. Abrirlo con otra aplicación

32. ¿Qué significa copiar un archivo?
    A. Crear un duplicado en otra ubicación
    B. Eliminar el original necesariamente
    C. Cambiar permisos de red
    D. Formatear la unidad

33. ¿Qué hace la indexación de Windows?
    A. Ayuda a acelerar búsquedas en ubicaciones incluidas
    B. Elimina duplicados
    C. Cambia el tipo de archivo
    D. Desinstala aplicaciones

34. ¿Qué aplicación básica se usa para cálculos?
    A. Calculadora
    B. Paint
    C. WordPad
    D. Visor de eventos

35. ¿Qué afirmación sobre el panel de detalles es correcta?
    A. Muestra información o propiedades del elemento seleccionado
    B. Abre siempre el archivo
    C. Borra el archivo seleccionado
    D. Formatea unidades externas

### Plantilla

| Nº | Respuesta | Explicación |
| ---: | :---: | --- |
| 1 | C | `Windows + E` abre el Explorador. |
| 2 | A | La barra de direcciones muestra la ruta. |
| 3 | B | La extensión va tras el punto final del nombre. |
| 4 | A | El panel de vista previa muestra contenido sin abrir. |
| 5 | A | Las propiedades de unidad muestran espacio usado y libre. |
| 6 | B | Compartir permite acceso de otros usuarios de red. |
| 7 | A | La extracción segura evita pérdida de datos. |
| 8 | B | El número indica cuántos archivos hay en el grupo. |
| 9 | A | Windows pregunta con qué aplicación abrirlo. |
| 10 | A | El Administrador de tareas muestra procesos activos. |
| 11 | D | `diskmgmt.msc` abre el Administrador de discos. |
| 12 | B | Acceso rápido muestra carpetas frecuentes/ancladas y recientes. |
| 13 | C | Desanclar no borra la carpeta real. |
| 14 | A | `*.pdf` localiza archivos con extensión PDF. |
| 15 | B | `?` sustituye un carácter. |
| 16 | B | Ordenar reordena; agrupar crea bloques. |
| 17 | A | Bloc de notas edita texto sin formato. |
| 18 | A | Recortes permite capturas. |
| 19 | A | Dispositivos gestiona hardware y controladores. |
| 20 | B | `devmgmt.msc` abre Administrador de dispositivos. |
| 21 | A | `services.msc` abre Servicios. |
| 22 | A | `taskschd.msc` abre Programador de tareas. |
| 23 | A | Detalles muestra columnas informativas. |
| 24 | B | Cambiar extensión puede impedir abrirlo. |
| 25 | A | La barra de estado resume información. |
| 26 | A | El Visor de eventos muestra registros. |
| 27 | A | Sensor de almacenamiento ayuda a liberar espacio. |
| 28 | A | Este equipo muestra unidades y dispositivos. |
| 29 | A | La Papelera permite restaurar muchos elementos eliminados. |
| 30 | A | Propiedades muestra datos del archivo. |
| 31 | A | Mover cambia ubicación. |
| 32 | A | Copiar crea duplicado. |
| 33 | A | La indexación acelera búsquedas. |
| 34 | A | Calculadora realiza cálculos. |
| 35 | A | El panel de detalles muestra información del elemento. |

## 8. Esquema final

| Bloque | Qué recordar |
| --- | --- |
| Versión | Windows 10. |
| Explorador | `Windows + E`, barra de direcciones, paneles, vistas. |
| Archivos | Nombre, extensión, asociación con aplicación. |
| Carpetas | Crear, copiar, mover, borrar, compartir, propiedades. |
| Este equipo | Unidades, dispositivos, espacio libre y propiedades. |
| Acceso rápido | Carpetas frecuentes/ancladas y archivos recientes. |
| Búsqueda | Cuadro de búsqueda, `*`, `?`, filtros e indexación. |
| Vista previa | Ver ciertos archivos sin abrirlos. |
| Agrupar | El número entre paréntesis indica archivos del grupo. |
| USB | Quitar de forma segura evita pérdida de datos. |
| Administrador de tareas | Procesos activos y rendimiento. |
| Administrador de discos | `diskmgmt.msc`. |
| Dispositivos | `devmgmt.msc`. |
| Servicios | `services.msc`. |
| Programador de tareas | `taskschd.msc`. |

Repaso de máxima prioridad:

- `Windows + E` abre el Explorador.
- La ruta completa se ve en la barra de direcciones.
- `Este equipo` permite acceder a unidades y consultar espacio libre.
- `Acceso rápido` no es una ubicación real: contiene accesos.
- La extensión orienta sobre el tipo de archivo.
- Si no hay aplicación asociada, Windows pregunta cómo abrir el archivo.
- Compartir carpeta = hacerla accesible en red.
- Panel de vista previa = ver contenido sin abrir.
- Administrador de tareas = procesos activos.
- `diskmgmt.msc` = Administrador de discos.
