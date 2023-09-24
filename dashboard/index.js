const dropdownLinks = document.querySelectorAll('.sidebar .dropdown-content');
const contentSections = document.querySelectorAll('.content > div');
for (const link of dropdownLinks) {
    link.previousElementSibling.addEventListener('click', function () {
        contentSections.forEach((section) => {
            section.style.display = 'none';
        });
        link.style.display = link.style.display === 'block' ? 'none' : 'block';
        const sectionClassName = link.previousElementSibling.textContent;
        const section = document.querySelector(`.${sectionClassName}`);
        if (section) {
            section.style.display = 'block';
        }
    });
}
const educationList = document.getElementById('education-list');
const addEducationForm = document.getElementById('add-education-form');
addEducationForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const degree = document.getElementById('degree').value;
    const date = document.getElementById('date').value;
    const place = document.getElementById('place').value;
    const listItem = document.createElement('li');
    listItem.innerHTML = `${degree}, ${date}, ${place} <i class="fa-solid fa-trash-can fa-lg delete"></i>`;
    educationList.appendChild(listItem);

    document.getElementById('degree').value = '';
    document.getElementById('date').value = '';
    document.getElementById('place').value = '';
    const deleteIcon = listItem.querySelector('.delete');
    deleteIcon.addEventListener('click', function () {
        educationList.removeChild(listItem);
    });
});
const experienceList = document.getElementById('experience-list');
const addExperienceForm = document.getElementById('add-experience-form');
addExperienceForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const position = document.getElementById('position').value;
    const description = document.getElementById('description').value;
    const expDate = document.getElementById('exp-date').value;
    const expPlace = document.getElementById('exp-place').value;
    const listItem = document.createElement('li');
    listItem.innerHTML = `${position}, ${expDate}, ${expPlace} <i class="fa-solid fa-trash-can fa-lg delete"></i>`;
    experienceList.appendChild(listItem);
    document.getElementById('position').value = '';
    document.getElementById('exp-date').value = '';
    document.getElementById('exp-place').value = '';
    const deleteIcon = listItem.querySelector('.delete');
    deleteIcon.addEventListener('click', function () {
        experienceList.removeChild(listItem);
    });
});
const projectsList = document.getElementById('projects-list');
const addProjectForm = document.getElementById('add-project-form');

addProjectForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const projectName = document.getElementById('project-name').value;
    const projectDescription = document.getElementById('project-description').value;
    const listItem = document.createElement('li');
    listItem.innerHTML = `${projectName}, ${projectDescription} <i class="fa-solid fa-trash-can fa-lg delete"></i>`;
    projectsList.appendChild(listItem);
    document.getElementById('project-name').value = '';
    document.getElementById('project-description').value = '';
    const deleteIcon = listItem.querySelector('.delete');
    deleteIcon.addEventListener('click', function () {
        projectsList.removeChild(listItem);
    });
});

const existingDeleteIcons = document.querySelectorAll('.delete');
existingDeleteIcons.forEach((deleteIcon) => {
    deleteIcon.addEventListener('click', function () {
        const listItem = deleteIcon.parentElement;
        const list = listItem.parentElement;
        list.removeChild(listItem);
    });
});
const uploadIcon = document.getElementById('upload-icon');
const fileInput = document.getElementById('file-upload');

uploadIcon.addEventListener('click', function () {
    fileInput.click();
});

const profilePhoto = document.getElementById('profile-photo');
fileInput.addEventListener('change', function () {
const selectedFile = fileInput.files[0]; 
if (selectedFile) {
    const reader = new FileReader();
    reader.onload = function (e) {
        profilePhoto.src = e.target.result;
    };
    reader.readAsDataURL(selectedFile);
}
});

function deleteSkillItem(event) {
    const skillItem = event.target.closest('.image-item'); 
    if (skillItem) {
        skillItem.remove();
    }
}

const deleteIcons = document.querySelectorAll('.fa-trash-can');
deleteIcons.forEach((deleteIcon) => {
    deleteIcon.addEventListener('click', deleteSkillItem);
});

const popup = document.getElementById('popup');
const addMoreImage = document.querySelector('.image-item img[src="plus.jpg"]');
const closePopup = document.getElementById('close-popup');
const addSkillForm = document.getElementById('add-skill-form');
const imageGallery = document.querySelector('.image-gallery:last-child'); 

addMoreImage.addEventListener('click', function () {
popup.style.display = 'block';
});

closePopup.addEventListener('click', function () {
popup.style.display = 'none';
});

window.addEventListener('click', function (event) {
if (event.target === popup) {
    popup.style.display = 'none';
}
});

addSkillForm.addEventListener('submit', function (e) {
e.preventDefault();

const skillName = document.getElementById('skill-name').value;
const imageUpload = document.getElementById('image-upload').files[0];

if (skillName && imageUpload) {
    const skillItem = document.createElement('div');
    skillItem.classList.add('image-item');
    skillItem.innerHTML = `
        <img src="${URL.createObjectURL(imageUpload)}" alt="${skillName}">
        <p>${skillName}</p>
        <i class="fa-solid fa-trash-can fa-lg delete"></i>
    `;
    const deleteIcon = skillItem.querySelector('.delete');
    deleteIcon.addEventListener('click', deleteSkillItem);
    imageGallery.insertBefore(skillItem, imageGallery.lastElementChild);
    document.getElementById('skill-name').value = '';
    document.getElementById('image-upload').value = '';
    popup.style.display = 'none';
}
});

const aboutDescription = document.getElementById('about-description');
const pencilIcon = document.getElementById("pencil");

if (aboutDescription && pencilIcon) {
    let isEditing = false;

    function toggleEdit() {
        isEditing = !isEditing;
        aboutDescription.contentEditable = isEditing;
        if (isEditing) {
            aboutDescription.focus();
            pencilIcon.style.color = 'blue'; 
        } else {
            pencilIcon.style.color = '#000000';
        }
    }
    pencilIcon.addEventListener('click', toggleEdit);

    aboutDescription.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            toggleEdit();
        }
    });
}
