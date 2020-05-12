const ShoppingListModel = require('../models/shoppinglistModel.js')

// Lors d’un événement si la shopping list est activée, un utilisateur peut indiquer ce qu’il va apporter à l’événement. Pour cela il indique:
// - Un nom
// - Une quantité
// - Une heure d’arrivée à l’événement
// - Chaque chose apporté doit être unique par événement

/**
 * ShoppingList
 * @class
 */
class ShoppingList {
  constructor (app, connect) {
    this.app = app
    this.ShoppingListModel = connect.model('ShoppingList', ShoppingListModel)

    this.create()
    this.show()
    this.showById()
    this.update()
    this.delete()
    this.search()
  }

  /**
   * Create ShoppingList
   */
  create () {
    this.app.post('/shoppinglist/create', (req, res) => {
      this.ShoppingListModel(req.body).save().then(shoppinglist => {
        res.status(200).json(shoppinglist || {})
      }).catch(err => {
        res.status(500).json({
          code: 500,
          message: err
        })
      })
    })
  }

  /**
   * Show All ShoppingList
   */
  show () {
    this.app.get('/shoppinglist/show', (req, res) => {
      try {
        this.ShoppingListModel.find({}).then(shoppinglist => {
          res.status(200).json(shoppinglist || {})
        }).catch(err => {
          res.status(404).json({
            code: 404,
            message: err + ` Not found ShoppingList.`
          })
        })
      } catch (err) {
        res.status(500).json({
          code: 500,
          message: err + ` Error retrieving ShoppingList.`
        })
      }
    })
  }

  /**
   * Show ShoppingList by id
   */
  showById () {
    this.app.get('/shoppinglist/show/:id', (req, res) => {
      try {
        this.ShoppingListModel.findById(req.params.id).then(shoppinglist => {
          res.status(200).json(shoppinglist || {})
        }).catch(err => {
          res.status(404).json({
            code: 404,
            message: err + ` Not found ShoppingList with id=${req.params.id}.`
          })
        })
      } catch (err) {
        res.status(500).json({
          code: 500,
          message: err + ` Error retrieving ShoppingList with id=${req.params.id}.`
        })
      }
    })
  }

  /**
   * Update by id
   */
  update () {
    this.app.put('/shoppinglist/update/:id', (req, res) => {
      try {
        this.ShoppingListModel.findByIdAndUpdate(req.params.id, req.body).then(shoppinglist => {
          res.status(200).json(shoppinglist || {})
        }).catch(err => {
          res.status(404).json({
            code: 404,
            message: err + ` Cannot update ShoppingList with id=${req.params.id}. ShoppingList was not found!`
          })
        })
      } catch (err) {
        res.status(500).json({
          code: 500,
          message: err + ` Error updating ShoppingList with id=${req.params.id}.`
        })
      }
    })
  }

  /**
   * Delete ShoppingList by Id
   */
  delete () {
    this.app.delete('/shoppinglist/destroy/:id', (req, res) => {
      try {
        this.ShoppingListModel.findByIdAndRemove(req.params.id).exec().then(shoppinglist => {
          res.status(200).json(shoppinglist || {})
        }).catch(err => {
          res.status(404).json({
            code: 404,
            message: err + `Cannot delete ShoppingList with id=${req.params.id}.`
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
    this.app.post('/shoppinglist/search', (req, res) => {
      try {
        const pipe = [{ $limit: req.body.limit || 10 }]

        if (req.body.sort) {
          pipe.push({$sort: req.body.sort})
        }

        this.ShoppingListModel.aggregate(pipe).then(shoppinglist => {
          res.status(200).json(shoppinglist || {})
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

module.exports = ShoppingList
