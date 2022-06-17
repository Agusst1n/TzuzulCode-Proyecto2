
const Video = (video) => {

  console.log(video, 'videoo');

  const { title, likes, views, urlMedia, icon, channel, subscribers } = video;
  const div = document.createElement("div");
  div.className = "video_container"

  let duration
  let onFullscreen = false

  let video_reproducido = document.createElement('video');
  video_reproducido.src = `${urlMedia}`
  video_reproducido.play()
  video_reproducido.removeAttribute("controls")
  let video_buttons = document.createElement('div')
  video_buttons.className = 'video_buttons'

  video_reproducido.play()
  

  /***
   * buttons
   */
  let button_play = document.createElement('button')
  button_play.innerHTML = `<ion-icon name="pause"></ion-icon>`
  button_play.id = "play"

  let backward_seconds = document.createElement('button')
  backward_seconds.innerHTML = `<ion-icon name="return-up-back-outline"></ion-icon>`
  backward_seconds.id = "backwardSeconds"

  let forward_seconds = document.createElement('button')
  forward_seconds.innerHTML = `<ion-icon name="return-up-forward-outline"></ion-icon>`
  forward_seconds.id = "forwardSeconds"

  let volumen = document.createElement('button')
  volumen.id = "volumen"
  volumen.innerHTML = `<ion-icon name="volume-high"></ion-icon>`

  let like_button = document.createElement('button')
  like_button.className = "likeButton"
  like_button.innerHTML = `<ion-icon name="thumbs-up"></ion-icon>`

  let deslike_button = document.createElement('button')
  deslike_button.className = "deslikeButton"
  deslike_button.innerHTML = `<ion-icon name="thumbs-down"></ion-icon>`

  let full_screen = document.createElement('button')
  full_screen.innerHTML = `<ion-icon name="expand-outline"></ion-icon>`
  full_screen.id = "fullScreen"

  let control = document.createElement('input')
  control.className = 'control'

  control.type = 'range'
  control.id = 'control'
  control.min = '0'
  control.max = '100'
  control.step = '0.1'
  control.value = '0'




  video_buttons.appendChild(backward_seconds)
  video_buttons.appendChild(button_play)
  video_buttons.appendChild(forward_seconds)
  video_buttons.appendChild(volumen)
  video_buttons.appendChild(control)
  video_buttons.appendChild(full_screen)



  /***
   * DESCRIPTION
   */

  let video_container_description = document.createElement('div')
  video_container_description.className = 'video_container_desc'
  
  let video_reproducido_titleContain = document.createElement('div')
  video_reproducido_titleContain.className = 'video_repro_titleContain'

  let video_reproducido_desc = document.createElement('div')
  video_reproducido_desc.className = 'video_reproducido_desc'


  let icon_div = document.createElement('div')
  icon_div.className = 'icon_div'
  let icon_img = document.createElement('img')
  icon_img.src = `${icon}`
  icon_img.className = 'icon'
  icon_div.appendChild(icon_img)

  let info_div = document.createElement('div')
  info_div.className = 'info_div'

  let name = document.createElement('h5')
  name.className = 'name'
  name.textContent = `${channel}`

  let subscribersChannel = document.createElement('p')
  subscribersChannel.className = 'subscribersChannel'
  subscribersChannel.textContent = `${subscribers} subscribers`

  let title_desc = document.createElement('h4')
  title_desc.textContent = `${title}`


  info_div.appendChild(name)
  info_div.appendChild(subscribersChannel)
  info_div.appendChild(title_desc)



  video_reproducido_desc.appendChild(icon_div)
  video_reproducido_desc.appendChild(info_div)



  
  let title_viewes = document.createElement('div')
  title_viewes.className = 'title_viewes'

  let likes_div = document.createElement('div')
  let like = document.createElement('div')
  let likeNumber = document.createElement('p')
  likeNumber.textContent = `${likes}`
  likeNumber.className = 'likeNumber'
  like.className = 'like'
  likes_div.className = 'likes_div'



  let deslike = document.createElement('div')
  deslike.className = 'deslike'

  let deslikeNumber = document.createElement('p')
  deslikeNumber.textContent = `DESLIKE`
  deslikeNumber.className = 'deslikeNumber'


  deslike.appendChild(deslike_button)
  deslike.appendChild(deslikeNumber)


  
  
  like.appendChild(like_button)
  like.appendChild(likeNumber)

  likes_div.appendChild(like)
  likes_div.appendChild(deslike)


  let title_video = document.createElement('h4')
  title_video.textContent = `${title}`

  let views_video = document.createElement('p')
  views_video.textContent = `${views} views`

  title_viewes.appendChild(title_video)
  title_viewes.appendChild(views_video)



  video_reproducido_titleContain.appendChild(title_viewes)
  video_reproducido_titleContain.appendChild(likes_div)


  video_container_description.appendChild(video_reproducido_titleContain)
  video_container_description.appendChild(video_reproducido_desc)
  




  /**
   * EVENTOS
   */

  video_reproducido.addEventListener("playing", () => {
    console.log('playing')
  })

  video_reproducido.addEventListener("pause", () => {
    console.log('pause')
  })

  video_reproducido.addEventListener("loadeddata", (event) => {
    duration = event.target.duration
  })


  video_reproducido.addEventListener("timeupdate", (event) => {
    const percentage = (event.target.currentTime / duration) * 100
    control.value = percentage
  })

  control.oninput = (event) => {
    video_reproducido.currentTime = (duration / 100) * event.target.value
  }


  backward_seconds.onclick = () =>{
    video_reproducido.currentTime = video_reproducido.currentTime-10
  }
  forward_seconds.onclick = () =>{
    video_reproducido.currentTime = video_reproducido.currentTime+10
  }

  button_play.onclick = ()=>{
    if(video_reproducido.paused){

      button_play.innerHTML = `<ion-icon name="pause"></ion-icon>`

      video_reproducido.play()
    }else{
      video_reproducido.pause()
      
      button_play.innerHTML = `<ion-icon name="play"></ion-icon>`
    }
  }


  like_button.onclick = ()=>{
    like_button.classList.toggle('active')
  }

  deslike_button.onclick = ()=>{
    deslike_button.classList.toggle('active')
  }


  full_screen.onclick = ()=>{
    if(onFullscreen){
        onFullscreen = false
        document.exitFullscreen()
        video_buttons.classList.toggle('active')
    }else{
        onFullscreen = true
        div.requestFullscreen()
        video_buttons.classList.toggle('active')
    }
  }
    

  div.appendChild(video_buttons)
  div.appendChild(video_reproducido)
  div.appendChild(video_container_description)


  return div;
};
export default Video;
