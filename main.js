
let menuList = document.querySelector(".list")
let elnewitem = document.querySelector(".newitem")
let elnewitem2= document.querySelector(".newitem2")
let elnewitem3= document.querySelector(".newitem3")
let elnewitem4 = document.querySelector(".newitem4")
let ofcanvasitem = document.querySelector(".ofcanvas-item")
let elcarouselitem1 = document.querySelector("#carusel-item1")
let elcarouselitem2 = document.querySelector("#carusel-item2")
let elcarouselitem3 = document.querySelector("#carusel-item3")
let elrightarrow = document.querySelectorAll(".right-arrow")
let elleftarrow = document.querySelectorAll(".left-arrow")

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


for (let i = 0; i < 10; i++) {
  let div = document.createElement("div");
  div.className = "item";
  div.innerHTML = `<div class="items">
  <img id="items__img" src="${movies[i].youtubePoster}" alt="">
  <button id="items__btn"><img src="img/heart.svg" alt="" width="32" height="32"></button>
  <p id="items__date">USA,${movies[i].year}</p>
  <p id="items__movie-name">${movies[i].title}</p>
  <div class="items__info">
    <div class="d-flex align-items-center">
      <img class="me-2" src="img/imb.png" alt="" width="35" height="17">
      <span id="items__ranking">${movies[i].imdbRating} / 10</span>
    </div>
    <div class="d-flex align-items-center">
      <img class="me-2" src="img/potato.png" alt="" width="16" height="17">
      <span id="items__procent">75%</span>
    </div>
  </div>
  <span class="items__category">${movies[i].categories}</span>
  <div>
    <button class="items__modal" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <p class="modal-title modal-movi-name" id="modal__movie-name">${movies[i].title}</p>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body d-flex align-items-center">
            <img class="modal-img me-4" src="${movies[i].youtubePoster}" alt="">
            <div class="d-flex flex-column">
              <p id="modal__date">USA, ${movies[i].year}</p>
              <p class="modal-movi-name" id="modal__movie-name">${movies[i].title}</p>
              <p>${movies[i].summary}</p>
              <span id="modal__ranking">${movies[i].imdbRating} / 10</span>
              <span class="items__category mt-5">${movies[i].categories}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  `;

  elnewitem.appendChild(div);
}






for (let i = 20; i < 30; i++) {
  let div = document.createElement("div");
  div.className = "item";
  div.innerHTML = `<div class="items">
  <img id="items__img" src="${movies[i].youtubePoster}" alt="">
  <button id="items__btn"><img src="img/heart.svg" alt="" width="32" height="32"></button>
  <p id="items__date">USA,${movies[i].year}</p>
  <p id="items__movie-name">${movies[i].title}</p>
  <div class="items__info">
    <div class="d-flex align-items-center">
      <img class="me-2" src="img/imb.png" alt="" width="35" height="17">
      <span id="items__ranking">${movies[i].imdbRating} / 10</span>
    </div>
    <div class="d-flex align-items-center">
      <img class="me-2" src="img/potato.png" alt="" width="16" height="17">
      <span id="items__procent">75%</span>
    </div>
  </div>
  <span class="items__category">${movies[i].categories}</span>
  <div>
    <button class="items__modal" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <p class="modal-title modal-movi-name" id="modal__movie-name">${movies[i].title}</p>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body d-flex align-items-center">
            <img class="modal-img me-4" src="${movies[i].youtubePoster}" alt="">
            <div class="d-flex flex-column">
              <p id="modal__date">USA, ${movies[i].year}</p>
              <p class="modal-movi-name" id="modal__movie-name">${movies[i].title}</p>
              <p>${movies[i].summary}</p>
              <span id="modal__ranking">${movies[i].imdbRating} / 10</span>
              <span class="items__category mt-5">${movies[i].categories}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  `;

  elnewitem2.appendChild(div);
}




