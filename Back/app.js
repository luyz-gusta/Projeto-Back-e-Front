/************************************************************************************************
 * Objetivo: Criar uma API para disponibilizar contatos e conversa para o whatsapp
 * Autor: Luiz Gustavo
 * Data: 17/03/2023
 * Versão: 1.0
************************************************************************************************/

//Dependências para criar as requisições da api
const express = require('express')
//Dependências  gerenciar as permissões da api
const cors = require('cors')
//Dependências  gerenciar o corpo das requisições da api
const bodyParser = require('body-parser')

//Cria um obejto com as caracteristicas do express
const app = express()

const whatsapp = require('./modulo/whatsapp.js')

app.use((request, response, next) => {
    //API Publica - Fica disponivel para utilização de qualquer aplicação
    //API Privada - Somente o IP informado poderá consumir dados da api

    //Define se a api será publica ou privada
    response.header('Access-Control-Allow-Origin', '*')

    //Permite definir quais metodos poderão ser utilizados nas requisições da API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //Envia para o cors() as regras de permissões
    app.use(cors())

    next()

})

app.get('/v1/whatsapp/contatos/numero/:numero', cors(), async function (request, response, next) {
    let numeroUsuario = request.params.numero
    let statusCode
    let dadosUsuario = {}

    if (numeroUsuario == '' || numeroUsuario == undefined) {
        statusCode = 400
        usuario.message = 'Não foi possivel processar os dados de entrada (uf) que foi enviado não corresponde ao exigido, confira o valor.'
    } else {
        let usuario = whatsapp.getContatosUsuario(numeroUsuario)
        dadosUsuario = []

        if (usuario) {
            statusCode = 200
            dadosUsuario = usuario
        } else {
            statusCode = 404
        }

    }

    response.status(statusCode)
    response.json(dadosUsuario)
})

app.listen(8080, () => { console.log('Servidor aguardando requisição na porta 8080.') })

