var should    = require('should')
var processor = require('../')

describe("basic", function(){
  
  it("should exist", function(done){
    should.exist(processor)
    processor.should.have.property("process")
    done()
  })
  
  it("should be cool", function(done){
    processor.process("index.jade", { root: __dirname + "/fixtures" }, function(error, contents){
      should.not.exist(error)
      contents.should.include("<h1>Sintaxi</h1>")
      contents.should.include("<h2>Hello World</h2>")
      contents.should.include("<h3>Brock Whitten</h3>")
      contents.should.include("<h4>Vancouver</h4>")
      done()
    })
  })
  
})