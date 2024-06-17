document.addEventListener('DOMContentLoaded', function () {
    // Fetch and load the navbar
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;

            // Check if content-container exists
            const contentContainer = document.getElementById('content-container');
            if (contentContainer) {
                // Add event listeners after the navbar is loaded
                const portfolioLink = document.getElementById('portfolio-link');
                if (portfolioLink) {
                    portfolioLink.addEventListener('click', function(event) {
                        event.preventDefault(); // Prevent default link behavior
                        fetch('portfolio.html')
                            .then(response => response.text())
                            .then(data => {
                                const parser = new DOMParser();
                                const doc = parser.parseFromString(data, 'text/html');
                                const portfolioContent = doc.getElementById('portfolio-container').innerHTML;
                                contentContainer.innerHTML = portfolioContent;
                                initializeCardScript(); // Initialize card script after loading content
                            })
                            .catch(error => console.error('Error loading portfolio:', error));
                    });
                } else {
                    console.error('Error: portfolio-link not found');
                }

                const aboutMeLink = document.getElementById('about-me-link');
                if (aboutMeLink) {
                    aboutMeLink.addEventListener('click', function(event) {
                        event.preventDefault(); // Prevent default link behavior
                        fetch('aboutme.html')
                            .then(response => response.text())
                            .then(data => {
                                const parser = new DOMParser();
                                const doc = parser.parseFromString(data, 'text/html');
                                const aboutMeContent = doc.getElementById('about-me-container').innerHTML;
                                contentContainer.innerHTML = aboutMeContent;
                            })
                            .catch(error => console.error('Error loading about me:', error));
                    });
                } else {
                    console.error('Error: about-me-link not found');
                }

                // test - add diving link
                const skillsLink = document.getElementById('skills-link');
if (skillsLink) {
    skillsLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        fetch('skills.html')
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                const skillsContent = doc.getElementById('skills-container').innerHTML;
                contentContainer.innerHTML = skillsContent;
                updateHealthBars(); // Update health bars after loading content
            })
            .catch(error => console.error('Error loading about me:', error));
    });
} else {
    console.error('Error: skills not found');
}

                // test - add diving link
                const divingLink = document.getElementById('diving-link');
                if (divingLink) {
                    divingLink.addEventListener('click', function(event) {
                        event.preventDefault(); // Prevent default link behavior
                        fetch('diving.html')
                            .then(response => response.text())
                            .then(data => {
                                const parser = new DOMParser();
                                const doc = parser.parseFromString(data, 'text/html');
                                const divingContent = doc.getElementById('diving-container').innerHTML;
                                contentContainer.innerHTML = divingContent;
                            })
                            .catch(error => console.error('Error loading about me:', error));
                    });
                } else {
                    console.error('Error: diving not found');
                }

                // Bind startSwimming function to the fish button after the navbar is loaded
                const fishButton = document.querySelector('button[onclick="startSwimming()"]');
                if (fishButton) {
                    fishButton.addEventListener('click', startSwimming);
                } else {
                    console.error('Error: fish button not found');
                }

                // Default to loading the About Me page
                fetch('aboutme.html')
                    .then(response => response.text())
                    .then(data => {
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(data, 'text/html');
                        const aboutMeContent = doc.getElementById('about-me-container').innerHTML;
                        contentContainer.innerHTML = aboutMeContent;
                    })
                    .catch(error => console.error('Error loading about me:', error));
            } else {
                console.error('Error: content-container not found');
            }
        })
        .catch(error => console.error('Error loading navbar:', error));
});
