const prompt = require('prompt-sync')();

const job_type = prompt('Enter your job type (government/business/private): ').toLowerCase();

if (job_type === 'government') {
    const salary = parseFloat(prompt('Enter your salary: '));
    if (salary > 50000) {
        console.log('You can apply for a loan.');
    } else {
        console.log('You cannot apply for a loan.');
    }
} else if (job_type === 'business') {
    const turnover = parseFloat(prompt('Enter your yearly turnover (in lakhs): '));
    if (turnover > 20) {
        console.log('You can apply for a loan.');
    } else {
        console.log('You cannot apply for a loan.');
    }
} else if (job_type === 'private') {
    console.log('No loan available for you.');
} else {
    console.log('Invalid job type input.');
}