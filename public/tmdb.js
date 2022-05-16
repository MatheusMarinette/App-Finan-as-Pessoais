const API_KEY = '38c007f28d5b66f36b9c3cf8d8452a4b'; //chave de minha api key
const API_BASE = 'https://api.themoviedb.org/3';// chave para buscar os filmes pela netflix

 // aqui estarei buscando categorias de filmes e usarei o await(sua função basicamente é fazer uma busca e esperar uma resposta para ir ao proximo)
const basicFetch = async (endpoint) =>{
const req = await fetch(`${API_BASE}${endpoint}`);
const json = await req.json();
return json;
}

export default {
    getHomeList: async () => {
        return[
            {
                slug:'originals',
                title: 'Originais',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'trending',
                title: 'Recomendados',
                items: await basicFetch(`/trendig/all/week?language=pt_BR&api_key=${API_KEY}`)

            },
            {
                slug:'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt_BR7api_key=${API_KEY}`)
            },
            //aqui estarei em busca apenas dos generos
            {
                slug:'action',
                title: 'Ação',
                items: await basicFetch(`/dicovery/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'comedy',
                title: 'Comedia',
                items: await basicFetch(`/dicovery/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'horror',
                title: 'Terror',
                items: await basicFetch(`/dicovery/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'romance',
                title: 'Romance',
                items: await basicFetch(`/dicovery/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'documentary',
                title: 'Documentario',
                items: await basicFetch(`/dicovery/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },

           

        ]
    }
    
}