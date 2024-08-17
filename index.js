document.addEventListener("DOMContentLoaded", () => {
  let person1Input = document.querySelector(".person1-input");
    let person2Input = document.querySelector(".person2-input");

  let person1Element = document.querySelector(".person1-element");
   let person2Element = document.querySelector(".person2-element");
 
  let loveButton = document.getElementById('love-button')


let couplePercentElement = document.querySelector(".percent-couple");
  
let coupleHidden = document.querySelector(".couple");

  
  loveButton.addEventListener("click", () => {
    
    let person1Text = person1Input.value;
    let person2Text = person2Input.value;
    
    console.log(person1Text, person2Text)
  
    person1Element.textContent = person1Text;
    person2Element.textContent = person2Text;

    var couplePercent = Math.random();
    couplePercent = Math.floor(couplePercent * 101);
    
console.log(couplePercent);
    
    couplePercentElement.textContent = couplePercent;
    
  })
  
  
})
