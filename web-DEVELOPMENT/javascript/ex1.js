function adj(){
let adj1="crazy";
let adj2="amazing";
let adj3="fire";
let d=Math.floor(Math.random()*3)
if(d==0)
{
    return adj1
}
else if(d==1){return adj2}
else if(d==2){return adj3}
}
function shop(){
let shopn1="engine";
let shopn2="foods";
let shopn3="garments";
let d=Math.floor(Math.random()*3)
if(d==0)
{
    return shopn1
}
else if(d==1){return shopn2}
else if(d==2){return shopn3}
}

function word(){
let word1="bros";
let word2="limited";
let word3="hub";
let d=Math.floor(Math.random()*3)
if(d==0)
{
    return word1
}
else if(d==1){return word2}
else if(d==2){return word3}
}
console.log("Business_Name\n",adj(),shop(),word())