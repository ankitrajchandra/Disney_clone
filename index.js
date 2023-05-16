// Carousel 

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }


    let slide = document.createElement("div");
    let imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");

    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    // h1.innerHTML=movies[slideIndex].name;
    // p.innerHTML=movies[slideIndex].des;
    
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    imgElement.src = movies[slideIndex].image;

    carousel.appendChild(slide);

    // imgElement.src = movies[slideIndex].image;
    slideIndex++;

    slide.className = "slider";
    content.className = "slider-content";
    h1.className = "movie-title";
    p.className = "movie-des";

    // console.log("Hello");
    sliders.push(slide);

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
};
// createSlide();
for (let i = 0; i < 5; i++) {
    createSlide();
};

setInterval(() => {
    createSlide();
}, 3000);


// Carousel end





// Video Cards

const videoCard=[...document.querySelectorAll(".video-card")];
// array that take all .video card

videoCard.forEach(function(element){
    element.addEventListener('mouseover',()=>{
        let video=element.children[1];
        video.play();
    })

    element.addEventListener('mouseleave',()=>{
        let video=element.children[1];
        video.pause();
    })
});

// Video cards end



// Poster

let cardContainers=[...document.querySelectorAll(".card-container")];
let preBtns=[...document.querySelectorAll(".pre-btn")];
let nxtBtns=[...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item,i)=>{
    let containerDimensions=item.getBoundingClientRect();
    let containerWidth=containerDimensions.width;

    nxtBtns[i].addEventListener('click', ()=>{
        item.scrollLeft +=containerWidth-200;
    })

    preBtns[i].addEventListener('click', ()=>{
        item.scrollLeft -=containerWidth+200;
    })
})

// Poster end