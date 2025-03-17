---
layout: default
title: Home
---
# Welcome to My Research Website

Hi, I'm Alvin Li Ka Yue, a researcher in **Gravitational Wave Physics**. This website showcases my work, research interests, teaching experience, and my personal journey.

*Given* holds a special place in my heart. Music and research intertwine in my life, and this website reflects that connection.

📜 Navigate through the sections to learn more about my work and passion.



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



<div style="position: fixed; bottom: 20px; right: 20px; background: rgba(0,0,0,0.7); padding: 10px; border-radius: 10px; text-align: center; color: white;">
    <p style="margin: 0;">🎵 Given Instrumental</p>
    <iframe width="200" height="113" src="https://www.youtube.com/embed/HPaS3w5iUZc?autoplay=1&loop=1&playlist=HPaS3w5iUZc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
