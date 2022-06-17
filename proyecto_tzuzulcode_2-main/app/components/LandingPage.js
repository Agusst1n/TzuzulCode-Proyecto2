const LandingPage = (video) => {
  //delegar el click solo a la clase enlace
  document.addEventListener("click", (e) => {
    console.log(e.target.dataset.id, 'landing')
    if (!e.target.matches(".enlace")) return false;
    localStorage.setItem("urlId", e.target.dataset.id);
  });

  const div = document.createElement("div"); //contendor de los videos
  div.classList.add("Landing");

  for (let i = 0; i < video.length; i++) {
    console.log(video, 'data')
    // let play_icon = document.querySelector('.play_icon')

    let video_home = document.createElement("div");
    video_home.className = 'video_home'
    video_home.dataset.id = `${video[i].id}`

    let a = document.createElement('a')

    let video_play = document.createElement('video')
    video_play.className = 'enlace video_enlace'
    // video_play.className = 'video_enlace'

    video_play.src = `${video[i].urlMedia}`
    video_play.dataset.id = `${video[i].id}`


    let play_icon = document.createElement('div')
    play_icon.className = 'play_icon'
    play_icon.innerHTML = `<ion-icon name="play-outline"></ion-icon>`

    let video_title = document.createElement('div')
    video_title.className= 'video_title'

    let video_info = document.createElement('div')
    video_info.className= 'video_info'


    let icon_contain = document.createElement('div')
    icon_contain.className = 'icon_contain'

    let icon_channel = document.createElement('img')
    icon_channel.className = 'icon_channel'

    let title_channel = document.createElement('h4')
    title_channel.className = 'title_channel'

    let name_channel = document.createElement('p')
    name_channel.textContent = `${video[i].channel}`
    name_channel.className = 'name_channel'

    let views = document.createElement('p')
    views.textContent = `${video[i].views} views`
    views.className = 'views_home'
    

    icon_contain.appendChild(icon_channel)

    icon_channel.src = `${video[i].icon}`
    title_channel.textContent = `${video[i].title}`

    video_info.appendChild(title_channel)
    video_info.appendChild(name_channel)
    video_info.appendChild(views)

    video_title.appendChild(icon_contain)
    video_title.appendChild(video_info)
    // video_title.appendChild(title_channel)
    // video_title.appendChild(name_channel)
    // video_title.appendChild(views)


    let miniature = document.createElement('img')
    miniature.className = 'miniature'
    miniature.src = `${video[i].miniature}`
    


    a.dataset.id = `${video[i].id}`
    a.setAttribute("href", `#/${video[i].slug}`)
    // a.appendChild(img)
    a.appendChild(miniature)
    a.appendChild(video_play)
    a.appendChild(play_icon)
    a.appendChild(video_title)

    // a.appendChild(video_description)


    video_home.appendChild(a)
    // video_home.appendChild(video_description)
    div.appendChild(video_home)


    /**
     * listeners
     */

    video_home.addEventListener('mouseenter', () => {

      miniature.style.display = 'none'

      video_play.style.display = 'block'

      video_home.style.zIndex = 10
      video_title.style.background = "#333333"
      play_icon.classList.toggle('active')
      video_play.play()
      video_play.muted = true
      
    })
    video_home.addEventListener('mouseleave', () => {

      miniature.style.display = 'block'

      video_play.style.display = 'none'

      video_home.style.zIndex = 1
      video_title.style.background = "#1c1c1c"
      console.log('leave')
      play_icon.classList.toggle('active')
      video_play.pause()
      video_play.currentTime = 0
    })


  }

  return div;
};
export default LandingPage;
