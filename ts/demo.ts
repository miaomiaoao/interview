interface Person {
  age: number;
  name?: string;
  // 可选属性,在属性后面加问号
  readonly id: number
  // 只读属性,readonly
}

let xuying: Person = {
  name: 'xy',
  age: 20,
  id: 1
}

function add (x: number, y: number, z?: number): number {
  return x + y + z
}

let result = add(1, 2, 3)

// Class
class Animal {
  name: String;
  constructor(name: string) {
    this.name = name
  }
  run() {
    return `${this.name} is running`
  }
}

let snake = new Animal('lily')
console.log(snake.run())

// Class 继承
class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}

let xiaobao = new Dog('xiaobao')
console.log(xiaobao.bark())
console.log(xiaobao.run())

// Class 方法重写
class Cat extends Animal {
  constructor(name) {
    super(name)
    console.log(this.name)
  }
  run() {
    // 在方法中,想要调用父类的方法,使用super关键字
    return 'miao~' + super.run()
  }
}

const miao = new Cat('lc')
console.log(miao.run())

// 静态属性
class Animal1 {
  name: string;
  static categories: string[] = ['mammal', 'bird']
  // 静态方法
  static isAnimal(a) {
    return a instanceof Animal1
  }
}


// implement

interface Radio {
  switchVideo(): void
}

interface Battery {
  checkBatteryStatus(): void
}

interface RadioWithBattery extends Radio { // 继承了Radio接口的方法switchVideo
  checkBatteryStatus(): void
}

class Phone implements Radio{
  switchVideo() {}
}
// 可以改为直接实现RadioWithBattery
// class Car implements Radio, Battery {
//   switchVideo() {}
//   checkBatteryStatus() {}
// }
class Car implements RadioWithBattery {
  switchVideo() {}
  checkBatteryStatus() {}
}

// 枚举
enum Direction {
  Up = 10,
  Down,
  Left,
  Right
}

console.log(Direction.Up)
console.log(Direction[0])

// 泛型

function echo<T>(arg: T): T {
  return arg
}
const result1 = echo(true)

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

const result2 = swap(['123', 1])

// 数组
const arr: string[] = ['a', 'b']
function numberArr(arr: number[]): number[] {
  return arr
}
numberArr([1, 2, 3])

// 问题：如果是泛型，但是想在函数中打印数组的长度,会报错，要怎么解决
// function genericsArray<T> (arg: T): T {
//   return arg.length
// }
// 解决：使用数组泛型
function genericsArray<T> (arg: T[]): T[] {
  console.log(arg.length)
  return arg
}

// 对泛型进行约束,只允许传入带有length属性的变量,约束泛型
interface IWithLength {
  length: number
}
function echoWidthLength <T extends IWithLength> (arg: T): T {
  // 使用extends关键字,来限制传入的参数必须有length属性
  console.log(arg.length)
  return arg
}

const str = echoWidthLength('string')
const arr2 = echoWidthLength([1, 2, 3])


// 泛型在除函数中其他地方的应用
class Queue<T> {
  private data = []
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}

const queue = new Queue<number>()
// queue.push('str') // 报错了
queue.push(1)
console.log(queue.pop().toFixed())
console.log(queue.pop().toFixed())

interface KeyPairs<T, U> {
  key: T;
  value: U;
}
let kp1: KeyPairs<number, string> = {key: 1, value: 'str'}

let arr4: number[] = [1, 2 ,3]
let arr5: Array<number> = [1, 2, 3]

interface IPlus<T> {
  (a: T, b: T): T
}
function plus(a: number, b: number): number {
  return a + b
}
const sum: IPlus<number> = plus