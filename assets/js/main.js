var main = {
  initializeComponents: function(){
    this.bindEvents();
  },

  bindEvents: function(){
    $('#buttonCancel').on('click', this.cancelUpload);
  },

  cancelUpload: function(){
    var url = "/files";
    $(location).attr('href', url);
  }
};

$(document).ready(function(){
  main.initializeComponents();
});
