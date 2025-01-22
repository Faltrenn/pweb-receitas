export default async function Movies({ searchParams }) {
  const { titleSearchKey = "bagdad", year } = await searchParams;
  try {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=13cadabb&s=${titleSearchKey}&y=${year}`,
    );
    const data = await res.json();

    if (data.Response === "False") {
      return <div>Erro: {data.Error}</div>;
    }

    return (
      <div>
        <div>
          {data.Search.map((m) => (
            <div key={m.imdbID}>
              <center>
                <img src={m.Poster} /> <span>{m.Title}</span> <br />{" "}
                <span>{m.Type}</span> <br /> <span>{m.Year}</span>
              </center>{" "}
              <br />{" "}
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div>
        <p>{(error as Error).message}</p>
      </div>
    );
  }
}
