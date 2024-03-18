import "./player.scss";

function Player({title, src}){
    return(
        <div className="video-responsive">
            <h3 className="video-title">{title}</h3>
            <iframe 
                src={src}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullscreen
            />
        </div>
    )
}

export default Player;