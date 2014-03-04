$(function() {
  
  // Implement datepicker across date fields
  $('.input-group.date').datepicker({
    format: 'dd-M-yyyy'
  });
  
  //Implement smooth scrolling per page links (requires offset for top bar)
  $('a').smoothScroll({ offset: -60 })
  
  //Make sure alerts can be seen
  $('.alert').css({ 'margin-top' : ($('.navbar').height() - 50) + 'px' });

  // Toggle button for tinyMCE
  $('body').on('click', '.toggle-mce', function(e) {
    e.preventDefault();
    var $btnText = $(e.currentTarget).children('span')
    var editor_id = $(e.currentTarget).attr('class').split(' ').pop();
    tinymce.execCommand('mceToggleEditor',false, editor_id);
    if ($btnText.text() == 'HTML') {
      $btnText.text('WYSIWYG');
    } else {
      $btnText.text('HTML');
    }      
    
  }); 

  tinymce.settings.setup = function(ed) { 
    ed.on('init', function(ed) {
      this.getDoc().body.style.fontSize = '0.9em';
      this.getDoc().body.style.fontFamily = 'Courier, monospace';
     $editor = $(ed.target.contentAreaContainer).parent().parent().parent();
      $editor.append('<br><p class="pull-right"><a href="#" class="btn btn-xs btn-info toggle-mce ' + ed.target.id + '"><span>HTML</span></a></p>')
     }); 
  }
});