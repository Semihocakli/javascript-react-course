// https://www.btdersleri.com/ders/JavaScript-Kar%C5%9F%C4%B1la%C5%9Ft%C4%B1rma-ve-Mant%C4%B1ksal-Operat%C3%B6rler
// https://www.w3schools.com/js/js_comparisons.asp
// https://www.yusufsezer.com.tr/javascript-operatorler/

// kullanicinin bilmedigi sistemdeki password bilgisi :)
const sysPassword = 123456;  // number
const userPasswordPrompt = "123456" // string

// const userPasswordPrompt = prompt("Sifrenizi Giriniz:")

// console.log(userPasswordPrompt, typeof(userPasswordPrompt))

/*
== Eşitse
var a = 10;
var b = "10";
console.log(a==b)  "Ekranda çıkan sonuç = true"
a ve b değeri birbirine eşit olduğu için sonuç true olacaktır.

=== Hem değeri hem de türü eşitse
var a = 10;
var b = "10";
console.log(a===b)  "Ekranda çıkan sonuç = false"
a ve b değeri arasında üç tane eşittir olmasından ötürü burada hem değerin hem de türün eşit olup olmadığı kontrol edilecektir.
a ve b değişkenin değeri aynı olmasına karşın türleri farklı olduğu için sonuç false olacaktır.
*/

console.log("Sifre Dogru mu? ", sysPassword == userPasswordPrompt)
console.log("typeof", typeof(sysPassword) == typeof(userPasswordPrompt))
console.log("Sifre ve Veri Tipi Dogru mu? ", sysPassword === userPasswordPrompt)

const superUser = "admin"
console.log("normal kullanici mi?", superUser != "Ayla")

const milenyum = 2000

console.log("2000 yilindan buyuk mu? ", 2010 > milenyum)
console.log("1980 yilindan kucuk mu? milenyum dan", 1980 < milenyum)

const ageLimit = 18
const userAge = 15
console.log("kullanici sisteme girebilir mi 18+", userAge >= ageLimit)
console.log("kullanici sisteme girebilir mi? 18 Yasindan Kucuk Olanlar", userAge <= ageLimit)

const userName = "Mine"
const userPassword = 121231243

console.log("User bilgisi 3 karakterden buyuk mu ve password var mi?", userName.length > 3 && userPassword)
console.log("User bilgisi 3 karakterden buyuk mu veya password var mi?", userName.length > 3 || userPassword)