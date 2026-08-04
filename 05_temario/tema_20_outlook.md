# Tema 20. Correo electrónico: Outlook

Correo electrónico: Outlook. Conceptos elementales y funcionamiento. Enviar, recibir, responder y reenviar mensajes. Creación de mensajes. Reglas de mensaje. Libreta de direcciones. Agenda. Convocatorias y citas.

## 1. Resumen ejecutivo

La versión oficial para este tema es `Microsoft 365 versión escritorio`, conforme al Anexo I, apartado Primero.2.2 de la convocatoria 2026. Por tanto, Outlook debe estudiarse como aplicación de escritorio de Microsoft 365. Las preguntas históricas de Outlook 2016 sirven como referencia de recurrencia cuando tratan funciones básicas que se mantienen, pero no son la versión oficial de la convocatoria.

Outlook es la aplicación de Microsoft 365 destinada principalmente a gestionar el correo electrónico, el calendario, los contactos y determinadas tareas de organización personal. En el examen interesa dominar su uso administrativo: crear mensajes, distinguir campos de destinatarios, responder y reenviar, adjuntar archivos, usar conversaciones, aplicar marcas de seguimiento, crear reglas, consultar la libreta de direcciones y manejar citas, reuniones y convocatorias.

La estadística histórica disponible muestra 11 preguntas clasificadas en el Tema 20. Una pregunta (`2023-E2-006`) figuraba originalmente clasificada aquí, pero trata realmente de Access; ya se corrigio en origen (`02_preguntas_extraidas/`) y se reclasifico en el Tema 19.

| Subtema | Preguntas históricas útiles |
| --- | ---: |
| Correo electrónico y Outlook | 8 |
| Agenda / Calendario | 1 |
| Reglas de mensaje | 1 |
| Identificación de aplicación Microsoft 365 | 1 |

Los puntos de mayor rendimiento son:

- Outlook como aplicación de correo electrónico de Microsoft 365.
- Pestana `Inicio` y comando `Nuevo mensaje de correo electrónico` en Outlook clasico.
- Campos `Para`, `CC` y `CCO`.
- Diferencia entre destinatario principal, copia visible y copia oculta.
- Prefijos `RE:` y `FW:`/`RV:` según idioma o configuración.
- Diferencia entre responder y reenviar.
- Conversaciones: agrupación de mensajes por asunto.
- Marcas de seguimiento.
- Reglas como acciones automáticas sobre mensajes.
- Calendario: citas, reuniones, invitaciones y respuestas.
- Diferencia entre modulo Calendario y modulo Contactos.

El enunciado oficial exige cubrir todos estos puntos:

- Conceptos elementales y funcionamiento.
- Enviar, recibir, responder y reenviar mensajes.
- Creación de mensajes.
- Reglas de mensaje.
- Libreta de direcciones.
- Agenda.
- Convocatorias y citas.

Idea clave: Outlook no es solo "correo"; en examen se pregunta como centro de gestion de comunicaciones. `Correo` gestiona mensajes, `Calendario` gestiona citas y reuniones, y `Personas/Contactos` gestiona direcciones y listas.

## 2. Desarrollo

### 2.1. Outlook en Microsoft 365

Outlook es una aplicación de Microsoft 365 para gestionar:

| Área | Función principal |
| --- | --- |
| Correo | Enviar, recibir, responder, reenviar, organizar y buscar mensajes. |
| Calendario | Crear citas, reuniones, convocatorias y controlar disponibilidad. |
| Personas / Contactos | Guardar contactos, consultar direcciones y crear grupos o listas. |
| Tareas / seguimiento | Marcar mensajes, recordar acciones pendientes y organizar trabajo. |

Pregunta histórica: `2025-E2-035`.

#### Outlook frente a otras aplicaciones

| Aplicación | Uso principal |
| --- | --- |
| Outlook | Correo, calendario, contactos y organización personal. |
| Word | Documentos de texto. |
| Excel | Hojas de calculo. |
| Access | Bases de datos. |
| Teams | Colaboración, chat, equipos y videoconferencias. |

Trampa habitual: Outlook puede integrarse con Teams, OneDrive o SharePoint, pero su función básica examinable en el Tema 20 es correo y agenda. La colaboración con Teams, SharePoint y OneDrive pertenece sobre todo al Tema 21.

#### Conceptos elementales de correo electrónico

El programa oficial incluye "conceptos elementales y funcionamiento". No se exige administrar servidores, pero si entender el flujo básico.

| Concepto | Significado para examen |
| --- | --- |
| Cuenta de correo | Identidad configurada para enviar y recibir mensajes. |
| Buzon | Espacio donde se almacenan mensajes, carpetas y calendario asociado. |
| Remitente | Persona o cuenta que envia el mensaje. |
| Destinatario | Persona o cuenta que recibe el mensaje. |
| Servidor de correo | Sistema que gestiona envio, recepción y almacenamiento. |
| Sincronización | Actualización entre Outlook y el buzon. |
| Encabezado del mensaje | Datos técnicos como remitente, destinatarios, fecha y asunto. |
| Cuerpo del mensaje | Contenido redactado por el usuario. |

En entornos Microsoft 365 suele intervenir Exchange Online, pero el examen se centra en que Outlook es el cliente de escritorio usado para trabajar con correo, calendario y contactos.

#### Flujo básico de un mensaje

| Fase | Que ocurre |
| --- | --- |
| Redacción | Se completan destinatarios, asunto, cuerpo y adjuntos si procede. |
| Envio | Outlook remite el mensaje a través de la cuenta configurada. |
| Bandeja de salida | Puede retener mensajes pendientes si no se han enviado aun. |
| Entrega | El mensaje llega al buzon de destino si no hay errores. |
| Recepción | El destinatario lo ve en la Bandeja de entrada u otra carpeta por reglas. |
| Respuesta o reenvio | Se mantiene o se deriva la comunicación. |

Trampa: `Elementos enviados` contiene mensajes ya remitidos; `Bandeja de salida` contiene mensajes pendientes de envio.

### 2.2. Interfaz básica de Outlook

Outlook de escritorio se organiza en modulos o vistas. Los nombres exactos pueden variar ligeramente según si se usa Outlook clasico o el nuevo Outlook, pero para oposición conviene reconocer las funciones.

| Elemento | Para que sirve |
| --- | --- |
| Cinta de opciones | Agrupa comandos por pestanas: Inicio, Enviar y recibir, Carpeta, Vista, etc. |
| Panel de carpetas | Muestra buzones y carpetas: Bandeja de entrada, Elementos enviados, Borradores, etc. |
| Lista de mensajes | Relación de mensajes de la carpeta seleccionada. |
| Panel de lectura | Permite leer el mensaje sin abrirlo en ventana independiente. |
| Barra de búsqueda | Localiza mensajes, personas o contenido. |
| Modulos | Correo, Calendario, Personas/Contactos y otros accesos. |

