// (function userName(name){
//   console.log(name)
// })('Minik');
//====== Стрелочные функции ======//
// const SayHi = (name) =>{
//   console.log(`Привет, ${name}! Как твои дела?`)
// } 
// SayHi('Амир');
//=== Более короткий вариант==//
// const SayHi = (name) => console.log(`Привет, ${name}! Как твои дела?`)
// SayHi('Амир');
// function summ(a, b) {
//   const result = a + b;
//   console.log(result)
// }
// summ(2, 9);

// const SayHi = (a, b) => a + b;
// const res = SayHi(10, 30)
// console.log(res)




//===== Массивы =====//

// const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];
// console.log(autoBrands)
// autoBrands.pop();
// autoBrands.push('Mustang')
// console.log(autoBrands)



//===== Циклы =====//
// for (let i = 0; i < 10; i++){
//   console.log(i)
// }

//==== Обход массива циклом for====//
// const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];
// for (i = 0; i < autoBrands.length; i++){
//   console.log(autoBrands[i])
// }

//====Обход массива циклом for (of)====//
// const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];
// for (let item of autoBrands){
//     console.log(item)
// }



//обзход массива методом forEach()//
// const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];
// autoBrands.forEach(element => {
//   console.log(element)
// });



                                      //ОбЪекты//
// const person = {
//   userName: 'Mark',
//   age: 30, 
//   isMarried: false
// }
// person.profession = 'JS Dev'
// console.log(person)

                                  //Методы в обЪектах//
                                  //this//
// const person = {
//   userName: 'Mark',
//   age: 30, 
//   isMarried: false, 
//   SayHi: function (name) {
//     console.log(this)
//     console.log(`Привет, ${name}! Меня зовут ${this.userName}.`);
//   }
// }
// person.SayHi('Сабир')

                              //Обход объектов при помощи for in//
// const person = {
//   userName: 'Mark',
//   age: 30, 
//   isMarried: false, 
//   SayHi: function (yourName) {
//     console.log(`Привет, ${yourName}! Меня зовут ${this.userName}.`);
//   }
// }             
// for (let key in person){
//   console.log(key);
// }             




                    //Классы. Конструкторы объектов//


// class Person {
//   constructor(userName, age, isMarried){
//     this.userName = userName;
//     this.age = age;
//     this.isMarried = isMarried;
//   }
//   sayHi(name){
//     console.log(`Привет, ${name}! Меня зовут ${this.userName}`)
//   }
  
// }
// const person1 = new Person('Амир', 16, false)
// const person2 = new Person('Никита', 16, false)
// console.log(person1)
// console.log(person2)





//Выбор DoM
//Выбор одного элемента DOM по селектору
// document.querySelector('h1').classList.add('red')
//выбор коллекции элементов
// const heading =  document.querySelectorAll('h1')
// console.log(heading);

//Даем стили при помощи цикла for
// for (let item of heading){
//   console.log(item);
//   item.classList.add('red')
// }


// const paragrafs = document.querySelectorAll('p')
// for (let par of paragrafs){
//   par.classList.add('green')
// }
//Работа с CSS классами
// const header = document.querySelector('h1');
// console.log(header);
// header.classList.add('red');
// header.classList.toggle('green')
// const res = header.classList.contains('green')
// console.log(res)




//Пабота с атрибутами
/*
getAttribute(attrName) - возвращает значаение указанного атрибута
setAttrubute(name, value)- добавляет указанный атрибут и его значение к элементу
hasAttribute(attrName)- bool значение
remuveAttribute(attrName)- удаяет указанный атрибут

toggleAttribute(name, force)- добавляет новый атрибут при отсутсвии или удаляет уже существующий атрибут
hasAttributes()-возвращает bool значение true, если у елемента имеются какие-либо атрибуты иначе false
getAttributesNames()- возвращает названия атрибутов элемента
*/


// const res = img.getAttribute('src');
// console.log(res);
// img.setAttribute('src', '/images/images.png')



//Работа с прослушкой событий
const button = document.querySelector('button')
const img = document.querySelector('.logo');
img.setAttribute('width', '150')
button.value = 'Удалить'
button.onclick = function(){
  console.log('Click!');
  img.setAttribute('src', '/images/php.png')
}

//Прослушка событий
// const inputText = document.querySelector('#input-text');
// const textBlock = document.querySelector('#text-block');
// inputText.addEventListener('input', function(){
//   console.log('-')
//   console.log(inputText.value);
//   textBlock.innerText = inputText.value;
// })


//Object event


// const list = document.querySelector('button');

// list.addEventListener('click', function(event){
//   console.log(this)
//   console.log(event)
// })

// const phoneModels = ['iphone', 'xiaomi', 'samsung', 'realme'];
// phoneModels.pop()
// console.log(phoneModels);
// phoneModels.push('oppo')
// console.log(phoneModels)
// phoneModels.forEach(element => {
//   console.log(element)
// });

// const user = {
//   name: 'Amir',
//   years_old: 16,
//   student: true,
//   sayHi(name){
//     console.log('Письмо другу')
//     console.log(`Привет, ${name}! Как у тебя дела?`)
//   } 
// }
// user.sayHi('Амир')
// console.log(user)


// class Person{
//   constructor(Name, years_old, student){
//     this.Name = Name;
//     this.years_old = years_old;
//     this.student = student;
//   }
// }
// const us1 = new Person('Амир', 16, true)
// const us2 = new Person('Сабир', 16, true)
// console.log(us1)
// console.log(us2)






//Объект event



// const list = document.querySelector("button");

// list.addEventListener('click', function (event){
//   console.log(event.target)
// })


// Работа с элементами

const container = document.querySelector('.element-container');

//Создание заголовка
 
const new_header = document.createElement('h1');
new_header.innerText = 'Привет';
container.append(new_header);

//Копирование элементов

const main_header = document.querySelector('.img')
const header_copy = main_header.cloneNode(true)
container.append(header_copy)

