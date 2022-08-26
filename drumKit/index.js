window.addEventListener('keydown',function(e){

    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if(!audio)return;   //stop the functn from running all together
    
    audio.currentTime = 0 ;  //rewind to the start
    audio.play();

    key.classList.toggle('playing');
    console.log(key);


    });