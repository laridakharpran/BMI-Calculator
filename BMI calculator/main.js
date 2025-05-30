const form = document.querySelector("form")
// this will give you empty value
//const height = parseInt(document.querySelector("#height").value)


form.addEventListener('submit', function (e) {
    e.preventDefault(); // ✅ correct usage

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if (isNaN(height) || height <= 0) {
        results.value = "Please enter a valid height.";
    } else if (isNaN(weight) || weight <= 0) {
        results.value = "Please enter a valid weight.";
    } else {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2); 
        results.value = bmi;
    }
    if (bmi < 18.6) {
        alert(`Your BMI is ${bmi} — Underweight`);
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        alert(`Your BMI is ${bmi} — Normal range`);
    } else {
        alert(`Your BMI is ${bmi} — Overweight`);
    }

});
0