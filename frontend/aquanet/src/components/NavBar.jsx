
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
              <li className='list'> <a href="/ongs"> ONG's </a> </li>

              <li className='getInTouch'><a href="/Blog">Infórmate</a></li>
            </ul>
          </div>
        </navbar>
      </nav>
    )
}

export {NavBar}