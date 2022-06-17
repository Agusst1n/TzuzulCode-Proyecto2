
// const Header2 = () => {

//   const Navbar = document.createElement('nav')
//   Navbar.className ="Navbar"

//   const $header = document.createElement("header");
//   $header.classList.add("header"); //clase para estilar en css

//   const header_logo = document.createElement('div')
//   const header_search = document.createElement('div')
//   const header_icons = document.createElement('div')

//   const menu_icon = document.createElement('div')
//   menu_icon.className = 'menu_icon'
//   menu_icon.innerHTML = `<ion-icon name="menu-outline"></ion-icon>`


//   header_logo.className = 'header_logo'
//   header_logo.appendChild(menu_icon)
  
//   header_search.className = 'header_search'
//   header_icons.className = 'header_icons'

//   $header.appendChild(Navbar)
//   $header.appendChild(header_logo)
//   $header.appendChild(header_search)
//   $header.appendChild(header_icons)


//   menu_icon.onclick = () =>{
//     Navbar.classList.toggle('active')
//   }

//   return $header;
  
// };

// export default Header2;




const Header = () => {
  const $header = document.createElement("header");
  $header.classList.add("header"); //clase para estilar en css
  $header.innerHTML = `
    <div class="header_logo"><a href="#/">Home</a></div>
    <div class="header_search">
      <input id="search_input" type="text" placeholder="Search">
      <button id="search_button"><ion-icon name="search-outline"></ion-icon></button>
    </div>
    <div class="header_icons"></div>
    <nav class="Navbar">
        <div class="nav_logo_contain">
          <p>VISION</p>
          <a href="#/"><img src="./app/assets/img/logo.png" height="50" width="64" alt=""></a>
        </div>
        <div class="nav_links"></div>
    </nav>
  `;
  return $header;
};
export default Header;
