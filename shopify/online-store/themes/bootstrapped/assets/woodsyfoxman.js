woodsyfoxmanFns = function () {
  function forceSsl() {
    if (window.location.protocol != "https:") {
    	window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);
    }
  }
  
  function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  return {
    forceSsl: forceSsl,
    getParameterByName: getParameterByName
  }
} ();