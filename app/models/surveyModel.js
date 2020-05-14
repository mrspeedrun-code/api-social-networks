const mongoose = require('mongoose')

const Schema = mongoose.Schema

const SurveySchema = new Schema({
  questions: [{
    type: {
      type: String
    }
  }]
})

module.exports = SurveySchema

// - Un événement peut avoir 0 ou plusieurs sondages créés par un organisateur.
// - Un sondage comporte 1 ou plusieurs questions.
// - Pour chaque question, il existe plusieurs réponses possibles mais
// uniquement 1 peut être choisie.
// - Chaque participant de l’événement peut répondre aux différents sondages en
// choisissant pour chaque question sa réponse.
