fetch('https://dagprogs.github.io/apidb/YT/videos.json')
    .then(response => response.json())
    .then(data => {
        const youtubeList = document.querySelector('.youtube-list');

        data.forEach(video => {
            const videoElement = document.createElement('div');
            videoElement.className = 'change-youtube';
            videoElement.dataset.youtube = video.youtubeId;
            videoElement.innerHTML = `
                    <img src="${video.imageUrl}" />
                    <span>${video.title}</span>
                `;
            youtubeList.appendChild(videoElement);
        });

        const changeYoutubeList = document.querySelectorAll('.change-youtube');

        changeYoutubeList.forEach(item => {
            item.addEventListener('click', function () {
                const youtubeId = this.getAttribute('data-youtube');
                openVideo(youtubeId);
            });
        });
    })
    .catch(error => console.error('Error fetching videos:', error));

function openVideo(youtubeId) {
    const videoContainer = document.createElement('div');
    videoContainer.className = 'youtube-container';
    videoContainer.innerHTML = `
            <div id="player" data-plyr-provider="youtube" data-plyr-embed-id="${youtubeId}">
            </div>
            <span class="close-button">Закрыть</span>
        `;
    document.body.appendChild(videoContainer);

    const playerInstance = new Plyr('#player');
    videoContainer.style.display = 'block';

    const closeButton = videoContainer.querySelector('.close-button');
    closeButton.addEventListener('click', function () {
        document.body.removeChild(videoContainer);
    });
}