import useSWR from 'swr';
import { useState } from 'react';
import styled from 'styled-components';

export default function Movies3() {
    const [url, setUrl] = useState('');
    const { data, error } = useSWR(url, theFetcher);

    const onClickHandler = (e) => {
        e.preventDefault();
        if (url === '') setUrl('http://www.omdbapi.com/?apikey=83b7b3b9&s=bagdad');
        else setUrl('');
    };

    return (
        <Container>
            <TheLink url={url} handler={onClickHandler} />
            <TheMovies data={error ? { error: 'Erro na pesquisa' } : data ? data : { Search: '' }} show={url !== ''} />
        </Container>
    );
}

export function TheMovies({ data, show }) {
    if (!show) return <Message>Pressione "Mostrar" para buscar os filmes.</Message>;
    if (data.error) return <Message>Falha na requisição.</Message>;
    if (data.Search === '') return <Message>Carregando...</Message>;

    return (
        <MovieList>
            {data.Search.map((m) => (
                <MovieCard key={m.imdbID}>
                    <MovieTitle>{m.Title}</MovieTitle>
                    <MovieYear>{m.Year}</MovieYear>
                </MovieCard>
            ))}
        </MovieList>
    );
}

export function TheLink({ url, handler }) {
    return (
        <LinkButton onClick={handler}>
            {url === '' ? 'Mostrar Filmes' : 'Ocultar Filmes'}
        </LinkButton>
    );
}

async function theFetcher(url) {
    if (url === null || url === '') return { Search: '' };
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

// Styled components

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background: #f0f0f0;
    min-height: 100vh;
`;

const Message = styled.div`
    color: #555;
    font-size: 18px;
    padding: 20px;
    text-align: center;
`;

const LinkButton = styled.button`
    background-color: #0070f3;
    border: none;
    color: white;
    padding: 15px 30px;
    margin: 20px 0;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.3s ease;
    &:hover {
        background-color: #005bb5;
    }
`;

const MovieList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    width: 100%;
    padding: 20px;
`;

const MovieCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;

    &:hover {
        transform: translateY(-5px);
    }
`;

const MovieTitle = styled.h3`
    font-size: 18px;
    color: #333;
    margin: 10px 0;
`;

const MovieYear = styled.p`
    font-size: 16px;
    color: #666;
`;