"use strict";

module.exports = function(sequelize, DataTypes) {
    const Empresa = sequelize.define('Empresa', {
        idEmpresa: {
            type: DataTypes.INTEGER,
            required: true,
            unique: true
        },
        cnpj: {
            type: DataTypes.STRING(32),
            required: true,
            unique: true
        },
        razãoSocial:{
            type: DataTypes.INTEGER,
            required: true,
            unique: true
        },
        usuario: {
            type: DataTypes.STRING(20),
            required: true,
            unique: true
        },
        senha: {
            type: DataTypes.STRING(128),
            required: true,
            unique: true
        },
        email: {
            type: DataTypes.STRING(254),
            required: true,
            unique: true
        },
        telefone: DataTypes.STRING(32),
        logradouro: DataTypes.STRING(64),
        municipio: DataTypes.STRING(64),
        numero: DataTypes.STRING(64),
        complemento: DataTypes.STRING(64),
        bairro: DataTypes.STRING(64),
        cep: DataTypes.STRING(16)

  }, {
     classMethods: {
       associate: function(models){
        Empresa.hasMany(models.Leilao, {foreignkey: 'idLeilao'})
    }

  }
});

    return Empresa;
}
