// Explore button
let exploreBtn = document.querySelector('.title .btn'),
    quranSection = document.querySelector('.quran');
    exploreBtn.addEventListener('click',()=>{
        quranSection .scrollIntoView({
            behavior:"smooth"
        })
    })
// =========================================================================
// nav scroll
let fixedNav = document.querySelector('.header');
let scrollBtn = document.querySelector('.scrollBtn');
window.addEventListener("scroll",()=>{
    window.scrollY > 100 ? fixedNav.classList.add('active') : fixedNav.classList.
    remove("active");
    window.scrollY > 500 ? scrollBtn.classList.add('active') : scrollBtn.classList.
    remove("active");
})
scrollBtn.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})
// =========================================================================
// surah api
let surhasContainer = document.querySelector('.surhasContainer');
getSurahs()
function getSurahs()
{
    // fetch surahs meta data { name of surahs}
    fetch("https://api.alquran.cloud/v1/meta")
    .then(response => response.json())
    .then(data=>{
        let surahs = data.data.surahs.references;
        let numberOfSurahs = 114;
        surhasContainer.innerHTML = "";
        for (let i = 0; i < numberOfSurahs ; i++){
            surhasContainer.innerHTML += 
            `
            <div class="surah">
            <p>${surahs[i].name}</p>
            <p>${surahs[i].englishName}</p>
            </div>
            `
        }
// =========================================================================
        let SurahsTitels = document.querySelectorAll('.surah');
        let popup = document.querySelector('.surah-popup'),
        AyatContainer = document.querySelector('.ayat');
        SurahsTitels.forEach((title,index)=>{
            title.addEventListener('click',()=>{
                fetch(`https://api.alquran.cloud/v1/surah/${index + 1}`)
                .then(response => response.json())
                .then(data=>{
                    AyatContainer.innerHTML = "";
                    let Ayat = data.data.ayahs;
                    Ayat.forEach(aya=>{
                        popup.classList.add('active');
                        AyatContainer.innerHTML += `
                        <p>(${aya.numberInSurah}) - ${aya.text}</p>
                        `
                    })
                })
            })
        })
         // =========================================================================
             // close popup
        let closePopup = document.querySelector('.close-popup');
        closePopup.addEventListener('click',()=>{
            popup.classList.remove('active');
        })
        })
}
// =========================================================================
// link sections
let sections = document.querySelectorAll("section"),
    links = document.querySelectorAll('.header ul li');
links.forEach(link => {
    link.addEventListener('click',()=>{
        document.querySelector('.header ul li.active').classList.remove('active');
        link.classList.add('active');
        let target = link.dataset.filter;
        sections.forEach(section=>{
            if(section.classList.contains(target))
            {
                section.scrollIntoView({
                    behavior : "smooth"
                })
            }
        })
    })
})
// =========================================================================
// praytime api
let cards = document.querySelector('.cards');
getPrayTimes();
function getPrayTimes()
{
    fetch("https://api.aladhan.com/v1/timingsByCity/20-10-2024?city=cairo&country=egypt&method=8")
    .then(response => response.json())
    .then(data=>{
        let times = data.data.timings;
        cards.innerHTML = "";
        for (let time in times)
        {
            cards.innerHTML+=
            `
            <div class="card">
                <div class="circle">
                    <svg>
                        <circle cx="100" cy="100" r="100" ></circle>
                    </svg>
                    <div class="praytime">${times[time]}</div>
                </div>
                <p>${time}</p>
            </div>
            `
        }
})
}
// =========================================================================
// active sidebar
let bars = document.querySelector('.bars'),
    SideBar = document.querySelector('.header ul');
bars.addEventListener('click',()=>{
    SideBar.classList.toggle("active")
})

// // Explore button
// let exploreBtn = document.querySelector('.title .btn'),
//     quranSection = document.querySelector('.quran');
//     exploreBtn.addEventListener('click',()=>{
//         quranSection .scrollIntoView({
//             behavior:"smooth"
//         })
//     })


