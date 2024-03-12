import "./stars.scss";

const stars = [
    { className: "star"},
    { className:"star2"},
    {className:"star3"},
    {className:"star4"},
    {className:"star5"},
    {className:"star6"},
    {className:"star7"},
    {className:"star8"},
    {className:"star9"},
    {className:"star10"},
    {className:"star11"},
    {className:"star12"},
    {className:"star13"},
    {className:"star14"},
    {className:"star15"},
]

function StarContainer(){
    return(
        <>
            {stars.map((star, index) => (
                <span key={index} className="star-filter">
                    <div className={star.className}></div>
                </span>
            ))}
        </>
    )
}

export default StarContainer;