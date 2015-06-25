exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {

  async : function(value) {
    var deferred = $.Deferred();
    setTimeout(function() {
      deferred.resolve(value);
    },100);
    return deferred.promise();
},

manipulateRemoteData : function(url) {

  var deferred = $.Deferred();
  $.ajax(url).then(function(data) {
    var names = _.map(data.people, function(person) {
      return person.name;
    })
    deferred.resolve(names.sort());
  });

  return deferred.promise();
}
};
