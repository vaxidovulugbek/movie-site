
let elnewitem41 = document.querySelector(".newitem41")
let elnewitem42 = document.querySelector(".newitem42")
let elnewitem43 = document.querySelector(".newitem43")
let elnewitem44 = document.querySelector(".newitem44")
let elnewitem45 = document.querySelector(".newitem45")
let elnewitem46 = document.querySelector(".newitem46")
let elnewitem47 = document.querySelector(".newitem47")
let elnewitem48 = document.querySelector(".newitem48")
let elnewitem49 = document.querySelector(".newitem49")
let elnewitem50 = document.querySelector(".newitem50")

let elnewitem51 = document.querySelector(".newitem51")
let elnewitem52 = document.querySelector(".newitem52")
let elnewitem53 = document.querySelector(".newitem53")
let elnewitem54 = document.querySelector(".newitem54")
let elnewitem55 = document.querySelector(".newitem55")
let elnewitem56 = document.querySelector(".newitem56")
let elnewitem57 = document.querySelector(".newitem57")
let elnewitem58 = document.querySelector(".newitem58")
let elnewitem59 = document.querySelector(".newitem59")
let elnewitem60 = document.querySelector(".newitem20")

let idx51 = 0;
for (let i = 0; i < 1; i++) {
  let div = document.createElement("div");
  div.className = "item2";
  div.innerHTML = `<div class="items">
  <img id="items__img" src="${movies[i].youtubePoster}" alt="">
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx51}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx51}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx51++;
  elnewitem41.appendChild(div);
}


let idx52 = 1;
for (let i = 11; i < 12; i++) {
  let div = document.createElement("div");
  div.className = "item2";
  div.innerHTML = `<div class="items">
  <img id="items__img" src="${movies[i].youtubePoster}" alt="">
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx52}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx52}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx52++;
  elnewitem42.appendChild(div);
}



let idx53 = 2;
for (let i = 2; i < 3; i++) {
  let div = document.createElement("div");
  div.className = "item2";
  div.innerHTML = `<div class="items">
  <img id="items__img" src="${movies[i].youtubePoster}" alt="">
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx53}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx53}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx53++;
  elnewitem43.appendChild(div);
}


let idx54 = 3;
for (let i = 3; i < 4; i++) {
  let div = document.createElement("div");
  div.className = "item2";
  div.innerHTML = `<div class="items">
  <img id="items__img" src="${movies[i].youtubePoster}" alt="">
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx54}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx54}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx54++;
  elnewitem44.appendChild(div);
}




let idx55 = 4;
for (let i = 4; i < 5; i++) {
  let div = document.createElement("div");
  div.className = "item2";
  div.innerHTML = `<div class="items">
  <img id="items__img" src="${movies[i].youtubePoster}" alt="">
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx55}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx55}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx55++;
  elnewitem45.appendChild(div);
}



let idx56 = 5;
for (let i = 5; i < 6; i++) {
  let div = document.createElement("div");
  div.className = "item2";
  div.innerHTML = `<div class="items">
  <img id="items__img" src="${movies[i].youtubePoster}" alt="">
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx56}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx56}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx56++;
  elnewitem46.appendChild(div);
}



let idx57 = 6;
for (let i = 6; i < 7; i++) {
  let div = document.createElement("div");
  div.className = "item2";
  div.innerHTML = `<div class="items">
  <img id="items__img" src="${movies[i].youtubePoster}" alt="">
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx57}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx57}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx57++;
  elnewitem47.appendChild(div);
}




let idx58 = 7;
for (let i =7; i < 8; i++) {
  let div = document.createElement("div");
  div.className = "item2";
  div.innerHTML = `<div class="items">
  <img id="items__img" src="${movies[i].youtubePoster}" alt="">
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx58}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx58}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx58++;
  elnewitem48.appendChild(div);
}



let idx59 = 8;
for (let i = 8; i < 9; i++) {
  let div = document.createElement("div");
  div.className = "item2";
  div.innerHTML = `<div class="items">
  <img id="items__img" src="${movies[i].youtubePoster}" alt="">
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx59}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx59}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx59++;
  elnewitem49.appendChild(div);
}



let idx60 = 9;
for (let i = 9; i < 10; i++) {
  let div = document.createElement("div");
  div.className = "item2";
  div.innerHTML = `<div class="items">
  <img id="items__img" src="${movies[i].youtubePoster}" alt="">
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
    <button class="items__modal" data-bs-target="#exampleModalToggle${idx60}" data-bs-toggle="modal">modal</button>
    <div class="modal fade" id="exampleModalToggle${idx60}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
  idx60++;
  elnewitem50.appendChild(div);
}


