[{"Owner":"spritefire","Date":"2016-02-22T21:07:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHey guys_co__lt_br_gt__lt_br_gt_\n\tJust a heads up that some of my older content stopped working with the newer release (I reverted the links back from the standard Babylon link to CDN version specific links to fix the issue). _lt_br_gt_\n\tNot sure what changes are coming in the next version_co_ and I am happy to share the code when I get home so you can have a look and see if you can find whats causing the issue._lt_br_gt__lt_br_gt_\n\tActually I have I_t_ll just post now _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_        var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_\n        var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_\n\n        var createScene _eq_ function () {\n\n            var scene _eq_ new BABYLON.Scene(engine)_sm_\n\n            var light _eq_ new BABYLON.PointLight(_qt_Omni_qt__co_ new BABYLON.Vector3(25_co_ -15_co_ 25)_co_ scene)_sm_\n            var light1 _eq_ new BABYLON.PointLight(_qt_Omni1_qt__co_ new BABYLON.Vector3(-25_co_ 25_co_ 5)_co_ scene)_sm_\n            var light2 _eq_ new BABYLON.PointLight(_qt_Omni2_qt__co_ new BABYLON.Vector3(0_co_ 55_co_ 10)_co_ scene)_sm_\n\n            var camera _eq_ new BABYLON.ArcRotateCamera(_qt_Camera_qt__co_ Math.PI/2*3_co_ 0_co_ 100_co_ new BABYLON.Vector3(0_co_ 0_co_ 0)_co_ scene)_sm_\n\n            BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_babylon/_qt__co_ _qt_desiren.babylon_qt__co_ scene_co_ function (newMeshes) {\n\n                    camera.target _eq_ newMeshes[0]_sm_\n\n                    scene.clearColor _eq_ new BABYLON.Color4(0_co_0_co_0_co_0)_sm_\n                    scene.getMeshByName(_qt_test_qt_).materialmesh_sm_\n\n                    scene.textMat _eq_ new BABYLON.StandardMaterial(_qt_boxed_qt__co_ scene)_sm_\n                    scene.textMat.diffuseColor _eq_ new BABYLON.Color3(0.1_co_ 0.1_co_ 0.1)_sm_\n                    scene.textMat.specularColor _eq_ new BABYLON.Color3(0.4_co_ 0.4_co_ 0.4)_sm_\n\n                    scene.getMeshByName(_qt_test_qt_).material _eq_ scene.textMat_sm_\n\n                    scene.getMeshByName(_qt_test_qt_).position _eq_ new BABYLON.Vector3(0_co_ 10_co_ 0)_sm_\n                    scene.getMeshByName(_qt_test_qt_).rotationQuaternion _eq_ null_sm_\n\n                    scene.registerBeforeRender(function () {\n\n                    })_sm_\n\n            })_sm_\n            \n            return scene_sm_\n        }\n        \n        var scene _eq_ createScene()_sm_\n\n        engine.runRenderLoop(function () {\n            scene.render()_sm_\n        })_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_br_gt_\n\tIn the meantime I_t_d recommend looking at some older content too and seeing if the later babylon works with that. The code wasn_t_t very complex so it will probably occur for other too who aren_t_t linking to specific versions of babylon.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_02/baberr.png.8f2bf714266d1e0e989407149543dc36.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_6513_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_02/baberr.png.8f2bf714266d1e0e989407149543dc36.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_baberr.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2016-02-22T21:15:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tInvestigation are in progress...  It_t_s a bug in the matrix! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2016-02-22T21:27:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI summoned the great bug butcher _lt_span_gt_Deltakosh... And it_t_s telling me _dd_ _lt_span style_eq__qt_color_dd_#B22222_sm__qt__gt__lt_em_gt_b_lt_/em_gt__lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#B22222_sm__qt__gt__lt_em_gt_ug found and fix in progress..._lt_/em_gt__lt_/span_gt_ Should be up in few minutes _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"spritefire","Date":"2016-02-22T22:24:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAwesome! looks like it has been fixed _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_br_gt__lt_br_gt_\n\tI had noticed as well that the camera angle had changed a bit with the newer version ie the model was appearing half off the canvas with the new version and would be centered in canvas with older versions_co_ but that also has been fixed now _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-02-23T09:23:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_117733_qt_ data-ipsquote-contentid_eq__qt_20709_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1456175753_qt_ data-ipsquote-userid_eq__qt_5218_qt_ data-ipsquote-username_eq__qt_Temechon_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t12 hours ago_co_ Temechon said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tInvestigation are in progress...  It_t_s a bug in the matrix! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tDid you mean the matrix class_co_ or the real matrix? like a Déjà-vu?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2016-02-23T09:40:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe real matrix of course_co_ there is no bug in the Matrix class (or in Babylon.js _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ )\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]