En Outlook clasico, el comando `Nuevo mensaje de correo electrónico` se encuentra en la pestana `Inicio`.

Pregunta histórica: `2023-E2-001`.

#### Pestana Archivo o vista Backstage

La pestana `Archivo` no sirve para redactar el mensaje, sino para configurar y administrar Outlook.

| Opción | Utilidad |
| --- | --- |
| Información de la cuenta | Ver cuenta configurada y datos generales. |
| Configuración de cuenta | Anadir, modificar o administrar cuentas y archivos de datos. |
| Administrar reglas y alertas | Crear, editar, activar, desactivar o reordenar reglas. |
| Administrar complementos | Revisar complementos de Outlook. |
| Opciones | Configuración de correo, calendario, contactos, idioma y personalización. |

Trampa: `Nuevo mensaje` esta en `Inicio`; `Archivo` concentra configuración, cuenta, opciones y reglas avanzadas.

### 2.3. Carpetas de correo

Las carpetas permiten organizar los mensajes.

| Carpeta | Contenido habitual |
| --- | --- |
| Bandeja de entrada | Mensajes recibidos. |
| Borradores | Mensajes redactados pero no enviados. |
| Elementos enviados | Mensajes enviados. |
| Elementos eliminados | Mensajes borrados. |
| Correo no deseado | Mensajes identificados como spam o sospechosos. |
| Archivo | Mensajes conservados fuera de la bandeja de entrada. |

No debe confundirse `Borradores` con `Elementos enviados`: un borrador todavia no ha salido; un elemento enviado ya ha sido remitido.

#### Estados y organización de mensajes

| Estado o marca | Significado |
| --- | --- |
| Leido / no leido | Indica si el mensaje se ha abierto o marcado como leido. |
| Marcado para seguimiento | Senala acción pendiente. |
| Categoría | Etiqueta visual para clasificar. |
| Importancia alta/baja | Prioridad comunicada por el remitente. |
| Con adjunto | El mensaje incluye archivo o elemento. |
| Archivado | Se conserva fuera de la bandeja de entrada. |

Trampa: marcar como no leido no reenvia ni recupera un mensaje; solo cambia el estado visual.

### 2.4. Creación de mensajes

Crear un mensaje consiste en redactar un correo nuevo y completar sus campos esenciales.

| Campo o elemento | Función |
| --- | --- |
| Para | Destinatario o destinatarios principales. |
| CC | Copia visible para otros destinatarios. |
| CCO | Copia oculta; los demas destinatarios no ven esa dirección. |
| Asunto | Título breve del mensaje. |
| Cuerpo | Contenido del mensaje. |
| Adjuntar archivo | Incluye documentos, imagenes u otros archivos. |
| Firma | Texto automático con datos del remitente. |
| Prioridad / importancia | Senala importancia alta o baja, sin sustituir al contenido. |

Preguntas históricas: `2025-E2-023`, `2025-E2-025`, `2023-E2-034`.

#### Campos Para, CC y CCO

| Campo | Visibilidad | Uso correcto |
| --- | --- | --- |
| Para | Visible | Personas a las que se dirige directamente el mensaje. |
| CC | Visible | Personas informadas en copia. |
| CCO | Oculta para el resto | Personas que reciben copia sin aparecer ante los demas. |

Ejemplo administrativo:

- `Para`: unidad que debe tramitar el expediente.
- `CC`: jefatura que debe estar informada.
- `CCO`: uso excepcional para proteger direcciones o evitar difusión innecesaria.

Trampa de examen: `CC` no es copia oculta; `CCO` significa `con copia oculta`.

#### Asunto

El asunto debe identificar el contenido del correo. Outlook usa el asunto para agrupar conversaciones, facilitar búsquedas y distinguir respuestas o reenvios.

Buenas prácticas:

- Ser concreto: `Expediente 123/2026 - subsanación`.
- Evitar asuntos vacios.
- No cambiar el asunto de una conversación salvo que cambie realmente el tema.

#### Opciones habituales al crear mensajes

| Opción | Función |
| --- | --- |
| Firma | Inserta datos del remitente de forma automática. |
| Importancia alta/baja | Marca prioridad informativa. |
| Solicitar confirmación de lectura | Pide aviso de lectura, si el sistema y destinatario lo permiten. |
| Solicitar confirmación de entrega | Pide aviso de entrega al buzon, si esta disponible. |
| Revisar ortografia | Comprueba el texto antes de enviar. |
| Guardar borrador | Conserva mensaje no enviado. |
| Formato HTML/texto | Controla presentación del cuerpo del mensaje. |

Trampa: una confirmación de lectura no garantiza que el destinatario haya entendido o tramitado el contenido; solo indica lectura si se emite.

### 2.5. Adjuntar archivos

Adjuntar un archivo consiste en incorporar al correo un documento u objeto. En Outlook de escritorio puede hacerse desde la pestana o grupo correspondiente de inserción/inclusión, según la versión y ventana activa.

| Opción | Resultado |
| --- | --- |
| Adjuntar archivo | Inserta un archivo del equipo o ubicación disponible. |
| Adjuntar elemento de Outlook | Puede incluir mensajes, contactos, tareas o elementos de calendario. |
| Compartir vinculo | En entornos Microsoft 365 puede enviar un enlace a un archivo de OneDrive o SharePoint. |

Pregunta histórica relacionada: `2023-E2-028`, porque reenviar suele conservar adjuntos y responder normalmente no los incluye.

Trampas:

- Adjuntar no equivale a pegar texto en el cuerpo del mensaje.
- Un vinculo compartido no es exactamente lo mismo que un archivo adjunto tradicional.
- Responder a un mensaje recibido normalmente no vuelve a incluir los adjuntos originales.

#### Adjuntos frente a vinculos compartidos

| Archivo adjunto | Vinculo de OneDrive/SharePoint |
| --- | --- |
| Se envia una copia del archivo. | Se comparte acceso al archivo centralizado. |
| Puede generar versiones duplicadas. | Facilita trabajar sobre una versión comun. |
| El destinatario conserva la copia recibida. | El acceso depende de permisos del enlace. |
| Adecuado para envio puntual. | Adecuado para colaboración y archivos grandes. |

Idea de examen: si el enunciado habla de adjuntar en la ventana de mensaje de Outlook, se incorpora un archivo o elemento al correo. Si habla de colaborar en Microsoft 365, puede ser mas correcto compartir un vinculo.

### 2.6. Enviar y recibir mensajes

