'use strict';

module.exports = function(sequelize, DataTypes) {
    const Lotes = sequelize.define('Lotes', {
        idLote:{
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        codigo: {
            type: DataTypes.INTEGER,
            required: true,
            allowNull: false
        },
        numero: DataTypes.INTEGER,
        descricao: {
            type: DataTypes.STRING(60),
            required: true,
            allowNull: false
        },
        quantidade:{
            type: 'NUMERIC',
            allowNull: false
        },
        valor: {
          type: 'NUMERIC',
          allowNull: false
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
