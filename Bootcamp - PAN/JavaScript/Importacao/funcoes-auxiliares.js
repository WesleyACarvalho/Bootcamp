

function gets(){
    return 10;
}

function print(texto){
    console.log(texto)
}

//Possiveis modos de fazer
//***module.exports.gets = gets;

module.exports = {
    gets, print
};