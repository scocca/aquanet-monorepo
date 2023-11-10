const ProfilePost =({prop})=>{
    return(
        <>
            <section className="post-profile-section">
                <div className="post-container">
                    <div className="showPosts">
                    <ul className="post-lister">
                        {prop.map((post, index)=>(<li className="post-item" key={index}>{post.posts}</li>))}
                    </ul>
                    </div>
                    <input className="post-area" placeholder="Escribe aqui tu post"/>
                    <button className="btn-post">Crear Post</button>
                </div>
            </section>
        </>
    )
}

export {ProfilePost}