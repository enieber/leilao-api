"use strict";

module.exports = function(sequelize, DataTypes) {
    const Leilao = sequelize.define('Leilao', {
        idEmpresa: {
            type: DataTypes.STRING
        },
        codigo: {
            type: DataTypes.INTEGER,
            required: true,
            unique: true
        },
        descrição: {
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
          Leilao.belongsTo(models.Empresa, {
            onDelete: "CASCADE",
            foreignkey: 'idLeilao'
          }),
          Leilao.hasMany(models.Lote, {foreignkey: 'idLote'}),
          Leilao.hasMany(models.Comprador, {foreignkey: 'idComprador'})
        }
      }
    });

    return Leilao;
}
