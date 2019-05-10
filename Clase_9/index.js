const readline = require('readline');

//Crea una interfaz de readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const q = ["Cual es tu primer nombre: ", "Cual es tu apellido: ", "Cual es tu edad: "];

//Funcion que regresa una promesa
const askCuestion = (rl, question) => {
    return new Promise((resolve, reject) => {
        
        //Muestra un texto en consola y espera una respuesta desde su callback
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

//Funcion que realiza las preguntas usando sincronismo con async/await y regresa una promesa
const ask = (questions) => {
    return new Promise(async (resolve, reject) => {
        let results = [];
        for(let i = 0; i < questions.length; i++)
        {
            const result = await askCuestion(rl, questions[i]);
            results.push(result);
        }

        rl.close();
        resolve(results);
    });
};

ask(q).then((q) => {
    console.log(`Hola ${q[0]} ${q[1]} tu edad es de ${q[2]} años`);
});