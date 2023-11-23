const TxtConfReg =({logoapro})=>{
    return(
        <div className="container-reg">
            <div>
            </div>
        <section  className="login-container-reg">
            <div className="login-reg">
                <div className="login-user-reg">
                <p className='enter'>Felicidades!, tu cuenta  ha sido creada con éxito. Te hemos enviado un mail de confirmación al correo :</p>              
                {/* <p className='corr2'>Usuario574@AquaNet.cl</p>  */}
                <img src = {logoapro}/>
                </div>
                <a href="/"><button className="reg-in-btn2-reg">Volver </button></a>
            </div>
            </section>
        </div>
    )
}

export {TxtConfReg}