Outlook permite enviar y recibir correo mediante una cuenta configurada. En entornos corporativos suele conectarse a Exchange Online o Microsoft 365, aunque el examen se centra en el uso funcional, no en la administración técnica del servidor.

| Acción | Significado |
| --- | --- |
| Enviar | Remitir el mensaje a sus destinatarios. |
| Recibir / sincronizar | Actualizar el buzon con mensajes nuevos. |
| Enviar y recibir | Comando que fuerza o gestiona la sincronización. |
| Bandeja de salida | Lugar temporal de mensajes pendientes de envio. |
| Elementos enviados | Lugar donde quedan los mensajes ya enviados. |

Si no existe cuenta configurada o hay problemas de conexion, Outlook puede no enviar el mensaje hasta que se resuelva.

#### Errores y confirmaciones de envio

| Situación | Consecuencia |
| --- | --- |
| Dirección incorrecta | Puede producir mensaje de error o no entrega. |
| Archivo demasiado grande | Puede impedir el envio o requerir vinculo. |
| Sin conexion | El mensaje puede quedar pendiente en Bandeja de salida. |
| Regla saliente | Puede aplicarse al enviar si esta configurada. |
| Recuperar mensaje | Solo funciona en escenarios concretos de organización; no es garantía general. |

Trampa: que un mensaje aparezca en `Elementos enviados` indica que Outlook lo envio desde la cuenta, no necesariamente que el destinatario lo haya leido.

### 2.7. Responder, responder a todos y reenviar

Estas tres acciones son muy preguntables.

| Acción | Destinatarios | Adjuntos originales | Uso |
| --- | --- | --- | --- |
| Responder | Remitente original | Normalmente no se incluyen | Contestar al remitente. |
| Responder a todos | Remitente y destinatarios visibles | Normalmente no se incluyen | Contestar a todos los participantes visibles. |
| Reenviar | Nuevos destinatarios elegidos por el usuario | Normalmente se incluyen | Enviar el mensaje recibido a otra persona. |

Pregunta histórica: `2023-E2-028`.

#### Prefijos del asunto

| Prefijo | Significado |
| --- | --- |
| `RE:` | Respuesta. |
| `FW:` / `RV:` | Reenvio. `FW:` aparece en preguntas históricas; `RV:` es habitual en interfaces en espanol. |

Pregunta histórica: `2025-E2-024`.

Trampa: `RE:` no indica reenvio. El prefijo de reenvio puede aparecer como `FW:` o `RV:` según idioma/configuración; si la pregunta reproduce la clave histórica del proyecto, `FW:` es reenvio.

### 2.8. Conversaciones

Una conversación en Outlook agrupa mensajes relacionados, normalmente por el mismo asunto. Permite ver juntos el mensaje inicial y sus respuestas.

Pregunta histórica: `2023-E2-005`.

| Concepto | Explicación |
| --- | --- |
| Conversación | Agrupación de mensajes con el mismo asunto o hilo. |
| Mensaje individual | Correo aislado dentro de la conversación. |
| Vista por conversaciones | Forma de visualizar mensajes agrupados. |

No se agrupan por remitente, destinatario ni fecha de envio como criterio principal de la pregunta histórica, sino por asunto.

### 2.9. Marcas de seguimiento, categorías y organización

Las marcas de seguimiento permiten senalar mensajes que requieren acción posterior.

| Herramienta | Función |
| --- | --- |
| Marca de seguimiento | Indica que un mensaje requiere seguimiento. |
| Categorías | Clasifican mensajes por colores o etiquetas. |
| Importancia alta/baja | Informa de prioridad percibida. |
| No leido/leido | Estado de lectura del mensaje. |
| Carpetas | Organización manual o automatizada. |
| Carpetas de búsqueda | Carpetas virtuales con mensajes que cumplen criterios. |
| Limpieza de conversación | Ayuda a eliminar mensajes redundantes de una conversación. |

Las marcas de seguimiento pueden aplicarse tanto a mensajes enviados como recibidos.

Pregunta histórica: `2023-E2-015`.

#### Carpetas de búsqueda, correo no deseado y limpieza

Outlook incluye herramientas de organización que no deben confundirse con reglas.

| Herramienta | Función |
| --- | --- |
| Carpeta de búsqueda | Vista virtual de mensajes que cumplen un criterio, por ejemplo no leidos. |
| Correo no deseado | Carpeta y filtros para spam o mensajes sospechosos. |
| Limpieza | Elimina mensajes redundantes de una conversación, si procede. |
| Categorías por colores | Clasificación visual de mensajes, citas o contactos. |

Trampa: una carpeta de búsqueda no mueve fisicamente los mensajes; los muestra reunidos por criterio.

Trampa: una marca de seguimiento no envia automaticamente el mensaje ni crea por si sola una reunion. Es una ayuda de organización.

### 2.10. Reglas de mensaje

Una regla es una acción automática configurada por el usuario para procesar correos que cumplen determinadas condiciones. Puede aplicarse a mensajes entrantes y, en ciertos casos, a mensajes salientes.

Pregunta histórica: `2025-E2-022`.

| Elemento de una regla | Ejemplo |
| --- | --- |
| Nombre | `Mover facturas`. |
| Condición | Mensajes de un remitente, con palabras en el asunto, enviados a una cuenta, etc. |
| Acción | Mover a carpeta, marcar, reenviar, asignar categoría, eliminar. |
| Excepción | No aplicar si procede de un remitente concreto o contiene cierta palabra. |

Ejemplos de reglas:

- Mover mensajes de una dirección concreta a una carpeta.
- Marcar con importancia los mensajes que contengan una palabra en el asunto.
- Asignar una categoría a correos enviados a una lista.
- Reenviar determinados mensajes, si la organización lo permite.

#### Reglas de cliente y reglas de servidor

En Outlook clasico pueden existir reglas que solo se ejecutan cuando Outlook esta abierto y otras que se procesan en el servidor. Para examen C2 basta con saber que algunas reglas dependen de Outlook y otras pueden ejecutarse desde el buzon, pero no suele pedirse administración avanzada.

#### Orden y alcance de las reglas

| Aspecto | Idea clave |
| --- | --- |
| Condiciones | Determinan a que mensajes se aplica. |
| Acciones | Mover, copiar, reenviar, categorizar, marcar o eliminar. |
| Excepciones | Impiden aplicar la regla en casos concretos. |
| Orden | Si hay varias reglas, el orden puede influir en el resultado. |
| Reglas existentes | Pueden ejecutarse sobre mensajes ya recibidos si se indica. |

Trampa: una regla automatiza acciones; no es una alerta manual ni una carpeta por si sola.

#### Donde crear reglas

