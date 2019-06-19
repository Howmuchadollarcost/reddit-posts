const results = document.getElementById('results');
const loading = document.getElementById('loading');
const bpt = document.getElementById('bpt');
const mi = document.getElementById('mi');


loading.style.display = 'none';

bpt.addEventListener('click', ()=>{
    const API = `https://www.reddit.com/r/blackpeopletwitter/.json`;
    getPics(API);
    results.innerHTML='';
})

mi.addEventListener('click', ()=>{
    const API = `https://www.reddit.com/r/mildlyinteresting/.json`;
    getPics(API);
    results.innerHTML='';
})


async function getPics(API){
    loading.style.display = '';
    const res = await fetch(API);
    const data = await res.json();
    const dataArr = [];
    dataArr.push(data.data.children);
    dataArr[0].shift();   //Remove modes post
    showPics(dataArr);
};


const showPics= (data) => {
    data[0].map(item =>{
        console.log(item);
        let img = document.createElement('img');
        img.src = item.data.url;
        let title = document.createElement('h4');
        title.innerHTML = item.data.title;
        let div = document.createElement('div');
        div.className = "post";

        div.appendChild(title);
        div.appendChild(img);

        results.appendChild(div);
        loading.style.display = 'none';
    })
}


 


 