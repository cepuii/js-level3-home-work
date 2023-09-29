// 1. Напишите функцию,
// которая принимает строку в качестве параметра и находит самое длинное слово в строке.

function findBiggestWord(str){
    return str.split(/[.,?!-:;"'()`]*\s+|[.,?!-:;"'`)]/).reduce((max,current) => max.length < current.length ? current : max);
}

// 2. написать функцию которая принимает число и возвращает перевернутое число

function reverseNumber(number){
    return number.toString().split("").reverse().join('');
}

// 3.написать функцию которая будет принимать стринг значение 
// и возвращать новое стринг значение только с уникальными символами

function unique(str){
    return str.split('').reduce((acc,current) => acc.includes(current) ? acc : acc + current);
}

// 4.написать функцию которая принимает 3 аргумента,
// победы, ничьи и поражения и возвращает количество очков команды 
// ( победа 3 очка, ничья 1 очко, поражение 0 ) 

function calcPoints(win, draw, loss){
    return win * 3 + draw;
}

// 5.написать функцию которая принимает массив и возвращает объект с такими свойствами :
// максимальное значение, 
// минимальное значение, 
// количество элементов,
// среднее арифметическое.

// function statisctics(arr);


// 6.Написать функцию которая принимает массив работников компании 



// Функция должна вернуть объект 
// {department: ‘Some department’, avarage: ‘some avarage value’}. 
// В этом объекте будет department с самой большой стредней зарплатой из всех departments. 

function findBiggestAvarageSalaryDepartment(workers){

    const departures = workers.reduce((acc, curr) => {
        
        let department = acc.find((el)=> el.department === curr.department);

        if(department !== undefined){
            department.workers++;
            department.salarySum += curr.salary;
            department.avarage = department.salarySum / department.workers;

        } else {

            acc.push({
                department: curr.department,
                workers: 1,
                salarySum: curr.salary,
                avarage: curr.salary
            })
        }
        return acc;
    }, []);

    departures.sort((a,b) => b.avarage - a.avarage);
    
    return {department: departures[0].department, avarage: departures[0].avarage};
}


