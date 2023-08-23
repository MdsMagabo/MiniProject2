 import { getRegion, getProvince, getCity, getMunicipality, addData } from "./api.js";

//input
let fullName = document.querySelector("#name");
let slctRegion = document.querySelector("#slctRegion");
let slctProvince = document.querySelector("#slctProvince");
let slctCity = document.querySelector("#slctCity");
let slctMunicipality = document.querySelector("#slctMunicipality");
let birthday = document.querySelector("#birthday");
let email = document.querySelector("#email");
let contactNumber =document.querySelector("#contactNumber");
let educationalBackground = document.querySelector("#educationalBackground");
let occupation = document.querySelector("#occupation");
let gender = document.querySelector("#gender");

//button
let addBtn = document.querySelector("#addBtn");

let dataEntries = JSON.parse(localStorage.getItem("dataEntries"));

let getId =  localStorage.getItem("id");


let id = "";

if(getId == null) {
    localStorage.setItem("id", 0);
    id = 0;    
} else {
    id = localStorage.getItem("id");
}

//events
addBtn.addEventListener("click", addData);

export {
    slctRegion,
    slctProvince,
    slctCity,
    slctMunicipality,
    fullName,
    birthday,
    email,
    contactNumber,
    educationalBackground,
    occupation,
    gender
}