for (let i = 30; i < 40; i++) {
  let div = document.createElement("div");
  div.className = "item";
  div.innerHTML = `<div class="items3">
  <img id="items__img3" src="${movies[i].youtubePoster}" alt="">
  <button id="items__btn"><img src="img/heart.svg" alt="" width="32" height="32"></button>
  <p id="items__date">${movies[i].title} USA,${movies[i].year}</p>
  <div>
    <button class="items__modal" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <p class="modal-title modal-movi-name" id="modal__movie-name">${movies[i].title}</p>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body d-flex align-items-center">
            <img class="modal-img me-4" src="${movies[i].youtubePoster}" alt="">
            <div class="d-flex flex-column">
              <p id="modal__date">USA, ${movies[i].year}</p>
              <p class="modal-movi-name" id="modal__movie-name">${movies[i].title}</p>
              <p>${movies[i].summary}</p>
              <span id="modal__ranking">${movies[i].imdbRating} / 10</span>
              <span class="items__category mt-5">${movies[i].categories}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  `;

  elnewitem3.appendChild(div);
}


for (let i = 50; i < 60; i++) {
  let div = document.createElement("div");
  div.className = "item";
  div.innerHTML = `<div class="items">
  <img id="items__img" src="${movies[i].youtubePoster}" alt="">
  <button id="items__btn"><img src="img/heart.svg" alt="" width="32" height="32"></button>
  <p id="items__date">${movies[i].title} USA,${movies[i].year}</p>
  <div>
    <button class="items__modal" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <p class="modal-title modal-movi-name" id="modal__movie-name">${movies[i].title}</p>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body d-flex align-items-center">
            <img class="modal-img me-4" src="${movies[i].youtubePoster}" alt="">
            <div class="d-flex flex-column">
              <p id="modal__date">USA, ${movies[i].year}</p>
              <p class="modal-movi-name" id="modal__movie-name">${movies[i].title}</p>
              <p>${movies[i].summary}</p>
              <span id="modal__ranking">${movies[i].imdbRating} / 10</span>
              <span class="items__category mt-5">${movies[i].categories}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  `;

  elnewitem4.appendChild(div);
}

// OFCANVAS
for (let i = 50; i < 60; i++) {
  let div = document.createElement("div");
  div.className = "item";
  div.innerHTML = `<div class="items">
  <img id="items__img" src="${movies[i].youtubePoster}" alt="">
  <p id="items__date">USA,${movies[i].year}</p>
  <p id="items__movie-name">${movies[i].title}</p>
  <span id="items__ranking">${movies[i].imdbRating} / 10</span>
  <span class="items__category">${movies[i].categories}</span>

  </div>
  `;

  ofcanvasitem.appendChild(div);
}











for (let i = 0; i < 1; i++) {
  let div = document.createElement("div");
  div.className = "menu__item pizza";
  div.innerHTML = `<div class="container">
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
        <a class="d-flex align-items-center watch-link" href="https://youtu.be/M7XM597XO94"><img class="me-2" src="img/Play.svg" alt="play" width="20" height="20"><p class="watch-text">Watch trailer</p></a>
      </div>
    </div>
  </div>
</div>`;

elcarouselitem1.appendChild(div);
}

for (let i = 1; i < 2; i++) {
  let div = document.createElement("div");
  div.className = "menu__item pizza";
  div.innerHTML = `<div class="container">
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
        <a class="d-flex align-items-center watch-link" href="https://youtu.be/M7XM597XO94"><img class="me-2" src="img/Play.svg" alt="play" width="20" height="20"><p class="watch-text">Watch trailer</p></a>
      </div>
    </div>
  </div>
</div>`;
elcarouselitem2.appendChild(div);
}

for (let i = 3; i < 4; i++) {
  let div = document.createElement("div");
  div.className = "menu__item pizza";
  div.innerHTML = `<div class="container">
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
        <a class="d-flex align-items-center watch-link" href="https://youtu.be/M7XM597XO94"><img class="me-2" src="img/Play.svg" alt="play" width="20" height="20"><p class="watch-text">Watch trailer</p></a>
      </div>
    </div>
  </div>
</div>`;
elcarouselitem3.appendChild(div);
}


for (let j = 0; j < elleftarrow.length; j++) {
  elleftarrow[j].addEventListener("click", translateleft)
  elrightarrow[j].addEventListener("click", translaterigt)
}
function  translaterigt () {
  elnewitem.style.transform = "translate(-250px)"
  elnewitem.style.transition = "all 1s"
}
function  translateleft () {
  elnewitem.style.transform = "translate(250px)"
  elnewitem.style.transition = "all 1s"
}





// {/* <img src="${movies[i].youtubePoster}" alt=""> */}

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




// elheart.addEventListener("click" ,()=> {
//   console.log("hello p");
// })

























