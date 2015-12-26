'use strict';

module.exports = function(sequelize, DataTypes) {
    const Lotes = sequelize.define('Lotes', {
        idLote:{
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        idLeilao: {
            type: DataTypes.INTEGER,
            required: true,
            validate: {
              notNull: true
            }
        },
        numero: DataTypes.INTEGER,
        descricao: {
            type: DataTypes.STRING(60),
            required: true,
            validate: {
              notNull: true
            }
        },
        quantidade:{
            type: 'NUMERIC',
            validate: {
              notNull: true
            }
        }
        valor: {
          type: 'NUMERIC',
          validate: {
            notNull: true
          }
      }
    }, {
       classMethods: {
         associate: function(models){
          Lotes.belongsTo(models.Leiloes, {foreignkey: 'idLote'})
      }

    }
  });

    return Lotes;
}
