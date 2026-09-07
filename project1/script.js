let count = 0;

const countNumber = document.querySelector("#count");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const resetBtn    = document.querySelector("#reset");

increaseBtn.addEventListener("click", ()=> {
    count++;
    countNumber.textContent = count;
});
decreaseBtn.addEventListener("click", ()=> {
    if(count > 0){
        count--;
    countNumber.textContent = count;
    } else{
        count = 0;
    }
   
});
resetBtn.addEventListener("click", ()=> {
    count = 0;
    countNumber.textContent = count;
});