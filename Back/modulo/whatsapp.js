/************************************************************************************************
 * Objetivo: Criar uma API para disponibilizar contatos e conversa para o whatsapp
 * Autor: Luiz Gustavo
 * Data: 17/03/2023
 * Versão: 1.0
************************************************************************************************/

const contatos = require('./contatos.js')

const arquivoContatos = contatos.contatos['whats-users']

const formatacaoJSON = (numeroPessoa) => {
    let arrayListaContatos
    
    arquivoContatos.forEach((contatosJSON) => {
        if(contatosJSON.number == numeroPessoa){
            contatosJSON.contacts.forEach((contatosDoPerfil) => {
                arrayListaContatos = {
                name: contatosJSON.contacts[0].name,
                description: contatosJSON.contacts[0].description
            }
            })
        }
    })
}