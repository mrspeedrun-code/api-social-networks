const GroupModel = require('../models/groupModel.js')

// - Un groupe possède 1 ou plusieurs membres.
// - Un groupe est géré par 1 ou plusieurs administrateurs.

/**
 * Group
 * @class
 */
class Group {
  constructor (app, connect) {
    this.app = app
    this.GroupModel = connect.model('Group', GroupModel)

    this.create()
    this.show()
    this.showById()
    this.update()
    this.delete()
    this.search()
  }

  /**
   * Create Group
   */
  create () {
    this.app.post('/group/create', (req, res) => {
      this.GroupModel(req.body).save().then(group => {
        res.status(200).json(group || {})
      }).catch(err => {
        res.status(500).json({
          code: 500,
          message: err
        })
      })
    })
  }

  /**
   * Show All Group
   */
  show () {
    this.app.get('/group/show', (req, res) => {
      try {
        this.GroupModel.find({}).then(group => {
          res.status(200).json(group || {})
        }).catch(err => {
          res.status(404).json({
            code: 404,
            message: err + ` Not found Group.`
          })
        })
      } catch (err) {
        res.status(500).json({
          code: 500,
          message: err + ` Error retrieving Group.`
        })
      }
    })
  }

  /**
   * Show Group by id
   */
  showById () {
    this.app.get('/group/show/:id', (req, res) => {
      try {
        this.GroupModel.findById(req.params.id).then(group => {
          res.status(200).json(group || {})
        }).catch(err => {
          res.status(404).json({
            code: 404,
            message: err + ` Not found Group with id=${req.params.id}.`
          })
        })
      } catch (err) {
        res.status(500).json({
          code: 500,
          message: err + ` Error retrieving Group with id=${req.params.id}.`
        })
      }
    })
  }

  /**
   * Update by id
   */
  update () {
    this.app.put('/group/update/:id', (req, res) => {
      try {
        this.GroupModel.findByIdAndUpdate(req.params.id, req.body).then(group => {
          res.status(200).json(group || {})
        }).catch(err => {
          res.status(404).json({
            code: 404,
            message: err + ` Cannot update Group with id=${req.params.id}. Group was not found!`
          })
        })
      } catch (err) {
        res.status(500).json({
          code: 500,
          message: err + ` Error updating Group with id=${req.params.id}.`
        })
      }
    })
  }

  /**
   * Delete Group by Id
   */
  delete () {
    this.app.delete('/group/destroy/:id', (req, res) => {
      try {
        this.GroupModel.findByIdAndRemove(req.params.id).exec().then(group => {
          res.status(200).json(group || {})
        }).catch(err => {
          res.status(404).json({
            code: 404,
            message: err + `Cannot delete Group with id=${req.params.id}.`
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
    this.app.post('/group/search', (req, res) => {
      try {
        const pipe = [{ $limit: req.body.limit || 10 }]

        if (req.body.sort) {
          pipe.push({$sort: req.body.sort})
        }

        this.GroupModel.aggregate(pipe).then(group => {
          res.status(200).json(group || {})
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

module.exports = Group
