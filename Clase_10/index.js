const cp = require('child_process');

//Ejecuta una instruccion hacia el sistema
function execCommand(command)
{
    cp.exec(command, (error, stdout, stderr) => {
        
        //Checa si hubo un error
        if(error)
        {
            console.log(`Error ${error}`);
            return;
        }

        //Si hay algun contenido
        if(stdout)
        {
            console.log(`Standard out: \n${stdout}`);
        }

        //Si hay algun contenido
        if(stderr)
        {
            console.log(`Standard err: \n${stderr}`);
        }
    });
}

//Los comandos que se ejecutan simulando una consola
//execCommand("ls");
execCommand("node ./src/script.js --base=5");