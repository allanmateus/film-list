class Filme{
    static cont = 0;
    constructor(titulo, ano, duracao, genero, status){
        this.id = ++Filme.cont,
        this.titulo = titulo,
        this.ano = ano,
        this.duracao = duracao,
        this.genero = genero,
        this.status = status
    };    
};

const listaDeFilmes = [];

const adicionarFilme = ((titulo, ano, duracao, genero, status) => {
    const novoFilme = new Filme(titulo, ano, duracao, genero, status);
    listaDeFilmes.push(novoFilme);
});

const listarFilmes =  ((filmes) => {
    for(filme of listaDeFilmes){
        console.log(filme);
    };
});

const filtroStatus = ((status) =>{
    let filmesPorStatus = listaDeFilmes.filter((filme) => filme.status === status);
    for ( filme of filmesPorStatus){
        console.log("Filtro: ", filme);
    }
});

const filtroGenero  = ((genero) =>{
    let filmesPorGenero = listaDeFilmes.filter((filme) => filme.genero === genero);
    for ( filme of filmesPorGenero){
        console.log("Filtro: ", filme);
    }
});

const filtroAno  = ((ano) =>{
    let filmesPorAno= listaDeFilmes.filter((filme) => filme.ano === ano);
    for ( filme of filmesPorAno){
        console.log("Filtro: ", filme);
    }
});

const filtroId  = ((id) =>{
    let filmesPorId= listaDeFilmes.filter((filme) => filme.id === id);
    for ( filme of filmesPorId){
        console.log("Filtro: ", filme);
    }
});

const removePorId = ((id) =>{  
    for(let i = 0; i < listaDeFilmes.length; i++){
        if(listaDeFilmes[i].id === id)
        {
            console.log("Removendo: ", listaDeFilmes[i].titulo);
            listaDeFilmes.splice(i,i);    
        }
    }
    console.log("Filme removido!");
    console.log("Listando a nova coleção de filmes:");
    listarFilmes();
});


adicionarFilme("O Show de Truman - O Show da Vida", 1998,"1h43m", "Ficção científica/Drama", "Assistido");
adicionarFilme("Forrest Gump - O Contador de Histórias", 1994,"2h22m", "Drama/Romance", "Assistido");
adicionarFilme("O Resgate do Soldado Ryan", 1998,"2h50m", "Guerra/Drama", "Assistido");
adicionarFilme("Velozes e Furiosos: Desafio em Tóquio", 2006,"1h44m", "Ação/Drama", "Assistido");


//filtroAno(1994);
filtroId(2);

removePorId(1);