// CAU10

// let strName=prompt('Enter a sequence of names');
// let arrName=strName.split(',');
// let arrName2=[];
// for(let i=0;i<arrName.length;i++){
//     arrName[i]=`<${arrName[i]}>`;
//     arrName2.push(arrName[i]);
// }
// alert(`${strName}=> ${arrName2}`);


//CAU11
let strNum=(prompt('Enter a senquence number'));
let arrNum=strNum.split(',').map(Number);
function checkOdd(odd){
    return odd%2 ==1;
}
let arrNum1=(arrNum.filter(checkOdd));
alert(`${strNum} => ${arrNum1}`);;;;;
 