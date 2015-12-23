"use strict";

module.exports = function(sequelize, DataTypes) {
    const Comprador = sequelize.define('Comprador', {
        idComprador: {
            type: DataTypes.INTEGER,
            required: true,
            unique: true
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
            required: true
        },
        idLeilao: {
            type: DataTypes.INTEGER,
            required: true
        }
      }, {
         classMethods: {
           associate: function(models){
            Comprador.belongsTo(models.Leilao, {
              onDelete: "CASCADE",
              foreignkey: 'idComprador'
            })
            Comprador.belongsTo(models.Empresa, {
              onDelete: "CASCADE",
              foreignkey: 'idComprador'
            })
          }

      }
      });

    return Comprador;
}
