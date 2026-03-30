let miUrl    = null;

let miObjeto = null;

miUrl    = 'https://filingo.com';

miObjeto = parsearUrl(miUrl);

console.log(miObjeto);


function parsearUrl(laURL){

    try {
        const miDireccion = new URL(laURL);

        return miDireccion
    } catch (error) {
        console.log("Error: " + error)
        return null;
    }
    

}

console.log(miObjeto.host + " " + miObjeto.pathname + " " + miObjeto.searchParams) 