| Ruta | Uso |
| --- | --- |
| `Inicio` -> `Reglas` -> `Crear regla` | Crear regla rápida a partir de un mensaje seleccionado. |
| `Archivo` -> `Administrar reglas y alertas` | Gestion avanzada: asistente, activar/desactivar, editar, eliminar y reordenar. |

Trampa: `Administrar reglas y alertas` esta en `Archivo`, no en Calendario ni en Personas.

#### Reglas frente a pasos rápidos

| Herramienta | Diferencia |
| --- | --- |
| Regla | Se aplica automaticamente si se cumplen condiciones. |
| Paso rápido | Ejecuta una o varias acciones cuando el usuario lo pulsa. |

Trampa: una regla no es una plantilla de mensaje ni un programa externo instalado.

### 2.11. Libreta de direcciones y contactos

La libreta de direcciones permite seleccionar destinatarios al crear mensajes o convocatorias. Los contactos almacenan información de personas o entidades.

| Concepto | Función |
| --- | --- |
| Contacto | Registro con nombre, correo, teléfono, cargo u otros datos. |
| Libreta de direcciones | Lista consultable de direcciones disponibles. |
| Lista de contactos / grupo | Conjunto de destinatarios para enviar mensajes a varias personas. |
| Autocompletar | Sugerencia de direcciones usadas anteriormente. |

Al redactar un correo, los botones `Para`, `CC` y `CCO` permiten seleccionar direcciones desde la libreta o contactos disponibles.

#### Contactos, libreta y listas

| Elemento | Diferencia importante |
| --- | --- |
| Contacto personal | Registro guardado por el usuario. |
| Libreta de direcciones | Repositorio consultable de direcciones. |
| Lista de contactos | Grupo de destinatarios gestionado como conjunto. |
| Autocompletar | Sugerencias basadas en uso previo, no necesariamente contacto guardado. |
| Directorio corporativo | Direcciones de la organización, si existe. |
| Lista de direcciones global | Directorio centralizado en entornos Exchange/Microsoft 365 corporativos. |

Trampa: que Outlook sugiera una dirección por autocompletar no significa que sea un contacto guardado en la libreta.

#### Crear contactos y grupos de contactos

Desde el modulo `Personas` se pueden crear fichas de contacto y grupos de contactos.

| Acción | Resultado |
| --- | --- |
| Nuevo contacto | Crea ficha con nombre, correo, teléfono, empresa, dirección o notas. |
| Nuevo grupo de contactos | Agrupa varias direcciones bajo un nombre. |
| Guardar y cerrar | Guarda los cambios del contacto o grupo. |

Trampa: un grupo de contactos o lista de distribución sirve para enviar a varias direcciones; no es una reunion del calendario.

No debe confundirse:

| No confundir | Motivo |
| --- | --- |
| Contacto | Persona o entidad guardada. |
| Lista de contactos | Grupo de direcciones para enviar a varias personas. |
| Calendario | Gestiona citas y reuniones, no contactos. |

Pregunta histórica indirecta: `2025-E2-021`, porque gestionar contactos o listas de distribución no es una acción propia del modulo Calendario.

### 2.12. Agenda y calendario

El modulo Calendario de Outlook sirve para organizar el tiempo mediante citas, reuniones y convocatorias.

| Elemento | Significado |
| --- | --- |
| Cita | Bloque de tiempo del propio calendario sin necesidad de asistentes. |
| Reunion | Evento con asistentes invitados. |
| Convocatoria | Invitación enviada a asistentes para una reunion. |
| Evento | Actividad de uno o varios días completos. |
| Cita periódica | Cita que se repite según una pauta. |
| Disponibilidad | Estado de tiempo: libre, ocupado, provisional, fuera de la oficina, etc. |
| Recordatorio | Aviso antes del evento. |

Pregunta histórica: `2025-E2-021`.

En el Calendario se pueden crear citas o reuniones, enviar invitaciones, gestionar respuestas y eliminar eventos. No es el lugar propio para gestionar contactos o crear listas de distribución.

#### Vistas y disponibilidad del calendario

| Elemento | Utilidad |
| --- | --- |
| Vista día/semana/mes | Cambia la forma de ver la agenda. |
| Mostrar como libre | No bloquea disponibilidad. |
| Mostrar como ocupado | Bloquea disponibilidad para otras personas. |
| Provisional | Reserva tentativa. |
| Fuera de la oficina | Indica ausencia. |
| Asistente de programación | Ayuda a buscar huecos según disponibilidad, si hay datos. |

Trampa: cambiar la vista del calendario no modifica las citas; solo cambia como se muestran.

### 2.13. Citas

Una cita es un elemento del calendario que reserva tiempo para el usuario. Puede tener asunto, ubicación, inicio, fin, recordatorio, periodicidad y notas.

| Campo | Utilidad |
| --- | --- |
| Asunto | Identifica la cita. |
| Ubicación | Lugar fisico o virtual. |
| Inicio y fin | Duración. |
| Mostrar como | Libre, ocupado, provisional, fuera de la oficina. |
| Recordatorio | Aviso previo. |
| Periodicidad | Repetición diaria, semanal, mensual, etc. |

Ejemplo: `Revisión de documentación - lunes 10:00 a 10:30`.

#### Eventos de día completo

Un evento ocupa uno o varios días completos, por ejemplo vacaciones, una conferencia o una jornada institucional. Se muestra normalmente en la parte superior del día y no tiene la misma lógica de hora de inicio y fin que una cita ordinaria.

| Cita | Evento |
| --- | --- |
| Tiene hora de inicio y fin. | Ocupa día completo o varios días. |
| Puede ser personal. | Suele representar ausencia, jornada o hecho prolongado. |
| Bloquea un tramo horario. | Aparece como banda o elemento de día completo. |

Trampa: evento no es sinonimo exacto de reunion. La reunion tiene asistentes convocados.

### 2.14. Reuniones y convocatorias

Una reunion es un evento de calendario con asistentes. Al crearla, Outlook envia una convocatoria para que los asistentes respondan.

| Elemento | Función |
| --- | --- |
| Asistentes obligatorios | Personas cuya asistencia se requiere. |
| Asistentes opcionales | Personas invitadas de forma no imprescindible. |
| Asunto | Tema de la reunion. |
| Ubicación / sala | Lugar o recurso reservado. |
| Fecha y hora | Momento de inicio y fin. |
| Cuerpo | Orden del día, instrucciones o documentación. |
| Respuestas | Aceptar, provisional o rechazar. |

#### Cita frente a reunion

| Cita | Reunion |
| --- | --- |
| Normalmente solo afecta al calendario propio. | Incluye asistentes. |
| No exige enviar invitaciones. | Genera convocatoria. |
| Sirve para reservar tiempo personal. | Sirve para coordinar varias agendas. |

