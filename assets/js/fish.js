const imageUrl = './assets/images/fish.png'; // Use relative path
let backgroundCover;

function startSwimming() {
    if (!backgroundCover) {
        backgroundCover = document.getElementById('background-cover');
    }
    backgroundCover.classList.add('show'); // Show the background cover with fade-in effect

    let fishCount = 30;
    let fishLoaded = 0;

    for (let i = 0; i < fishCount; i++) {
        setTimeout(() => {
            createAndAnimateBarracuda(() => {
                fishLoaded++;
                if (fishLoaded === fishCount) {
                    // Hide the background cover after all fish have disappeared
                    setTimeout(() => {
                        backgroundCover.classList.remove('show'); // Fade out effect
                    }, 300); // Wait for the fade-out effect duration
                }
            });
        }, Math.random() * 1000); // Controls how quickly fish spawn
    }
    showDivingLink()
}

function createAndAnimateBarracuda(onAnimationComplete) {
    const img = new Image();
    img.src = imageUrl;
    img.className = 'barracuda';

    // Wait until the image is loaded to get its actual dimensions
    img.onload = () => {
        // Random scaling
        const scale = Math.random() * 0.09 + 0.1;
        img.style.width = `${scale * img.naturalWidth}px`;
        img.style.height = 'auto';

        // Random vertical position
        const yPos = Math.random() * (window.innerHeight - img.naturalHeight * scale);
        img.style.position = 'absolute';
        img.style.top = `${yPos}px`;
        img.style.left = '100%';

        document.body.appendChild(img);

        // Random duration
        const duration = Math.random() * 2000 + 2500; // Change scaling for animation duration

        img.animate([
            { transform: `translateX(0px)` },
            { transform: `translateX(-${window.innerWidth + img.naturalWidth * scale}px)` }
        ], {
            duration: duration,
            easing: 'linear',
            fill: 'forwards'
        });

        // Remove the image after the animation is complete
        setTimeout(() => {
            img.remove();
            if (typeof onAnimationComplete === 'function') {
                onAnimationComplete();
            }
        }, duration);
    };

    // Handle error loading the image
    img.onerror = () => {
        console.error('Failed to load the image.');
    };
}

function showDivingLink() {
    setTimeout(() => {
      ""  , 20000
    })
    const element = document.getElementById("diving-link");
    element.style.display = 'block'; // Ensure the element is visible
    element.classList.add('shaking'); // Add wiggling class to start animation

    // Optional: Remove the class after the animation ends to reset the state
    setTimeout(() => {
        element.classList.remove('shaking');
    }, 5000);
}
