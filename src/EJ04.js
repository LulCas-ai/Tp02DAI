import fs from "node:fs";

function copiar(copyPath, pastePath){
    fs.copyFile(copyPath, pastePath, (err) => {
        if (err) {
            console.error("Error al copiar:", err);
        } else {
            console.log("Archivo copiado correctamente");
        }
    });
}

copiar("C:/Users/49518218/Downloads/images.jfif", "C:/Users/49518218/Downloads/images(1).jfif")