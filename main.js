
let menuList = document.querySelector(".list")
let elnewitem = document.querySelector(".newitem")
let ofcanvasitem = document.querySelector(".ofcanvas-item")
let elofcanvaslist = document.querySelector(".ofcanvas-list")
let elcarouselitem1 = document.querySelector("#carusel-item1")
let elcarouselitem2 = document.querySelector("#carusel-item2")
let elcarouselitem3 = document.querySelector("#carusel-item3")
let eldatalist =document.querySelector(".datalist")
// let eloption = createElement("option")
// eloption.innerHTML = `${movies.categories}`
// eldatalist.appendChild(eloption)


let elheaderForm = document.querySelector("#header-form")
let elheaderSearch = document.querySelector("#header__search")

elheaderForm.addEventListener("submit", (e) => {
  e.preventDefault()
  console.log(elheaderSearch.value);
})

// SEARCH HOLATI HERODAGI
// elheaderSearch.addEventListener("keyup" , searchel)
// function searchel (e) {
//   let textlar = e.target.value.toLowerCase()
//   // let elementlar = elofcanvaslist.getElementsByTagName("li")
//   let elmovi = movies.filter((el) => {
   
//     // console.log(Array.from(el.title));
//     for (let i = 0; i < Array.from(el.title).length; i++) {
//       let newelement = el.title[i]
//       // console.log(newelement);
//       if (newelement.toLocaleLowerCase().indexOf(textlar) != -1) {
//         // console.log(textlar);
//         // el.title[i].pare.style.display = "none"
//         console.log(el.title);
//         // el.title.style.color = "red"
//       }
//     }
//   })
// }


// let elheart = document.querySelector("#items__btn")

// movies.forEach
// BU FOR FEATURED 
// for (let i = 0; i < 30; i++) {
//     let li = document.createElement("li");
//     li.className = "items";
//     li.innerHTML = `<div class="items">
//     <img id="items__img" src="${movies[i].youtubePoster}" alt="">
//     <button id="items__btn"><img src="img/heart.svg" alt="" width="32" height="32"></button>
//     <p id="items__date">${movies[i].year}</p>
//     <p id="items__movie-name">${movies[i].title}</p>
//     <div class="items__info">
//       <div class="d-flex align-items-center">
//         <img class="me-2" src="img/imb.png" alt="" width="35" height="17">
//         <span id="items__ranking">${movies[i].imdbRating} / 10</span>
//       </div>
//       <div class="d-flex align-items-center">
//         <img class="me-2" src="img/potato.png" alt="" width="16" height="17">
//         <span id="items__procent">75%</span>
//       </div>
//     </div>
//       <span class="items__category">${movies[i].categories}</span>
//   </div>`;
  
//     menuList.appendChild(li);
// }





// OFCANVAS
// for (let i = 50; i < 60; i++) {
//   let div = document.createElement("div");
//   div.className = "item";
//   div.innerHTML = `<div class="items">
//   <img id="items__img" src="${movies[i].youtubePoster}" alt="">
//   <p id="items__date">USA,${movies[i].year}</p>
//   <p id="items__movie-name">${movies[i].title}</p>
//   <span id="items__ranking">${movies[i].imdbRating} / 10</span>
//   <span class="items__category">${movies[i].categories}</span>

//   </div>
//   `;

//   ofcanvasitem.appendChild(div);
// }











for (let i = 221; i < 222; i++) {
  let div = document.createElement("div");
  div.className = "menu__item pizza";
  div.innerHTML = `
  <img src="${movies[i].youtubePoster}" class="d-block w-100 carusel-pic" alt="...">
  <div class="container">
  <div class="hero-content">
    <div class="hero">
      <div class="hero__info">
      <h2 class="hero__title">${movies[i].title}</h2>
        <div class="d-flex mt-2">
          <div class="d-flex align-items-cente me-5">
            <img class="me-2" src="img/imb.png" alt="" width="35" height="17">
            <span class="hero__price">${movies[i].imdbRating} / 10</span>
          </div>
          <div class="d-flex align-items-center">
            <img class="me-2" src="img/potato.png" alt="" width="16" height="17">
            <span  class="hero__price">75%</span>
          </div>
        </div>
        <p class="hero__text">John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
        <a class="d-flex align-items-center watch-link" href="${movies[i].imdbPage}"><img class="me-2" src="img/Play.svg" alt="play" width="20" height="20"><p class="watch-text">Watch trailer</p></a>
      </div>
    </div>
  </div>
</div>`;

elcarouselitem1.appendChild(div);
}

