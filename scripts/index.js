

/*//datos API//

let arrayDolar = [];

fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
.then(e => e.json())
.then(e =>{
    arrayDolar.push(e);
})

*/

//fecha actualizada//

var fecha = new Date();

document.getElementById("fecha").innerHTML = `Actualizado ${fecha.toLocaleString()}`;






