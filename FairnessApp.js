var FairnessApp = (function() {

  function compare(a, b) {
  	if(a == b) {
  		return "Fair";
  	}
  };

  return {
    compare: compare
  };
})();

module.exports = FairnessApp;