// let elnewitem11 = document.querySelector(".newitem11")
// let elnewitem12 = document.querySelector(".newitem12")
// let elnewitem13 = document.querySelector(".newitem13")
// let elnewitem14 = document.querySelector(".newitem14")
// let elnewitem15 = document.querySelector(".newitem15")
// let elnewitem16 = document.querySelector(".newitem16")
// let elnewitem17 = document.querySelector(".newitem17")
// let elnewitem18 = document.querySelector(".newitem18")
// let elnewitem19 = document.querySelector(".newitem19")
// let elnewitem20 = document.querySelector(".newitem20")

// let idx61 = 11;
// for (let i = 11; i < 12; i++) {
//   let div = document.createElement("div");
//   div.className = "item2";
//   div.innerHTML = `<div class="items">
//   <img id="items__img" src="${movies[i].youtubePoster}" alt="">
//   <p id="items__date">USA,${movies[i].year}</p>
//   <p id="items__movie-name">${movies[i].title}</p>
//   <div class="items__info">
//     <div class="d-flex align-items-center">
//       <img class="me-2" src="img/imb.png" alt="" width="35" height="17">
//       <span id="items__ranking">${movies[i].imdbRating} / 10</span>
//     </div>
//     <div class="d-flex align-items-center">
//       <img class="me-2" src="img/potato.png" alt="" width="16" height="17">
//       <span id="items__procent">75%</span>
//     </div>
//   </div>
//   <span class="items__category">${movies[i].categories}</span>
//   <div>
//     <button class="items__modal" data-bs-target="#exampleModalToggle${idx61}" data-bs-toggle="modal">modal</button>
//     <div class="modal fade" id="exampleModalToggle${idx61}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
//       <div class="modal-dialog modal-dialog-centered">
//         <div class="modal-content">
//           <div class="modal-header">
//             <p class="modal-title modal-movi-name" id="modal__movie-name">${movies[i].title}</p>
//             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//           </div>
//           <div class="modal-body d-flex align-items-center">
//             <img class="modal-img me-4" src="${movies[i].youtubePoster}" alt="">
//             <div class="d-flex flex-column">
//               <p id="modal__date">USA, ${movies[i].year}</p>
//               <p class="modal-movi-name" id="modal__movie-name">${movies[i].title}</p>
//               <p>${movies[i].summary}</p>
//               <span id="modal__ranking">${movies[i].imdbRating} / 10</span>
//               <span class="items__category mt-5">${movies[i].categories}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   </div>
//   `;
//   idx61++;
//   elnewitem51.appendChild(div);
// }


// let idx62 = 12;
// for (let i = 12; i < 13; i++) {
//   let div = document.createElement("div");
//   div.className = "item2";
//   div.innerHTML = `<div class="items">
//   <img id="items__img" src="${movies[i].youtubePoster}" alt="">
//   <p id="items__date">USA,${movies[i].year}</p>
//   <p id="items__movie-name">${movies[i].title}</p>
//   <div class="items__info">
//     <div class="d-flex align-items-center">
//       <img class="me-2" src="img/imb.png" alt="" width="35" height="17">
//       <span id="items__ranking">${movies[i].imdbRating} / 10</span>
//     </div>
//     <div class="d-flex align-items-center">
//       <img class="me-2" src="img/potato.png" alt="" width="16" height="17">
//       <span id="items__procent">75%</span>
//     </div>
//   </div>
//   <span class="items__category">${movies[i].categories}</span>
//   <div>
//     <button class="items__modal" data-bs-target="#exampleModalToggle${idx62}" data-bs-toggle="modal">modal</button>
//     <div class="modal fade" id="exampleModalToggle${idx62}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
//       <div class="modal-dialog modal-dialog-centered">
//         <div class="modal-content">
//           <div class="modal-header">
//             <p class="modal-title modal-movi-name" id="modal__movie-name">${movies[i].title}</p>
//             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//           </div>
//           <div class="modal-body d-flex align-items-center">
//             <img class="modal-img me-4" src="${movies[i].youtubePoster}" alt="">
//             <div class="d-flex flex-column">
//               <p id="modal__date">USA, ${movies[i].year}</p>
//               <p class="modal-movi-name" id="modal__movie-name">${movies[i].title}</p>
//               <p>${movies[i].summary}</p>
//               <span id="modal__ranking">${movies[i].imdbRating} / 10</span>
//               <span class="items__category mt-5">${movies[i].categories}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   </div>
//   `;
//   idx62++;
//   elnewitem52.appendChild(div);
// }



