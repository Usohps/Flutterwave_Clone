const countryOption = [
     {
        img:"https://flutterwave.com/images/flags/gh.svg",
        countryName:"Ghana",
     },
     {
        img:"https://flutterwave.com/images/flags/cm.svg",
        countryName:"Cameroon",
     },
     {
        img:"https://flutterwave.com/images/flags/ke.svg",
        countryName:"Kenya",
     },
     {
        img:"https://flutterwave.com/images/flags/mu.svg",
        countryName:"Mauritius",
     },
     {
        img:"https://flutterwave.com/images/flags/eu.svg",
        countryName:"Rest Of Europe",
     },
     {
        img:"https://flutterwave.com/images/flags/sn.svg",
        countryName:"Senegal",
     },
     {
        img:"https://flutterwave.com/images/flags/tz.svg",
        countryName:"Tanzania",
     },
     {
        img:"https://flutterwave.com/images/flags/gb.svg",
        countryName:"United Kingdom",
     },
     {
        img:"https://flutterwave.com/images/flags/eg.svg",
        countryName:"Egypt",
     },
     {
        img:"https://flutterwave.com/images/flags/ci.svg",
        countryName:"Ivory Coast",
     },
     {
        img:"https://flutterwave.com/images/flags/mw.svg",
        countryName:"Malawi",
     },
     {
        img:"https://flutterwave.com/images/flags/ng.svg",
        countryName:"Nigeria",
     },
     {
        img:"https://flutterwave.com/images/flags/rw.svg",
        countryName:"Rwanda",
     },
     {
        img:"https://flutterwave.com/images/flags/za.svg",
        countryName:"South Africa",
     },
     {
        img:"https://flutterwave.com/images/flags/ug.svg",
        countryName:"Uganda",
     },
     {
        img:"https://flutterwave.com/images/flags/ug.svg",
        countryName:"Uganda",
     },
     {
        img:"https://flutterwave.com/images/flags/zm.svg",
        countryName:"Zambia",
     },
     {
        img:"https://flutterwave.com/images/flags/us.svg",
        countryName:"United State",
     },
]
//  let currentState = document.getElementById("current_state");
 let currentLocation = document.querySelector(".active")
 let flags= document.querySelectorAll(".flags")
function handleDisplayCountries(country){
    let items;
    for(let i= 0; i < country.length; i++){
        items+= `
        <button class="location_details" onclick="updatecountry('${country[i].img}', '${country[i].countryName}');">
          <img src= ${country[i].img} class= flags />
          <p>${country[i].countryName}</p>
        </button>`
    }
    return items;
}
 function updatecountry(image, name){
   document.getElementById('current_state').innerText = name
   document.getElementById('active_flag').src = image 
   popUp.style.visibility ="hidden";
}
const modal = document.querySelector(".location_list")
modal.innerHTML =`<ul>
${handleDisplayCountries(countryOption)}
<ul>`
// FOTTER LINK FUNCTIONALITIES
const linkTitle = document.getElementsByClassName("link_title");
// console.log(linkTitle)
const footerLinks = document.querySelector(".fotterlinks")
for(i=0; i < linkTitle.length; i++){
    linkTitle[i].addEventListener("click",function(){
        const linksBelow = this.nextElementSibling;
        linksBelow.classList.toggle("showlinks")
    })
}
 const hamburger = document.querySelector(".nav_toggle");
 const showNav= document.getElementById("showNav")
 hamburger.addEventListener("click",function(){
    showNav.classList.toggle("show_links")
 })
//hide and show modal

 const popUp = document.querySelector(".location_list")
 currentLocation.addEventListener("click",function(){
    if(popUp.style.visibility=="hidden"){
        popUp.style.visibility ="visible"
    }else{
        popUp.style.visibility ="hidden"
    }
 })