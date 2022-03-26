
let elnewitem1 = document.querySelector(".newitem1")
let elnewitem2 = document.querySelector(".newitem2")
let elnewitem3 = document.querySelector(".newitem3")
let elnewitem4 = document.querySelector(".newitem4")
let elnewitem5 = document.querySelector(".newitem5")
let elnewitem6 = document.querySelector(".newitem6")
let elnewitem7 = document.querySelector(".newitem7")
let elnewitem8 = document.querySelector(".newitem8")
let elnewitem9 = document.querySelector(".newitem9")
let elnewitem10 = document.querySelector(".newitem10")

let idx11 = 0;
for (let i = 0; i < 1; i++) {
  let div = document.createElement("div");
  div.className = "item2";
  div.innerHTML = `<div class="items">
  <img id="items__img" src="${movies[i].youtubePoster}" alt="">
  <button class="items-btn" id="items__btn"><img src="img/heart.svg" alt="" width="32" height="32"></button>
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx11}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx11}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx11++;
  elnewitem1.appendChild(div);
}


let idx12 = 1;
for (let i = 11; i < 12; i++) {
  let div = document.createElement("div");
  div.className = "item2";
  div.innerHTML = `<div class="items">
  <img id="items__img" src="${movies[i].youtubePoster}" alt="">
  <button class="items-btn" id="items__btn"><img src="img/heart.svg" alt="" width="32" height="32"></button>
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx12}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx12}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx12++;
  elnewitem2.appendChild(div);
}



let idx13 = 2;
for (let i = 2; i < 3; i++) {
  let div = document.createElement("div");
  div.className = "item2";
  div.innerHTML = `<div class="items">
  <img id="items__img" src="${movies[i].youtubePoster}" alt="">
  <button class="items-btn" id="items__btn"><img src="img/heart.svg" alt="" width="32" height="32"></button>
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx13}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx13}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx13++;
  elnewitem3.appendChild(div);
}


let idx14 = 3;
for (let i = 3; i < 4; i++) {
  let div = document.createElement("div");
  div.className = "item2";
  div.innerHTML = `<div class="items">
  <img id="items__img" src="${movies[i].youtubePoster}" alt="">
  <button class="items-btn" id="items__btn"><img src="img/heart.svg" alt="" width="32" height="32"></button>
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx14}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx14}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx14++;
  elnewitem4.appendChild(div);
}




let idx15 = 4;
for (let i = 4; i < 5; i++) {
  let div = document.createElement("div");
  div.className = "item2";
  div.innerHTML = `<div class="items">
  <img id="items__img" src="${movies[i].youtubePoster}" alt="">
  <button class="items-btn" id="items__btn"><img src="img/heart.svg" alt="" width="32" height="32"></button>
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx15}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx15}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx15++;
  elnewitem5.appendChild(div);
}



let idx16 = 5;
for (let i = 5; i < 6; i++) {
  let div = document.createElement("div");
  div.className = "item2";
  div.innerHTML = `<div class="items">
  <img id="items__img" src="${movies[i].youtubePoster}" alt="">
  <button class="items-btn" id="items__btn"><img src="img/heart.svg" alt="" width="32" height="32"></button>
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx16}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx16}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx16++;
  elnewitem6.appendChild(div);
}



let idx17 = 6;
for (let i = 6; i < 7; i++) {
  let div = document.createElement("div");
  div.className = "item2";
  div.innerHTML = `<div class="items">
  <img id="items__img" src="${movies[i].youtubePoster}" alt="">
  <button class="items-btn" id="items__btn"><img src="img/heart.svg" alt="" width="32" height="32"></button>
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx17}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx17}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx17++;
  elnewitem7.appendChild(div);
}




let idx18 = 7;
for (let i =7; i < 8; i++) {
  let div = document.createElement("div");
  div.className = "item2";
  div.innerHTML = `<div class="items">
  <img id="items__img" src="${movies[i].youtubePoster}" alt="">
  <button class="items-btn" id="items__btn"><img src="img/heart.svg" alt="" width="32" height="32"></button>
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx18}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx18}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx18++;
  elnewitem8.appendChild(div);
}



let idx19 = 8;
for (let i = 8; i < 9; i++) {
  let div = document.createElement("div");
  div.className = "item2";
  div.innerHTML = `<div class="items">
  <img id="items__img" src="${movies[i].youtubePoster}" alt="">
  <button class="items-btn" id="items__btn"><img src="img/heart.svg" alt="" width="32" height="32"></button>
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx19}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx19}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx19++;
  elnewitem9.appendChild(div);
}



let idx20 = 9;
for (let i = 9; i < 10; i++) {
  let div = document.createElement("div");
  div.className = "item2";
  div.innerHTML = `<div class="items">
  <img id="items__img" src="${movies[i].youtubePoster}" alt="">
  <button class="items-btn" id="items__btn"><img src="img/heart.svg" alt="" width="32" height="32"></button>
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx20}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx20}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx20++;
  elnewitem10.appendChild(div);
}





// // shu joyidan modalga element qoshiladi .ishlamadi
// let elheart = document.querySelectorAll(".items-btn")
// for(let s = 0; s < elheart.length; s++) {
//   elheart[s].addEventListener("click" ,(e)=> {
//     console.log(e.target);

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
     
//     console.log(e.target.parentElement.parentElement.parentElement.parentElement);
//     ofcanvasitem.appendChild(div);
//   })
// }




































