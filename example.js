jQuery(document).on( 'wbk_on_form_rendered', function(){	
 	jQuery('[name="wbk-book-quantity"]').change(function(){
    	var available = parseInt( jQuery(this).val() );                             
        html  = '';
        for( var i = 0; i <= available; i++ ){
            html += '<option value="' + i +'">' + i + '</option>';    
        }
        jQuery('[name="menu1"]').html(html);
        jQuery('[name="menu1"]').val('1');
        jQuery('.wbk_menu').change( function(){
            var current = parseInt( jQuery(this).val() );    
          	var available = parseInt( jQuery('[name="wbk-book-quantity"]').val() ); 
            var sib =  available - current;
            var html = '';
            for( var i = 0; i <= sib; i++ ){
                html += '<option value="' + i +'">' + i + '</option>';    
            }
            var sib_current = parseInt( jQuery('.wbk_menu').not(this).val() );
          	console.log('Sib current: ' + sib_current );
          	console.log('Sib : ' + sib );
          
            if( sib_current > sib ){
                sib_current = sib;
            }
            jQuery('.wbk_menu').not(this).html(html);
            jQuery('.wbk_menu').not(this).val( sib_current );
           
        });  	 
        jQuery('[name="menu1"]').trigger('change');  
      
    });
    jQuery('[name="wbk-book-quantity"]').trigger('change');
    
});
