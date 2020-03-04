const EventModel = require('../models/event.js')

/**
 * Evebt
 * @class
 */
class Event {
  constructor (app, connect) {
    this.app = app
    this.EventModel = connect.model('Event', EventModel)
  }

  /**
   * Show
   */
  show () {
    this.app.get('/event/show/:id', (req, res) => {
      try {
        // à compléter
      } catch (err) {
        res.status(500).json({
          code: 500,
          message: err
        })
      }
    })
  }

  /**
   * Create
   */
  create () {
    this.app.post('/event/create', (req, res) => {
      try {
        this.UserModel.find({email: req.body.email}, (err, docs) => {
          if (!docs.length) {
            this.UserModel(req.body).save().then(user => {
              res.status(200).json(user || {})
            }).catch(err => {
              res.status(500).json({
                code: 500,
                message: err
              })
            })
          }
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

  /**
   * Update
   */
  update () {
    this.app.put('/event/update/:id', (req, res) => {
      try {
        this.UserModel.findByIdAndUpdate(req.params.id, req.body).then(user => {
          res.status(200).json(user || {})
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

  /**
   * Delete
   */
  delete () {
    this.app.delete('/event/destroy/:id', (req, res) => {
      try {
        this.UserModel.findByIdAndRemove(req.params.id).exec().then(user => {
          res.status(200).json(user || {})
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

  /**
   * List
   */
  search () {
    this.app.post('/event/search', (req, res) => {
      try {
        const pipe = [{ $limit: req.body.limit || 10 }]

        if (req.body.sort) {
          pipe.push({$sort: req.body.sort})
        }

        this.UserModel.aggregate(pipe).then(user => {
          res.status(200).json(user || {})
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

module.exports = Event
