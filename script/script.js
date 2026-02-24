const blogCards = document.getElementById("blog-cards");
const blogNext = document.getElementById("blog-next");
const blogPrev = document.getElementById("blog-prev");

let blogIndex = 0;
const blogCardWidth = 280;

blogNext.onclick = () => {
    blogIndex++;
    if(blogIndex > blogCards.children.length - 4) blogIndex = 0;
    blogCards.style.transform = `translateX(-${blogIndex * blogCardWidth}px)`;
};

blogPrev.onclick = () => {
    blogIndex--;
    if(blogIndex < 0) blogIndex = blogCards.children.length - 4;
    blogCards.style.transform = `translateX(-${blogIndex * blogCardWidth}px)`;
};


const slider = document.querySelector(".testimonial-grid");
const nextBtn = document.querySelectorAll(".nav-btn")[1];
const prevBtn = document.querySelectorAll(".nav-btn")[0];

let scrollAmount = 0;
const cardWidth = 345; 

nextBtn.onclick = () => {
  slider.scrollLeft += cardWidth;
};

prevBtn.onclick = () => {
  slider.scrollLeft -= cardWidth;
};
