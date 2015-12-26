"use strict";

module.exports = function(sequelize, DataTypes) {
    const Compradores = sequelize.define('Compradores', {
        idComprador: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
            required: true
        },
        idLeilao: {
            type: DataTypes.INTEGER,
            required: true
        },
        nomeComprador:{
          type: DataTypes.STRING,
          required: true
        }
      }, {
         classMethods: {
           associate: function(models){
            Compradores.belongsTo(models.Leiloes, {
              onDelete: "CASCADE",
              foreignkey: 'idComprador'
            })
            Compradores.belongsTo(models.Empresas, {
              onDelete: "CASCADE",
              foreignkey: 'idComprador'
            })
          }

      }
      });

    return Compradores;
}
