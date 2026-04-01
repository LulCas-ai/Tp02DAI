let miUrl = null;

let miObjeto = null;

miUrl = 'http://campus.ort.edu.ar/secundaria/almagro/informatica/tp/2349069/02-introduccion-a-node';
parsearUrl(miUrl)


function parsearUrl(laURL) {

    try {
        const miDireccion = new URL(laURL);
        console.log(
            miDireccion.host + "\n" +
            miDireccion.pathname + "\n" +
            miDireccion.searchParams.toString()
        );
    } catch (error) {
        console.log(error.toString())

    }


}

