var Produce = function(data, req){
  this.data = data;
  this.req = req;

}

Produce.prototype.data = {};

Produce.prototype.getAll = function(callback){

  this.req.getConnection(function(err, connection){

    var query = connection.query("select * from produce", function(err, rows){

      //console.log(rows[0].name);

      callback(rows);
    });
  });
}

Produce.prototype.deleteItem = function(){
  
}

module.exports = Produce;
