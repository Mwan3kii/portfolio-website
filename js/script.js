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
    const xIcon = document.createElement('img');
    xIcon.classList.add('x-icon');
    xIcon.setAttribute('src', '../assets/images/close.png')
    mainPopupDiv.appendChild(xIcon);
    const secondaryPopupDiv = document.createElement('div');
    secondaryPopupDiv.classList.add('popup_content');
    mainPopupDiv.appendChild(secondaryPopupDiv);
    const imageDiv = document.createElement('div');
    imageDiv.setAttribute('id','popup_img');
    
    const img = document.createElement('img');
    img.classList.add('popup-img')
    img.setAttribute('src', '../assets/images/Snapshot Portfolio.jpg');
    img.setAttribute('width', '100%');
    img.setAttribute('height', '220px');
    img.setAttribute('border-radius', '5px');
    const cancelIcon = document.createElement('img');
    cancelIcon.classList.add('cancel-icon');
    cancelIcon.setAttribute('src', '../assets/images/cancel.png')
    img.setAttribute('position', 'relative');
    img.appendChild(cancelIcon);
    imageDiv.appendChild(img);
    const titleSection = document.createElement('div');
    titleSection.classList.add('title-popup');
    const mainProjectTitle = document.createElement('h2');
    mainProjectTitle.classList.add('project-title');
    mainProjectTitle.innerText = "Keeping track of hundreds of components"
    titleSection.appendChild(mainProjectTitle);
    secondaryPopupDiv.appendChild(imageDiv);
    secondaryPopupDiv.appendChild(titleSection);
    const tagsSpan = document.createElement('div');
    tagsSpan.classList.add('popup-tags');
    const tag1 = document.createElement('span');
    tag1.classList.add('popup-tag');
    tag1.innerText = "JavaScript";
    const tag2 = document.createElement('span');
    tag2.classList.add('popup-tag');
    tag2.innerText = "React";
    const tag3 = document.createElement('span');
    tag3.classList.add('popup-tag');
    tag3.innerText = "Ruby on Rails";
    tagsSpan.appendChild(tag1);
    tagsSpan.appendChild(tag2);
    tagsSpan.appendChild(tag3)
    secondaryPopupDiv.appendChild(tagsSpan);
    const description = document.createElement('p');
    description.classList.add('project-description');
    description.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s";
    secondaryPopupDiv.appendChild(description);
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('popup-btns')
    const LiveButton = document.createElement('button');
    LiveButton.classList.add('popup-btn');
    LiveButton.innerText = "See live";
    const liveIcon = document.createElement('i');
    liveIcon.classList.add('fas', 'fa-broadcast-tower');
    LiveButton.appendChild(liveIcon);
    const SourceButton = document.createElement('button');
    SourceButton.classList.add('popup-btn');
    SourceButton.innerText = "See Source";
    const SourceIcon = document.createElement('i');
    SourceIcon.classList.add('fab', 'fa-github');
    SourceButton.appendChild(SourceIcon);
    buttonDiv.appendChild(LiveButton);
    buttonDiv.appendChild(SourceButton);
    secondaryPopupDiv.appendChild(buttonDiv);
    
    return mainPopupDiv;
}

window.addEventListener('load', ()=> {
   const popupWindowSection = document.getElementById('popWindow');
   if (popupWindowSection) {
        popupWindowSection.appendChild(showPopup());
   }
})