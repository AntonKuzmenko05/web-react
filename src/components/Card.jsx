export default function Card({ item }){
    return (
        <article className="card">
            <img className="card__media" src={item.img} alt="" loading="lazy" />
            <div className="card__body">
                <h3 className="card__title">{item.title}</h3>
                <p className="card__excerpt">{item.excerpt}</p>
            </div>
            <div className="card__meta">
                <time className="news-card__date" dateTime={item.date}>
                    {new Date(item.date).toLocaleDateString('uk-UA')}
                </time>
                <a className="btn-brand" href="#">Читати далі</a>
            </div>
        </article>
    )
}