function calculateGPA(semester) {
    let totalCredits = 0;
    let totalGradePoints = 0;
    
    for (let i = 1; i <= 6; i++) {
        const credits = document.getElementById(`sem${semester}credits${i}`).value;
        const grade = document.getElementById(`sem${semester}grade${i}`).value;

        if (credits && grade) {
            totalCredits += parseFloat(credits);
            totalGradePoints += parseFloat(credits) * parseFloat(grade);
        }
    }

    const gpa = totalGradePoints / totalCredits;
    if (!isNaN(gpa)) {
        document.getElementById(`sem${semester}GPA`).textContent = `GPA: ${gpa.toFixed(2)}`;
    } else {
        document.getElementById(`sem${semester}GPA`).textContent = `GPA: N/A`;
    }
}
