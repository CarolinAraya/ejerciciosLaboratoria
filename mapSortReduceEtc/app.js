const tasks = [
    {
        name: 'Pasear al perro',
        duration: 40,
    },
    {
        name: 'Estudiar JS',
        duration: 120,
    },
    {
        name: 'Ver un capitulo de Aggretsuko',
        duration: 15,
    },
    {
        name: 'Ir a clases',
        duration: 300,
    },
    {
        name: 'Cepillar al gato',
        duration: 40,
    },
    {
        name: 'Ver fail compilation en Youtube',
        duration: 120,
    },
];
//OTRAS FORMAS DE SUMAR
//spread operator (operador de propagacion)
let arr1 = [1, 2, 3];
let arr2 = [0,4,5,6];

let arr2 = [0, ...arr1, 4, 5, 6];

//--------
const addition = (num1, num2, num3) => {
    console.log(num1+num2+num3)
}
undefined
addition(1, 2, 3)


let arr = [1, 2, 3]
const addition2 = (num1, num2, num3) => {
console.log(num1+num2+num3)

}
addition2(...arr)


//REDUCE
/* sacar duraciones sumarlas y reducirlas */ 
/* primero hacemos el map para sacar la duracion de las tareas 
[40, 120, 15, 300, 40, 120] */
// 635
//40+120=160
//160+15=175...
const taskDuration = tasks.map(element => element.duration).reduce((previousValue, currentValue) => previousValue + currentValue);

//-------------------FILTER---------------

//la duracion sea >=120

const difficultTasks = tasks.filter(element => element.duration >= 120);//refactorizado

/* const difficultTasks = tasks.filter((element) => {
return element.duration
}); */

//----------FOR EACH-----------

let difficultTasks = [];

tasks.forEach((element) => {
    if (element.durtion >= 120) {
        difficultTasks.push(element)
    }
});

/*-------------------MAP---------------------*/

//Nuestro MAP tiene q estar en una variable
//Si o si tiene q retornar algo pero refactorizando se quita return y {}
/* const taskNames = tareas.map((tareas) => {
    return tasks.name;
}); */

const taskNames = tasks.map(tareas => tareas.name);

/*---------------------FOR--------------------/
arr de string con los nombres de nuestras tareas
1-crear arr vacio*/

let taskNames = [];

for (let i = 0; i < tasks.length; i++) {
    taskNames.push(tasks[i].name);
}
//c/vez q entro al ciclo tengo q calcular el valor de i
//y la longitud del arreglo FOR EACH lo da por sentado. NO DEVUELVEN ARREGLOS

/*--------------------FOR EACH------------------*/

tasks.forEach(tasks => taskNames.push(tasks.name));

