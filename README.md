# Proyecto de restful en Nodejs
### Tecnologias utilizadas:
**Mongodb**
**Docker**

### Para generar el contenedor de docker de mongodb:
docker run --name mongodes -p 27017:27017 -v /database:/data/db  -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=secret  -d mongo
