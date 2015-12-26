"use strict";

module.exports = function(sequelize, DataTypes) {
    const Leiloes = sequelize.define('Leiloes', {
        idEmpresa: {
            type: DataTypes.INTEGER,
            required: true
        },
        codigo: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        descricao: {
            type: DataTypes.STRING(60),
            required: true
        },
        vendedor: {
            type: DataTypes.INTEGER,
            required: true
        },
        inicioPrevisto: {
            type: DataTypes.DATE,
            required: true
        }
    },{
      classMethods: {
        associate: function(models){
          Leiloes.belongsTo(models.Empresas, {
            onDelete: "CASCADE",
            foreignkey: 'idLeilao'
          }),
          Leiloes.hasMany(models.Lotes, {foreignkey: 'idLote'}),
          Leiloes.hasMany(models.Compradores, {foreignkey: 'idComprador'})
        }
      }
    });

    return Leiloes;
}
