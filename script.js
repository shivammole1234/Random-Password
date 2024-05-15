const passBox=document.getElementById("password");
const length =12;
const uppercase="ABCDEFGHIJKL<MNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol = "@#$%^&*(){}?></*";

const allChars=uppercase+lowercase+number+symbol;

function genePass(){
    let password="" ;
    //generate a random number between  1 and the length of the string to select which type of character will be added next
    //generate a random number between 1 and the length of the string

    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length >password.length)
    {
password +=allChars[Math.floor(Math.random()*allChars.length)]
    }
    passBox.value=password;
}

function copyPass(){
    passBox.select();
    document.execCommand('copy');
    alert("Password Copied!");
    
}