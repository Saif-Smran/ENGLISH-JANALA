// console.log('Hello, world!');

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
    console.log(level_no);
    
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
    lesson.forEach(lesson => {
        const lessonElement = document.createElement('div')
        lessonElement.innerHTML = `
            <div class="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full text-center h-[280px]">
        <h1 class="text-2xl font-bold mb-2">${lesson.word}</h1>
        <p class="text-gray-600 font-medium text-lg mb-4">Meaning /Pronounciation</p>
        <p class="text-xl font-semibold text-gray-700 mb-6">"${lesson.meaning == null ? 'অর্থ নেই'
            :lesson.meaning} "/" ${lesson.pronunciation}"</p>
        <div class="flex justify-between items-center">
            <button  class="bg-gray-100 p-3 rounded-lg">
                <i class="fas fa-info text-gray-500"></i>
            </button>
            <button class="bg-gray-100 p-3 rounded-lg">
                <i class="fas fa-volume-up text-gray-500"></i>
            </button>
        </div>
    </div>
        `
        lessonContainer.appendChild(lessonElement)
    })
}

LoadCatagories()