// let idx63 = 13;
// for (let i = 13; i < 14; i++) {
//   let div = document.createElement("div");
//   div.className = "item2";
//   div.innerHTML = `<div class="items">
//   <img id="items__img" src="${movies[i].youtubePoster}" alt="">
//   <p id="items__date">USA,${movies[i].year}</p>
//   <p id="items__movie-name">${movies[i].title}</p>
//   <div class="items__info">
//     <div class="d-flex align-items-center">
//       <img class="me-2" src="img/imb.png" alt="" width="35" height="17">
//       <span id="items__ranking">${movies[i].imdbRating} / 10</span>
//     </div>
//     <div class="d-flex align-items-center">
//       <img class="me-2" src="img/potato.png" alt="" width="16" height="17">
//       <span id="items__procent">75%</span>
//     </div>
//   </div>
//   <span class="items__category">${movies[i].categories}</span>
//   <div>
//     <button class="items__modal" data-bs-target="#exampleModalToggle${idx63}" data-bs-toggle="modal">modal</button>
//     <div class="modal fade" id="exampleModalToggle${idx63}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
//       <div class="modal-dialog modal-dialog-centered">
//         <div class="modal-content">
//           <div class="modal-header">
//             <p class="modal-title modal-movi-name" id="modal__movie-name">${movies[i].title}</p>
//             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//           </div>
//           <div class="modal-body d-flex align-items-center">
//             <img class="modal-img me-4" src="${movies[i].youtubePoster}" alt="">
//             <div class="d-flex flex-column">
//               <p id="modal__date">USA, ${movies[i].year}</p>
//               <p class="modal-movi-name" id="modal__movie-name">${movies[i].title}</p>
//               <p>${movies[i].summary}</p>
//               <span id="modal__ranking">${movies[i].imdbRating} / 10</span>
//               <span class="items__category mt-5">${movies[i].categories}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   </div>
//   `;
//   idx63++;
//   elnewitem53.appendChild(div);
// }


// let idx64 = 14;
// for (let i = 14; i < 15; i++) {
//   let div = document.createElement("div");
//   div.className = "item2";
//   div.innerHTML = `<div class="items">
//   <img id="items__img" src="${movies[i].youtubePoster}" alt="">
//   <p id="items__date">USA,${movies[i].year}</p>
//   <p id="items__movie-name">${movies[i].title}</p>
//   <div class="items__info">
//     <div class="d-flex align-items-center">
//       <img class="me-2" src="img/imb.png" alt="" width="35" height="17">
//       <span id="items__ranking">${movies[i].imdbRating} / 10</span>
//     </div>
//     <div class="d-flex align-items-center">
//       <img class="me-2" src="img/potato.png" alt="" width="16" height="17">
//       <span id="items__procent">75%</span>
//     </div>
//   </div>
//   <span class="items__category">${movies[i].categories}</span>
//   <div>
//     <button class="items__modal" data-bs-target="#exampleModalToggle${idx64}" data-bs-toggle="modal">modal</button>
//     <div class="modal fade" id="exampleModalToggle${idx64}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
//       <div class="modal-dialog modal-dialog-centered">
//         <div class="modal-content">
//           <div class="modal-header">
//             <p class="modal-title modal-movi-name" id="modal__movie-name">${movies[i].title}</p>
//             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//           </div>
//           <div class="modal-body d-flex align-items-center">
//             <img class="modal-img me-4" src="${movies[i].youtubePoster}" alt="">
//             <div class="d-flex flex-column">
//               <p id="modal__date">USA, ${movies[i].year}</p>
//               <p class="modal-movi-name" id="modal__movie-name">${movies[i].title}</p>
//               <p>${movies[i].summary}</p>
//               <span id="modal__ranking">${movies[i].imdbRating} / 10</span>
//               <span class="items__category mt-5">${movies[i].categories}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   </div>
//   `;
//   idx64++;
//   elnewitem54.appendChild(div);
// }




