document.addEventListener("DOMContentLoaded",function(){
    const questions=document.querySelectorAll('.question');
    questions.forEach(question=>{
        question.addEventListener('click',()=>{
            const content=question.nextElementSibling;
            if(content.style.display==='block'){
                content.style.display='none';
                const plusIcon=question.querySelector('.plusIcon');
                plusIcon.style.display='block';
                const minusIcon=question.querySelector('.minusIcon');
                minusIcon.style.display='none';
            }
            else{
                content.style.display='block';
                const plusIcon=question.querySelector('.plusIcon');
                plusIcon.style.display='none';
                const minusIcon=question.querySelector('.minusIcon');
                minusIcon.style.display='block';
            }
        })
    })
})