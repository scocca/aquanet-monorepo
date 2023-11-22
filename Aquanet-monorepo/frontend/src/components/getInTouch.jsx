

const GetInTouch = ({mail, telephone, web, mailIcon, telIcon, webIcon})=>{
    return (
        <div className="inTouch-container">
            <div className="inTouch-data-container">
                <img className='icons' src={mailIcon} alt='mail'/>
                <p className='inTouch-data'>mail: {mail}</p>
            </div>
            <div className="inTouch-data-container">
                < img className='icons' src={telIcon} alt='telephone'/>
                <p className='inTouch-data'>telephone: {telephone}</p>
            </div>
            <div className="inTouch-data-container">
                < img className='icons' src={webIcon} alt='web site'/>
                <p className='inTouch-data'>web: {web}</p>
            </div>
        </div>
    )
}

export {GetInTouch}