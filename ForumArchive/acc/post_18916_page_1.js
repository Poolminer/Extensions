[{"Owner":"BitwiseCreative","Date":"2015-11-27T22:20:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Just started with Babylon.js this morning (I downloaded the files today). I want to use the normalMaterial from the materialsLibrary but I can_t_t seem to get it to work._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here_t_s my code_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-html_qt__gt_&lt_sm_!doctype html&gt_sm_&lt_sm_html&gt_sm_&lt_sm_head&gt_sm_&lt_sm_meta charset_eq__qt_utf-8_qt_&gt_sm_&lt_sm_title&gt_sm_Babylon Learning&lt_sm_/title&gt_sm_&lt_sm_style&gt_sm_  html_co_ body {     overflow_dd_ hidden_sm_     width_dd_ 100%_sm_     height_dd_ 100%_sm_     margin_dd_ 0_sm_     padding_dd_ 0_sm_  }  #renderCanvas {     width_dd_ 100%_sm_     height_dd_ 100%_sm_     touch-action_dd_ none_sm_  }&lt_sm_/style&gt_sm_&lt_sm_script src_eq__qt_../lib/hand/bin/hand.js_qt_&gt_sm_&lt_sm_/script&gt_sm_&lt_sm_script src_eq__qt_../lib/oimo/build/oimo.js_qt_&gt_sm_&lt_sm_/script&gt_sm_&lt_sm_script src_eq__qt_../lib/babylon/dist/babylon.2.2.max.js_qt_&gt_sm_&lt_sm_/script&gt_sm_&lt_sm_script src_eq__qt_../lib/babylon/materialsLibrary/dist/babylon.normalMaterial.js_qt_&gt_sm_&lt_sm_/script&gt_sm_&lt_sm_/head&gt_sm_&lt_sm_body&gt_sm_&lt_sm_canvas id_eq__qt_renderCanvas_qt_&gt_sm_&lt_sm_/canvas&gt_sm_&lt_sm_script type_eq__qt_text/javascript_qt_&gt_sm_var canvas _eq_ document.querySelector(_qt_#renderCanvas_qt_)_sm_var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_var scene_co_ camera_sm_var lights _eq_ {}_sm_var materials _eq_ {}_sm_var ground_co_ sphere_sm_var createScene _eq_ function () {    // Scene    scene _eq_ new BABYLON.Scene(engine)_sm_    scene.clearColor _eq_ new BABYLON.Color3(.1_co_ .1_co_ .1)_sm_    // Camera    camera _eq_ new BABYLON.FreeCamera(_qt_camera1_qt__co_ new BABYLON.Vector3(0_co_ 5_co_ -10)_co_ scene)_sm_    camera.setTarget(BABYLON.Vector3.Zero())_sm_    camera.attachControl(canvas_co_ false)_sm_    // Lights    lights.hemi _eq_ new BABYLON.HemisphericLight(_qt_hemi_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ scene)_sm_    lights.hemi.intensity _eq_ .5_sm_    // Materials    materials.normal _eq_ new BABYLON.NormalMaterial(_qt_normal_qt__co_ scene)_sm_    // Init Objects    sphere _eq_ BABYLON.Mesh.CreateSphere(_qt_sphere1_qt__co_ 16_co_ 2_co_ scene)_sm_    sphere.material _eq_ materials.normal_sm_    sphere.position.y _eq_ 1_sm_    ground _eq_ BABYLON.Mesh.CreateGround(_qt_ground1_qt__co_ 6_co_ 6_co_ 2_co_ scene)_sm_    ground.material _eq_ materials.normal_sm_    //    return scene_sm_}_sm_var scene _eq_ createScene()_sm_engine.runRenderLoop(function () {    scene.render()_sm_})_sm_window.addEventListener(_qt_resize_qt__co_ function () {    engine.resize()_sm_})_sm_&lt_sm_/script&gt_sm_&lt_sm_/body&gt_sm_&lt_sm_/html&gt_sm__lt_/pre_gt__lt_p_gt_And the console error_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_Uncaught TypeError_dd_ Cannot read property _t_prototype_t_ of undefined__extends @ babylon.2.2.max.js_dd_4(anonymous function) @ babylon.normalMaterial.js_dd_7BABYLON @ babylon.normalMaterial.js_dd_60(anonymous function) @ babylon.normalMaterial.js_dd_455_lt_/pre_gt__lt_p_gt_Thanks in advance _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-11-27T22:50:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_I do not know of  BABYLON.NormalMaterial(_qt_normal_qt__co_ scene)_co_ But BABYLON.StandardMaterial(_qt_name_qt__co_ scene)_sm__lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_This works. But maybe I did not understand what you are trying to do._lt_/div_gt__lt_br_gt__lt_div_gt__lt_br_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt__lt_br_gt_\nvar material _eq_ new BABYLON.StandardMaterial(_qt_texture1_qt__co_ scene)_sm__lt_br_gt_\nmaterial.diffuseColor _eq_ new BABYLON.Color3(1.0_co_ 0.2_co_ 0.7)_sm__lt_br_gt_\nmaterial.diffuseTexture _eq_ new BABYLON.Texture(_qt_texture.png_qt__co_ scene)_sm__lt_br_gt_\nmaterial.bumpTexture _eq_ new BABYLON.Texture(_qt_normalMap.jpg_qt__co_ scene)_sm__lt_br_gt_\nsphere.material _eq_ material_sm__lt_br_gt__lt_/pre_gt__lt_br_gt__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitwiseCreative","Date":"2015-11-28T00:43:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_107256_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_18916_qt_ data-ipsquote-username_eq__qt_Dad72_qt_ data-cite_eq__qt_Dad72_qt_ data-ipsquote-timestamp_eq__qt_1448664630_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt_I do not know of  BABYLON.NormalMaterial(_qt_normal_qt__co_ scene)_co_ But BABYLON.StandardMaterial(_qt_name_qt__co_ scene)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_This works. But maybe I did not understand what you are trying to do._lt_/div_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var material _eq_ new BABYLON.StandardMaterial(_qt_texture1_qt__co_ scene)_sm_material.diffuseColor _eq_ new BABYLON.Color3(1.0_co_ 0.2_co_ 0.7)_sm_material.diffuseTexture _eq_ new BABYLON.Texture(_qt_texture.png_qt__co_ scene)_sm_material.bumpTexture _eq_ new BABYLON.Texture(_qt_normalMap.jpg_qt__co_ scene)_sm_sphere.material _eq_ material_sm__lt_/pre_gt__lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m trying to load the Normal extension material (located in materialLibrary_co_ e.g._co_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/extensions/Normal_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/extensions/Normal_lt_/a_gt_). There seems to be an error with the plugin/extension management? The related code is confusing to me_co_ and it doesn_t_t seem to work out of the box_co_ so instead of figuring it out and hacking it to work_co_ I_t_m posting my issue here to get more eyes on my issue so someone can tell me what I_t_m doing wrong_co_ and/or to inform the development team in case something got overlooked with the materialLibrary inclusion. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-11-28T01:22:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_doc_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/extensions/Normal_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/extensions/Normal_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_oh_co_ and by the way this is a babylon.js 2.3 feature _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitwiseCreative","Date":"2015-11-28T01:30:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_107273_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_18916_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1448673726_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_doc_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/extensions/Normal_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/extensions/Normal_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_oh_co_ and by the way this is a babylon.js 2.3 feature _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Not sure why you linked me to the doc page considering I posted a link to it in my previous post_co_ and am using the proper code in my original post code example (aren_t_t I?). Am I doing something wrong?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also_co_ are you saying that the NormalMaterial extension that was included in the 2.2 release won_t_t work with 2.2? Sorry_co_ just a bit confused about your response..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-11-28T01:42:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Nope NormalMaterial (as all materials from material library) was introduced with bjs 2.3._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(besides the reference  to 2.2 your code seems perfectly correct)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitwiseCreative","Date":"2015-11-28T03:56:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_107275_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_18916_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1448674949_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Nope NormalMaterial (as all materials from material library) was introduced with bjs 2.3._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(besides the reference  to 2.2 your code seems perfectly correct)_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Gotcha. Thank you for the info and for the time_co_ I appreciate it. Is 2.3 available now? If so_co_ I can_t_t seem to find it._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-11-28T07:38:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can find it here_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/dist/preview%20release_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/dist/preview%20release_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(babylon.js or babylon.max.js)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitwiseCreative","Date":"2015-11-28T16:45:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_107299_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_18916_qt_ data-ipsquote-username_eq__qt_Temechon_qt_ data-cite_eq__qt_Temechon_qt_ data-ipsquote-timestamp_eq__qt_1448696336_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_You can find it here_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/dist/preview%20release_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/dist/preview%20release_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(babylon.js or babylon.max.js)_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Ahh_co_ thank you! NormalMaterial is working now _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_[sOLVED]_lt_/p_gt__lt_p_gt_Thanks everyone for your help. For others_dd_ The solution was simply that the materialLibrary extensions weren_t_t compatible with 2.2_co_ but 2.3 was available in the dist/preview release folder._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]