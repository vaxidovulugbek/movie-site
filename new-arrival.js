let elnewitem11 = document.querySelector(".newitem11")
let elnewitem12 = document.querySelector(".newitem12")
let elnewitem13 = document.querySelector(".newitem13")
let elnewitem14 = document.querySelector(".newitem14")
let elnewitem15 = document.querySelector(".newitem15")
let elnewitem16 = document.querySelector(".newitem16")
let elnewitem17 = document.querySelector(".newitem17")
let elnewitem18 = document.querySelector(".newitem18")
let elnewitem19 = document.querySelector(".newitem19")
let elnewitem20 = document.querySelector(".newitem20")

let idx21 = 11;
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx21}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx21}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx21++;
  elnewitem11.appendChild(div);
}


let idx22 = 12;
for (let i = 12; i < 13; i++) {
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx22}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx22}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx22++;
  elnewitem12.appendChild(div);
}



let idx23 = 13;
for (let i = 13; i < 14; i++) {
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx23}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx23}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx23++;
  elnewitem13.appendChild(div);
}


let idx24 = 14;
for (let i = 14; i < 15; i++) {
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx24}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx24}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx24++;
  elnewitem14.appendChild(div);
}




let idx25 = 15;
for (let i = 15; i < 16; i++) {
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx25}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx25}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx25++;
  elnewitem15.appendChild(div);
}



let idx26 = 16;
for (let i = 16; i < 17; i++) {
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx26}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx26}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx26++;
  elnewitem16.appendChild(div);
}



let idx27 = 17;
for (let i = 17; i < 18; i++) {
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx27}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx27}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx27++;
  elnewitem17.appendChild(div);
}




let idx28 = 18;
for (let i = 18; i < 19; i++) {
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx28}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx28}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx28++;
  elnewitem18.appendChild(div);
}



let idx29 = 19;
for (let i = 19; i < 20; i++) {
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx29}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx29}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx29++;
  elnewitem19.appendChild(div);
}



let idx30 = 20;
for (let i = 20; i < 21; i++) {
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx30}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx30}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx30++;
  elnewitem20.appendChild(div);
}

