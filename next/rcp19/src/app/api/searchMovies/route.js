export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const titleSearchKey = searchParams.get("titleSearchKey");
  const httpRes = await fetch(
    `http://www.omdbapi.com/?apikey=13cadabb&s=${titleSearchKey}`,
  );
  const jsonRes = await httpRes.json();
  return Response.json({ ...jsonRes });
}
