var listaMentores = ['ivan', 'fernanda', 'valentina'];
var listaAlumnos = ['lucas', 'tomas', 'marina', 'lechu', 'colo1', 'riki', 'colo2', 'matias', 'nacho', 'anton', 'nico', 'cristian'];


listaMentores.sort()
listaAlumnos.sort()
var contenedor = document.getElementById('container');

var encabezadoAlumno = document.createElement('h2')
var encabezadoMentor = document.createElement('h2')




var divAlumnos = document.createElement('div');
var lista = document.createElement('ul');

//aca  le damos titulo ala lista de alumnos
divAlumnos.append(encabezadoAlumno);
encabezadoAlumno.textContent='lista de alumnos'

//


for (var i = 0; i < listaAlumnos.length; i++) {
    var listaItem = document.createElement('li');
    listaItem.textContent = listaAlumnos[i];

    lista.append(listaItem);
    divAlumnos.append(lista);

}




var div2 = document.createElement('div')
var lista2 = document.createElement('ul');

div2.append(encabezadoMentor);
encabezadoMentor.textContent='lista de mentores'

for (i = 0; i < listaMentores.length; i++) 
{
    var listaItem = document.createElement('li');
    listaItem.textContent = listaMentores[i];

    lista2.append(listaItem);
    div2.append(lista2);

}


console.log(divAlumnos,div2)

contenedor.append(divAlumnos,div2);

divAlumnos.id = 'alumnos';
div2.id='mentores';

