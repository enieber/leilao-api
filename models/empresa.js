"use strict";

module.exports = function(sequelize, DataTypes) {
    const Empresas = sequelize.define('Empresas', {
        idEmpresa: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        cnpj: {
            type: DataTypes.STRING(32),
            required: true,
            unique: true,
            allowNull: false
        },
        razaoSocial:{
            type: DataTypes.STRING(64),
            required: true,
            allowNull: false
        },
        usuario: {
            type: DataTypes.STRING(20),
            required: true,
            allowNull: false,
            unique: true
        },
        senha: {
            type: DataTypes.STRING(128),
            required: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(254),
            required: true,
            allowNull: false,
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
        Empresas.hasMany(models.Leiloes, {foreignkey: 'idLeilao'}),
        Empresas.hasMany(models.Compradores, {foreignkey: 'idComprador'})
    }

  }
});

    return Empresas;
}
