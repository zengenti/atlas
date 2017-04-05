/*!
 * Name: Atlas
 * Author: Zengenti Ltd
 * Author URI: http://zengenti.com
 * Description: A modern front-end framework
 * Version: 0.0.1
 */

var app = (function ($) {
    'use strict';

    // private alias to settings
    var s;

    return {
        settings: function() {
            this.$window        = $(window);

            this.hello			= 'Hello World';  // Example var
        },

        init: function() {
            s = new this.settings();

            this.helloWorld();

            this.bindUIActions();       // UI Actions (click, focus etc)
            this.bindWindowActions();   // Window actions (scrolling, resize etc)
        },

        helloWorld: function() {  		// Example function
            console.log(s.hello);  
        },

        bindUIActions: function() {
            
        },

        bindWindowActions: function() {
            
        }
    
    };
})(jQuery);

jQuery(document).ready(function() {
    app.init();

});