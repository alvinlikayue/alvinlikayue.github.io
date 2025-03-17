---
layout: default
title: Contact
---
# Contact Me

Feel free to reach out via:

📧 Email: [Your Email]  
🐦 Twitter: [Your Twitter Handle]  
💼 LinkedIn: [Your LinkedIn Profile]

---



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



<div style="position: fixed; bottom: 20px; right: 20px; background: rgba(0,0,0,0.7); padding: 10px; border-radius: 10px; text-align: center; color: white;">
    <p style="margin: 0;">🎵 Given Instrumental</p>
    <iframe id="youtube-music" width="200" height="113" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
    var youtubeVideos = [
        "https://www.youtube.com/embed/HPaS3w5iUZc?autoplay=1&loop=1&playlist=HPaS3w5iUZc", // Fuyu no Hanashi (Instrumental)
        "https://www.youtube.com/embed/VJ2lyA4C9aM?autoplay=1&loop=1&playlist=VJ2lyA4C9aM", // Umi e (Instrumental)
        "https://www.youtube.com/embed/OvHJhSwS4aw?autoplay=1&loop=1&playlist=OvHJhSwS4aw", // Yoru ga Akeru (Instrumental)
        "https://www.youtube.com/embed/2JHhCcFAyXg?autoplay=1&loop=1&playlist=2JHhCcFAyXg"  // Kizuato (Instrumental)
    ];

    var randomVideo = youtubeVideos[Math.floor(Math.random() * youtubeVideos.length)];

    document.getElementById("youtube-music").src = randomVideo;
});
</script>
