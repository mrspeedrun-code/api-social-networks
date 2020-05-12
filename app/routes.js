const User = require('./controllers/userController.js')
const Event = require('./controllers/eventController.js')
const Group = require('./controllers/groupController.js')
const DiscutionThread = require('./controllers/discutionThreadController')
const PhotoBook = require('./controllers/photoBookController')
const Survey = require('./controllers/surveyController')
const Ticketing = require('./controllers/ticketingController')
const ShoppingList = require('./controllers/shoppingListController')

module.exports = {
  User,
  Event,
  Group,
  DiscutionThread,
  PhotoBook,
  Survey,
  Ticketing,
  ShoppingList
}
