function findAll() {
  models.Leilao.findAll({
    attributes: ['descricao', 'vendedor', 'inicioPrevisto'],
    include: [models.Lote],
    include: [models.Comprador]
  }).then(function (leilao) {
      reply(leilao);
  })
}

function findByIdEmpresa() {
  models.Leilao.find({
      where: {
          idEmpresa: request.params['idEmpresa']
      }
  }).then(function (empresa) {
      reply(leilao);
  });
}

function findById() {
  models.Empresa.find({
      where: {
          idEmpresa: request.params['idEmpresa']
      }
  }).then(function (empresa) {
      models.Leilao.find({
          where: {
              codigo: request.params['codigo']
          }
      }).then(function (leilao) {
          reply(leilao);
      });
  });
}

function update() {
  models.Leilao.find({
      where: {
          idEmpresa: request.params['idEmpresa'],
          codigo: request.payload['codigo']
      }
  }).then(function (leilao) {

      models.Leilao.update({

        // if(request.payload['descricao'] != null && (request.payload['descricao'] != descricao))
        descricao: request.payload['descricao'],

        // if(request.payload['vendedor'] != null && (request.payload['vendedor'] != vendedor))
        vendedor: request.payload['vendedor'],

        // if(request.payload['inicioPrevisto'] != null && (request.payload['inicioPrevisto'] != inicioPrevisto))
        inicioPrevisto: request.payload['inicioPrevisto']

      }).then(function () {
          reply.redirect('/');
      });
  });
}

function destroy() {
  models.Empresa.find({
      where: {
          idEmpresa: request.params['idEmpresa']
      }
  }).then(function (empresa) {
      models.Leilao.find({
          where: {
              codigo: request.params['codigo']
          },
          include: [models.Lote],
          include: [models.Comprador]
      }).then(function (leilao) {
        leilao.setEmpresa(null).then(function () {
          models.Lote.destroy({
              where: {
                  idLeilao: leilao.codigo
              }
          }),
          models.Comprador.destroy({
            where: {
                idLeilao: leilao.codigo
            }
          }).then(function (affectedRows) {
              leilao.destroy().then(function () {
                  reply.redirect('/');
              });
          });
        });

      });
  });
}
