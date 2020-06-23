const arrClothes=['Jeans','T-Shirt','Socks'];
let loop=true;
while(loop){

let userInput=prompt('Hi there,welcome to shop admin panel,what do you want(C,R,U,D)');

if(userInput=='u'){
    let position =Number(prompt('Enter the position you want to update'));
    let product =prompt('Enter the new name');
    arrClothes.splice(position-1,1,product);
    alert('Done');
}else if(userInput =='r'){
    for(let i=1;i<=arrClothes.length;i++){
        console.log(`${i}.${arrClothes[i-1]}`);
    }
}else if(userInput=='d'){
    let position =Number(prompt('Enter the position you want to delete'));
    arrClothes.splice(position-1,1);
    alert('Done');
}else if(userInput=='c'     ){
    let product=prompt('Enter the name of new item');
    arrClothes.push(product);
}else{
    alert('This command is not supported');
    loop=false;
}
}