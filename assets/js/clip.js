(function() {
  var search = location.search,
    code = 'code', length = code.length;
  if (search) {
    var _code = search.slice(1, length + 1);
    if (_code == code) {
      location.replace('http://localhost:8080/api/' + code + '/' + search.slice(length + 2));
    }
  }
})();
