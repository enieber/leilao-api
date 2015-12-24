'use strict';

const models = require('../models');

  function consult(nome){
    method: 'GET',    
    handler: function (request, reply) {
        models.Empresa.findAll({
          attributes: ['idEmpresa', 'cnpj', 'razaoSocial', 'usuario', 'senha', 'email', 'telefone', 'logradouro', 'municipio','numero','complemento','bairro','cep'],
          include: [models.Leilao]
        }).then(function (empresa) {
            reply(empresa);
        })
    }
  }

  module.exports.consult = consult || {};
