[{"Owner":"darcome","Date":"2014-11-05T08:23:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello everyone!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I know there is a function .setPosition but I want to know this..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Let_t_s make my camera is at Vector3(0_co_ 0_co_ 100). The user move the camera wherever he wants. With a button I want the camera go back to Vector3(0_co_ 0_co_ 100)_co_ but not in a frame_co_ but smoothly... how can i do it?_lt_/p_gt__lt_p_gt_Or_co_ even better_co_ how can I move the camera to a specific point calculating the fastest route and assigning a velocity?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For me the problem is that the route is not a line_co_ but a curve and I don_t_t know how to calculate it. Or maybe in BabylonJS there are other ways to accomplish it!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I hope I_t_ve been clear _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks in advance for any help you_t_ll provide!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2014-11-05T10:01:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey_co_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You have to create Animations to do it smoothly_co_ linked to your camera parameters. For a FreeCamera_co_ it_t_s position and rotation_co_ and for a ArcRotateCamera it_t_s radius and target._lt_/p_gt__lt_p_gt_Here what you can do with a freeCamera _dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_animateCamera _dd_ function(cam_co_ pos_co_ rot) {        var position _eq_ new BABYLON.Animation(_qt_camPos_qt__co_            _qt_position_qt__co_ 60_co_            BABYLON.Animation.ANIMATIONTYPE_VECTOR3_co_            BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)_sm_        var rotation _eq_ new BABYLON.Animation(_qt_camRot_qt__co_            _qt_rotation_qt__co_ 60_co_            BABYLON.Animation.ANIMATIONTYPE_VECTOR3_co_            BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)_sm_        var keys _eq_ [            {frame_dd_0_co_ value_dd_cam.position}_co_            {frame_dd_100_co_ value_dd_pos}        ]_sm_        var keys2 _eq_ [            {frame_dd_0_co_ value_dd_cam.rotation}_co_            {frame_dd_100_co_ value_dd_rot}        ]_sm_        position.setKeys(keys)_sm_        rotation.setKeys(keys2)_sm_        cam.animations.push(position)_sm_        cam.animations.push(rotation)_sm_        this.scene.beginAnimation(cam_co_ 0_co_ 100_co_ false_co_ 1)_sm_    }_lt_/pre_gt__lt_p_gt_And for an arc rotate camera _dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt__moveCamera _dd_ function(dir_co_ callback) {        var startPos _eq_ this.scene.activeCamera.target.z_sm_        var startRadius _eq_ this.scene.activeCamera.radius_sm_        var endPos_co_ endRadius_sm_        switch (dir) {            case _qt_left_qt__dd_                endPos _eq_ 0_sm_                endRadius _eq_ this.startRadius_sm_                break_sm_            case _qt_right_qt__dd_                endPos _eq_ 100_sm_                endRadius _eq_ this.endRadius_sm_                break_sm_        }        var translate _eq_ new BABYLON.Animation(            _qt_camTranslate_qt__co_            _qt_target.z_qt__co_            60_co_            BABYLON.Animation.ANIMATIONTYPE_FLOAT_co_            BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)_sm_        var radius _eq_ new BABYLON.Animation(            _qt_camAlpha_qt__co_            _qt_radius_qt__co_            60_co_            BABYLON.Animation.ANIMATIONTYPE_FLOAT_co_            BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)_sm_        var keys _eq_ [{frame_dd_0_co_ value_dd_startPos}_co_ {frame_dd_100_co_ value_dd_endPos}]_sm_        var keys2 _eq_ [{frame_dd_0_co_ value_dd_startRadius}_co_ {frame_dd_100_co_ value_dd_endRadius}]_sm_        translate.setKeys(keys)_sm_        radius.setKeys(keys2)_sm_        this.scene.activeCamera.animations.push(translate)_sm_        this.scene.activeCamera.animations.push(radius)_sm_        this.scene.beginAnimation(this.scene.activeCamera_co_ 0_co_ 100_co_ false_co_ 5.0_co_ callback)_sm_    }_lt_/pre_gt__lt_p_gt_Good luck !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Cheers_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"darcome","Date":"2014-11-05T14:10:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I tried with the following code_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_function ResetCamera (){\tvar alphaAnim \t_eq_ new BABYLON.Animation (_qt_alphaAnim_qt__co_ _qt_alpha_qt__co_ 60_co_ BABYLON.Animation.ANIMATIONTYPE_FLOAT_co_ BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)_sm_\tvar betaAnim \t_eq_ new BABYLON.Animation (_qt_betaAnim_qt__co_ _qt_beta_qt__co_ 60_co_ BABYLON.Animation.ANIMATIONTYPE_FLOAT_co_ BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)_sm_\t\t\tvar alphaKeys \t_eq_ [{frame_dd_ 0_co_ value_dd_ scene.activeCamera.alpha}_co_ {frame_dd_ 100_co_ value_dd_ 0}]_sm_\tvar betaKeys \t_eq_ [{frame_dd_ 0_co_ value_dd_ scene.activeCamera.beta}_co_  {frame_dd_ 100_co_ value_dd_ 0}]_sm_\t\t\t\talphaAnim.setKeys \t(alphaKeys)_sm_\tbetaAnim.setKeys \t(betaKeys)_sm_\t\t\t\tscene.activeCamera.animations.push (alphaAnim)_sm_\tscene.activeCamera.animations.push (betaKeys)_sm_\tscene.beginAnimation (scene.activeCamera_co_ 0_co_ 100_co_ false)_sm_}_lt_/pre_gt__lt_p_gt_But the camera is not moving and in the Firefox console_co_ I read the following error_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_TypeError_dd_ e.animate is not a function babylon.js_dd_11_lt_/pre_gt__lt_p_gt_What can it be?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"darcome","Date":"2014-11-05T14:41:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sorry_co_ I saw now that I made a mistake..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It works!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Not as I expected_co_ but it works! I have to work on the parameters _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-11-05T15:10:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOh man_co_ ya beat me to it.  Good job!  I made a playground of it... if you or others want to play.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#14EFVR_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#14EFVR_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbetaKeys_co_ betaAnim ... *shrug*  Why can_t_t these darned computers figure out what we _lt_u_gt_meant_lt_/u_gt_ to type_co_ eh?  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBe well_co_ darcome!  Good eyes.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"FireFist","Date":"2017-05-08T10:19:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFound a cool way to animate the position using TweenJS _lt_a href_eq__qt_http_dd_//www.createjs.com/tweenjs_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.createjs.com/tweenjs_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_div style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_createjs_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_Tween_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcaa_sm__qt__gt_get_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_camera_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_)._lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcaa_sm__qt__gt_to_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_({ _lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_alpha_dd__lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#4ec9b0_sm__qt__gt_Math_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_.PI_co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_radius_dd_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#b5cea8_sm__qt__gt_20 _lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_}_co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#b5cea8_sm__qt__gt_1000_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]