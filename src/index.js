// import './css/styles.css';
// import Notiflix from 'notiflix';

// const API_KEY = '32131484-434bcc2deb94b7a5b14c43765';

// const perPage = 40;
// let totalPages = undefined;
// let currentPage = 1;


// const searchForm = document.querySelector('#search-form')
// const inputSearch = document.querySelector('input');
// const galleryContainer = document.querySelector('.gallery');
// const loadMoreBtn = document.querySelector('.load-more');
// loadMoreBtn.style.display = 'none';
// searchForm.addEventListener('submit', onSubmit)
// loadMoreBtn.addEventListener('click', onLoadMoreBtn)

// let inputEl = '';

// function onSubmit(e) {
//     e.preventDefault()
//     inputEl = inputSearch.value
//     galleryContainer.innerHTML = '';
//     loadMoreBtn.style.display = 'none';

//     getImg(inputEl)
//     .then(({hits, totalHits}) => {
//       if (hits.length > 0) {
//       createImgs(hits) 
//       Notiflix.Notify.success(`"Hooray! We found ${totalHits} images."`)
//       loadMoreBtn.style.display = 'block';
//       } else {
//         Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.")
//       }  
//     })   
//   }

//   async function getImg(inputEl) {
//     const urlAPI = `https://pixabay.com/api/?key=${API_KEY}&q=${inputEl}&image_type=photo&orientation=horizontal&safesearch=true&page=${currentPage}&per_page=${perPage}`;
//     const response = await fetch(urlAPI)
//         return response.json()
//   }

//   function createImgs(hits) { 
//     const element = hits.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => {
//         return `<div class="photo-card">
//         <a href= ${largeImageURL}><img src="${webformatURL}" alt="${tags}" loading="lazy" /></a>
//         <div class="info">
//           <p class="info-item">
//             <b>Likes ${likes}</b>
//           </p>
//           <p class="info-item">
//             <b>Views ${views}</b>
//           </p>
//           <p class="info-item">
//             <b>Comments ${comments}</b>
//           </p>
//           <p class="info-item">
//             <b>Downloads ${downloads}</b>
//           </p>
//         </div>
//       </div>`
//       }).join('');
  
//       galleryContainer.insertAdjacentHTML('beforeend', element)
//   }
    
//   function paginationLoadMore(totalHits) {
//     totalPages = Math.floor((totalHits > 200 ? 200 : totalHits) / perPage)
//   }

//   function onLoadMoreBtn(e) {
//     e.preventDefault();

//     if (currentPage > totalPages) {
//       loadMoreBtn.style.display = 'none';
//       Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.")
//       return
//     }else{
//       loadMoreBtn.style.display = 'block';
//       currentPage = Number(currentPage) + 1;
//       getImg(inputEl)
//       .then(({hits, totalHits}) => {
//         if (hits.length > 0) {
//         createImgs(hits) 
//         paginationLoadMore(totalHits)
//       }
//     })
//   }
// }
// // // ______________________________________________________________________________________
// // ______________________________________________________________________________________
// // ______________________________________________________________________________________


import './css/styles.css';
import Notiflix from 'notiflix';
// const axios = require('axios');
import axios from 'axios';


const API_KEY = '32131484-434bcc2deb94b7a5b14c43765';

const perPage = 40;
let totalPages = undefined;
let currentPage = 1;


const searchForm = document.querySelector('#search-form')
console.log(searchForm);
// const buttonSearch = document.querySelector('button');
// console.log(buttonSearch);
const inputSearch = document.querySelector('input');
console.log(inputSearch);

const galleryContainer = document.querySelector('.gallery');
console.log(galleryContainer);
const loadMoreBtn = document.querySelector('.load-more');
console.log(loadMoreBtn);
loadMoreBtn.style.display = 'none';
searchForm.addEventListener('submit', onSubmit)
loadMoreBtn.addEventListener('click', onLoadMoreBtn)

let inputEl = '';

function onSubmit(e) {
        e.preventDefault()
        inputEl = inputSearch.value
        galleryContainer.innerHTML = '';
        loadMoreBtn.style.display = 'none';
    
        getImg(inputEl)
        .then(({hits, totalHits}) => {
          if (hits.length > 0) {
          createImgs(hits) 
          Notiflix.Notify.success(`"Hooray! We found ${totalHits} images."`)
          loadMoreBtn.style.display = 'block';
          } else {
            Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.")
          }  
        })   
      }
    
      async function getImg(inputEl) {
        const urlAPI = `https://pixabay.com/api/?key=${API_KEY}&q=${inputEl}&image_type=photo&orientation=horizontal&safesearch=true&page=${currentPage}&per_page=${perPage}`;
        const response = await axios.get(urlAPI)
            return response.data
      }
    

function createImgs(hits) { 
    const element = hits.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => {
        return `<div class="photo-card">
        <a href= ${largeImageURL}><img src="${webformatURL}" alt="${tags}" loading="lazy" /></a>
        <div class="info">
          <p class="info-item">
            <b>Likes ${likes}</b>
          </p>
          <p class="info-item">
            <b>Views ${views}</b>
          </p>
          <p class="info-item">
            <b>Comments ${comments}</b>
          </p>
          <p class="info-item">
            <b>Downloads ${downloads}</b>
          </p>
        </div>
      </div>`
      }).join('');
    
      galleryContainer.insertAdjacentHTML('beforeend', element)
}
            
function paginationLoadMore(totalHits) {
  totalPages = Math.floor((totalHits > 200 ? 200 : totalHits) / perPage)
}
        
function onLoadMoreBtn(e) {
    e.preventDefault();
        if (currentPage > totalPages) {
            loadMoreBtn.style.display = 'none';
            Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.")
            return
          }else{
            loadMoreBtn.style.display = 'block';
            currentPage = Number(currentPage) + 1;
            getImg(inputEl)
            .then(({hits, totalHits}) => {
                if (hits.length > 0) {
                createImgs(hits)
                paginationLoadMore(totalHits)
            }
          })
        }
    } 
 

