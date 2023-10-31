const Home =()=>{
    return(
        <div className="container">
            <div className="description">
                <h1 className="title">AquaNet</h1>
                <p className="slogan">Agua Limpia comunidades fuertes</p>
                <p className="description-one">En Chile la escasez de agua es un desafío importante, especialmente en el norte y centro. Esto puede generar competencia entre la agricultura y el saneamiento humano por los recursos hídricos.</p>
            </div>
            <div className="login">
                <h2 className="name">Aquanet</h2>
                <div className="login-user">
                <p className='enter'>Ingresa</p>
                <input className="username" placeholder="Nombre de Usuario"/>
                <input className="password" placeholder="Contraseña"/>
                <div className="forgot-pass">
                    <p className="forgotPassword">Recuperar contraseña</p>
                </div>
                </div>
                <button className="sign-in">Ingresa</button>
            </div>
        </div>
    )
}

export {Home}