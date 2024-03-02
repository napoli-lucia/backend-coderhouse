# Práctica de integración Ecommerce

### Consigna

Continuar sobre el proyecto del ecommerce y configurar los siguientes elementos:

### Aspectos a incluir

- Agregar el modelo de persistencia de Mongo y mongoose al proyecto.
- Crear una base de datos llamada “ecommerce” dentro de Atlas, crear sus colecciones “carts”, “messages”, “products” y sus respectivos schemas.
- Separar los Managers de fileSystem de los managers de MongoDb en una sola carpeta “dao”. Dentro de dao, agregar también una carpeta “models” donde vivirán los esquemas de MongoDB. La estructura deberá ser igual a la vista en esta clase
- Contener todos los Managers (FileSystem y DB) en una carpeta llamada “Dao”
- Reajustar los servicios con el fin de que puedan funcionar con Mongoose en lugar de FileSystem.
- Implementar una vista nueva en handlebars llamada chat.handlebars, la cual permita implementar un chat como el visto en clase. Los mensajes deberán guardarse en una colección “messages” en mongo (no es necesario implementarlo en FileSystem). El formato es:  {user:correoDelUsuario, message: mensaje del usuario}