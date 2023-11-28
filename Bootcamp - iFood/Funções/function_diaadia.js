let userName = getFirstName("Wesley Acacio Carvalho"," ")
console.log("Seja bem-vindo "+userName)

userName = getFirstName("Bianca-Acacio-Carvalho","-")
console.log("Seja bem-vindo "+userName)

// utilizado para apenas um caracter especifico
//function getFirstName(name){
//    let firstName = name.split(" ")[0]
//    return firstName
//}


// Utilizado quando existe mais de um caracter de separação
function getFirstName(name,splitChar){
    let firstName = name.split(splitChar)[0]
    return firstName
}