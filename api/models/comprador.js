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
            required: true,
            allowNull: false
        },
        codigo: {
            type: DataTypes.INTEGER,
            required: true,
            allowNull: false
        },
        nomeComprador:{
          type: DataTypes.STRING,
          required: true,
          allowNull: false
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
