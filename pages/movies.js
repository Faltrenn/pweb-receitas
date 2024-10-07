export default function Movies({ data }) {
    return (
        <div>
            <div>
                {data.Search.map((m) => <div>{m.Title} --- {m.Year}</div>)}
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { s = 'bagdad' } = context.query;
    const res = await fetch(`http://www.omdbapi.com/?apikey=83b7b3b9&s=${s}&t=a&y>=2000`)
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}