const Produto = require('../models/Produto');

const licores = [
    {
        nome: 'Licor Amarula',
        descricao: 'Licor cremoso sul-africano feito com a fruta Marula.',
        modelo: 'Amarula Original 750ml',
        preco: 89.90,
        estoque: 20,
        imagem_url: 'https://images.tcdn.com.br/img/img_prod/774261/amarula_c_liqueur_750ml_750_1_20201023093352.jpg://images.pexels.com/photos/13975190/pexels-photo-13975190.jpeg?auto=compress&cs=tinysrgb&w=600',
        ativo: true
    },
    {
        nome: 'Licor Baileys Irish Cream',
        descricao: 'Licor irlandês cremoso à base de whisky.',
        modelo: 'Baileys Original 750ml',
        preco: 99.90,
        estoque: 25,
        imagem_url: 'https://images.pexels.com/photos/7246113/pexels-photo-7246113.jpeg?auto=compress&cs=tinysrgb&w=600',
        ativo: true
    },
    {
        nome: 'Licor Cointreau',
        descricao: 'Licor francês de laranja, ideal para coquetéis.',
        modelo: 'Cointreau 700ml',
        preco: 129.90,
        estoque: 15,
        imagem_url: 'https://images.pexels.com/photos/13907567/pexels-photo-13907567.jpeg?auto=compress&cs=tinysrgb&w=600',
        ativo: true
    },
    {
        nome: 'Licor Malibu',
        descricao: 'Rum sabor coco, ideal para drinks tropicais.',
        modelo: 'Malibu Coconut 750ml',
        preco: 79.90,
        estoque: 18,
        imagem_url: 'https://images.pexels.com/photos/7246101/pexels-photo-7246101.jpeg?auto=compress&cs=tinysrgb&w=600',
        ativo: true
    },
    {
        nome: 'Licor Limoncello Italiano',
        descricao: 'Clássico licor de limão italiano, refrescante e doce.',
        modelo: 'Limoncello 700ml',
        preco: 69.90,
        estoque: 30,
        imagem_url: 'https://images.pexels.com/photos/5947020/pexels-photo-5947020.jpeg?auto=compress&cs=tinysrgb&w=600',
        ativo: true
    },
    {
        nome: 'Licor Tia Maria',
        descricao: 'Licor de café com rum, sabor intenso e doce.',
        modelo: 'Tia Maria Coffee Liqueur 750ml',
        preco: 119.90,
        estoque: 12,
        imagem_url: 'https://images.pexels.com/photos/12087815/pexels-photo-12087815.jpeg?auto=compress&cs=tinysrgb&w=600',
        ativo: true
    },
    {
        nome: 'Licor Frangelico',
        descricao: 'Licor italiano de avelã com aroma marcante.',
        modelo: 'Frangelico 700ml',
        preco: 139.90,
        estoque: 10,
        imagem_url: 'https://images.pexels.com/photos/4109721/pexels-photo-4109721.jpeg?auto=compress&cs=tinysrgb&w=600',
        ativo: true
    },
    {
        nome: 'Licor Sheridan’s',
        descricao: 'Licor duplo com café e creme.',
        modelo: 'Sheridan’s Layered 500ml',
        preco: 159.90,
        estoque: 8,
        imagem_url: 'https://images.pexels.com/photos/10050589/pexels-photo-10050589.jpeg?auto=compress&cs=tinysrgb&w=600',
        ativo: true
    },
    {
        nome: 'Licor de Café Artesanal',
        descricao: 'Licor artesanal feito com grãos de café selecionados.',
        modelo: 'Café Premium 500ml',
        preco: 49.90,
        estoque: 22,
        imagem_url: 'https://images.pexels.com/photos/5931197/pexels-photo-5931197.jpeg?auto=compress&cs=tinysrgb&w=600',
        ativo: true
    },
    {
        nome: 'Licor Herbal Premium',
        descricao: 'Licor feito com ervas e especiarias naturais.',
        modelo: 'Herbal Classic 700ml',
        preco: 84.90,
        estoque: 14,
        imagem_url: 'https://images.pexels.com/photos/5947076/pexels-photo-5947076.jpeg?auto=compress&cs=tinysrgb&w=600',
        ativo: true
    }
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
