const api_url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
imgpath = "https://image.tmdb.org/t/p/w1280";
const ser_url = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="
const main = document.querySelector(".main")
const search = document.querySelector(".search") ;
const input = search.value;
const form = document.querySelector("form")
getMovies(api_url);
async function getMovies(url){
    const resp = await fetch(url);
    const respData = await resp.json();
    showsnmovie(respData.results);
}
function showsnmovie(movies){
    main.innerHTML= "";
    movies.forEach((movie) => {
        const {poster_path, original_title, vote_average} = movie;
        const movieEL = document.createElement("div");
        movieEL.classList.add("movie");
        movieEL.innerHTML = `
        <img src="${imgpath+poster_path}" alt="">
        <div class="movieInfo">
           <h5> ${original_title}</h5>
            <span>${vote_average}</span>
        </div>
      `
        main.appendChild(movieEL);
    });
}
// showsnmovie();
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    if(search){
        getMovies(ser_url+search.value);
    }

})
