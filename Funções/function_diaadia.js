let userName = getFirstName("Wesley Acacio Carvalho"," ")
console.log("Seja bem-vindo "+userName)

userName = getFirstName("Bianca-Acacio-Carvalho","-")
console.log("Seja bem-vindo "+userName)

//function getFirstName(name){
//    let firstName = name.split(" ")[0]
//    return firstName
//}



function getFirstName(name,splitChar){
    let firstName = name.split(splitChar)[0]
    return firstName
}