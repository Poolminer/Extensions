[{"Owner":"ozRocker","Date":"2015-07-16T16:10:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I know of onPickTrigger and the other pick triggers that detect when mouse / touch is down.  I_t_m treating objects like URL links so I_t_d like them to work like web links_co_ which get activated on touch up.   So my plan is to detect if the user has touched down_co_ not moved much_co_ then released.  Basically comparing distance between touch down and touch up.  If they moved a lot I_t_d like to consider it a swipe or accidental touch_co_ otherwise proceed to the link.  Is this possible to do?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-07-16T16:19:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_There is ActionManager.OnPickUpTrigger that exists if you need it._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2015-07-17T07:58:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_That_t_s perfect!  I checked all the doco and didn_t_t see any mention of that trigger._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2015-07-17T09:01:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Here_t_s some code if someone wants to do the same thing as me which is basically treat objects like links.  Basically it will call an action only if the user has mouse down followed by mouse up on the same object.  This will help to prevent accidental clicking on objects._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I added a method to the Scene class here_dd__lt_/p_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_BABYLON.Scene.prototype.addTarget _eq_ function(meshName_co_ actionFunc) {    var mesh _eq_ this.getMeshByName(meshName)_sm_    mesh.actionManager _eq_ new BABYLON.ActionManager(this)_sm_    mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger_co_ function(evt) {        //Action for touch down        window.targetTouched _eq_ meshName_sm_    }))_sm_    mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger_co_ function(evt) {        //Action for touch up        if (window.targetTouched _eq__eq_ meshName) {            actionFunc()_sm_        }    }))_sm_}_lt_/pre_gt__lt_p_gt_and then you can use it like this_dd__lt_/p_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_        newScene.addTarget(_qt_FB_qt__co_function() {            document.location _eq_ _qt_http_dd_//facebook.com/punkoffice3d_qt__sm_        })_sm_        newScene.addTarget(_qt_YouTube_qt__co_function() {            document.location _eq_ _qt_http_dd_//youtube.com/PunkOffice1/videos_qt__sm_        })_sm_        newScene.addTarget(_qt_Sketchfab_qt__co_function() {            document.location _eq_ _qt_http_dd_//sketchfab.com/punkoffice/models_qt__sm_        })_sm__lt_/pre_gt__lt_/div_gt__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]