#### Convocatoria

La convocatoria es la invitación de reunion enviada a los asistentes. Los asistentes pueden aceptar, rechazar o responder como provisional. Outlook puede registrar esas respuestas para el organizador.

#### Gestion de convocatorias

| Acción | Resultado |
| --- | --- |
| Enviar convocatoria | Invita a asistentes y crea evento de reunion. |
| Aceptar | Confirma asistencia y actualiza calendario. |
| Provisional | Indica posible asistencia. |
| Rechazar | Declina la reunion. |
| Proponer nueva hora | Sugiere otro horario, si esta permitido. |
| Actualizar reunion | Cambia datos y notifica a asistentes. |
| Cancelar reunion | Anula la convocatoria y avisa a invitados. |

Trampa: una cita personal no envia convocatoria; una reunion con asistentes si.

### 2.15. Búsqueda, filtros y vistas

Outlook permite localizar mensajes mediante búsqueda y cambiar vistas.

| Función | Uso |
| --- | --- |
| Buscar | Localizar mensajes por remitente, asunto, texto, fecha o adjuntos. |
| Filtrar | Mostrar solo no leidos, marcados, con adjuntos, etc. |
| Ordenar | Cambiar el criterio: fecha, remitente, asunto, tamano. |
| Vista por conversaciones | Agrupar mensajes relacionados. |
| Panel de lectura | Leer sin abrir ventana independiente. |

Estas funciones no aparecen expresamente como epigrafe independiente, pero ayudan a entender el funcionamiento de Outlook.

### 2.16. Seguridad y buenas prácticas administrativas

Aunque el tema no es de ciberseguridad, Outlook se usa en un entorno administrativo y conviene conocer reglas básicas.

| Riesgo | Buena práctica |
| --- | --- |
| Enviar a destinatario incorrecto | Revisar `Para`, `CC` y `CCO` antes de enviar. |
| Difundir direcciones personales | Usar `CCO` cuando proceda y respetar protección de datos. |
| Abrir adjuntos sospechosos | Verificar remitente y contexto. |
| Cambiar asunto sin motivo | Mantener la trazabilidad de la conversación. |
| Responder a todos indebidamente | Usarlo solo cuando todos deban conocer la respuesta. |

### 2.17. Cobertura de la convocatoria

| Punto oficial | Cobertura en este tema |
| --- | --- |
| Conceptos elementales y funcionamiento | Outlook, modulos, interfaz, carpetas, búsqueda y organización. |
| Enviar mensajes | Creación, destinatarios, asunto, adjuntos, envio. |
| Recibir mensajes | Bandeja de entrada, sincronización, lectura, carpetas. |
| Responder mensajes | Responder y responder a todos. |
| Reenviar mensajes | Reenvio, prefijo `FW:`/`RV:`, adjuntos. |
| Creación de mensajes | Campos `Para`, `CC`, `CCO`, asunto, cuerpo y adjuntos. |
| Reglas de mensaje | Condiciones, acciones, excepciones y ejemplos. |
| Libreta de direcciones | Contactos, listas y selección de destinatarios. |
| Agenda | Calendario, citas, eventos, reuniones y disponibilidad. |
| Convocatorias y citas | Diferencia entre cita, reunion y convocatoria. |

## 3. Conceptos clave

| Concepto | Definición examinable | Preguntable como |
| --- | --- | --- |
| Outlook | Aplicación de Microsoft 365 para correo, calendario y contactos. | Identificar aplicación de correo. |
| Correo electrónico | Servicio para enviar y recibir mensajes digitales. | Concepto básico. |
| Bandeja de entrada | Carpeta de mensajes recibidos. | Función de carpeta. |
| Bandeja de salida | Mensajes pendientes de envio. | Confundir con enviados. |
| Elementos enviados | Carpeta de mensajes remitidos. | Diferenciar de borradores. |
| Borrador | Mensaje guardado sin enviar. | Estado del mensaje. |
| Para | Destinatario principal. | Campo destinatario. |
| CC | Copia visible. | Copia no oculta. |
| CCO | Copia oculta. | Significado de CCO. |
| Asunto | Título del mensaje. | Conversaciones y búsqueda. |
| Adjuntar archivo | Incluir archivo en un mensaje. | Grupo/comando o efecto. |
| Vinculo compartido | Acceso a archivo de OneDrive/SharePoint. | Confundir con adjunto tradicional. |
| Responder | Contestar al remitente. | Diferencia con reenviar. |
| Responder a todos | Contestar a remitente y destinatarios visibles. | Uso correcto. |
| Reenviar | Enviar un mensaje recibido a nuevos destinatarios. | Prefijo y adjuntos. |
| `RE:` | Prefijo de respuesta. | No confundir con reenvio. |
| `FW:` / `RV:` | Prefijo de reenvio. | `FW:` es pregunta histórica; `RV:` puede aparecer en Outlook en espanol. |
| Conversación | Agrupación de mensajes por asunto o hilo. | Criterio de agrupación. |
| Marca de seguimiento | Senal para controlar acciones pendientes. | Aplicable a enviados y recibidos. |
| Regla | Acción automática según condiciones. | Definición de regla. |
| Condición | Criterio que activa la regla. | De, asunto, destinatario, etc. |
| Acción | Lo que hace la regla. | Mover, marcar, reenviar, eliminar. |
| Excepción | Caso en que no se aplica la regla. | Confundir con condición. |
| Administrar reglas y alertas | Gestion avanzada de reglas desde Archivo | Confundir con Calendario |
| Carpeta de búsqueda | Vista virtual por criterios | Pensar que mueve mensajes |
| Limpieza | Elimina mensajes redundantes de conversaciones | Confundir con borrar carpeta |
| Contacto | Registro de datos de una persona o entidad. | Libreta de direcciones. |
| Libreta de direcciones | Repositorio para seleccionar destinatarios. | Para, CC, CCO. |
| Lista de contactos | Grupo de destinatarios. | No es acción de calendario. |
| Autocompletar | Sugerencia de direcciones usadas. | No siempre es contacto guardado. |
| Lista global de direcciones | Directorio corporativo centralizado | Confundir con contacto personal |
| Calendario | Modulo de agenda de Outlook. | Citas y reuniones. |
| Cita | Reserva de tiempo sin asistentes obligatorios. | Diferencia con reunion. |
| Evento | Elemento de día completo | Confundir con reunion |
| Reunion | Evento con asistentes invitados. | Convocatoria. |
| Convocatoria | Invitación de reunion enviada a asistentes. | Respuestas aceptar/rechazar. |
| Recordatorio | Aviso previo de evento. | Función de agenda. |
| Disponibilidad | Estado libre/ocupado/provisional. | Organización de reuniones. |
| Asistente de programación | Ayuda a buscar huecos de reunion. | Confundir con libreta de direcciones. |