for (let i = 777; i < 778; i++) {
  let div = document.createElement("div");
  div.className = "menu__item pizza";
  div.innerHTML = `
  <img src="${movies[i].youtubePoster}" class="d-block w-100 carusel-pic" alt="...">
  <div class="container">
  <div class="hero-content">
    <div class="hero">
      <div class="hero__info">
      <h2 class="hero__title">${movies[i].title}</h2>
        <div class="d-flex mt-2">
          <div class="d-flex align-items-cente me-5">
            <img class="me-2" src="img/imb.png" alt="" width="35" height="17">
            <span class="hero__price">${movies[i].imdbRating} / 10</span>
          </div>
          <div class="d-flex align-items-center">
            <img class="me-2" src="img/potato.png" alt="" width="16" height="17">
            <span  class="hero__price">75%</span>
          </div>
        </div>
        <p class="hero__text">${movies[i].summary}</p>
        <a class="d-flex align-items-center watch-link" href="${movies[i].imdbPage}"><img class="me-2" src="img/Play.svg" alt="play" width="20" height="20"><p class="watch-text">Watch trailer</p></a>
      </div>
    </div>
  </div>
</div>`;
elcarouselitem2.appendChild(div);
}

for (let i = 835; i <836; i++) {
  let div = document.createElement("div");
  div.className = "menu__item pizza";
  div.innerHTML = `
  <img src="${movies[i].youtubePoster}" class="d-block w-100 carusel-pic" alt="...">
  <div class="container">
  <div class="hero-content">
    <div class="hero">
      <div class="hero__info">
      <h2 class="hero__title">${movies[i].title}</h2>
        <div class="d-flex mt-2">
          <div class="d-flex align-items-cente me-5">
            <img class="me-2" src="img/imb.png" alt="" width="35" height="17">
            <span class="hero__price">${movies[i].imdbRating} / 10</span>
          </div>
          <div class="d-flex align-items-center">
            <img class="me-2" src="img/potato.png" alt="" width="16" height="17">
            <span  class="hero__price">75%</span>
          </div>
        </div>
        <p class="hero__text">${movies[i].summary}</p>
        <a class="d-flex align-items-center watch-link" href="${movies[i].imdbPage}"><img class="me-2" src="img/Play.svg" alt="play" width="20" height="20"><p class="watch-text">Watch trailer</p></a>
      </div>
    </div>
  </div>
</div>`;
elcarouselitem3.appendChild(div);
}
// men slider
// let count = 0
// for (let j = 0; j < elleftarrow.length; j++) {
//   elleftarrow[j].addEventListener("click", translateleft)
//   // elrightarrow[j].addEventListener("click", translaterigt)
// }
// function  translaterigt () {
//   for (let i = 0; i < elleftarrow.length; i++) {
//     count++
//     if ()
//   }
//   elnewitem.style.transform = "translate(-250px)"
//   elnewitem.style.transition = "all 1s"
// }
// function  translateleft () {
//   elnewitem.style.transform = "translate(250px)"
//   elnewitem.style.transition = "all 1s"
// }






// movies.forEach((item) => {
//   let li = document.createElement("li");
//   li.className = "menu__item pizza";
//   li.innerHTML = `
//   <img class="pizza__img" src=${item.imgUrl} alt="pizza" />
//   <div class="pizza__name">
//     <p class="pizza__p">${item.name}</p>
//     <span class="pizza__price">$${item.price}</span>
//     <button class="pizza__btn" onclick="addItemArray(${item.id})">
//       Add to Cart
//     </button>
//   </div>
//   `;

//   menuList.appendChild(li);
// });


// // shu joyidan modalga element qoshiladi .ishlamadi
// let elheart = document.querySelectorAll(".items-btn")
// for(let s = 0; s < elheart.length; s++) {
//   elheart[s].addEventListener("click" ,()=> {

//       let div = document.createElement("div");
//       div.className = "item";
//       div.innerHTML = `<div class="items">
//       <img id="items__img" src="${movies[s].youtubePoster}" alt="">
//       <p id="items__date">USA,${movies[s].year}</p>
//       <p id="items__movie-name">${movies[s].title}</p>
//       <span id="items__ranking">${movies[s].imdbRating} / 10</span>
//       <span class="items__category">${movies[s].categories}</span>
    
//       </div>
//       `;
     
//     // console.log(e.target.parentElement.parentElement);
//     ofcanvasitem.appendChild(div);
//   })
// }


// for (let i = 50; i < 60; i++) {
  // let div = document.createElement("div");
  // div.className = "item";
  // div.innerHTML = `<div class="items">
  // <img id="items__img" src="${movies[i].youtubePoster}" alt="">
  // <p id="items__date">USA,${movies[i].year}</p>
  // <p id="items__movie-name">${movies[i].title}</p>
  // <span id="items__ranking">${movies[i].imdbRating} / 10</span>
  // <span class="items__category">${movies[i].categories}</span>

  // </div>
  // `;

//   ofcanvasitem.appendChild(div);
// }




// let pustoy = []
// let elheart = document.querySelectorAll(".items-btn")
// for(let s = 0; s < elheart.length; s++) {
//   elheart[s].addEventListener("click" ,(e)=> {
//     console.log(e.target.parentElement.parentElement);
//     pustoy[s].appendChild(e.target.parentElement.parentElement)
//     ofcanvasitem.appendChild(pustoy[s]);
//   })
// }












