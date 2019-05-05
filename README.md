## Proyecto de restful en Nodejs
#### Objetivo:
El objetivo de esta practica es aprender a desarrollar con javascript del lado del servidor.

##Atención
El archivo app.js llama a las variables globales las cuales se crearon en una carpeta llamada environment dentro esta el archivo config.environment.js con las variables inicalizads:

`process.env.PORT = process.env.PORT || 3000;`

 `process.env.MONGO_USER = 'admin';`
 
 `process.env.MONGO_PASSWORD = 'secret';`
 
 `process.env.MONGO_SERVER = 'localhost';`
 
` process.env.MONGO_PORT = '27017';`

Es necesario crearlo para correr el proyecto.
 
#### Tecnologias utilizadas:
1. **Docker**
2. **Mongodb**
3. **Express**

#### Para generar el contenedor de docker de mongodb:
`docker run --name mongodes -p 27017:27017 -v /database:/data/db  -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=secret  -d mongo`

El comando de docker run inicializa el contenedor a partir de una imagen oficial de mongo. --name le da un nombre al contenedor. -p realiza un mapeo de puertos. -v realiza un mapeo de carpetas, -e son lar variables de entorno para la configuración del usuario de la base. -d configura el contenedor de forma desatendida.

Una vez creado el contenedor solo utilizaremos `docker start nombreContenedor` para iniciarlo y `docker stop nombreContenedor` para detenerlo.
