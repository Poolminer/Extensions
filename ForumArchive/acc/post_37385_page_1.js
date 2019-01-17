[{"Owner":"Dos","Date":"2018-05-03T12:50:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi there_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFollowing the docs_co_ I added PEP on my project to support touch events (and polyfill Safari by the way). But I cannot manage to get the arcRotateCamera to properly react to touch events.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen trying playground demos_co_ it works as expected but on my project_co_ the inputs seem to move a bit then stop responding. Sometimes it zooms in or out_co_ sometimes it pans a little bit then stops.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAm I missing something here ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is how I init my camera _lt_span_gt__dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_this.camera _eq_ new BABYLON.ArcRotateCamera(\n  _t_camera_t__co_\n  1.2_co_\n  1.3_co_\n  180_co_\n  new BABYLON.Vector3(0_co_ 40_co_ 0)_co_\n  this.scene\n)\nthis.camera.attachControl(this.canvas_co_ true)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIs it possible I miss something obvious here ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPS_dd_ I also tried by removing any event listener just initing a scene in BJS with no success.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-03T22:05:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tdid you make sure to add an attribute to your canvas like here_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Playground/index.html#L426_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Playground/index.html#L426_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(touch-action_eq_none)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dos","Date":"2018-05-04T08:02:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI feel so dumb. This is what I was missing!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you Deltakosh!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-04T16:02:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNo worry!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]