// let idx65 = 15;
// for (let i = 15; i < 16; i++) {
//   let div = document.createElement("div");
//   div.className = "item2";
//   div.innerHTML = `<div class="items">
//   <img id="items__img" src="${movies[i].youtubePoster}" alt="">
//   <p id="items__date">USA,${movies[i].year}</p>
//   <p id="items__movie-name">${movies[i].title}</p>
//   <div class="items__info">
//     <div class="d-flex align-items-center">
//       <img class="me-2" src="img/imb.png" alt="" width="35" height="17">
//       <span id="items__ranking">${movies[i].imdbRating} / 10</span>
//     </div>
//     <div class="d-flex align-items-center">
//       <img class="me-2" src="img/potato.png" alt="" width="16" height="17">
//       <span id="items__procent">75%</span>
//     </div>
//   </div>
//   <span class="items__category">${movies[i].categories}</span>
//   <div>
//     <button class="items__modal" data-bs-target="#exampleModalToggle${idx65}" data-bs-toggle="modal">modal</button>
//     <div class="modal fade" id="exampleModalToggle${idx65}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
//       <div class="modal-dialog modal-dialog-centered">
//         <div class="modal-content">
//           <div class="modal-header">
//             <p class="modal-title modal-movi-name" id="modal__movie-name">${movies[i].title}</p>
//             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//           </div>
//           <div class="modal-body d-flex align-items-center">
//             <img class="modal-img me-4" src="${movies[i].youtubePoster}" alt="">
//             <div class="d-flex flex-column">
//               <p id="modal__date">USA, ${movies[i].year}</p>
//               <p class="modal-movi-name" id="modal__movie-name">${movies[i].title}</p>
//               <p>${movies[i].summary}</p>
//               <span id="modal__ranking">${movies[i].imdbRating} / 10</span>
//               <span class="items__category mt-5">${movies[i].categories}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   </div>
//   `;
//   idx65++;
//   elnewitem55.appendChild(div);
// }



// let idx66 = 16;
// for (let i = 16; i < 17; i++) {
//   let div = document.createElement("div");
//   div.className = "item2";
//   div.innerHTML = `<div class="items">
//   <img id="items__img" src="${movies[i].youtubePoster}" alt="">
//   <p id="items__date">USA,${movies[i].year}</p>
//   <p id="items__movie-name">${movies[i].title}</p>
//   <div class="items__info">
//     <div class="d-flex align-items-center">
//       <img class="me-2" src="img/imb.png" alt="" width="35" height="17">
//       <span id="items__ranking">${movies[i].imdbRating} / 10</span>
//     </div>
//     <div class="d-flex align-items-center">
//       <img class="me-2" src="img/potato.png" alt="" width="16" height="17">
//       <span id="items__procent">75%</span>
//     </div>
//   </div>
//   <span class="items__category">${movies[i].categories}</span>
//   <div>
//     <button class="items__modal" data-bs-target="#exampleModalToggle${idx66}" data-bs-toggle="modal">modal</button>
//     <div class="modal fade" id="exampleModalToggle${idx66}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
//       <div class="modal-dialog modal-dialog-centered">
//         <div class="modal-content">
//           <div class="modal-header">
//             <p class="modal-title modal-movi-name" id="modal__movie-name">${movies[i].title}</p>
//             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//           </div>
//           <div class="modal-body d-flex align-items-center">
//             <img class="modal-img me-4" src="${movies[i].youtubePoster}" alt="">
//             <div class="d-flex flex-column">
//               <p id="modal__date">USA, ${movies[i].year}</p>
//               <p class="modal-movi-name" id="modal__movie-name">${movies[i].title}</p>
//               <p>${movies[i].summary}</p>
//               <span id="modal__ranking">${movies[i].imdbRating} / 10</span>
//               <span class="items__category mt-5">${movies[i].categories}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   </div>
//   `;
//   idx66++;
//   elnewitem56.appendChild(div);
// }



