function Rating({rating}){
    const ratingStars = new Array(5);
    console.log(typeof(rating))
    ratingStars.fill(0)
    return (
        <div className="fiche-logement__rating">
            {ratingStars.map((_, index) => ( 
                <img  key={`img-${index}`} src={`/assets/star-${rating > index ? "active" : "inactive"}.svg`} alt="note" />
            ))}
        </div>
    )
    
}

export default Rating