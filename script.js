let currentStep = 0;

// শুধু ছবির ফাইলগুলোর নাম (কোনো বাড়তি টেক্সট বা ক্যাপশন ছাড়াই)
const images = [
    "IMG_5177.jpeg",
    "IMG_5879 2.jpeg",
    "IMG_5879.jpeg",
    "IMG_5880.jpeg"
];

function startStory() {
    document.getElementById('pandaScene').style.opacity = '0.2';
    
    const paper = document.getElementById('paperBox');
    paper.classList.add('show');
    
    currentStep = 0;
    showContent();
}

function nextStep() {
    currentStep++;
    showContent();
}

function showContent() {
    const contentArea = document.getElementById('contentArea');
    
    if (currentStep < images.length) {
        contentArea.innerHTML = `
            <img src="${images[currentStep]}" alt="Story Picture ${currentStep + 1}">
            <p style="margin: 5px 0 0 0; font-size: 11px; color: #888;">(পরবর্তী পেজে যেতে ক্লিক করো)</p>
        `;
    } else if (currentStep === images.length) {
        contentArea.innerHTML = `<div class="end-text">The End</div>`;
    } else {
        document.getElementById('paperBox').classList.remove('show');
        document.getElementById('pandaScene').style.opacity = '1';
        currentStep = 0;
    }
}