//  // active sidebar
// let bars = document.querySelector('.bars'),
// SideBar = document.querySelector('.header ul');
// bars.addEventListener('click',()=>{
// SideBar.classList.toggle("active")
// })


// let fixedNav = document.querySelector('.header'),
//     scrollBtn = document.querySelector('.scrollBtn');

// window.addEventListener("scroll",()=>{
//     window.scrollY > 100 ? fixedNav.classList.add('active') : fixedNav.classList.
//     remove('active');
//     if(window.scrollY > 500)
//     {
//         scrollBtn.classList.add('active')
//     }
//     else
//     {
//         scrollBtn.classList.remove('active')
//     }
// })
// scrollBtn.addEventListener('click',()=>{
//     window.scrollTo({
//         top:0,
//         behavior:"smooth"
//     })
// })


// // surah APi
// let surahsContainer = document.querySelector('.surhascontainer')
// getSurahs()
// function getSurahs()
// {
//     // fetch surahs meta data {name of surahs}
//     fetch("https://api.alquran.cloud/v1/meta")
//     .then(response => response.json())
//     .then(data=>{
//         console.log(data);
//         let surahs = data.data.surahs.references;
//         let nymberOfSurahs = 114;
//         surahsContainer.innerHTML ="";
//         for (let i = 0; i < nymberOfSurahs; i++) {


//             surahsContainer.innerHTML +=
//                 `
//                 <div class="surah">
//                     <p>${surahs[i].name}</p>
//                     <p>${surahs[i].englishName}</p>
//                 </div>
//             `
            
//         }
//         let surahsTitels = document.querySelectorAll('.surah');
//         let popup = document.querySelector('.surah-popup'),
//             AyatContainer = document.querySelector('.ayat');
//         surahsTitels.forEach((title,index)=>{
//             title.addEventListener('click',()=>{
//                 fetch(https://api.alquran.cloud/v1/surah/${index + 1})
//                 .then(response => response.json())
//                 .then(data=>{
//                     console.log(data);
//                     AyatContainer.innerHTML = "" ;
//                     let Ayat = data.data.ayahs;
//                     Ayat.forEach(aya=>{
//                         popup.classList.add('active');
//                         AyatContainer.innerHTML +=  `
//                             <p>(${aya.numberInSurah}) - ${aya.text} </p>
//                             `
//                     })
//                 })
//             })
//         })

//         let closePopup = document.querySelector('.close-popup');
//         closePopup.addEventListener('click',()=>{
//             popup.classList.remove('active');

//         })
//     })

// }

// // link sections
// let sections = document.querySelectorAll("section"),
//     links = document.querySelectorAll('.header ul li');
// links.forEach(link => {
//     link.addEventListener('click',()=>{
//         document.querySelector('.header ul li.active').classList.remove('active');
//         link.classList.add('active');
//         let target = link.dataset.filter;
//         sections.forEach(section=>{
//             if(section.classList.contains(target))
//             {
//                 section.scrollIntoView({
//                     behavior : "smooth"
//                 })
//             }
//         })

//     })
// })

// // pray time api
// let cards = document.querySelector('.cards');
// getPrayTimes();
// function getPrayTimes()
// {
//     fetch("https://api.aladhan.com/v1/timingsByCity/20-10-2024?city=cairo&country=egypt&method=8")
//     .then(response => response.json())
//     .then(data=>{
//         let times = data.data.timings;
//         cards.innerHTML = "";
//         for (let time in times)
//         {
//             cards.innerHTML+=
//             `
//             <div class="card">
//                 <div class="circle">
//                     <svg>
//                         <circle cx="100" cy="100" r="100" ></circle>
//                     </svg>
//                     <div class="praytime">${times[time]}</div>
//                 </div>
//                 <p>${time}</p>
//             </div>
//             `

//         }
// })
// }