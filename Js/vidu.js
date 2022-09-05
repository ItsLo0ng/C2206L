document.writeln('Hello world!');
document.writeln('<h1>Hello world!</h1>');

//su dung rat nhieu trong du an
console.log('testing console');

//khai bao bien
//coding conventions: first letter: a-z, A-Z, dau "_"
var x; //x ko co kieu du lieu cu the
x=5; //x la so nguyen
x=true; //x la kieu true
//khong can ; khi code js
x= "xin chao"
x='sinh vien' //dung "" hay '' deu duoc
//khong can var cx dc
y = "xin chao"

//Toan tu
y = 10
z = y++ // z =10, y =11, trong phep gan thi no se gan 10 truoc sau do moi +1 vao y
console.log('y = '+y+ ' z =  ' +z+' x =  '+x )
// == vs ===
// == chi can 2 gia tri bang nhau 
x = 5.0
y =5
if( x ==y){

    console.log('nice')
}
// === khi no bang nhau roi nhung lieu kieu du lieu cua no co giong nhau?
if(x ===y){
    // no nguoc lai
    console.log('not nice')
}else{
    //xu ly o day
    console.log('nice')
}
//nham lan kieu string vs number khi dung phep +
x = "5"
y = 10
s = x+y // s = 510
//cac phep tinh cac dung binh thuong
x= parseInt(x)
//x = parseFloat(x)
console.log(x+y);

//toan tu dieu kien
x =10
y = (x>10) ? 'lon hon': 'nho hon';
console.log(y);

//mot so functions hay duoc su dung
//alert('hello hello vua vao trong web dung ko'); 
//hien thi thong bao cho nguoi dung biet

//var option = confirm('ban co chac chan ko'); 
//console.log(option); //tra ve true hoac false

//var input = prompt('nhap ho va ten');
//console.log(input)

//ham check xem co phai la so ko
console.log(isNaN('9999'));
console.log(isNaN('AAA999'));
console.log(isNaN('AAABBC'));

//trong cac phep so sanh thi no tu dong ghep kieu de tinh toan
i = '10'
if(i <20){
    console.log('da ep kieu');
}

//functions
function showmenu(){
    console.log('showmenu');
}
showmenu();

function show(n){
console.log(n+1);
}
show(100);

function return100(n){
    n+=100;
    return n;
}
var s = return100(100);