## 4. Artículos importantes

No hay artículos legales propios de Outlook. En este tema las referencias son funcionales y de convocatoria.

| Referencia | Relevancia para examen |
| --- | --- |
| Convocatoria CAM C2 2026, Anexo I, apartado Primero.2.2 | Fija `Microsoft 365 versión escritorio` para Office y Outlook. |
| Programa oficial, Tema 20 | Delimita correo electrónico, Outlook, mensajes, reglas, libreta, agenda, convocatorias y citas. |
| Soporte de Microsoft: crear mensajes en Outlook | Confirma campos `Para`, `CC`, `CCO`, asunto, adjuntos y envio en Outlook de Microsoft 365. |
| Soporte de Microsoft: reglas en Outlook | Confirma que las reglas realizan acciones automáticas sobre mensajes según condiciones. |
| Soporte de Microsoft: conversaciones en Outlook | Confirma la vista agrupada por conversaciones. |
| Outlook `Archivo` -> `Administrar reglas y alertas` | Ruta funcional para reglas avanzadas. |

Referencias normativas transversales:

| Norma | Por que puede afectar al uso administrativo del correo |
| --- | --- |
| Ley Organica 3/2018 y RGPD | Protección de datos al enviar correos, especialmente destinatarios y copias. |
| Ley 39/2015 | Contexto de administración electrónica y comunicaciones administrativas, aunque no regula Outlook como aplicación. |

## 5. Errores tipicos

| Error | Corrección |
| --- | --- |
| Pensar que `CC` es copia oculta | `CC` es visible; `CCO` es oculta. |
| Confundir `Para` con `CC` | `Para` es destinatario principal; `CC` solo copia visible. |
| Creer que Outlook solo permite un destinatario | Permite varios destinatarios. |
| Asociar `FW:` o `RV:` a respuesta | `FW:`/`RV:` indican reenvio; `RE:` indica respuesta. |
| Decir que responder y reenviar son iguales | Responder contesta al remitente; reenviar envia a nuevos destinatarios. |
| Pensar que responder incluye siempre adjuntos | Normalmente no incluye los adjuntos originales. |
| Pensar que reenviar no incluye adjuntos | Normalmente los conserva, salvo configuración o excepciones. |
| Confundir Bandeja de salida con Elementos enviados | Salida tiene pendientes; enviados ya salieron. |
| Pensar que autocompletar equivale a contacto guardado | Puede ser solo una sugerencia por uso anterior. |
| Creer que una confirmación de lectura garantiza tramitación | Solo informa lectura si se emite. |
| Agrupar conversaciones por remitente | La pregunta histórica las vincula al mismo asunto. |
| Creer que una regla es una plantilla de correo | Una regla automatiza acciones sobre mensajes. |
| Confundir condición y excepción de una regla | La condición activa; la excepción impide aplicar en casos concretos. |
| Buscar reglas en el Calendario | La gestion avanzada esta en `Archivo` -> `Administrar reglas y alertas`. |
| Pensar que una carpeta de búsqueda mueve mensajes | Es virtual; muestra mensajes por criterio. |
| Confundir limpieza con borrar toda una carpeta | Limpieza elimina redundancias de conversación, según configuración. |
| Gestionar contactos desde Calendario como función propia | Contactos/listas pertenecen a Personas/Contactos, no al modulo Calendario. |
| Confundir cita y reunion | La reunion tiene asistentes; la cita puede ser solo personal. |
| Confundir evento con reunion | Evento ocupa día completo; reunion tiene asistentes convocados. |
| Creer que convocatoria y cita son sinonimos | La convocatoria es invitación de reunion; la cita reserva tiempo. |
| Pensar que cambiar la vista del calendario cambia los eventos | Solo cambia la visualización. |
| Estudiar Outlook 2016 como versión base | La convocatoria 2026 fija Microsoft 365 versión escritorio. |
| Meter Teams y SharePoint dentro del Tema 20 | La integración colaborativa corresponde principalmente al Tema 21. |

## 6. Preguntas históricas

### Preguntas directamente útiles para el Tema 20

| ID | Anyo | Subtema | Idea preguntada | Respuesta |
| --- | ---: | --- | --- | --- |
| `2023-E2-001` | 2023 | Correo electrónico | Pestana donde esta `Nuevo mensaje de correo electrónico` en Outlook 2016 | `Inicio` |
| `2023-E2-005` | 2023 | Correo electrónico | Conversación en Outlook | Agrupación de mensajes con el mismo asunto |
| `2023-E2-015` | 2023 | Correo electrónico | Marcas de seguimiento | Se aplican a enviados y recibidos |
| `2023-E2-028` | 2023 | Correo electrónico | Diferencia responder / reenviar | Responder no incluye adjuntos; reenviar si |
| `2023-E2-034` | 2023 | Correo electrónico | Significado de CCO | Con copia oculta |
| `2025-E2-021` | 2025 | Agenda | Acción no propia del Calendario | Gestionar contactos o listas de distribución |
| `2025-E2-022` | 2025 | Reglas de mensaje | Definición de regla | Acción automática según condiciones |
| `2025-E2-023` | 2025 | Correo electrónico | Campo de copia visible | `CC` |
| `2025-E2-024` | 2025 | Correo electrónico | Prefijo de reenvio | `FW:` como clave histórica; `RV:` puede aparecer en interfaz espanola |
| `2025-E2-025` | 2025 | Outlook | Destinatarios principales | `Para` |
| `2025-E2-035` | 2025 | Correo electrónico | Aplicación Microsoft 365 de correo | Outlook |

### Incidencia de clasificación (corregida)

| ID | Motivo | Estado |
| --- | --- | --- |
| `2023-E2-006` | Pregunta por campos en tablas de Access, no por Outlook. | Reclasificada al Tema 19 en `02_preguntas_extraidas/` (tema 20 -> 19, subtema "Correo electrónico" -> "Tablas Access"). |

### Cobertura histórica

Con este tema se responden las preguntas históricas útiles porque se cubren:

- Ubicación funcional del nuevo mensaje.
- Definición de conversación.
- Marcas de seguimiento.
- Responder, responder a todos y reenviar.
- `Para`, `CC`, `CCO`.
- Prefijos `RE:` y `FW:`/`RV:`.
- Reglas.
- Calendario, citas, reuniones y contactos.
- Outlook como aplicación de correo de Microsoft 365.

## 7. Test de entrenamiento

### Preguntas

1. En Microsoft 365 de escritorio, la aplicación principal para gestionar correo electrónico es:
   A. Word
   B. Access
   C. Power BI
   D. Outlook

