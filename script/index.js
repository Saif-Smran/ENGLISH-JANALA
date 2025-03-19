// console.log('Hello, world!');
function showLoder() {
    document.getElementById('loder').classList.remove('hidden');
    document.getElementById('lesson-container').classList.add('hidden');
}
function removeLoder() {
    document.getElementById('loder').classList.add('hidden');
    document.getElementById('lesson-container').classList.remove('hidden');
}


function removeActive() {
    const activeBtns = document.getElementsByClassName('active');

    for( let btn of activeBtns) {
        btn.classList.remove('active');
    }
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth',  // Smooth scroll
        block: 'start'       // Scroll to the top of the section
    });
}

function LoadCatagories(){
    fetch('https://openapi.programming-hero.com/api/levels/all').then(res => res.json()).then(data => renderCatagories(data.data))
}



function renderCatagories(catagories){
    const catagoriesContainer = document.getElementById('learn-catagory')
    catagories.forEach(catagory => {
        const catagoryElement = document.createElement('div')
        catagoryElement.innerHTML = `
            <button id="Lesson-${catagory.level_no}" onclick="LoadLessons('${catagory.level_no}')" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open fa-lg"></i> Lesson-${catagory.level_no}</button>
        `
        catagoriesContainer.appendChild(catagoryElement)
    })
}

function LoadLessons(level_no){
    // console.log(level_no);
    showLoder()
    removeActive()
    const url = `https://openapi.programming-hero.com/api/level/${level_no}`
    fetch(url).then(res => res.json()).then(data =>{
        displayLessonCards(data.data)
        document.getElementById('Lesson-'+level_no).classList.add('active');
    })
   
    
}


const displayLessonCards = (lesson) => {
    const lessonContainer = document.getElementById('lesson-container')
    lessonContainer.innerHTML = ''
    if(lesson.length == 0){
        lessonContainer.innerHTML = `
            <div
                    class="col-span-full hind-siliguri text-center h-72 flex flex-col justify-center items-center gap-4 bg-[#F8F8F8] rounded-lg ">
                    <img class="mt-20" src="./assets/alert-error.png" alt="">
                    <h3 class="text-sm text-gray-400">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</h3>
                    <h1 class="font-medium text-4xl pb-20">নেক্সট Lesson এ যান</h1>
                </div>
        `
        removeLoder()
        return
    }

    lesson.forEach(lesson => {
        const lessonElement = document.createElement('div')
        lessonElement.innerHTML = `
            <div class="bg-white rounded-lg p-8 max-w-sm w-full text-center h-[280px]">
        <h1 class="text-2xl font-bold mb-2">${lesson.word}</h1>
        <p class="text-gray-600 font-medium text-lg mb-4">Meaning /Pronounciation</p>
        <p class="text-xl font-semibold text-gray-700 mb-6">"${lesson.meaning == null ? 'অর্থ নেই'
            :lesson.meaning} "/" ${lesson.pronunciation}"</p>
        <div class="flex justify-between items-center">
            <button onclick="loadLesonDetails('${lesson.id}')" class="btn p-3 rounded-lg">
                <i class="fas fa-info text-gray-500"></i>
            </button>
            <button class="btn p-3 rounded-lg">
                <i class="fas fa-volume-up text-gray-500"></i>
            </button>
        </div>
    </div>
        `
        lessonContainer.appendChild(lessonElement)
    })
    removeLoder()
}


function loadLesonDetails(id){
    console.log(id);
    
    const url = `https://openapi.programming-hero.com/api/word/${id}`
    fetch(url).then(res => res.json()).then(data => {
        displayLessonDetails(data.data)
    })
}


function displayLessonDetails(data){
    document.getElementById('details').showModal()

    const detailsContainer = document.getElementById('leson_detail_container')
    let div = `
    <div class="flex space-x-2 mt-2">
                                <span class="bg-blue-100 text-gray-800 px-3 py-1 rounded-lg">${data.synonyms[0]}</span>
                                <span class="bg-blue-100 text-gray-800 px-3 py-1 rounded-lg">${data.synonyms[1]}</span>
                                <span class="bg-blue-100 text-gray-800 px-3 py-1 rounded-lg">${data.synonyms[2]}</span>
                            </div>
    `
    detailsContainer.innerHTML = `
        <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                        <h1 class="text-2xl font-bold mb-4">${data.word} (<i
                                class="fa-solid fa-microphone-lines fa-lg"></i>: ${data.pronunciation})
                        </h1>
                        <div class="mb-4">
                            <h2 class="text-lg font-semibold">Meaning</h2>
                            <p class="text-xl">${data.meaning == null ? 'অর্থ খুঁজে পাওয়া যায়নি'
                                :data.meaning}</p>
                        </div>
                        <div class="mb-4">
                            <h2 class="text-lg font-semibold">Example</h2>
                            <p class="text-gray-700">${data.sentence}</p>
                        </div>
                        <div class="mb-4">
                            <h2 class="text-lg font-semibold">সমার্থক শব্দ গুলো</h2>
                            ${data.synonyms.length == 0 ? '' : div}
                        </div>
                    </div>
    
    `


}

LoadCatagories()


