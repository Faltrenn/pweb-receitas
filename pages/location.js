import useSWR from 'swr';

export default function Movie() {
    const { data, error } = useSWR("https://extreme-ip-lookup.com/json/?key=zcAkJ6e5pcoyCSH6X5qp", fetcher);

    if (error) return <div>Falha na requisição...</div>;
    if (!data) return <div>Carregando...</div>;

    return (
        <div style={{ padding: "20px" }}>
            <h1>Detalhes da Localização</h1>
            <p><strong>ASN:</strong> {data.asn}</p>
            <p><strong>ASN Name:</strong> {data.asnName}</p>
            <p><strong>ASN Organization:</strong> {data.asnOrg}</p>
            <p><strong>Business Name:</strong> {data.businessName || "N/A"}</p>
            <p><strong>Business Website:</strong> {data.businessWebsite || "N/A"}</p>
            <p><strong>City:</strong> {data.city}</p>
            <p><strong>Continent:</strong> {data.continent}</p>
            <p><strong>Country:</strong> {data.country}</p>
            <p><strong>Country Code:</strong> {data.countryCode}</p>
            <p><strong>IP Name:</strong> {data.ipName || "N/A"}</p>
            <p><strong>IP Type:</strong> {data.ipType}</p>
            <p><strong>ISP:</strong> {data.isp}</p>
            <p><strong>Latitude:</strong> {data.lat}</p>
            <p><strong>Longitude:</strong> {data.lon}</p>
            <p><strong>Organization:</strong> {data.org}</p>
            <p><strong>Query:</strong> {data.query}</p>
            <p><strong>Region:</strong> {data.region}</p>
            <p><strong>Status:</strong> {data.status}</p>
            <p><strong>Timezone:</strong> {data.timezone}</p>
            <p><strong>UTC Offset:</strong> {data.utcOffset}</p>
        </div>
    );
}

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}