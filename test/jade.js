var should  = require('should')
var polymer = require('../')

describe("jade", function(){

  var root = __dirname + "/fixtures/templates"
  var poly = polymer.root(root)

  it("should render markdown file", function(done){
    poly.render("stuff.md", function(error, body){
      should.not.exist(error)
      should.exist(body)
      body.should.include("<h1>hello markdown</h1>")
      body.should.include("<p>")
      done()
    })
  })

  it("should have jade partial layout and include working", function(done){
    poly.render("index.jade", function(error, body){
      should.not.exist(error)
      should.exist(body)
      body.should.include("<h1>Sintaxi</h1>")
      body.should.include("<h2>Hello World</h2>")
      body.should.include("<h3>Brock Whitten</h3>")
      body.should.include("<h4>Vancouver</h4>")
      done()
    })
  })

  it("should pass in partials from the global object", function(done){
    poly.render("index.jade", function(error, body){
      should.not.exist(error)
      should.exist(body)
      body.should.include("<h1>Sintaxi</h1>")
      body.should.include("<h2>Hello World</h2>")
      body.should.include("<h3>Brock Whitten</h3>")
      body.should.include("<h4>Vancouver</h4>")
      done()
    })
  })

  it("should return errors if error found", function(done){
    poly.render("invalid.jade", function(error, body){
      should.not.exist(body)
      should.exist(error)
      error.should.have.property("name")
      error.should.have.property("message")
      error.should.have.property("stack")
      done()
    })
  })

})