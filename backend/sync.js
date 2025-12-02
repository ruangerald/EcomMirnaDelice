const conn = require('./db/conn')
const { Usuario, Pedido, Produto, ItemPedido, Entrega, Estoque } = require('./models/rel')
const seedLicor = require('./scripts/seedLicores.js')

async function syncDataBase(){
    try{
        await conn.sync({ force: true })
        console.log('Tabelas Sincronizadas!')

        // Executar seed de bicicletas
        await seedLicor()
    }catch(err){
        console.error('ERRO: Não foi possível sincronizar as tabelas!', err)
    } finally {
        await conn.close()
        console.log('Conexão Finalizada!')
    }
}

syncDataBase()
