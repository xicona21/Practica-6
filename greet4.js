module.exports = function Greetr(){ // Se crea una funcion constructora Greetr dentro del objeto module.exports
    this.greeting = 'Hi constructor greet4';
    this.greet = function (){
        console.log(this.greeting);
    }
}