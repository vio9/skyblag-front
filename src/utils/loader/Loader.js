import "./loader.scss"

function Loader({sizeLoader}){
   
    return (
        <div className={ sizeLoader ? 'big-wrapper-loader' : 'wrapper-loader' }>
            <p className="p-loader">En cours de chargement... </p>
            <div className="emoji">🌞</div>
            <div className="emoji">🌈 </div>
            <div className="emoji">☔</div>
            <div className="emoji">🌴</div>
        </div>
    )
}

export default Loader