2. En un mensaje de Outlook, el campo `Para` se utiliza para:
   A. Escribir el asunto
   B. Adjuntar archivos
   C. Indicar destinatarios principales
   D. Ocultar destinatarios

3. El campo `CC` permite:
   A. Enviar copia visible a otros destinatarios
   B. Enviar copia oculta
   C. Crear una cita
   D. Marcar el mensaje como urgente

4. El campo `CCO` significa:
   A. Con copia obligatoria
   B. Con correo original
   C. Con copia oculta
   D. Copia de calendario Outlook

5. Si se quiere que un destinatario reciba el correo sin que los demas vean su dirección, debe usarse:
   A. Para
   B. CCO
   C. CC
   D. Asunto

6. El asunto de un correo sirve principalmente para:
   A. Guardar la contrasena del buzon
   B. Elegir la carpeta de destino obligatoria
   C. Identificar brevemente el contenido del mensaje
   D. Sustituir el cuerpo del mensaje

7. En Outlook, `RE:` al comienzo del asunto suele indicar:
   A. Reenvio
   B. Reunion cancelada
   C. Respuesta
   D. Regla eliminada

8. En Outlook, `FW:` o `RV:` al comienzo del asunto suele indicar:
   A. Respuesta
   B. Mensaje archivado
   C. Mensaje sin adjuntos
   D. Reenvio

9. La acción `Responder` envia la contestación normalmente:
   A. A un nuevo destinatario elegido desde cero
   B. Al remitente original
   C. Solo a los contactos favoritos
   D. A todos los usuarios de la organización

10. La acción `Responder a todos` envia la respuesta:
    A. Solo al remitente
    B. A los destinatarios ocultos siempre identificados por Outlook
    C. Solo a los contactos de la libreta
    D. Al remitente y a los destinatarios visibles del mensaje

11. La acción `Reenviar` se usa para:
    A. Eliminar un mensaje recibido
    B. Cambiar la contrasena de la cuenta
    C. Enviar un mensaje recibido a nuevos destinatarios
    D. Crear una tabla de contactos

12. En general, al reenviar un mensaje con adjuntos:
    A. Normalmente se conservan los adjuntos originales
    B. Outlook nunca permite incluir adjuntos
    C. Se transforman en citas
    D. Se eliminan siempre por seguridad

13. En general, al responder a un mensaje con adjuntos:
    A. Siempre se reenvian todos los adjuntos
    B. Se crea automaticamente una reunion
    C. El mensaje pasa a Borradores
    D. Normalmente no se vuelven a incluir los adjuntos originales

14. Una conversación en Outlook agrupa principalmente mensajes:
    A. Con el mismo asunto o hilo
    B. Del mismo tamano
    C. Con el mismo número de adjuntos
    D. Recibidos a la misma hora exacta

15. Las marcas de seguimiento sirven para:
    A. Convertir mensajes en documentos de Word
    B. Crear una base de datos
    C. Bloquear la bandeja de entrada
    D. Senalar mensajes que requieren acción o control posterior

16. Las marcas de seguimiento pueden aplicarse:
    A. Solo a mensajes recibidos
    B. A mensajes enviados y recibidos
    C. Solo a mensajes enviados
    D. Solo a mensajes con adjuntos

17. Una regla de mensaje en Outlook es:
    A. Una plantilla obligatoria de todos los correos
    B. Un programa externo que sustituye a Outlook
    C. Una acción automática configurada por el usuario según condiciones
    D. Una cita periódica del calendario

18. Una regla puede servir para:
    A. Crear una tabla de Access
    B. Editar una formula de Excel
    C. Mover automaticamente mensajes de un remitente a una carpeta
    D. Cambiar la resolución de pantalla

19. En una regla, la condición es:
    A. El texto de la firma
    B. El criterio que debe cumplirse para aplicar la regla
    C. La hora de inicio de una cita
    D. La contrasena del correo

20. En una regla, la acción es:
    A. El nombre del remitente solamente
    B. El campo `CCO`
    C. El formato del calendario
    D. Lo que Outlook hace cuando se cumple la condición

21. La libreta de direcciones se utiliza para:
    A. Crear tablas dinamicas
    B. Seleccionar destinatarios o consultar direcciones
    C. Desfragmentar el disco
    D. Disenar informes de Access

22. Un contacto de Outlook puede contener:
    A. Nombre, correo y teléfono
    B. Solo formulas
    C. Solo gráficos
    D. Exclusivamente contrasenas

23. Una lista de contactos sirve para:
    A. Agrupar destinatarios
    B. Cambiar el idioma de Windows
    C. Ordenar archivos por tipo
    D. Crear campos de Access

24. El modulo Calendario de Outlook permite:
    A. Crear bases de datos relacionales
    B. Crear citas y reuniones
    C. Editar diapositivas
    D. Comprimir discos

25. De las siguientes acciones, no es propia del modulo Calendario:
    A. Crear una cita
    B. Crear una reunion
    C. Eliminar una cita
    D. Gestionar contactos o listas de distribución

26. Una cita en Outlook es:
    A. Una copia oculta
    B. Una carpeta de correo no deseado
    C. Un bloque de tiempo en el calendario
    D. Una regla de reenvio

27. Una reunion se diferencia de una cita porque:
    A. La reunion no puede tener hora
    B. La cita siempre tiene asistentes obligatorios
    C. La cita solo existe en Word
    D. La reunion incluye asistentes invitados

28. Una convocatoria de reunion es:
    A. Una dirección de correo oculta
    B. Un archivo adjunto comprimido
    C. La invitación enviada a los asistentes de una reunion
    D. Una regla de correo no deseado

29. Las respuestas tipicas a una convocatoria son:
    A. Copiar, pegar o cortar
    B. Sumar, restar o dividir
    C. Filtrar, ordenar o agrupar
    D. Aceptar, provisional o rechazar

30. El estado de disponibilidad `Ocupado` en calendario indica:
    A. Que el mensaje esta en Borradores
    B. Que ese tramo aparece reservado
    C. Que el contacto no tiene correo
    D. Que una regla esta desactivada

31. Un recordatorio de calendario sirve para:
    A. Avisar antes de un evento
    B. Ocultar destinatarios
    C. Crear automaticamente una contrasena
    D. Reenviar todos los mensajes

32. `Borradores` contiene:
    A. Mensajes ya enviados
    B. Contactos eliminados
    C. Reuniones aceptadas
    D. Mensajes redactados pero no enviados

33. `Elementos enviados` contiene:
    A. Mensajes recibidos sin leer
    B. Solo citas
    C. Mensajes remitidos
    D. Reglas desactivadas

