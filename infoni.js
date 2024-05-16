const accessKey = "cz76I-tFWqu86e-pon4cnprGVRs077LOy583meOgWC0";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");
const closeIcon = document.getElementById("close-icon");
const webButton = document.getElementById("web");


let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
    searchResult.innerHTML = "";

    results.map((result) =>{
        const image = document.createElement("img")
        image.src = result.urls.small;
        const imageLink= document.createElement("a");
        imageLink.href =result.links.html; 
        imageLink.target = "_blank";


        imageLink.appendChild(image); 
        searchResult.appendChild(imageLink);

        showMoreBtn.style.display = "block";
        
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});
showMoreBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    page++; 
    await searchImages();
});
closeIcon.addEventListener("click", () => {
    searchBox.value = ""; 
});


