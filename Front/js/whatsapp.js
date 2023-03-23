'use strict'

export const dadosUsuario = async (numeroUsuario) => {
    const url = `http://localhost:8080/v1/whatsapp/contatos/numero/${numeroUsuario}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}