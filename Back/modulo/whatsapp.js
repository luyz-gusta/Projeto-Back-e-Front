/************************************************************************************************
 * Objetivo: Criar uma API para disponibilizar contatos e conversa para o whatsapp
 * Autor: Luiz Gustavo
 * Data: 17/03/2023
 * Versão: 1.0
************************************************************************************************/

const contatos = require('./contatos.js')

const arquivoContatos = contatos.contatos['whats-users']

const getUsuario = (numeroTelefone) => {
    let telefone = numeroTelefone
    let listaDadosUsuaio
    let status = true

    arquivoContatos.forEach((usuario) => {
        if (telefone == usuario.number) {
            listaDadosUsuaio = {
                id: usuario.id,
                nickname: usuario.nickname,
                number: usuario.number,
                fotoPerfil: usuario['profile-image'],
                contatos: usuario.contacts
            }
        }
    })
    if (listaDadosUsuaio == undefined) {
        status = false
    } else {
        status = listaDadosUsuaio
    }
    return status
}

const getContatosUsuario = (numeroUsuario) => {
    let telefone = numeroUsuario
    let contacts = {}
    let mensagens = {}
    const listaContatosUsuario = []

    arquivoContatos.forEach((usuario) => {
        if (usuario.number == telefone) {
            usuario.contacts.forEach((listaContatos) => {
                const nome = listaContatos.name
                const descricao = listaContatos.description
                const imagem = listaContatos.image
                const listaMensagens = []
                listaContatos.messages.forEach((mensagem) => {
                    mensagens = {
                        sender: mensagem.sender,
                        content: mensagem.content,
                        time: mensagem.time
                    }
                    listaMensagens.push(mensagens)
                })
                contacts = {
                    name: nome,
                    description: descricao,
                    image: imagem,
                    messages: listaMensagens
                }
                listaContatosUsuario.push(contacts)
            })
        }
    })
    return {listaContatosUsuario}
}

module.exports = {
    getUsuario,
    getContatosUsuario
}