function addNewListenersEverytimeToKeys() {
    // if it looks stupid, but works it still might be stupid.. like this
    document.addEventListener("keydown", function(event) {
        if (event.code === 'KeyA') {
            let key = new Audio('./assets/A.mp3');
            key.play();
            console.log("The 'A' key is pressed.");
        }
        else if (event.code === 'KeyS') {
            let key = new Audio('./assets/S.mp3');
            key.play();
            console.log("The 'S' key is pressed.");
        }
        else if (event.code === 'KeyD') {
            let key = new Audio('./assets/D.mp3');
            key.play();
            console.log("The 'D' key is pressed.");
        }
        else if (event.code === 'KeyF') {
            let key = new Audio('./assets/F.mp3');
            key.play();
            console.log("The 'F' key is pressed.");
        }
        else if (event.code === 'KeyG') {
            let key = new Audio('./assets/G.mp3');
            key.play();
            console.log("The 'G' key is pressed.");
        }
        else if (event.code === 'KeyH') {
            let key = new Audio('./assets/H.mp3');
            key.play();
            console.log("The 'H' key is pressed.");
        }
        else if (event.code === 'KeyJ') {
            let key = new Audio('./assets/J.mp3');
            key.play();
            console.log("The 'J' key is pressed.");
        }
        else if (event.code === 'KeyW') {
            let key = new Audio('./assets/W.mp3');
            key.play();
            console.log("The 'W' key is pressed.");
        }
        else if (event.code === 'KeyE') {
            let key = new Audio('./assets/E.mp3');
            key.play();
            console.log("The 'E' key is pressed.");
        }
        else if (event.code === 'KeyT') {
            let key = new Audio('./assets/T.mp3');
            key.play();
            console.log("The 'T' key is pressed.");
        }
        else if (event.code === 'KeyY') {
            let key = new Audio('./assets/Y.mp3');
            key.play();
            console.log("The 'Y' key is pressed.");
        }
        else if (event.code === 'KeyU') {
            let key = new Audio('./assets/U.mp3');
            key.play();
            console.log("The 'U' key is pressed.");
        }

        else {
            console.warn("Other unassigned key has been pressed.")
        }
    });
}
