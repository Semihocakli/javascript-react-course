// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

let firstName = "hAKan"
let lastName = 'YalCINKaya'
let training = `Template Literals JS`

console.log(firstName + "" + lastName + "" + training)

// string length
console.log("firstName.length :", firstName.length)
console.log('(firstName + " " + lastName).length)', (firstName + " " + lastName).length)
console.log("(firstName + \" \" + lastName).length)", (firstName + " " + lastName).length)

console.log('Erdem\'in Kullandigi Bilgisayar Windows Isletim Sistemine Sahip')

console.log("firstName[0]", firstName[0])
console.log("firstName.charAt(0)", firstName.charAt(0))

console.log("firstName.toLowerCase()", firstName.toLowerCase()) // hepsi kucuk 
console.log("firstName.toUpperCase()", firstName.toUpperCase()) // hepsi buyuk 

console.log("training.search('Lorem')", training.search("Lorem"))
console.log("training.search('Lit')", training.search("Lit"))
console.log("training.toLowerCase().search('lit')", training.toLowerCase().search('lit'))

console.log(training.indexOf("Lorem"))

const adminMail = "admin@js.com"

// user: admin, domain: js.com

const domainName = adminMail.slice( adminMail.search('@') + 1 )
const userName = adminMail.slice(0, adminMail.search('@') )

console.log("userName", userName)
console.log("domainName", domainName)

// training.replace("JS", "JavaScript") yanlış
training = training.replace("JS", "JavaScript") // doğru
console.log(training)


// Ismin Title Seklinde Olusturulmasi
console.log(
  firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase() + 
  " " + lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase()
)

console.log(
  'training.includes("JAVASCRIPT")',
  training.includes("JAVASCRIPT")
)

console.log(
  'training.toUpperCase().includes("JAVASCRIPT")',
  training.toUpperCase().includes("JAVASCRIPT")
)