module.exports = {
    sync: function(nombre) 
    {
        return `Hola ${nombre}! Bienvenido a Node.js`;
    },
    //Recibe una funcion para ser ejecutada dentro
    withCallback: function(nombre, callback) 
    {
        console.log("Comenzando callback...");
        setTimeout(()=>{
            console.log(callback(nombre));
        }, 5000);
    },
    withPromise: function(nombre) 
    {
        console.log("Comenzando promesa...");
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(nombre);
            }, 5000); 
        })
    }
}