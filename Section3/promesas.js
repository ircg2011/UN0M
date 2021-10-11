const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado = ( id ) => {

    
    return new Promise(( resolve, reject ) => {

        const empleado = empleados.find( e => e.id === id )?.nombre;

        ( empleado ) 
            ? resolve( empleado )
            : reject( `No existe empleado con id ${ id }` );
    });
}

const getSalario = () => {
    return new Promise(( resolve, reject ) => {

        const salario = salarios.find( s => s.id === id )?.salario;

        ( salario ) 
            ? resolve( salario )
            : reject( `No existe salario con id ${ id }` );
    });
}


const id = 3;

// getEmpleado(id)
//     .then( empleado => console.log( empleado ) )
//     .catch( err => console.log(err) );


// getSalario(id)
//     .then( salario => console.log( salario ) )
//     .catch( err => console.log(err) );

let nombre;

getEmpleado(id)
    .then( empleado => {
        nombre = empleado;
        //esto ya devuelve un promise porlo que no es necesario colocar el .then aca
        //podria quedar fuera del .then inicial pues ya hay un promise producto del return de la funcion getSalario.
        return getSalario( id ) 
    })
    .then( salario => console.log( 'El empleado:', nombre, 'tiene un salario de:', salario ))
    .catch( err => console.log( err ) );