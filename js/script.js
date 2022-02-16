
const innerText = document.querySelectorAll(".innerText");
const questions = document.querySelectorAll(".question");
const section = document.querySelector("section")
const illustration = document.querySelector(".image-content")


let acumulador = 0

function visible() {
  questions.forEach((question) => {
    question.addEventListener("click", function() {      
      question.children[0].classList.toggle("arrow-up")
      section.classList.add("height")

      if(question.nextElementSibling.classList.contains("visible")){
        question.nextElementSibling.classList.remove("visible")
        question.nextElementSibling.classList.remove("1")
        question.classList.remove("active")        
        acumulador--
        
      }else{
        question.nextElementSibling.classList.add("visible")
        question.classList.add("active")        
        acumulador++
        question.nextElementSibling.classList.add(`${acumulador}`)        
      }      
      
      if(question.nextElementSibling.classList.contains("2")){
        questions.forEach(question=>{
          if(question.nextElementSibling.classList.contains("1")){
            question.nextElementSibling.classList.remove("visible")
            question.nextElementSibling.classList.remove("1")
            question.classList.remove("active")
            question.children[0].classList.remove("arrow-up")

          }
        })
        question.nextElementSibling.classList.remove("2")
        acumulador--
        question.nextElementSibling.classList.add(`${acumulador}`)
      }

      if(acumulador == 0 || illustration.clientWidth > 220){
        section.classList.remove("height")
      }

    }) 
  });  
}

visible();