// let idx67 = 17;
// for (let i = 17; i < 18; i++) {
//   let div = document.createElement("div");
//   div.className = "item2";
//   div.innerHTML = `<div class="items">
//   <img id="items__img" src="${movies[i].youtubePoster}" alt="">
//   <p id="items__date">USA,${movies[i].year}</p>
//   <p id="items__movie-name">${movies[i].title}</p>
//   <div class="items__info">
//     <div class="d-flex align-items-center">
//       <img class="me-2" src="img/imb.png" alt="" width="35" height="17">
//       <span id="items__ranking">${movies[i].imdbRating} / 10</span>
//     </div>
//     <div class="d-flex align-items-center">
//       <img class="me-2" src="img/potato.png" alt="" width="16" height="17">
//       <span id="items__procent">75%</span>
//     </div>
//   </div>
//   <span class="items__category">${movies[i].categories}</span>
//   <div>
//     <button class="items__modal" data-bs-target="#exampleModalToggle${idx67}" data-bs-toggle="modal">modal</button>
//     <div class="modal fade" id="exampleModalToggle${idx67}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
//       <div class="modal-dialog modal-dialog-centered">
//         <div class="modal-content">
//           <div class="modal-header">
//             <p class="modal-title modal-movi-name" id="modal__movie-name">${movies[i].title}</p>
//             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//           </div>
//           <div class="modal-body d-flex align-items-center">
//             <img class="modal-img me-4" src="${movies[i].youtubePoster}" alt="">
//             <div class="d-flex flex-column">
//               <p id="modal__date">USA, ${movies[i].year}</p>
//               <p class="modal-movi-name" id="modal__movie-name">${movies[i].title}</p>
//               <p>${movies[i].summary}</p>
//               <span id="modal__ranking">${movies[i].imdbRating} / 10</span>
//               <span class="items__category mt-5">${movies[i].categories}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   </div>
//   `;
//   idx67++;
//   elnewitem57.appendChild(div);
// }




// let idx68 = 18;
// for (let i = 18; i < 19; i++) {
//   let div = document.createElement("div");
//   div.className = "item2";
//   div.innerHTML = `<div class="items">
//   <img id="items__img" src="${movies[i].youtubePoster}" alt="">
//   <p id="items__date">USA,${movies[i].year}</p>
//   <p id="items__movie-name">${movies[i].title}</p>
//   <div class="items__info">
//     <div class="d-flex align-items-center">
//       <img class="me-2" src="img/imb.png" alt="" width="35" height="17">
//       <span id="items__ranking">${movies[i].imdbRating} / 10</span>
//     </div>
//     <div class="d-flex align-items-center">
//       <img class="me-2" src="img/potato.png" alt="" width="16" height="17">
//       <span id="items__procent">75%</span>
//     </div>
//   </div>
//   <span class="items__category">${movies[i].categories}</span>
//   <div>
//     <button class="items__modal" data-bs-target="#exampleModalToggle${idx68}" data-bs-toggle="modal">modal</button>
//     <div class="modal fade" id="exampleModalToggle${idx68}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
//       <div class="modal-dialog modal-dialog-centered">
//         <div class="modal-content">
//           <div class="modal-header">
//             <p class="modal-title modal-movi-name" id="modal__movie-name">${movies[i].title}</p>
//             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//           </div>
//           <div class="modal-body d-flex align-items-center">
//             <img class="modal-img me-4" src="${movies[i].youtubePoster}" alt="">
//             <div class="d-flex flex-column">
//               <p id="modal__date">USA, ${movies[i].year}</p>
//               <p class="modal-movi-name" id="modal__movie-name">${movies[i].title}</p>
//               <p>${movies[i].summary}</p>
//               <span id="modal__ranking">${movies[i].imdbRating} / 10</span>
//               <span class="items__category mt-5">${movies[i].categories}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   </div>
//   `;
//   idx68++;
//   elnewitem58.appendChild(div);
// }



