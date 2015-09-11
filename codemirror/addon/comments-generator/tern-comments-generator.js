(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";
  
  function CommentsState(cm, options) {
    this.options = options;
    this.timeout = null;
  }
  
  function parseOptions(_cm, options) {
    if (options instanceof Function) return {getAnnotations: options};
    if (!options || options === true) options = {};
    return options;
  }
  
  function comments(cm) {
    //var state = cm.state.Comments;
    //if (!state) return;
    var server = CodeMirror.tern.getServer(cm);
    if (!server) return;
    

    var query = {
      type : "comments",
      file : "#0",
      lineCharPositions : true,
      end: cm.getCursor()
    };
    
    var files = [];
    files.push({
      type : "full",
      name : "[doc]",
      text : cm.getValue()
    });

    var doc = {
      query : query,
      files : files
    };
    server.server.request(doc, function(error, response) {
      if (error) {
        //updateComments(state, {});
      } else {
        updateComments(cm, response);
      }
    });
  }
  
  function updateComments(cm, data) {
    if (data && data.comments) {
      cm.replaceRange(data.comments, data.start, data.start);
    }
  }
  
  function onChange(cm) {
    var state = cm.state.Comments;
    if (!state) return;
    clearTimeout(state.timeout);
    state.timeout = setTimeout(function(){displayComments(cm);}, state.options.delay || 500);
  }

  CodeMirror.defineOption("Comments", false, function(cm, val, old) {
    if (old && old != CodeMirror.Init) {
      //cm.off("change", onChange);
    }
    if (val) {
      var state = cm.state.Comments = new CommentsState(cm, parseOptions(cm, val));
      //cm.on("change", onChange);
    }
    //displayComments(cm);
  });
  
  CodeMirror.tern.comments = comments;
  
});
  