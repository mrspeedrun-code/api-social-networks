const mongoose = require('mongoose')

const Schema = mongoose.Schema

const SurveySchema = new Schema({
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'
  },
  questions: [{
    question: {
      text: String,
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    },
    answers: [{
      index: {
        type: Number
      },
      answer: {
        type: String
      }
    }]
  }],
  answerChoice: [{
    userAnswer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    userChoiceIndex: {
      type: Number
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
