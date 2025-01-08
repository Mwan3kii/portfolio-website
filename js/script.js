const projectInfo = [
    {
        id: 1,
        projectName: 'To do app',
        projectInfo:
            "A simple and interactive to-do app built with ReactJS. It features dynamic task management, allowing users to add, edit, delete, and mark tasks as complete. Leveraging React's state management and component architecture, the app ensures a seamless and responsive user experience.",
        tech: ['HTML', 'CSS', 'ReactJs'],
        img: 'assets/images/todo.png',
        liveURL: 'https://todo-app-j36p.onrender.com/',
        sourceUrl: 'https://github.com/Mwan3kii/todo-app-project',
    },
    {
        id: 2,
        projectName: 'ProActive Crime Posts',
        projectInfo:
            "Proactive is an anonymous crime reporting platform showcasing my skills as a full-stack developer. Built with Flask for a secure backend and HTML, CSS, and JavaScript for a responsive front end, it ensures user anonymity through encryption and secure data handling. Integrated with SQLAlchemy for efficient database management, it highlights my ability to create user-focused, scalable solutions.",
        tech: ['HTML', 'CSS', 'Javascript', 'Python', 'Flask'],
        img: 'assets/images/proactive.png',
        liveURL: 'https://proactive-crime-site.onrender.com/',
        sourceUrl: 'https://github.com/Mwan3kii/ProActive-crime-site',
    }
];

function mobileMenu() {
    const hamburger = document.querySelector('.menu-bar');
    const mobileMenu = document.getElementById('menu-page');
    const xButton = document.querySelector('.top-x');

    if (mobileMenu.style.display === 'block') {
        hamburger.style.display = 'block';
        mobileMenu.style.display = 'none';
        xButton.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block'
        hamburger.style.display = 'none';
        xButton.style.display = 'block';
    }
}

function showPopup() {
    const mainPopupDiv = document.createElement('div');
    mainPopupDiv.classList.add('popup');
    const secondaryPopupDiv = document.createElement('div');
    secondaryPopupDiv.classList.add('popup_content');
    mainPopupDiv.appendChild(secondaryPopupDiv);
    const imageDiv = document.createElement('div');
    imageDiv.setAttribute('id', 'popup_img');
    const close_icon = document.createElement('img');
    close_icon.setAttribute('class', 'close_button');
    close_icon.setAttribute('src', '../assets/images/Icon.png');
    close_icon.setAttribute('onclick', 'closePopup()');
    const desktop_close_icon = document.createElement('img');
    desktop_close_icon.setAttribute('class', 'desktop_close_button');
    desktop_close_icon.setAttribute('src', '/assets/images/desktop_close.png');
    desktop_close_icon.setAttribute('onclick', 'closePopup()');
    const img = document.createElement('img');
    img.setAttribute('src', '../assets/images/Snapshot Portfolio.jpg');
    img.setAttribute('class', 'main_img');
    imageDiv.appendChild(close_icon);
    imageDiv.appendChild(desktop_close_icon);
    imageDiv.appendChild(img);
    const titleSection = document.createElement('div');
    titleSection.classList.add('title-popup');
    const mainProjectTitle = document.createElement('h2');
    mainProjectTitle.classList.add('project-title');
    titleSection.appendChild(mainProjectTitle);
    secondaryPopupDiv.appendChild(imageDiv);
    secondaryPopupDiv.appendChild(titleSection);
    

    // desktop button section
    const desktopDiv = document.createElement('div');
    desktopDiv.classList.add('d-title');
    const desktopTitle = document.createElement('h2');
    desktopTitle.classList.add('desktop-title');
    desktopDiv.appendChild(desktopTitle);

    const btnDiv = document.createElement('div');
    btnDiv.classList.add('d-btns')
    const liveBtn = document.createElement('button');
    liveBtn.classList.add('live-btn');
    liveBtn.innerText = "See live";
    const liveIcn = document.createElement('i');
    liveIcn.classList.add('fas', 'fa-broadcast-tower');
    liveBtn.appendChild(liveIcn);
    const sourceBtn = document.createElement('button');
    sourceBtn.classList.add('source-btn');
    sourceBtn.innerText = "See Source";
    const sourceIcn = document.createElement('i');
    sourceIcn.classList.add('fab', 'fa-github');
    sourceBtn.appendChild(sourceIcn);
    btnDiv.appendChild(liveBtn);
    btnDiv.appendChild(sourceBtn);

    desktopDiv.appendChild(btnDiv);
    secondaryPopupDiv.appendChild(desktopDiv);

    const tagsSpan = document.createElement('div');
    tagsSpan.classList.add('popup-tags');
    secondaryPopupDiv.appendChild(tagsSpan);
    const description = document.createElement('p');
    description.classList.add('project-description');

    secondaryPopupDiv.appendChild(description);
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('popup-btns')
    const liveButton = document.createElement('button');
    liveButton.classList.add('live-btn');
    liveButton.innerText = "See live";
    const liveIcon = document.createElement('i');
    liveIcon.classList.add('fas', 'fa-broadcast-tower');
    liveButton.appendChild(liveIcon);
    const sourceButton = document.createElement('button');
    sourceButton.classList.add('source-btn');
    sourceButton.innerText = "See Source";
    const sourceIcon = document.createElement('i');
    sourceIcon.classList.add('fab', 'fa-github');
    sourceButton.appendChild(sourceIcon);
    buttonDiv.appendChild(liveButton);
    buttonDiv.appendChild(sourceButton);
    secondaryPopupDiv.appendChild(buttonDiv);
    return mainPopupDiv;
}

