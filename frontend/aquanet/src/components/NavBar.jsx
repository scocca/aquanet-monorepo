
function NavBar(){
    return(
        <nav>
        <navbar className='navbar'>
          <div className='navbar-right'>
            <ul className='right-list'>
              <li className='list-name'><a href="/">AquaNet</a></li>
            </ul>
          </div>
          <div className='navbar-left'>
            <ul className='left-list'>
              <li className='list'>ONG's</li>
              <li className='list'>Empresas</li>
              <li className='list'>Personas</li>
              <li className='list'>Blog</li>
              <li className='getInTouch'>Informate</li>
            </ul>
          </div>
        </navbar>
      </nav>
    )
}

export {NavBar}