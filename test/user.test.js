const chai = require('chai')
const chaiHttp = require('chai-http')
const Server = require('../app/server')

const server = new Server()
const should = chai.should()
const { expect } = chai

chai.use(chaiHttp)

/**
* GET /user
*/
describe('USER CRUD', () => {
  it('Should add an user', (done) => {
    chai.request(server.app)
      .post('/user/create')
      .send({
        'first_name': 'firstname_1',
        'last_name': 'lastname_1',
        'email': 'email1@gmail.com',
        'password': 'password',
        'age': 1,
        'city': 'Paris',
        'city_code': '75000',
        'street_number': '13',
        'street_type': 'rue',
        'street_name': 'cambrai',
        'phone': '0606060606'
      })
      .end((err, res) => {
        res.should.have.status(200)
        done()
        if (err) {}
      })
  })

  it('Should list ALL user', (done) => {
    chai.request(server.app)
      .get('/user/show')
      .end((err, res) => {
        res.should.have.status(200)
        done()
        if (err) {}
      })
  })
})
