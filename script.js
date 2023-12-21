const copyBtn = document.getElementById('copyButton');
const nextBtn = document.getElementById('nextButton');
const quote = document.getElementById('main-quote');
const poet = document.getElementById('author');
const copyText = document.querySelector('#copyContainer p');
const nextText = document.querySelector('#nextContainer p');
const container = document.getElementById('container');



copyBtn.addEventListener('click', function(){
    navigator.clipboard.writeText(quote.innerText + poet.innerHTML);
})

copyBtn.addEventListener('mouseover', function(){
    copyText.style.display = "block";
})

copyBtn.addEventListener('mouseout', function(){
    copyText.style.display = "none";
})


nextBtn.addEventListener('mouseover', function(){
    nextText.style.display = "block";
    gsap.from("",{
        x:10,
    })
})

nextBtn.addEventListener('mouseout', function(){
    nextText.style.display = "none";
})



const tl = gsap.timeline();

tl.from("#nav-part0 p",{
    y:100,
    delay:0.2,
    duration:0.7,
    
})

tl.from("#nav-part1 li",{
    y:100,
    stagger:0.2,
})

gsap.from("#container",{
    x:-2000,
    delay:0.3,
    duration:1.6,
    yoyo:true,
})




const sher = [
    {
        quote: " sab ḳhvāhisheñ puurī hoñ 'farāz' aisā nahīñ hai <br> jaise ka.ī ash.ār mukammal nahīñ hote   ",
        poet: "Ahmed Faraaz",
    },
    {
        quote: "ishq ne 'Gaalib' nikammaa kar diyaa <br> varna ham bhii aadmii the kaam ke",
        poet: "Mirza Ghalib",
    },
    {
        quote: "sitaaro.n se aage jahaa.n aur bhii hai.n <br> abhii ishq ke imtihaa.n aur bhii hai.n",
        poet: "Allama Iqbal",
    },
    {
        quote: "tum jab aa.ogii to khoyaa hu.aa paa.ogii mujhe <br> merii tanhaa.ii me.n KHvaabo.n ke sivaa kuchh bhii nahii.n",
        poet: "Jaun Elia",
    },
    {
        quote: "teraa pahluu tire dil kii tarah aabaad rahe <br> tujh pe guzre na qayaamat shab-e-tanhaa.ii kii",
        poet: "Parveen Shakir",
    },
    {
        quote: "is qadar pyaar se ai jān-e-jahāñ rakkhā hai <br> dil ke ruḳhsār pe is vaqt tirī yaad ne haat ",
        poet: "Faiz Ahmad Faiz",
    },
    {
        quote: "ghar se masjid hai bahut duur chalo yuuñ kar leñ  <br> kisī rote hue bachche ko hañsāyā jaa.e ",
        poet: "Nida Fazli",
    },
    {
        quote: "ujāle apnī yādoñ ke hamāre saath rahne do <br> na jaane kis galī meñ zindagī kī shaam ho jaa.e ",
        poet: "Bashir Badr",
    },
    {
        quote: "dil dhaḌakne kā sabab yaad aayā <br> vo tirī yaad thī ab yaad aayā ",
        poet: "Nasir Kazmi",
    },
    {
        quote: "bichha.D ga.e to ye dil umr bhar lagegaa nahii.n <br> lagegaa lagne lagaa hai magar lagegaa nahii.n",
        poet: "Umair Najmi",
    }
];


nextBtn.addEventListener('click', function(){

    gsap.from("#main-quote, #author",{
        x:-500,
        stagger:0.3,
    });
    let random = Math.floor(Math.random()*sher.length);
    quote.innerHTML =  sher[random].quote;
    poet.innerHTML= "- "+sher[random].poet;
})

console.log(sher[1].quote);
