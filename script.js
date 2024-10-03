// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            let yaySound = new Audio("yaysound.mp3");
            yaySound.volume = 0.2;
            yaySound.play();
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart();
            setTimeout(function(){
                window.open('index2.html', '_blank');
            }, 3000);
            

        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'Are you sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'mocha-bear-hearts.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    // Set the source (file path) for the cat-heart image
    catHeartImage.src = 'cute-bears-love.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
    // Set alternative text for the image (for accessibility)
    catHeartImage.alt = 'Cat Heart';
    // When the cat-heart image is fully loaded, add it to the image container
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        //Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

window.onload = function() {
    var imageElement = document.querySelector('#redButton img'); // Target the img inside the div
    var music = new Audio("Love Like You.mp3");
    music.loop = true;
    music.volume = 0.2;

    // Get the current page URL path
    var currentPage = window.location.pathname;

    // Play music only if the current page is index2.html
    if (currentPage.includes('index.html')) {
        // Add event listener to the entire document for a click
        document.addEventListener('click', function() {
            music.play();
        });
    }

    var originalImage = 'pngimg.com - buttons_PNG52.png';
    var clickedImage = 'Image23.png';
    let buttonSound1 = new Audio("button1.mp3");
    let buttonSound2 = new Audio("button2.mp3");

    // Event listener for mouse button down (clicking the image)
    imageElement.addEventListener('mousedown', function() {
        buttonSound1.play();
        imageElement.src = clickedImage;  // Change image on mouse press
        console.log('mouse clicked');
    });

    // Event listener for mouse button up (releasing the click)
    imageElement.addEventListener('mouseup', function() {
        buttonSound2.play();
        imageElement.src = originalImage;  // Revert to original image on release
        console.log('mouse released');
    });

    // Handle the case if the user moves the mouse away before releasing
    imageElement.addEventListener('mouseleave', function() {
        imageElement.src = originalImage;  // Ensure image returns to original if mouse leaves
    });
}

//Function to change pics with mouse click
function mouseClick() {
    var imageElement = document.querySelector('#redButton img'); // Target the img inside the div

    var originalImage = 'pngimg.com - buttons_PNG52.png';
    var clickedImage = 'Image23.png';

    // Event listener for mouse button down (clicking the image)
    imageElement.addEventListener('mousedown', function() {
        imageElement.src = clickedImage;  // Change image on mouse press
        console.log('mouse clicked');
    });

    // Event listener for mouse button up (releasing the click)
    imageElement.addEventListener('mouseup', function() {
        imageElement.src = originalImage;  // Revert to original image on release
        console.log('mouse released');
    });

    // Handle the case if the user moves the mouse away before releasing
    imageElement.addEventListener('mouseleave', function() {
        imageElement.src = originalImage;  // Ensure image returns to original if mouse leaves
    });
}


