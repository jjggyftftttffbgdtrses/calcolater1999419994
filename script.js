document.addEventListener('DOMContentLoaded', (event) => {
    const arabicMonths = [
        "يناير (1)", "فبراير (2)", "مارس (3)", "أبريل (4)", "مايو (5)", "يونيو (6)",
        "يوليو (7)", "أغسطس (8)", "سبتمبر (9)", "أكتوبر (10)", "نوفمبر (11)", "ديسمبر (12)"
    ];

    const daySelect = document.getElementById('day');
    const monthSelect = document.getElementById('month');
    const yearSelect = document.getElementById('year');

    // Populate day options
    for (let i = 1; i <= 31; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }

    // Populate month options
    arabicMonths.forEach((month, index) => {
        let option = document.createElement('option');
        option.value = index + 1;
        option.textContent = month;
        monthSelect.appendChild(option);
    });

    // Populate year options (starting from 2024)
    for (let i = 2024; i <= 2100; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }
});

function calculateDate() {
    const arabicMonths = [
        "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
        "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
    ];

    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;
    let daysToAdd = document.getElementById('days').value;

    if (day && month && year && daysToAdd !== '') {
        daysToAdd = parseInt(daysToAdd);
        let currentDate = new Date(year, month - 1, day);
        currentDate.setDate(currentDate.getDate() + daysToAdd);

        let newDay = currentDate.getDate();
        let newMonth = currentDate.getMonth();
        let newYear = currentDate.getFullYear();
        let newMonthName = arabicMonths[newMonth];

        let result = `${newYear}-${newDay}-${newMonth + 1} (${newMonthName})`;
        document.getElementById('result').textContent = 'التاريخ الجديد: ' + result;
    } else {
        document.getElementById('result').textContent = 'الرجاء إدخال جميع الحقول';
    }
}