function showDynamicproject() {
    const divDynamic = projectInfo.map((item) => {
        const mainCard = document.createElement('div');
        mainCard.classList.add('card');
        const cardImage = document.createElement('div');
        cardImage.classList.add('card-image');
        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.projectName;
        cardImage.appendChild(img);
        mainCard.appendChild(cardImage);
        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');
        mainCard.appendChild(cardImage);
        mainCard.appendChild(cardContent);
        const heading = document.createElement('h3');
        heading.innerText = `${item.projectName}`;
        cardContent.appendChild(heading);
        const tags = document.createElement('div');
        tags.classList.add('tags');
        item.tech.forEach((tech) => {
            const spanTag = document.createElement('span');
            spanTag.classList.add('tag');
            spanTag.innerText = tech;
            tags.appendChild(spanTag);
        });
        cardContent.appendChild(tags);
        const popupButton = document.createElement('button');
        popupButton.setAttribute('class', 'btn');
        popupButton.setAttribute('type', 'button');
        popupButton.setAttribute('onclick', `clickedProject(${item.id})`); // This assumes you have a function to handle popups
        popupButton.innerText = 'See Project';
        cardContent.appendChild(popupButton);

        return mainCard;
    })

    return divDynamic;
}

function openPopup() {
    const popupWindow = document.querySelector('.popup');
    popupWindow.style.display = 'block';
}

function clickedProject(projectId) {
    const heading_section = document.querySelector('.desktop-title');
    const project_tag = document.querySelector('.popup-tags');
    const project_title = document.querySelector('.project-title');
    const project_image = document.querySelector('.main_img');
    const project_description = document.querySelector('.project-description');
    const live_project = document.querySelector('.live-btn');
    const source_project = document.querySelector('.source-btn');
    projectInfo.forEach((e, i) => {
        if (projectInfo[i].id === Number(projectId)) {
            heading_section.innerHTML = projectInfo[i].projectName;
            if (project_image) {
                project_image.src = projectInfo[i].img;
                project_image.alt = projectInfo[i].projectName;
            }
            if (project_description) {
                project_description.innerHTML = projectInfo[i].projectInfo;
            }
            if (project_title) {
                project_title.innerHTML = projectInfo[i].projectName;
            }
            if (project_tag) {
                project_tag.innerHTML = '';
                projectInfo[i].tech.forEach(tech => {
                    const tag = document.createElement('span');
                    tag.classList.add('popup-tag');
                    tag.innerText = tech;
                    project_tag.appendChild(tag);
                })
            }
            if (live_project) {
                live_project.addEventListener('click', () => {
                    console.log('Button clicked');
                    if (projectInfo[i].liveURL) {
                        window.open(projectInfo[i].liveURL, '_blank'); // Opens the live project in a new tab
                    }
                });
            }
            if (source_project) {
                source_project.addEventListener('click', () => {
                    if (projectInfo[i].sourceUrl) {
                        window.open(projectInfo[i].sourceUrl, '_blank'); // Opens the source project in a new tab
                    }
                });
            }
            openPopup();
        }
    })
}

function closePopup() {
    const popupWindow = document.querySelector('.popup');
    popupWindow.style.display = 'none';
}

function validateForm(event) {
    const email = document.forms[0].elements.email.value;
    const res = email.match(/[A-Z]/g);
    const container = document.querySelector('form .form_validate');
    let msg = '';

    if (res) {
        msg = 'Error: Form was not sent! Email characters are incorrect';
        event.preventDefault();
    } else {
        return;
    }

    container.innerHTML = '';

    const errorSection = document.createElement('h2');
    errorSection.innerText = msg;
    container.appendChild(errorSection);
}

window.onload = () => {
    document.querySelector('#form_inputs').addEventListener('submit', (event) => validateForm(event));
}

window.addEventListener('load', () => {
    const popupWindowSection = document.getElementById('popWindow');
    if (popupWindowSection) {
        popupWindowSection.appendChild(showPopup());
    }

    // document.querySelector('.card-section').innerHTML = showDynamicproject().join('');
    const cardSection = document.querySelector('.card-section');
    if (cardSection) {
        showDynamicproject().forEach(card => cardSection.appendChild(card));
    }
})