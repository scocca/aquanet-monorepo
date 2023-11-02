const Home =()=>{
    return(
        <div className="container">
            <div className="description">
                <h1 className="title">AquaNet</h1>
                <p className="slogan">Agua Limpia comunidades fuertes</p>
                <p className="description-one">En Chile la escasez de agua es un desafío importante, especialmente en el norte y centro. Esto puede generar competencia entre la agricultura y el saneamiento humano por los recursos hídricos.</p>
            </div>
        <section  className="login-container">
            <div className="login">
                <h2 className="name">Aqua</h2>
                <h2 className="name-2">net</h2>
                <div className="login-user">
                <p className='enter'>Ingresa</p>
                <input className="username"  placeholder="Nombre de Usuario"/>
                <input className="password" type="password" placeholder="Contraseña"/>
                <div className="forgot-pass">
                    <p className="forgotPassword">Recuperar contraseña</p>
                </div>
                </div>
                <button className="log-in-btn">Ingresa</button>
            </div>
            <p className="sign-in">no tienes cuenta... registrate aqui</p>
            </section>
        </div>
    )
}

export {Home}