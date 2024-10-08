import Image from 'next/image';

export default function Movie2({ data }) {
    return (
        <div>
            <h1>
                {data.Title} ({data.Year})
            </h1>
            <div>
                <div>
                    <Image
                        src={data.Poster !== "N/A" ? data.Poster : '/no-image.jpg'}
                        alt={`Poster de ${data.Title}`}
                        width={300}
                        height={450}
                        objectFit="cover"
                    />
                </div>
                <div>
                    <p><strong>Rated:</strong> {data.Rated}</p>
                    <p><strong>Released:</strong> {data.Released}</p>
                    <p><strong>Runtime:</strong> {data.Runtime}</p>
                    <p><strong>Genre:</strong> {data.Genre}</p>
                    <p><strong>Director:</strong> {data.Director}</p>
                    <p><strong>Writer:</strong> {data.Writer}</p>
                    <p><strong>Actors:</strong> {data.Actors}</p>
                    <p><strong>Plot:</strong> {data.Plot}</p>
                    <p><strong>Language:</strong> {data.Language}</p>
                    <p><strong>Country:</strong> {data.Country}</p>
                    <p><strong>Awards:</strong> {data.Awards}</p>
                    <p><strong>Metascore:</strong> {data.Metascore}</p>
                    <p><strong>IMDb Rating:</strong> {data.imdbRating}</p>
                    <p><strong>IMDb Votes:</strong> {data.imdbVotes}</p>
                    <p><strong>Type:</strong> {data.Type}</p>
                    <p><strong>DVD:</strong> {data.DVD}</p>
                    <p><strong>BoxOffice:</strong> {data.BoxOffice}</p>
                    <p><strong>Production:</strong> {data.Production}</p>
                    <p><strong>Website:</strong> {data.Website !== "N/A" ? <a href={data.Website} target="_blank" rel="noopener noreferrer">{data.Website}</a> : "N/A"}</p>
                </div>
            </div>
            <div>
                <h2>Ratings</h2>
                <ul>
                    {data.Ratings.map((rating, index) => (
                        <li key={index}>
                            <strong>{rating.Source}:</strong> {rating.Value}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const { id = "tt0076759" } = context.query;
    const res = await fetch(`http://www.omdbapi.com/?apikey=83b7b3b9&i=${id}`)
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}