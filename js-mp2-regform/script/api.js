import { slctRegion, slctProvince, slctCity, slctMunicipality,fullName,
    birthday,
    email,
    contactNumber,
    educationalBackground,
    occupation,
    gender  } from "./main.js";



let getRegion = async() => {
    let res = await fetch("https://psgc-api.wareneutron.com/api/region");
    console.log(res);
    let data = await res.json();
    console.log(data);
    let regions = data.data[0].region;

    regions.forEach((x) => {
        slctRegion.insertAdjacentHTML("beforeend", `<option>${x.name}</option>`)
    })
}

getRegion()

let getProvince = async() => {
    let res = await fetch("https://psgc-api.wareneutron.com/api/province");
    console.log(res);
    let data = await res.json();
    console.log(data);
    let province = data[0].province;

    province.forEach((x) => {
        slctProvince.insertAdjacentHTML("beforeend", `<option>${x.name}</option>`)
    })
}

getProvince();

let getCity = async() => {
    let res = await fetch("https://psgc-api.wareneutron.com/api/city");
    console.log(res);
    let data = await res.json();
    console.log(data);
    let city = data[0].city;

    city.forEach((x) => {
        slctCity.insertAdjacentHTML("beforeend", `<option>${x.name}</option>`)
    })
}

getCity();

let getMunicipality = async() => {
    let res = await fetch("https://psgc-api.wareneutron.com/api/municipality");
    console.log(res);
    let data = await res.json();
    console.log(data);
    let municipality = data[0].municipality;

    municipality.forEach((x) => {
        slctMunicipality.insertAdjacentHTML("beforeend", `<option>${x.name}</option>`)
    })
}

getMunicipality();

let dataEntries = JSON.parse(localStorage.getItem("dataEntries"));


let addData = (event) => {
    event.preventDefault();

    let n =  localStorage.getItem("idValue");

    let dataItem = { 
        name: fullName.value, 
        region: slctRegion.value, 
        province: slctProvince.value,
        city: slctCity.value,
        municipality: slctMunicipality.value,
        birthday: birthday.value,
        email: email.value,
        contactNumber: contactNumber.value,
        educationalBackground: educationalBackground.value,
        occupation: occupation.value,
        gender:  gender.value,
        id: ++n
    }

    if (dataEntries == null) {
        dataEntries  =  [];
    } 

    dataEntries.push(dataItem);


    localStorage.setItem("dataEntries", JSON.stringify(dataEntries));
    
    location.href = "../index.html";
}

export {
    getRegion, getProvince, getCity, getMunicipality, addData
}