// let idx69 = 19;
// for (let i = 19; i < 20; i++) {
//   let div = document.createElement("div");
//   div.className = "item2";
//   div.innerHTML = `<div class="items">
//   <img id="items__img" src="${movies[i].youtubePoster}" alt="">
//   <p id="items__date">USA,${movies[i].year}</p>
//   <p id="items__movie-name">${movies[i].title}</p>
//   <div class="items__info">
//     <div class="d-flex align-items-center">
//       <img class="me-2" src="img/imb.png" alt="" width="35" height="17">
//       <span id="items__ranking">${movies[i].imdbRating} / 10</span>
//     </div>
//     <div class="d-flex align-items-center">
//       <img class="me-2" src="img/potato.png" alt="" width="16" height="17">
//       <span id="items__procent">75%</span>
//     </div>
//   </div>
//   <span class="items__category">${movies[i].categories}</span>
//   <div>
//     <button class="items__modal" data-bs-target="#exampleModalToggle${idx69}" data-bs-toggle="modal">modal</button>
//     <div class="modal fade" id="exampleModalToggle${idx69}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
//       <div class="modal-dialog modal-dialog-centered">
//         <div class="modal-content">
//           <div class="modal-header">
//             <p class="modal-title modal-movi-name" id="modal__movie-name">${movies[i].title}</p>
//             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//           </div>
//           <div class="modal-body d-flex align-items-center">
//             <img class="modal-img me-4" src="${movies[i].youtubePoster}" alt="">
//             <div class="d-flex flex-column">
//               <p id="modal__date">USA, ${movies[i].year}</p>
//               <p class="modal-movi-name" id="modal__movie-name">${movies[i].title}</p>
//               <p>${movies[i].summary}</p>
//               <span id="modal__ranking">${movies[i].imdbRating} / 10</span>
//               <span class="items__category mt-5">${movies[i].categories}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   </div>
//   `;
//   idx69++;
//   elnewitem59.appendChild(div);
// }



// let idx70 = 20;
// for (let i = 20; i < 21; i++) {
//   let div = document.createElement("div");
//   div.className = "item2";
//   div.innerHTML = `<div class="items">
//   <img id="items__img" src="${movies[i].youtubePoster}" alt="">
//   <p id="items__date">USA,${movies[i].year}</p>
//   <p id="items__movie-name">${movies[i].title}</p>
//   <div class="items__info">
//     <div class="d-flex align-items-center">
//       <img class="me-2" src="img/imb.png" alt="" width="35" height="17">
//       <span id="items__ranking">${movies[i].imdbRating} / 10</span>
//     </div>
//     <div class="d-flex align-items-center">
//       <img class="me-2" src="img/potato.png" alt="" width="16" height="17">
//       <span id="items__procent">75%</span>
//     </div>
//   </div>
//   <span class="items__category">${movies[i].categories}</span>
//   <div>
//     <button class="items__modal" data-bs-target="#exampleModalToggle${idx70}" data-bs-toggle="modal">modal</button>
//     <div class="modal fade" id="exampleModalToggle${idx70}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
//       <div class="modal-dialog modal-dialog-centered">
//         <div class="modal-content">
//           <div class="modal-header">
//             <p class="modal-title modal-movi-name" id="modal__movie-name">${movies[i].title}</p>
//             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//           </div>
//           <div class="modal-body d-flex align-items-center">
//             <img class="modal-img me-4" src="${movies[i].youtubePoster}" alt="">
//             <div class="d-flex flex-column">
//               <p id="modal__date">USA, ${movies[i].year}</p>
//               <p class="modal-movi-name" id="modal__movie-name">${movies[i].title}</p>
//               <p>${movies[i].summary}</p>
//               <span id="modal__ranking">${movies[i].imdbRating} / 10</span>
//               <span class="items__category mt-5">${movies[i].categories}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   </div>
//   `;
//   idx70++;
//   elnewitem60.appendChild(div);
// }




// ====================== start add offcanvas ====================//


// let elheartbtn41 = document.querySelector("#items__btn31")
//   for (let s = 0; s < 0; s++) {
//     elheartbtn41.addEventListener("click" , (e)=> {
//       console.log(e.target);
//       let div = document.createElement("div");
//       div.className = "item5";
//         div.innerHTML = `<div class="items">
//         <img id="items__img" src="${movies[s].youtubePoster}" alt="">
//         <p id="items__date">USA,${movies[s].year}</p>
//         <p id="items__movie-name">${movies[s].title}</p>
//         <span id="items__ranking">${movies[s].imdbRating} / 10</span>
//         <span class="items__category">${movies[s].categories}</span>
        
//         </div>
//         `;
//       console.log(e.target.parentElement.parentElement.parentElement.parentElement);
//       ofcanvasitem.appendChild(div);
//     })
//   }


//   let elheartbtn42 = document.querySelector("#items__btn32")
//   for (let s = 1; s < 1; s++) {
//     elheartbtn42.addEventListener("click" , (e)=> {
//       console.log(e.target);
//       let div = document.createElement("div");
//       div.className = "item5";
//         div.innerHTML = `<div class="items">
//         <img id="items__img" src="${movies[s].youtubePoster}" alt="">
//         <p id="items__date">USA,${movies[s].year}</p>
//         <p id="items__movie-name">${movies[s].title}</p>
//         <span id="items__ranking">${movies[s].imdbRating} / 10</span>
//         <span class="items__category">${movies[s].categories}</span>
        
