const CarpoolingModel = require('../models/carpoolingModel.js')

/**
 * Carpooling
 * @class
 */
class Carpooling {
  constructor (app, connect) {
    this.app = app
    this.CarpoolingModel = connect.model('Carpooling', CarpoolingModel)

    this.create()
    this.show()
    this.update()
    this.delete()
    this.search()
  }

  /**
   * Create Carpooling
   */
  create () {
    this.app.post('/carpooling/create', (req, res) => {
      this.CarpoolingModel(req.body).save().then(carpooling => {
        res.status(200).json(carpooling || {})
      }).catch(err => {
        res.status(500).json({
          code: 500,
          message: err
        })
      })
    })
  }

  /**
   * Show All Carpooling
   */
  show () {
    this.app.get('/carpooling/show', (req, res) => {
      try {
        this.CarpoolingModel.find({}).then(carpooling => {
          res.status(200).json(carpooling || {})
        }).catch(err => {
          res.status(404).json({
            code: 404,
            message: err + ` Not found Carpooling.`
          })
        })
      } catch (err) {
        res.status(500).json({
          code: 500,
          message: err + ` Error retrieving Carpooling.`
        })
      }
    })

    this.app.get('/carpooling/show/:id', (req, res) => {
      try {
        this.CarpoolingModel.findById(req.params.id).then(carpooling => {
          res.status(200).json(carpooling || {})
        }).catch(err => {
          res.status(404).json({
            code: 404,
            message: err + ` Not found Carpooling with id=${req.params.id}.`
          })
        })
      } catch (err) {
        res.status(500).json({
          code: 500,
          message: err + ` Error retrieving Carpooling with id=${req.params.id}.`
        })
      }
    })
  }

  /**
   * Update by id
   */
  update () {
    this.app.put('/carpooling/update/:id', (req, res) => {
      try {
        this.CarpoolingModel.findByIdAndUpdate(req.params.id, req.body).then(carpooling => {
          res.status(200).json(carpooling || {})
        }).catch(err => {
          res.status(404).json({
            code: 404,
            message: err + ` Cannot update Carpooling with id=${req.params.id}. Carpooling was not found!`
          })
        })
      } catch (err) {
        res.status(500).json({
          code: 500,
          message: err + ` Error updating Carpooling with id=${req.params.id}.`
        })
      }
    })
  }

  /**
   * Delete Carpooling by Id
   */
  delete () {
    this.app.delete('/carpooling/destroy/:id', (req, res) => {
      try {
        this.CarpoolingModel.findByIdAndRemove(req.params.id).exec().then(carpooling => {
          res.status(200).json(carpooling || {})
        }).catch(err => {
          res.status(404).json({
            code: 404,
            message: err + `Cannot delete Carpooling with id=${req.params.id}.`
          })
        })
      } catch (err) {
        res.status(500).json({
          code: 500,
          message: err
        })
      }
    })
  }

  /**
   * List
   */
  search () {
    this.app.post('/carpooling/search', (req, res) => {
      try {
        const pipe = [{ $limit: req.body.limit || 10 }]

        if (req.body.sort) {
          pipe.push({$sort: req.body.sort})
        }

        this.CarpoolingModel.aggregate(pipe).then(carpooling => {
          res.status(200).json(carpooling || {})
        }).catch(err => {
          res.status(500).json({
            code: 500,
            message: err
          })
        })
      } catch (err) {
        res.status(500).json({
          code: 500,
          message: err
        })
      }
    })
  }
}

module.exports = Carpooling