// Function to generate list of 101 reasons
function generateReasons(){
    let reasonArray = [
        'Your smile brightens my day.',
        'You understand me the most in this world.',
        'You are just straight up gorgeous.',
        'You have known me since I was nothing.',
        'You inspire me every single day.',
        'YOU ARE SO SO HOT!',
        'I am constantly reminded of why I live every day.',
        'You have shown me what true love looks like.',
        'I can never get bored with you.',
        'We motivate each other every day.',

        'You are so independent and can take care of yourself.',
        'You love me back :D.',
        'I am able to be vulnerable around you.',
        'You stick with me through the hard times.',
        'You understand that I am not perfect.',
        'You try your best to make us work.',
        'You are sensible when I fail to be.',
        'I love the way I cannot imagine a day without you in my life.',
        'I love the way you look at me.',
        'You have beautiful, glistening eyes.',
        'I enjoy our cuddling sessions.',
        'I feel complete when I am with you.',
        'I love your sense of humour and how you make me laugh.',
        'I love the way you tell me everything in your life.',
        'You provide me with a sense of trust.',
        'You are everything I want in a partner.',
        'I love how your voice sounds in person AND over calls.',
        'I love how I would do anything in this world for you.',
        'I love your sensuality.',
        "You’re so cute omg omg omg!",
        'I love your ability to speak without saying a single word.',
        'I love the feeling of your soft lips against mine.',
        'You are smart and we can have interesting conversations.',
        'I love your passions for your interests and hobbies.',
        'You never give up when times are tough.',
        'I love the way you dress.',
        'You always convince me that everything is going to be okay.',
        'You are future-minded.',
        'You are constantly finding ways to improve our relationship.',
        'You are genuinely beautiful without trying.',
        'I love the way we make up after a fight.',
        'I love the way you take the time to show me how much you love me.',
        'I love your body.',
        'I love your openness to try new things.',
        'I have so much fun when I am around you.',
        'You are so fit and that influences me too.',
        'You taught me how to be a good person.',
        'You are the ideal woman in my eyes.',
        "You force me to take pictures knowing I don’t enjoy it.",
        'You fight for us instead of just leaving.',
        'You thank God for my existence.',
        'You make an effort to impress my parents for me.',
        'You have a messy room and you think I care HAHAHAH.',
        'Your hugs can melt away all my worries.',
        'You are a POTTERHEAD!',
        'You have an entire playlist that reminds you of me.',
        "You say everything that goes inside your head, and it’s cute.",
        'You make yourself so easy to take care of.',
        'You encourage me and push me forward in life.',
        'You love me so much you even had 100 reasons.',
        'I can feel actual happiness when i see you smile.',
        'You support my hobbies like badminton.',
        "You don't simply spend money everywhere.",
        'You plan for our future and you take steps leading to it.',
        'You raise the bar for all girlfriends everywhere.',
        'You make it impossible to stay mad at you for too long.',
        'I love it when you initiate intimation.',
        "Our relationship started from friendship, and that's the strongest kind.",
        'You bought me a phone case that I still use today.',
        'You made a shirt for me, and it actually looks kinda good.',
        'You are so easy to communicate with.',
        'You treat me like a king even when i fail to be one.',
        "Sometimes you do things i like even though you dont like doing them.",
        'You never embarrass me in front of my friends.',
        "You are mature and you make me feel like I'm dating an actual woman.",
        'You know my flaws and forgive them.',
        'Everytime we argue you take the first step back.',
        'You gave me a notebook filled with your feelings.',
        'You inspire me to aim for a better future just for us.',
        'You stay with me at times when others leave.',
        'You get jealous of other girls and it proves that you love me.',
        'You are a swimming coach and that is so impressive to me.',
        'You find time to spend with me even when you are busy.',
        'You do housechores, a rare quality in woman nowadays.',
        'You know how to cook, meaning we can cook together in the future.',
        'You are a Westernized Chinese, just like me.',
        'You made me confident in who i am.',
        'You tell your friends good things about me.',
        'You create unique and personal gifts for special occasions.',
        'You trust me to keep you deepest secrets.',
        'Your sense of ambition is contagious.',
        'You have a really attractive physical build.',
        'You have the ability to be both hot AND cute.',
        'You make the cutest animal noises.',
        'You bless me with daily selfies, videos and even audios.',
        'You are the first person i start my morning with everyday.',
        'You can choose between being rational or emotional depending on the situation.',
        'You enjoy sports like me.',
        'You know my limits and boundaries and you respect them.',
        'If you were a male, we would probably also be best friends.',
        'You are simply just, amazing.'
    ];
    let x = Math.floor(Math.random()*reasonArray.length);
    let reasonElement = document.getElementById('reason');
    let reasonElement2 = document.getElementById('reason2');
    

    // Set the new word
    reasonElement.innerHTML = reasonArray[x];
    reasonElement2.innerHTML = reasonArray[x];
    restartAnimation();
}


function restartAnimation() {
    let dynamicText = document.querySelector('.dynamic-text');

    // Remove the typing class (if you are using classes)
    dynamicText.classList.remove('typing');

    // Trigger reflow to restart the animation
    void dynamicText.offsetWidth;

    // Reapply the typing class
    dynamicText.classList.add('typing');
    console.log('Animation restarted');
}



// Display the cat.gif initially
displayCat();



