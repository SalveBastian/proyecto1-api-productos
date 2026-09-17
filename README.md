# Proyecto 1 - API de productos en Docker

API REST en memoria con cinco operaciones: listar, consultar, crear, actualizar y eliminar productos.

## Ejecutar

```sh
docker build -t api-productos:1.0 .
docker run -d --name api-productos -p 3000:3000 api-productos:1.0
docker ps
docker logs api-productos
```

## Probar los endpoints

```sh
curl http://localhost:3000/products
curl http://localhost:3000/products/1
curl -X POST http://localhost:3000/products -H "Content-Type: application/json" -d '{"name":"Webcam","price":120000}'
curl -X PUT http://localhost:3000/products/1 -H "Content-Type: application/json" -d '{"name":"Teclado mecanico","price":150000}'
curl -X DELETE http://localhost:3000/products/1
```

Una imagen es la plantilla inmutable construida por Docker; un contenedor es una instancia en ejecucion de esa imagen. Para detener y borrar el contenedor: `docker stop api-productos` y `docker rm api-productos`.

## Evidencias pendientes de capturar

Ejecute los comandos anteriores en su equipo y añada capturas de `docker ps`, `docker logs` y las cinco respuestas de curl en una carpeta `evidencias/`.
