'use strict';

module.exports = function(sequelize, DataTypes) {
    const Lote = sequelize.define('Lote', {
        idLote:{
          type: DataTypes.INTEGER
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
          Lote.belongsTo(models.Leilao, {foreignkey: 'idLote'})
      }

    }
  });

    return Lote;
}
