document.addEventListener('DOMContentLoaded', function() {
    const player = new Plyr('#player', {
        enabled: true,
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
        youtube: {
            noCookie: true,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3
        }
    });

    // Обработка событий клика по миниатюрам видео
    const thumbnails = document.getElementsByClassName('change-youtube');
    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener('click', function() {
            const videoId = this.getAttribute('data-youtube');
            player.source = {
                type: 'video',
                sources: [
                    {
                        src: videoId,
                        provider: 'youtube',
                    },
                ],
            };
            player.play();
        });
    }
});
