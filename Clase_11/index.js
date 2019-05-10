const errors = require('./src/errors');

try
{
    errors.standardErr.range();
}catch(error)
{
    console.log("Ha ocurrido un error ", error);
}

console.log("Hola");

