const GetInTouch = ({mail, telephone, web})=>{
    return (
        <div className="inTouch-container">
            <div className="inTouch-data-container">
                <span className="icon">mail</span>
                <p className='inTouch-data'>{mail}</p>
            </div>
            <div className="inTouch-data-container">
                <span className="icon">telephone</span>
                <p className='inTouch-data'>{telephone}</p>
            </div>
            <div className="inTouch-data-container">
                <span className="icon">web</span>
                <p className='inTouch-data'>{web}</p>
            </div>
        </div>
    )
}

export {GetInTouch}