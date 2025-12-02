const express = require('express')
const router = express.Router()

const usuarioController = require('../controller/usuario.controller')
const authMiddleware = require('../middleware/auth.middleware')

// Rota pública para cadastro
router.post('/', usuarioController.cadastrar)

// Rota protegida para obter perfil do usuário logado
router.get('/perfil', authMiddleware, usuarioController.obterPerfil)

// Rota protegida para atualizar perfil do usuário logado
router.put('/perfil', authMiddleware, usuarioController.atualizarPerfil)

module.exports = router
