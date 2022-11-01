import { biodata, club } from "./data.js";

// membuat element
const createBiodata = (data) => {
  const bioContainer = document.querySelector(".header__bio");
  const markup = `
      <p>Nama : ${data.nama}</p>
      <p>NIM : ${data.nim}</p>
      <p>Kelas : ${data.kelas}</p>
   `;
  bioContainer.insertAdjacentHTML("beforeend", markup);
};

const createClub = (data) => {
  const clubContainer = document.querySelector(".club");
  const markup = `
      <div class="club__img">
          <img src="${data.fanArt}" alt="club image" />
      </div>
      <div class="club__desc">
          <h2>${data.name}</h2>
          <button class="btn"><span class="btn-text">Show details</span></button>
          <p class="club_desc_paragraph hidden">${data.description}</p>
      </div>
     
    `;
  clubContainer.insertAdjacentHTML("beforeend", markup);
};

const init = () => {
  createBiodata(biodata);
  createClub(club);
};

init();

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const clubContainer = document.querySelector(".club_desc_paragraph");
  const btnText = document.querySelector(".btn-text");
  clubContainer.classList.toggle("hidden");
  btnText.textContent = clubContainer.classList.contains("hidden")
    ? "Show details"
    : "Hide details";
});
