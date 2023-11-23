const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
const addExperienceBtn = document.querySelector(".add-exp-btn");
const experiencesGroup = document.querySelector(".experiences-group");
const btnComplete = document.querySelector(".btn-complete");
btnComplete.addEventListener("click", () => {
    document.getElementsByTagName('form').submit
})
let formStepsNum = 0;
let experienceNum = 1;

addExperienceBtn.addEventListener("click", () => {
    experienceNum++;
    let text = `
        <hr>
    <div class='experience-item'>
        <div class='input-group' >
        <label for='title'>Company name</label>
        <input type='text' name='title[]' id='title'>
    </div>
    <div class='input-group'>
        <label for='start-date'>Start date</label>
        <input type='date' name='start-date[]' id='start-date'>
    </div>
    <div class='input-group'>
        <label for='end-date'>End date</label>
        <input type='date' name='nd-date[]' id='end-date'>
    </div>
    <div class='input-group'>
        <label for='job-description'>Description</label>
        <textarea name='job-description[]' id='job-description' cols='42' rows='6'></textarea>
    </div>
</div > `
    experiencesGroup.insertAdjacentHTML('beforeend', text);
})

function updateFormSteps() {

    formSteps.forEach(formStep => {
        formStep.classList.contains("active") &&
            formStep.classList.remove("active");
    })
    formSteps[formStepsNum].classList.add("active");
}

function updateProgressBar() {
    progressSteps.forEach((progressStep, idx) => {
        if (idx < formStepsNum + 1) {
            progressStep.classList.add("active");
        } else {
            progressStep.classList.remove("active");
        }
    })

    const progressActive = document.querySelectorAll(".progress-step.active");
    progress.style.width = ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + '%';
}


nextBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        formStepsNum++;
        updateFormSteps();
        updateProgressBar();
        console.log("kk")
    })
})


prevBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        formStepsNum--;
        updateFormSteps();
        updateProgressBar();
        console.log("kk")
    })
})

        // Ajoutez le script JavaScript ici
        const inputs = document.querySelectorAll('input[required]');

        inputs.forEach(input => {
            input.addEventListener('input', () => {
                if (input.checkValidity()) {
                    input.classList.remove('invalid');
                    input.classList.add('valid');
                } else {
                    input.classList.remove('valid');
                    input.classList.add('invalid');
                }
            });
        });



            //for textarea the aspect
      function countCharactersy() {
        var textarea = document.getElementById("job-description");  
        var TextCounpt = document.getElementById("TextCounpty")
        var TextiDy = document.getElementById("labelDES")
        var  maxLength = parseInt(textarea.getAttribute("maxlength"));
        const currentLength = textarea.value.length;
        const remainingChars = maxLength - currentLength;
        TextCounpt.textContent = remainingChars + " caractères restants";
        TextiDy.style.display = "none"
        
      }

     //for textarea my preference
      function countCharacters() {
        var textarea = document.getElementById("summary");
        var TextCounpt = document.getElementById("TextCounptys")
        var Labelsummary = document.getElementById("labelsummary")
        var  maxLength = parseInt(textarea.getAttribute("maxlength"));
        const currentLength = textarea.value.length;
        const remainingChars = maxLength - currentLength;
        TextCounpt.textContent =   remainingChars + " caractères restants";
        Labelsummary.style.display = "none"
      }