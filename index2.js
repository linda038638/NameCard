let bool1 = true //=>T
let bool2 = 100<50 //=>F

// +-*/% 算術運算子
// > < >= <= === !== 條件運算子
// && || ! 邏輯運算子
let bool3 = true&&false //T和F =>兩邊都對才是對=>F
                        //第一個值F的話，右邊連看都不看
let bool4 = true||false //T或F =>其中一個對就對=>T
                        //第一個值T的話，右邊連看都不看
let bool5 = !(true&&false) //相反邏輯運算!F=T

if(bool1){
    console.log("bool1=正確")
}else{
    console.log("錯誤")
}

let score = 100
let bool6 = score === 99 //===表示比較左和右
// > < >= <= === !== 條件運算子
console.log(bool6)