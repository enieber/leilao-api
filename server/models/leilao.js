"use strict";

module.exports = function(sequelize, DataTypes) {
    const Leiloes = sequelize.define('Leiloes', {
        idEmpresa: {
            type: DataTypes.INTEGER,
            required: true,
            allowNull: false
        },
        codigo: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        descricao: {
            type: DataTypes.STRING(60),
            required: true,
            allowNull: false
        },
        vendedor: {
            type: DataTypes.INTEGER,
            required: true,
            allowNull: false
        },
        inicioPrevisto: {
            type: DataTypes.DATE,
            required: true,
            allowNull: false
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