//         </div>
//         `;
//       console.log(e.target.parentElement.parentElement.parentElement.parentElement);
//       ofcanvasitem.appendChild(div);
//     })
//   }


  
//   let elheartbtn43 = document.querySelector("#items__btn33")
//   for (let s = 2; s < 3; s++) {
//     elheartbtn43.addEventListener("click" , (e)=> {
//       console.log(e.target);
//       let div = document.createElement("div");
//       div.className = "item5";
//         div.innerHTML = `<div class="items">
//         <img id="items__img" src="${movies[s].youtubePoster}" alt="">
//         <p id="items__date">USA,${movies[s].year}</p>
//         <p id="items__movie-name">${movies[s].title}</p>
//         <span id="items__ranking">${movies[s].imdbRating} / 10</span>
//         <span class="items__category">${movies[s].categories}</span>
        
//         </div>
//         `;
//       console.log(e.target.parentElement.parentElement.parentElement.parentElement);
//       ofcanvasitem.appendChild(div);
//     })
//   }


//   let elheartbtn44 = document.querySelector("#items__btn34")
//   for (let s = 3; s < 4; s++) {
//     elheartbtn44.addEventListener("click" , (e)=> {
//       console.log(e.target);
//       let div = document.createElement("div");
//       div.className = "item5";
//         div.innerHTML = `<div class="items">
//         <img id="items__img" src="${movies[s].youtubePoster}" alt="">
//         <p id="items__date">USA,${movies[s].year}</p>
//         <p id="items__movie-name">${movies[s].title}</p>
//         <span id="items__ranking">${movies[s].imdbRating} / 10</span>
//         <span class="items__category">${movies[s].categories}</span>
        
//         </div>
//         `;
//       console.log(e.target.parentElement.parentElement.parentElement.parentElement);
//       ofcanvasitem.appendChild(div);
//     })
//   }


//   let elheartbtn35 = document.querySelector("#items__btn15")
//   for (let s = 35; s < 36; s++) {
//     elheartbtn35.addEventListener("click" , (e)=> {
//       console.log(e.target);
//       let div = document.createElement("div");
//       div.className = "item5";
//         div.innerHTML = `<div class="items">
//         <img id="items__img" src="${movies[s].youtubePoster}" alt="">
//         <p id="items__date">USA,${movies[s].year}</p>
//         <p id="items__movie-name">${movies[s].title}</p>
//         <span id="items__ranking">${movies[s].imdbRating} / 10</span>
//         <span class="items__category">${movies[s].categories}</span>
        
//         </div>
//         `;
//       console.log(e.target.parentElement.parentElement.parentElement.parentElement);
//       ofcanvasitem.appendChild(div);
//     })
//   }



//   let elheartbtn36 = document.querySelector("#items__btn16")
//   for (let s = 36; s < 37; s++) {
//     elheartbtn36.addEventListener("click" , (e)=> {
//       console.log(e.target);
//       let div = document.createElement("div");
//       div.className = "item5";
//         div.innerHTML = `<div class="items">
//         <img id="items__img" src="${movies[s].youtubePoster}" alt="">
//         <p id="items__date">USA,${movies[s].year}</p>
//         <p id="items__movie-name">${movies[s].title}</p>
//         <span id="items__ranking">${movies[s].imdbRating} / 10</span>
//         <span class="items__category">${movies[s].categories}</span>
        
//         </div>
//         `;
//       console.log(e.target.parentElement.parentElement.parentElement.parentElement);
//       ofcanvasitem.appendChild(div);
//     })
//   }


//   let elheartbtn37 = document.querySelector("#items__btn17")
//   for (let s = 37; s < 38; s++) {
//     elheartbtn37.addEventListener("click" , (e)=> {
//       console.log(e.target);
//       let div = document.createElement("div");
//       div.className = "item5";
//         div.innerHTML = `<div class="items">
//         <img id="items__img" src="${movies[s].youtubePoster}" alt="">
//         <p id="items__date">USA,${movies[s].year}</p>
//         <p id="items__movie-name">${movies[s].title}</p>
//         <span id="items__ranking">${movies[s].imdbRating} / 10</span>
//         <span class="items__category">${movies[s].categories}</span>
        
