let elnewitem31 = document.querySelector(".newitem31")
let elnewitem32 = document.querySelector(".newitem32")
let elnewitem33 = document.querySelector(".newitem33")
let elnewitem34 = document.querySelector(".newitem34")
let elnewitem35 = document.querySelector(".newitem35")
let elnewitem36 = document.querySelector(".newitem36")
let elnewitem37 = document.querySelector(".newitem37")
let elnewitem38 = document.querySelector(".newitem38")
let elnewitem39 = document.querySelector(".newitem39")
let elnewitem40 = document.querySelector(".newitem40")

let idx41 = 31;
for (let i = 31; i < 32; i++) {
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx41}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx41}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx41++;
  elnewitem31.appendChild(div);
}


let idx42 = 32;
for (let i = 32; i < 33; i++) {
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx42}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx42}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx42++;
  elnewitem32.appendChild(div);
}



let idx43 = 33;
for (let i = 33; i < 34; i++) {
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx43}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx43}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx43++;
  elnewitem33.appendChild(div);
}


let idx44 = 34;
for (let i = 34; i < 35; i++) {
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx44}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx44}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx44++;
  elnewitem34.appendChild(div);
}




let idx45 = 35;
for (let i = 35; i < 36; i++) {
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx45}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx45}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx45++;
  elnewitem35.appendChild(div);
}



let idx46 = 36;
for (let i = 36; i < 37; i++) {
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx46}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx46}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx46++;
  elnewitem36.appendChild(div);
}



let idx47 = 37;
for (let i = 37; i < 38; i++) {
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx47}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx47}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx47++;
  elnewitem37.appendChild(div);
}




let idx48 = 38;
for (let i = 38; i < 39; i++) {
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx48}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx48}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx48++;
  elnewitem38.appendChild(div);
}



let idx49 = 39;
for (let i = 39; i < 40; i++) {
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx49}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx49}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx49++;
  elnewitem39.appendChild(div);
}



let idx50 = 40;
for (let i = 40; i < 41; i++) {
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx50}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx50}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx50++;
  elnewitem40.appendChild(div);
}

