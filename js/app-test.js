
function runTests(){

    findBiggestWordTestCyrillic();
    reverseNumberTest();
    reverseNumberFloatTest();
    uniqueTest();
    calcPointsTest();
    statiscticsTest();
    findBiggestAvgSalaryDepartmentTest();

}

function findBiggestWordTestCyrillic(){

    console.log(`1.Find the longest word`);

    let text = ` Функция должна вернуть соответствующий объект 
     {department: 'Some department', avarage: 'some avarage value'}. 
     В этом объекте будет department с самой большой стредней зарплатой из всех departments. `;

    let expect = "соответствующий";
    let actual = findBiggestWord(text);
    console.log(actual);
    console.log(findBiggestWord(text) === actual);
}

function reverseNumberTest(){
    console.log(`2.reverse number`);

    let number = 123456710;
    let actual = reverseNumber(number);

    console.log(`${number} -> ${actual}`);
}

function reverseNumberFloatTest(){

    console.log(`2.reverse number`);

    let number = 12345.671;
    let actual = reverseNumber(number);

    console.log(`${number} -> ${actual}`);
}

function uniqueTest(){
    console.log(`3.Delete repeatable characters`);
    
    let word = "hhhhoooommmmeeee``````sss";
    let expect = "home`s"
    let actual = unique(word);

    console.log(`${word} -> ${actual}`);
    console.log(expect === actual);
}

function calcPointsTest(){
    console.log(`4.Calculate total poins`)
    let expect = 14;
    let actual = calcPoints(3,5,2);
    console.log(`win: 3, draw: 5, loss: 2; total: ${actual}`);
    console.log(expect === actual);
}

function statiscticsTest(){
    console.log(`5.Show array stats`)

    let arr = [4,5,3,8];
    let expect = {
        max: 8,
        min: 3,
        size: 4,
        avr: 5
    }
    let actual = statisctics(arr);
    console.log(`${arr}`);
    console.log(actual);
    console.log(JSON.stringify(expect)===JSON.stringify(actual));
}

function findBiggestAvgSalaryDepartmentTest(){

    console.log(`6.Find department with the biggest avarage salary`);

    let expect = {department: "DEVOPS", avarage: 57600};
    let actual = findBiggestAvarageSalaryDepartment(workers);

    console.log(actual);
    console.log(expect.department === actual.department && expect.avarage === actual.avarage);
}