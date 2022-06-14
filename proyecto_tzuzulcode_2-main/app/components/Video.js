const Video = (video) => {
  const { title, likes, views, urlMedia } = video;
  const div = document.createElement("div");
  div.className = "video_container"
  div.innerHTML = `
    <video>
      <source
        src="${urlMedia}"
      />
    </video>
    <h3>${title}</h3>
    </hr>
    <span>${likes} likes</span>
    <span>${views} views</span>
  `;
  return div;
};
export default Video;
