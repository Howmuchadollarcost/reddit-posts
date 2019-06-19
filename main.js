const results = document.getElementById("results");
const loading = document.getElementById("loading");
const bpt = document.getElementById("bpt");
const mi = document.getElementById("mi");

loading.style.display = "none";

bpt.addEventListener("click", () => {
  const API = `https://www.reddit.com/r/blackpeopletwitter/.json`;
  getPics(API);
  results.innerHTML = "";
});

mi.addEventListener("click", () => {
  const API = `https://www.reddit.com/r/mildlyinteresting/.json`;
  getPics(API);
  results.innerHTML = "";
});

async function getPics(API) {
  loading.style.display = "";
  const res = await fetch(API);
  const data = await res.json();
  const dataArr = [];
  showPics(data.data.children);

  let lazyImages = [...document.querySelectorAll(".post")];
  let inAdvance = 300;

  function lazyLoad() {
    lazyImages.forEach(image => {
      if (
        image.offsetTop <
        window.innerHeight + window.pageYOffset + inAdvance
      ) {
        image.src = image.dataset.src;
        image.onload = () => image.classList.add("loaded");
      }
    });
  }
  lazyLoad();
  window.addEventListener("scroll", _.throttle(lazyLoad, 16));
  window.addEventListener("resize", _.throttle(lazyLoad, 16));
}

const showPics = data => {
  data.map(item => {
    const urls = item.data.preview.images[0].source.url;
    const newUrl = urls.replace(/amp;/gi, "");
    let img = document.createElement("img");
    img.src = newUrl;
    img.className = "blurry";
    let title = document.createElement("h4");
    title.innerHTML = item.data.title;
    let div = document.createElement("div");
    div.className = "post";

    div.appendChild(title);
    div.appendChild(img);

    results.appendChild(div);
    loading.style.display = "none";

    let timeout = this.setTimeout(function() {
      showImage();
    }, 1500);

    const showImage = () => {
      img.style.filter = "blur(0px)";
      console.log("hello");
    };
  });
};
