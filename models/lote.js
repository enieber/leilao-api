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
            required: true
        },
        numero: DataTypes.INTEGER,
        descricao: {
            type: DataTypes.STRING(60),
            required: true
        },
        quantidade: 'NUMERIC',
        valor: 'NUMERIC'
    }, {
       classMethods: {
         associate: function(models){
          Lotes.belongsTo(models.Leiloes, {foreignkey: 'idLote'})
      }

    }
  });

    return Lotes;
}
