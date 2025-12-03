const Produto = require('../models/Produto');

const licores = [
    {
        nome: 'Licor Amarula',
        descricao: 'Licor cremoso sul-africano feito com a fruta Marula.',
        modelo: 'Amarula Original 750ml',
        preco: 89.90,
        estoque: 20,
        imagem_url: 'https://i.ibb.co/7tgKL8zc/image.png',
        ativo: true
    },
    {
        nome: 'Licor Baileys Irish Cream',
        descricao: 'Licor irlandês cremoso à base de whisky.',
        modelo: 'Baileys Original 750ml',
        preco: 99.90,
        estoque: 25,
        imagem_url: 'https://i.ibb.co/23qYpM3G/image.png',
        ativo: true
    },
    {
        nome: 'Licor Cointreau',
        descricao: 'Licor francês de laranja, ideal para coquetéis.',
        modelo: 'Cointreau 700ml',
        preco: 129.90,
        estoque: 15,
        imagem_url: 'https://i.ibb.co/kgDLVd90/image.png',
        ativo: true
    },
    {
        nome: 'Licor Malibu',
        descricao: 'Rum sabor coco, ideal para drinks tropicais.',
        modelo: 'Malibu Coconut 750ml',
        preco: 79.90,
        estoque: 18,
        imagem_url: 'https://i.ibb.co/XZ5FsGdN/image.png',
        ativo: true
    },
    {
        nome: 'Licor Limoncello Italiano',
        descricao: 'Clássico licor de limão italiano, refrescante e doce.',
        modelo: 'Limoncello 700ml',
        preco: 69.90,
        estoque: 30,
        imagem_url: 'https://i.ibb.co/Zz4J5Tmg/image.png',
        ativo: true
    },
    {
        nome: 'Licor Tia Maria',
        descricao: 'Licor de café com rum, sabor intenso e doce.',
        modelo: 'Tia Maria Coffee Liqueur 750ml',
        preco: 119.90,
        estoque: 12,
        imagem_url: 'https://i.ibb.co/9HFwMQsV/image.png',
        ativo: true
    },
];

async function seedLicores() {
    try {
        console.log('Iniciando seed de licores...');

        for (const licor of licores) {
            await Produto.create(licor);
            console.log(`Licor "${licor.nome}" criado com sucesso!`);
        }

        console.log('Seed de licores concluída!');
        console.log(`Total de ${licores.length} licores adicionados ao banco.`);

    } catch (error) {
        console.error('Erro ao executar seed:', error);
        throw error;
    }
}

module.exports = seedLicores;
