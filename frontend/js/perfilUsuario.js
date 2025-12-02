// =========================
//   VALIDAÇÃO DE SESSÃO
// =========================
let token = sessionStorage.getItem('token')
let nome = sessionStorage.getItem('nome')
let tipo = sessionStorage.getItem('tipo')

// Se não tiver token, redireciona para login
if (!token) {
    location.href = '../index.html'
}

// =========================
//   ELEMENTOS DOM
// =========================
const nomeUsuario = document.getElementById('nomeUsuario')
const tipoUsuario = document.getElementById('tipoUsuario')
const nomeCompleto = document.getElementById('nomeCompleto')
const emailUsuario = document.getElementById('emailUsuario')
const telefoneUsuario = document.getElementById('telefoneUsuario')
const cpfUsuario = document.getElementById('cpfUsuario')
const identidadeUsuario = document.getElementById('identidadeUsuario')
const dataCadastro = document.getElementById('dataCadastro')
const btnLogout = document.getElementById('btnLogout')
const btnEditarPerfil = document.getElementById('btnEditarPerfil')
const btnAlterarSenha = document.getElementById('btnAlterarSenha')
const btnHistoricoCompras = document.getElementById('btnHistoricoCompras')
const modalEditar = document.getElementById('modalEditar')
const closeModal = document.querySelector('.close')
const formEditarPerfil = document.getElementById('formEditarPerfil')

// =========================
//   INICIALIZAÇÃO
// =========================
document.addEventListener('DOMContentLoaded', function() {
    carregarPerfilUsuario()
    configurarEventos()
})

// =========================
//   CONFIGURAÇÃO DE EVENTOS
// =========================
function configurarEventos() {
    // Logout
    btnLogout.addEventListener('click', function(e) {
        e.preventDefault()
        sessionStorage.clear()
        localStorage.clear()
        location.href = '../index.html'
    })

    // Editar perfil
    btnEditarPerfil.addEventListener('click', abrirModalEditar)

    // Fechar modal
    closeModal.addEventListener('click', fecharModalEditar)

    // Clique fora do modal para fechar
    window.addEventListener('click', function(e) {
        if (e.target === modalEditar) {
            fecharModalEditar()
        }
    })

    // Formulário de edição
    formEditarPerfil.addEventListener('submit', salvarEdicaoPerfil)

    // Botões de ação (placeholders)
    btnAlterarSenha.addEventListener('click', function() {
        alert('Funcionalidade de alteração de senha será implementada em breve!')
    })

    btnHistoricoCompras.addEventListener('click', function() {
        alert('Funcionalidade de histórico de compras será implementada em breve!')
    })
}

// =========================
//   CARREGAR PERFIL DO USUÁRIO
// =========================
async function carregarPerfilUsuario() {
    try {
        const response = await fetch('http://localhost:3000/usuario/perfil', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (!response.ok) {
            throw new Error('Erro ao carregar perfil')
        }

        const dadosUsuario = await response.json()

        // Preencher dados na interface
        nomeUsuario.textContent = dadosUsuario.nome || 'Usuário'
        tipoUsuario.textContent = dadosUsuario.tipo_usuario === 'ADMIN' ? 'Administrador' : 'Cliente'
        nomeCompleto.textContent = dadosUsuario.nome || '-'
        emailUsuario.textContent = dadosUsuario.email || '-'
        telefoneUsuario.textContent = dadosUsuario.telefone || '-'
        cpfUsuario.textContent = dadosUsuario.cpf || '-'
        identidadeUsuario.textContent = dadosUsuario.identidade || '-'

        // Formatar data de cadastro
        if (dadosUsuario.createdAt) {
            const data = new Date(dadosUsuario.createdAt)
            dataCadastro.textContent = data.toLocaleDateString('pt-BR')
        } else {
            dataCadastro.textContent = '-'
        }

    } catch (error) {
        console.error('Erro ao carregar perfil:', error)
        alert('Erro ao carregar dados do perfil. Tente novamente.')
    }
}

// =========================
//   MODAL DE EDIÇÃO
// =========================
function abrirModalEditar() {
    // Preencher campos do modal com dados atuais
    document.getElementById('editNome').value = nomeCompleto.textContent !== '-' ? nomeCompleto.textContent : ''
    document.getElementById('editEmail').value = emailUsuario.textContent !== '-' ? emailUsuario.textContent : ''
    document.getElementById('editTelefone').value = telefoneUsuario.textContent !== '-' ? telefoneUsuario.textContent : ''
    document.getElementById('editIdentidade').value = identidadeUsuario.textContent !== '-' ? identidadeUsuario.textContent : ''

    modalEditar.style.display = 'block'
}

function fecharModalEditar() {
    modalEditar.style.display = 'none'
    formEditarPerfil.reset()
}

// =========================
//   SALVAR EDIÇÃO DO PERFIL
// =========================
async function salvarEdicaoPerfil(e) {
    e.preventDefault()

    const dadosAtualizados = {
        nome: document.getElementById('editNome').value.trim(),
        email: document.getElementById('editEmail').value.trim(),
        telefone: document.getElementById('editTelefone').value.trim(),
        identidade: document.getElementById('editIdentidade').value.trim() || null
    }

    // Validação básica
    if (!dadosAtualizados.nome || !dadosAtualizados.email || !dadosAtualizados.telefone) {
        alert('Por favor, preencha todos os campos obrigatórios!')
        return
    }

    try {
        const response = await fetch('http://localhost:3000/usuario/perfil', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(dadosAtualizados)
        })

        if (!response.ok) {
            const errorData = await response.json()
            throw new Error(errorData.message || 'Erro ao atualizar perfil')
        }

        const resultado = await response.json()

        // Log da atualização (opcional)
        console.log('Perfil atualizado com sucesso')

        // Atualizar dados na interface
        nomeCompleto.textContent = dadosAtualizados.nome
        emailUsuario.textContent = dadosAtualizados.email
        telefoneUsuario.textContent = dadosAtualizados.telefone
        identidadeUsuario.textContent = dadosAtualizados.identidade || '-'

        // Atualizar sessionStorage se o nome mudou
        if (dadosAtualizados.nome !== sessionStorage.getItem('nome')) {
            sessionStorage.setItem('nome', dadosAtualizados.nome)
            nomeUsuario.textContent = dadosAtualizados.nome
        }

        alert('Perfil atualizado com sucesso!')
        fecharModalEditar()

    } catch (error) {
        console.error('Erro ao salvar edição:', error)
        alert('Erro ao atualizar perfil: ' + error.message)
    }
}