//         </div>
//         `;
//       console.log(e.target.parentElement.parentElement.parentElement.parentElement);
//       ofcanvasitem.appendChild(div);
//     })
//   }


//   let elheartbtn38 = document.querySelector("#items__btn18")
//   for (let s = 38; s < 39; s++) {
//     elheartbtn38.addEventListener("click" , (e)=> {
//       console.log(e.target);
//       let div = document.createElement("div");
//       div.className = "item5";
//         div.innerHTML = `<div class="items">
//         <img id="items__img" src="${movies[s].youtubePoster}" alt="">
//         <p id="items__date">USA,${movies[s].year}</p>
//         <p id="items__movie-name">${movies[s].title}</p>
//         <span id="items__ranking">${movies[s].imdbRating} / 10</span>
//         <span class="items__category">${movies[s].categories}</span>
        
//         </div>
//         `;
//       console.log(e.target.parentElement.parentElement.parentElement.parentElement);
//       ofcanvasitem.appendChild(div);
//     })
//   }


//   let elheartbtn39 = document.querySelector("#items__btn19")
//   for (let s = 39; s < 40; s++) {
//     elheartbtn39.addEventListener("click" , (e)=> {
//       console.log(e.target);
//       let div = document.createElement("div");
//       div.className = "item5";
//         div.innerHTML = `<div class="items">
//         <img id="items__img" src="${movies[s].youtubePoster}" alt="">
//         <p id="items__date">USA,${movies[s].year}</p>
//         <p id="items__movie-name">${movies[s].title}</p>
//         <span id="items__ranking">${movies[s].imdbRating} / 10</span>
//         <span class="items__category">${movies[s].categories}</span>
        
//         </div>
//         `;
//       console.log(e.target.parentElement.parentElement.parentElement.parentElement);
//       ofcanvasitem.appendChild(div);
//     })
//   }


//   let elheartbtn40 = document.querySelector("#items__btn20")
//   for (let s = 40; s < 41; s++) {
//     elheartbtn40.addEventListener("click" , (e)=> {
//       console.log(e.target);
//       let div = document.createElement("div");
//       div.className = "item5";
//         div.innerHTML = `<div class="items">
//         <img id="items__img" src="${movies[s].youtubePoster}" alt="">
//         <p id="items__date">USA,${movies[s].year}</p>
//         <p id="items__movie-name">${movies[s].title}</p>
//         <span id="items__ranking">${movies[s].imdbRating} / 10</span>
//         <span class="items__category">${movies[s].categories}</span>
        
//         </div>
//         `;
//       console.log(e.target.parentElement.parentElement.parentElement.parentElement);
//       ofcanvasitem.appendChild(div);
//     })
//   }





// ======================== START FILTER PART =========================//

let elStartYear = document.querySelector("#start-year")
let elEndYear = document.querySelector("#end-year")
let elFilterBtn = document.querySelector("#filter-btn")

elFilterBtn.addEventListener("click", (e) => {
  e.preventDefault()
  for (let i = 0; i < 2; i++) {
    let a = movies.filter((el) =>{
      if (el.year > eval(elStartYear.value) && el.year <= eval(elEndYear.value)) return true
    })
    console.log(a);
  }
})





// let companies = [
//   {name:"alibaba",category:"financ",start:1990, end:2022},
//   {name:"amazon",category:"financ",start:1960, end:2020},
//   {name:"cocacola",category:"foods",start:1983, end:2022},
//   {name:"google",category:"technology",start:1979, end:2019},
//   {name:"facebook",category:"retail",start:1987, end:2006},
//   {name:"microsoft",category:"retail",start:1997, end:2019},
//   {name:"ebay",category:"magazine",start:1988, end:2006},
//   {name:"reebook",category:"technology",start:2017, end:2022},
//   {name:"audi",category:"auto",start:1987, end:2009},
// ]

//FILTER QILIB companies massiv ichidagi categirisy financ bolganlarni a massivga oldim
// let a = companies.filter((el) =>{
//   if (el.category == "financ") return true
// })
// console.log(a);

// FILTER 1988 va 2022 orasidagi elementlarni a massivga yigdim
// let a = movies.filter((el) =>{
//   if (el.year > 2015 && el.year <= 2022) return true
// })
// console.log(a);




