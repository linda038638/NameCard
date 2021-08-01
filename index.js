console.log(100)
let myName = "我是許瑜軒" //string 字串
let score = 100.939 //number
let isFake = false // true/false bool
console.log(myName)
console.log(score)
console.log(isFake)

let bag = undefined //空值
let bag2 = null //空值 但是undefined!=null
console.log(bag)
console.log(bag2)

//陣列示例
let array1 =['a','b','c',]
console.log('array1: ',array1)
console.log('array1[0] = ',array1[0])
console.log('array1[3] = ',array1[3])

//物件示例 小項目要用name + ":" + 值，並且用","隔開
let object1 ={
    name: 'vm3m6mv0 ',
    age: 21,
    address:'鹿港鎮福興鄉交界',
}
console.log(object1)
console.log(object1.name) // . => 的
console.log(object1.age)

//IG牆

const post1 = { //物件:貼文1
    image:'https//xx.img.xxx.com/a1.png',
    describe:'我今天好棒棒哦',
    date:'2022/02/02',
    comment:['哇屋不得了','你好棒','我的老天額'], //留言陣列
}

console.log(post1)

const post2 = { //物件:貼文2
    image:'https//xx.img.xxx.com/a2.png',
    describe:'我今天也好棒棒哦',
    date:'2022/02/03',
    comment:['哇屋不得了','你好棒','我的老天額'], //留言陣列
}

const wall = [
post1,
post2,
]

console.log(wall)