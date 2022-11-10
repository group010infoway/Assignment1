const calc = require("./calculator.js");
const caltrigo = require("./trigonofunc.js")
const prompt = require("prompt");

prompt.start()
prompt.get(["num1","num2"],(err,res)=>{
    if (err) throw err;
    console.log("Enter two numbers as num1 & num2")
    console.log(res.num1);
    console.log(res.num2);
    console.log(`Addition of two numbers is= ${calc.add(res.num1,res.num2)}`)
    console.log(`Substraction of two numbers is= ${calc.sub(res.num1,res.num2)}`)
    console.log(`Division of two numbers is= ${calc.div(res.num1,res.num2)}`)
    console.log(`Multiplication of two numbers is= ${calc.multi(res.num1,res.num2)}`)
    console.log(`sin: ${caltrigo.sin(res.Angle)}`)
    console.log(`cos: ${caltrigo.cos(res.Angle)}`)
    console.log(`cosec: ${caltrigo.cosec(res.Angle)}`)
    console.log(`sec: ${caltrigo.sec(res.Angle)}`)
    console.log(`tan: ${caltrigo.tan(res.Angle)}`)
    console.log(`cot: ${caltrigo.cot(res.Angle)}`)
})
