---
layout: default
title: About Me
---
# About Me

My research and personal life have always been deeply connected. I have found immense solace and inspiration in the anime *Given*. Just as Mafuyu finds meaning through music, I navigate my world through **physics and discovery**.

🎵 *Given*'s music serves as a bridge between my personal emotions and my research. I often listen to tracks like **"Fuyu no Hanashi"** and **"Umi e"** while working on my gravitational wave research.

This section shares my personal journey—how my passion for science and music intersect.



<div style="position: fixed; bottom: 20px; right: 20px; background: rgba(0,0,0,0.7); padding: 10px; border-radius: 10px; text-align: center; color: white;">
    <p style="margin: 0;">🎵 Given Instrumental</p>
    <audio id="background-music" autoplay loop>
        <source src="assets/music/fuyu_no_hanashi.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
    <button id="music-control" style="margin-top: 5px; padding: 5px 10px;">Pause Music</button>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("background-music");
    audio.volume = 0.3; // Set initial volume
    document.getElementById("music-control").addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
            this.textContent = "Pause Music";
        } else {
            audio.pause();
            this.textContent = "Play Music";
        }
    });
});
</script>
