/* 
 * Application : CICD_Dev_Ops
 * ClassName   : sys_ui_script
 * Created On  : 2020-10-14 15:52:30
 * Created By  : rizknt@nih.gov
 * Updated On  : 2020-11-04 16:59:38
 * Updated By  : rizknt@nih.gov
 * URL         : /sys_ui_script.do?sys_id=619ab0ae1bbb181094edddb6bc4bcbf0
 */
var x_g_nci_cicd_dev_o = x_g_nci_cicd_dev_o || {};

x_g_nci_cicd_dev_o.UI_SCRIPT_TEST = (function() {
	"use strict";

/* set your private variables and functions here. For example: 
	var privateVar = 0; 
	function private_function() {
		return ++privateVar;
	}
*/

/* Share variables between multiple UI scripts by adding them to your scope object. For example: 
	x_g_nci_cicd_dev_o.sharedVar = 0; 

 Then access them in your scripts the same way. For example: 
	function get_shared() {
		return x_g_nci_cicd_dev_o.sharedVar;
	}
*/

	return {

/* set your public API here. For example:
		incrementAndReturnPrivateVar: function() {
			return private_function();
		},
*/
		type:  "UI_SCRIPT_TEST"
	};
})();

/**
 * Description
 * 
 * @param {any} control
 * @param {any} oldValue
 * @param {any} newValue
 * @param {any} isLoading
 * @author Nadim Rizk [rizknt@nih.gov]
 * @memberof x_g_nci_cicd_dev_o.module:sys_ui_script
 * @returns {undefined}
 */
function onChange(control, oldValue, newValue, isLoading)  {
   
    // This is important to prevent loop-like behavior
    if (isLoading || newValue == '') {
        return;
    }
   
    var ga = new GlideAjax('QuickDateCheck');    
    ga.addParam('sysparm_name','isPastDateTime');    
    ga.addParam('sysparm_test_date', newValue);    
    ga.getXMLAnswer(checkAllowed);
   
    // Based on our script include, inform the user
    /**
     * Description
     * 
     * @param {any} answer
     * @returns {undefined}
     */
    function checkAllowed(answer){        
       /* if (answer !== 'true') {            
            g_form.addErrorMessage('Discovery date can\'t be in the future');
            g_form.clearValue('last_discovered');            
        }*/    
    }    

}
