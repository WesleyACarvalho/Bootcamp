let invoice = {
    name: "Wesley",
    age: 26,
    products: {
        0: ["mouse 2xwm", 29.90],
        1: ["teclado mecanico", 129.99],
        2: ["monitor", 899.99]
    }
}

console.log(invoice.products)



let name = "Wesley"
let age = 26
let products = ["mouse 2xwm", "teclado mecanico", "monitor"]
let productsValues = [29.90,129.99,899.99]

generateInvoice(name, products, age,productsValues)

function generateInvoice (name,products, age,productsValues){
    console.log("O comprador é " + name)
    console.log("A idade é " + age)
    console.log("-------------")
    console.log("O produto é " + products[0])
    console.log("O valor é " + productsValues[0])
}