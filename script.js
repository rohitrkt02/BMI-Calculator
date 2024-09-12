const form = document.querySelector('form');

// Event listener for form submission
form.addEventListener('submit', function(e){
    e.preventDefault();

    // Get height and weight input values
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const results = document.querySelector('#results');

    // Clear previous result
    results.innerHTML = '';

    // Check if both height and weight are invalid
    if((height === '' || isNaN(height) || height <= 0) && 
       (weight === '' || isNaN(weight) || weight <= 0)){
        results.innerHTML = 'Please provide valid height and weight.';
    } 
    // Validate height input
    else if(height === '' || isNaN(height) || height <= 0){
        results.innerHTML = 'Please provide a valid height.';
    } 
    // Validate weight input
    else if(weight === '' || isNaN(weight) || weight <= 0){
        results.innerHTML = 'Please provide a valid weight.';
    } 
    // If inputs are valid, calculate and display BMI
    else {
        // Convert height and weight to integers
        const heightInCm = parseInt(height);
        const weightInKg = parseInt(weight);

        // Calculate BMI
        const bmi = (weightInKg / ((heightInCm * heightInCm) / 10000)).toFixed(2);

        let category = '';

        // Determine BMI category
        if(bmi < 18.5){
            category = 'Underweight';
        } else if(bmi >= 18.5 && bmi < 24.9){
            category = 'Normalweight';
        } else if(bmi >= 25 && bmi < 29.9){
            category = 'Overweight';
        }

        // Display BMI and category
        results.innerHTML = `Your BMI is ${bmi}. You are <strong>${category}</strong>.`;
    }
});
