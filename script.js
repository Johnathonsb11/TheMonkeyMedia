const mainColumn = document.getElementById('mainColumn');
const accounts = document.getElementById('accounts');
const leaderboard = document.getElementById('leaderboard');

const closeButtons = document.querySelectorAll('.closeButton');
const minimizeButtons = document.querySelectorAll('.minimizeButton');

const taskbarIcons = document.querySelectorAll('.taskbarIcon');
const startIcon = taskbarIcons[0];

const iconHighlights = document.querySelectorAll('#taskbar div');

// clicking the close button closes the window
for (i = 0; i < closeButtons.length; i++) {
    if (i === 0) {
        closeButtons[i].addEventListener('click', ()=> {
            accounts.style.display = 'none';
            iconHighlights[2].style.boxShadow = 'none';
            iconHighlights[2].style.backgroundImage = 'none';
        });
    }
    else if (i === 1) {
        closeButtons[i].addEventListener('click', ()=> {
            mainColumn.style.display = 'none';
            iconHighlights[1].style.boxShadow = 'none';
            iconHighlights[1].style.backgroundImage = 'none';
        });
    }
    else {
        closeButtons[i].addEventListener('click', ()=> {
            leaderboard.style.display = 'none';
            iconHighlights[3].style.boxShadow = 'none';
            iconHighlights[3].style.backgroundImage = 'none';
        });
    }
}

// clicking the minimize button minimizes the window
for (i = 0; i < minimizeButtons.length; i++) {
    if (i === 0) {
        minimizeButtons[i].addEventListener('click', ()=> {
            accounts.style.display = 'none';
        });
    }
    else if (i === 1) {
        minimizeButtons[i].addEventListener('click', ()=> {
            mainColumn.style.display = 'none';
        });
    }
    else {
        minimizeButtons[i].addEventListener('click', ()=> {
            leaderboard.style.display = 'none';
        });
    }
}

// clicking the taskbar icon reopens its respective window
for (i = 0; i < iconHighlights.length; i++) {
    if (i === 1) {
        iconHighlights[i].addEventListener('click', ()=> {
            if (mainColumn.style.display === 'none') {
                mainColumn.style.display = 'flex';
                if (iconHighlights[1].style.boxShadow === 'none') {
                    iconHighlights[1].style.boxShadow = 'rgba(0, 0, 0, 0.6) -1px -1px 1px, rgba(0, 0, 0, 0.6) 1px -1px 1px, rgba(255, 255, 255, 0.7) 1px 1px 1px inset';
                    iconHighlights[1].style.backgroundImage = 'linear-gradient(165deg, rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 80%, rgba(255, 255, 255, 0.3) 90%)';
                }
            }
            else {
                mainColumn.style.display = 'none';
            }
        });
    }
    else if (i === 2) {
        iconHighlights[i].addEventListener('click', ()=> {
            if (accounts.style.display === 'none') {
                accounts.style.display = 'flex';
                if (iconHighlights[2].style.boxShadow === 'none') {
                    iconHighlights[2].style.boxShadow = 'rgba(0, 0, 0, 0.6) -1px -1px 1px, rgba(0, 0, 0, 0.6) 1px -1px 1px, rgba(255, 255, 255, 0.7) 1px 1px 1px inset';
                    iconHighlights[2].style.backgroundImage = 'linear-gradient(165deg, rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 80%, rgba(255, 255, 255, 0.3) 90%)';
                }
            }
            else {
                accounts.style.display = 'none';
            }
        });
    }
    else if (i === 3) {
        iconHighlights[i].addEventListener('click', ()=> {
            if (leaderboard.style.display === 'none') {
                leaderboard.style.display = 'flex';
                if (iconHighlights[3].style.boxShadow === 'none') {
                    iconHighlights[3].style.boxShadow = 'rgba(0, 0, 0, 0.6) -1px -1px 1px, rgba(0, 0, 0, 0.6) 1px -1px 1px, rgba(255, 255, 255, 0.7) 1px 1px 1px inset';
                    iconHighlights[3].style.backgroundImage = 'linear-gradient(165deg, rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 80%, rgba(255, 255, 255, 0.3) 90%)';
                }
            }
            else {
                leaderboard.style.display = 'none';
            }
        });
    }
}