34. El panel de lectura sirve para:
    A. Ver el contenido del mensaje seleccionado
    B. Crear bases de datos
    C. Modificar permisos de Windows
    D. Dibujar gráficos

35. La vista por conversaciones sirve para:
    A. Eliminar todos los adjuntos
    B. Ver juntos mensajes relacionados
    C. Cambiar la cuenta de Windows
    D. Crear listas de SharePoint

36. Una buena práctica al enviar correos a muchos destinatarios que no deben verse entre si es:
    A. Usar `CCO` cuando proceda
    B. Ponerlos a todos en `CC`
    C. Escribir las direcciones en el asunto
    D. Adjuntar la libreta de direcciones

37. `Responder a todos` debe usarse:
    A. Siempre, aunque no sea necesario
    B. Cuando todos los participantes visibles deban conocer la respuesta
    C. Solo para mensajes sin asunto
    D. Solo en el calendario

38. Una regla no debe confundirse con:
    A. Una plantilla de mensaje
    B. Una automatización sobre mensajes
    C. Una condición
    D. Una acción

39. En Outlook, el boton `Para`, `CC` o `CCO` puede utilizarse para:
    A. Abrir opciones de selección de destinatarios
    B. Crear una tabla dinamica
    C. Cambiar la resolución de pantalla
    D. Cerrar Microsoft 365

40. La convocatoria 2026 exige estudiar Outlook sobre:
    A. Outlook 2003 exclusivamente
    B. Microsoft 365 versión escritorio
    C. Outlook Express
    D. Versión web no indicada como base

### Plantilla de respuestas

| Número | Respuesta | Explicación breve |
| ---: | :---: | --- |
| 1 | D | Outlook gestiona correo en Microsoft 365. |
| 2 | C | `Para` contiene destinatarios principales. |
| 3 | A | `CC` es copia visible. |
| 4 | C | `CCO` es con copia oculta. |
| 5 | B | `CCO` oculta el destinatario frente al resto. |
| 6 | C | El asunto identifica el contenido. |
| 7 | C | `RE:` indica respuesta. |
| 8 | D | `FW:` o `RV:` indican reenvio según idioma/configuración. |
| 9 | B | Responder contesta al remitente original. |
| 10 | D | Responder a todos incluye remitente y destinatarios visibles. |
| 11 | C | Reenviar manda el correo a nuevos destinatarios. |
| 12 | A | El reenvio normalmente conserva adjuntos. |
| 13 | D | La respuesta normalmente no incluye adjuntos originales. |
| 14 | A | Las conversaciones se agrupan por asunto o hilo. |
| 15 | D | Las marcas ayudan al seguimiento. |
| 16 | B | Pueden aplicarse a enviados y recibidos. |
| 17 | C | Una regla automatiza acciones según condiciones. |
| 18 | C | Es un uso tipico de reglas. |
| 19 | B | La condición activa la regla. |
| 20 | D | La acción es lo que ejecuta Outlook. |
| 21 | B | Sirve para elegir o consultar direcciones. |
| 22 | A | Un contacto guarda datos de una persona o entidad. |
| 23 | A | Agrupa destinatarios. |
| 24 | B | Calendario gestiona citas y reuniones. |
| 25 | D | Contactos/listas no es función propia del Calendario. |
| 26 | C | Una cita reserva tiempo. |
| 27 | D | La reunion incluye asistentes. |
| 28 | C | La convocatoria invita a asistentes. |
| 29 | D | Son respuestas habituales de reunion. |
| 30 | B | Ocupado bloquea ese tramo. |
| 31 | A | El recordatorio avisa antes del evento. |
| 32 | D | Borradores son mensajes no enviados. |
| 33 | C | Elementos enviados contiene mensajes remitidos. |
| 34 | A | Panel de lectura muestra mensajes. |
| 35 | B | Agrupa correos relacionados. |
| 36 | A | `CCO` protege visibilidad de direcciones. |
| 37 | B | Debe usarse solo si todos necesitan la respuesta. |
| 38 | A | La regla no es una plantilla. |
| 39 | A | Permite seleccionar destinatarios. |
| 40 | B | La convocatoria fija Microsoft 365 escritorio. |

## 8. Esquema final

### Outlook

- Aplicación de Microsoft 365 para correo, calendario, contactos y organización.
- Versión base 2026: `Microsoft 365 versión escritorio`.
- Modulos clave: Correo, Calendario, Personas/Contactos.

### Mensajes

| Campo | Clave |
| --- | --- |
| `Para` | Destinatarios principales. |
| `CC` | Copia visible. |
| `CCO` | Copia oculta. |
| `Asunto` | Identifica el mensaje y ayuda a agrupar conversaciones. |
| Cuerpo | Contenido. |
| Adjuntos | Archivos incorporados o vinculados. |

### Acciones

| Acción | Clave de examen |
| --- | --- |
| Enviar | Remite el mensaje. |
| Recibir | Entrada/sincronización de mensajes. |
| Responder | Contesta al remitente; normalmente no incluye adjuntos. |
| Responder a todos | Contesta a remitente y destinatarios visibles. |
| Reenviar | Envia a nuevos destinatarios; normalmente conserva adjuntos. |

### Prefijos

- `RE:` = respuesta.
- `FW:`/`RV:` = reenvio.

### Conversaciones y seguimiento

- Conversación: agrupación de mensajes con el mismo asunto o hilo.
- Marcas de seguimiento: control de acciones pendientes.
- Pueden aplicarse a enviados y recibidos.

### Reglas

Regla = automatización sobre mensajes.

Estructura:

1. Nombre.
2. Condición.
3. Acción.
4. Excepción opcional.

Ejemplos: mover a carpeta, marcar, asignar categoría, reenviar o eliminar.

### Libreta de direcciones

- Contacto: datos de persona o entidad.
- Libreta de direcciones: selección de destinatarios.
- Lista de contactos: grupo de direcciones.
- Botones `Para`, `CC` y `CCO`: permiten seleccionar destinatarios.

### Agenda

| Elemento | Definición |
| --- | --- |
| Calendario | Modulo de agenda. |
| Cita | Reserva de tiempo, normalmente sin asistentes. |
| Reunion | Evento con asistentes. |
| Convocatoria | Invitación de reunion. |
| Recordatorio | Aviso previo. |
| Disponibilidad | Libre, ocupado, provisional, fuera de oficina. |

### Trampas mas probables

- `CC` visible; `CCO` oculta.
- `Para` no es lo mismo que `CC`.
- `FW:`/`RV:` reenvio; `RE:` respuesta.
- Responder no es reenviar.
- Conversación se asocia al asunto/hilo.
- Regla no es plantilla ni programa externo.
- Contactos/listas no son función propia del Calendario.
- Cita no es reunion: la reunion tiene asistentes.
