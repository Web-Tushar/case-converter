let input = document.querySelector(".inputbox");
let upperbtn = document.querySelector(".upperbtn");
let lowerbtn = document.querySelector(".lowerbtn");
// let lengthbtn = document.querySelector(".lengthbtn");
let result = document.querySelector(".result");
let repeatbtn = document.querySelector(".repeatbtn");
let lengthbtn =document.querySelector(".length")
let resetbtn = document.querySelector(".reset");


upperbtn.addEventListener("click",function(){

     result.innerHTML = input.value.toUpperCase();
 
 })
 
 lowerbtn.addEventListener("click" , function(){
 
     result.innerHTML = input.value.toLowerCase();
 
 })
 
 repeatbtn.addEventListener("click" , function(){
 
     result.innerHTML = input.value.repeat(20);
 
 })
 lengthbtn.addEventListener("click",function(){

     result.innerHTML = " your text length is : " + input.value.length;

 })


 resetbtn.addEventListener("click" , function(){
 
     result.innerHTML = "";
     input.value = "";
 
 })