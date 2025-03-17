---
layout: default
title: About Me
---
# About Me

My research and personal life have always been deeply connected. I have found immense solace and inspiration in the anime *Given*. Just as Mafuyu finds meaning through music, I navigate my world through **physics and discovery**.

🎵 *Given*'s music serves as a bridge between my personal emotions and my research. I often listen to tracks like **"Fuyu no Hanashi"** and **"Umi e"** while working on my gravitational wave research.

This section shares my personal journey—how my passion for science and music intersect.



<script>
document.addEventListener("DOMContentLoaded", function() {
    var youtubeVideos = [
        "xCUWT2FF0aI?si=l_6lae8Qa7kxdZEp",
        "XvkkBhpG2hs?si=f9CAdVuhq0AFxWjk&start=4",
        "NHip3wPtwKo?si=e6RyYp9-2Ik2pDJ6&start=2",
        "lHv96e1yZGs?si=oatI2xsJnx9Obbrz",
        "WAHBocKLmiw?si=bZfgWcislPApb1oz"
    ];

    // Check if a video is already playing in session storage
    if (!sessionStorage.getItem("currentVideo")) {
        var randomVideo = youtubeVideos[Math.floor(Math.random() * youtubeVideos.length)];
        sessionStorage.setItem("currentVideo", randomVideo);
    }

    var iframe = document.createElement("iframe");
    iframe.width = "300";
    iframe.height = "169";
    iframe.src = "https://www.youtube.com/embed/" + sessionStorage.getItem("currentVideo") + "&autoplay=1&loop=1&playlist=" + sessionStorage.getItem("currentVideo");
    iframe.frameBorder = "0";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    var musicContainer = document.createElement("div");
    musicContainer.style.position = "fixed";
    musicContainer.style.bottom = "20px";
    musicContainer.style.right = "20px";
    musicContainer.style.background = "rgba(0,0,0,0.7)";
    musicContainer.style.padding = "10px";
    musicContainer.style.borderRadius = "10px";
    musicContainer.style.textAlign = "center";
    musicContainer.style.color = "white";
    musicContainer.innerHTML = "<p style='margin: 0;'>🎵 Given Instrumental</p>";
    musicContainer.appendChild(iframe);

    document.body.appendChild(musicContainer);
});
</script>
