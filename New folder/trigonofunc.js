let sin=(a)=>{
    return Math.sin(a)
}
let cos=(a)=>{
    return Math.cos(a);
}
let tan=(a)=>{
    return sin(a)/cos(a)
}
let cosec=(a)=>{
    return 1/(sin(a))
}
let sec=(a)=>{
    return 1/cos(a)
}
let cot=(a)=>{
    return 1/tan(a)
}
module.exports={sin,cos,tan,sec,cosec,cot}
