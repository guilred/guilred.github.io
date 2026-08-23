const birthDate = new Date('2006-11-07');
const now = new Date();
let age = now.getFullYear() - birthDate.getFullYear();
const hasHadBirthday = (now.getMonth() > birthDate.getMonth()) ||
    (now.getMonth() === birthDate.getMonth() && now.getDate() >= birthDate.getDate());
if (!hasHadBirthday) age--;

const ageEl = document.getElementById('age');
if (ageEl) {
    ageEl.textContent = age;
}
