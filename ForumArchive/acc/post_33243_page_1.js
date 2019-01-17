[{"Owner":"Matriax","Date":"2017-10-04T16:18:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m using a plugin Called Babylon3D that allows use the Babylon.JS on C2. Unfortunately_co_ the plugin developer dropped the support for it and i_t_m trying to figure how add or enable some stuff. The plugin is based on Babylon v2.67 if i remember well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlready edited the Babylon.custom.js to get NearestSampling mode as default for 3D games in PixelArt to avoid the blur textures_co_etc... so if i_t_m going to do a 3DHD game use one and if is Pixel3D style then use the other Babylon.custom.js . Since i don_t_t know javascript or the C2 SDk is the only way i found to add or modify the parameters i need for my game_co_ no luck finding any C2 developer to continue with the Babylon.js plugin for C2.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tSo_co_ i saw the PostProcess effects like Deep Of field and others and tried to enable by default and attach to a camera editing the Babylon.custom.js without luck.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat i need to add/edit to have the postprocess activated by default_co_ or attached by default to the camera?.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tThis is all the lensRenderingPipeline code inside Babylon.custom.js_dd__lt_br /_gt__lt_a href_eq__qt_https_dd_//pastebin.com/cBAAkSan_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//pastebin.com/cBAAkSan_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is theBabylon.js version the C2 plugin uses_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//drive.google.com/file/d/0B8vm3FpJ3vqJOTNSaWdvVzhHdlU/view?usp_eq_sharing_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//drive.google.com/file/d/0B8vm3FpJ3vqJOTNSaWdvVzhHdlU/view?usp_eq_sharing_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tAny idea?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthanks!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tEDIT_dd_ Things i tried are were here_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_            // Finish\n            scene.postProcessRenderPipelineManager.addPipeline(_this)_sm_\n            if (cameras) {\n                scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(name_co_ cameras)_sm_\n            }\n            return _this_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAnd obviously setting numbers in the effect like\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_            _this._chromaticAberration _eq_ parameters.chromatic_aberration ? parameters.chromatic_aberration _dd_ 5_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThe max i achieved is see the chromatic aberration working but only one frame and then the render is frozen. Using this code after some FreeCamera parameters.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var lensEffect _eq_ new BABYLON.LensRenderingPipeline(_t_lens_t__co_ {chromatic_aberration_dd_ 5.0_co_ }_co_ scene_co_ 1.0_co_ camera)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2017-10-06T19_dd_19_dd_18Z_t_ title_eq__t_10/06/2017 07_dd_19  PM_t_ data-short_eq__t_1 yr_t__gt_October 6_co_ 2017_lt_/time_gt_ by Matriax_lt_/strong_gt_\n\t\n\t\t_lt_br_gt_solved\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Matriax","Date":"2017-10-04T20:59:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOther solution in case is possible is edit the Babylon.custom.js and add some space on i can write babylon code there that will be passed before the _qt_return scene_sm__qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo when all is created/defined like scene_co_ camera_co_etc... add that code. So i can add anything like the lens effect_co_ enable SSAO or whatever. Maybe this is impossible_co_ i don_t_t know_co_ just asking!.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n\t_lt_/p_gt_\n_lt_p_gt_\n\t\t \n\t_lt_/p_gt_\n\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2017-10-04T21:31:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYour code looks the same as the pg from the docs_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#DX6AV%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#DX6AV#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t know how Construct Babylon plugin is works - maybe showing errors in the browser will allow more people to provide helpful tips.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Matriax","Date":"2017-10-05T06:39:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes the Lens code is from that example. Just added _qt_camera_qt_ to the first line about that to avoid the other.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat i_t_m asking is not a Construct2 solution or how to fix the plugin because i know nobody here know about that_co_ only Babylon.js.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ my question is_co_ in the same way i edited the Babylon.js to enable NearestSampling mode by default instead trilinear to get pixel perfect textures without smooth/blur_co_ my question is if somebody have enough skills to edit the Babylon.js to make the LesnPippeline enabled to the active camera by default.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe other idea was if is possible add in some part a space to add code that will be used in runtime or something so i can leave it there the lensPippeline code_co_ the code to enable SSAO_co_etc...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_ Updated the fist post with the babylon.js that the plugin uses 4.648mb.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2017-10-06T00:21:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI think you could wire it in to the scene events automatically_co_ but I don_t_t know your use case. Events like onSceneReady and onNewCameraAddedObservable could be used programmatically_co_ but it sounds like you are looking for a custom build to do so automatically. Are you saying with this plugin that you have no access to scene object or engine?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Matriax","Date":"2017-10-06T07:33:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis are parts of code where Scene Ready is present in the exported game using the Babylon3D plugin_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_\t\t\tscene.executeWhenReady(function () {\n\t\t\t\tins.runtime.scenes[ins.properties[18]] _eq_ scene_sm_\n\t\t\t\tins.runtime.scenes[ins.properties[18]].canvas _eq_ ins.canvas_sm_\n\t\t\t\tengine.resize()_sm_\n\t\t\t\tins.scene _eq_ scene_sm_\n\t\t\t\tins.canvas.scene _eq_ scene_sm_\n\t\t\t\tsetTimeout(function () {\n\t\t\t\t\tins.runtime.trigger(cr.plugins_.babylonNewScene.prototype.cnds.IsSceneReady_co_ ins)_sm_\n\t\t\t\t}_co_ 500)_sm_ // Wait 500ms before trigerring\n\t\t\t\tif (ins.properties[4] _eq__eq_ 0) //False\n\t\t\t\t{\n\t\t\t\t\tins.runtime.canvas.style.zIndex _eq_ _qt_0_qt__sm_\n\t\t\t\t}\n\t\t\t\tengine.runRenderLoop(function () {\t\t\t\t\n\t\t\t\t\tscene.render()_sm_\n\t\t\t\t})_sm_\n\t\t\t})_sm_\n\t\t}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tOther_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_\tfunction Cnds() {}_sm_\n\tCnds.prototype.IsSceneReady _eq_ function () {\n\t\treturn this.scene.isReady()_sm_\t\n\t}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow looking the _qt_observables_qt_ you mentioned that seems is what i_t_m looking for_co_ set things before render. Hope some of this works.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Matriax","Date":"2017-10-06T10:05:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe unique site on the Custom effects works is if i put this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var lensEffect _eq_ new BABYLON.LensRenderingPipeline(_t_lens_t__co_ {chromatic_aberration_dd_ 5.0_co_ }_co_ scene_co_ 1.0_co_ camera)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tOn _qt_// Here_qt_ appears_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_\t\t\t} else if (this.properties[2] _eq__eq_ 1) // Free camera\n\t\t\t{\t\t\n\t\t\t\tvar camera _eq_ new BABYLON.FreeCamera(camname_co_ new BABYLON.Vector3(xpos_co_ ypos_co_ zpos)_co_ scene)_sm_\n// Here\n\t\t\t\tcamera.setTarget(new BABYLON.Vector3(target[0]_co_ target[1]_co_ target[2]))_sm_\n// Here\n\t\t\t\tcamera.angularSensibility _eq_ angs_sm_\n// Here\n\t\t\t\tscene.activeCamera _eq_ camera_sm_\n// Here_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI can see the chromatic aberration in the render but the camera is blocked _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_ .\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried also the observables in various sites on i saw scene_co_ camera_co_ etc... and nothing_co_ here is the code used_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_\tvar observer _eq_ scene.onBeforeRenderObservable.add(function () {\nvar lensEffect _eq_ new BABYLON.LensRenderingPipeline(_t_lens_t__co_ {chromatic_aberration_dd_ 5.0_co_ }_co_ scene_co_ 1.0_co_ camera)_sm_\n\t\tscene.onBeforeRenderObservable.remove(observer)_sm_\n    })_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny ideas?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2017-10-06T17:06:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think onBeforeRender is triggered with each frame_co_ so that does not look right.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat do you mean that you can see the aberration_co_ but the camera is blocked?  Is that where you get a runtime error?  That definitely looks like where the code belongs - on the last _qt_//Here_qt_ that you have.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Matriax","Date":"2017-10-06T17:20:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI finally found it_co_ i don_t_t know if this is a good way to do it but works_co_ can see the chromatic aberration_co_ the DeepOfField_co_etc.... and can move the camera_co_ walk_co_etc....\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe solution was this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_         var BabylonCode _eq_ scene.executeWhenReady(function () {                        \n\n        chromatic_aberration_dd_ 1.0_co_\n\n    }_co_ scene_co_ 1.0_co_ camera)_sm_\n\n    })_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried _co_onBeforeRenderObservable_co_ onNewCameraAdded_co_etc... but at the moment this is que unique one that works.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhy this works and the other no? Whats exactly the difference?_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2017-10-06T17:28:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIf you are able to isolate the issue in a PG then I_t_m sure we can see why.  I can_t_t see with the code provided the order/scope.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Matriax","Date":"2017-10-06T18:17:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think the problem is from Babylon3D plugin how he works and how pass all the info to the scene after look the runtime on appears how is rendered.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can_t_t isolate the problem or make a PG because there is no errors on my side_co_ or i mean the errors i get are from C2 not babylon thats the problem _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_ .\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTried the SSAO and also works_co_ a bit weird but maybe because the way i_t_m aplly or because my scene config or values_co_ but well_co_ now is time to test.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBtw thanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25365-brianzinn/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25365_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25365-brianzinn/_qt_ rel_eq__qt__qt__gt_@brianzinn_lt_/a_gt_ for point me in the right direction to know what/where to look! _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2017-10-06T18:21:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWell_co_ glad you got it working_co_ that_t_s what counts!  You got it on your own - it_t_s always trickier with plugins _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]