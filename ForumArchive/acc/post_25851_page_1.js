[{"Owner":"Pryme8","Date":"2016-10-19T17:20:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo I love what happens to the performance when you run the scene optimizer_co_  But I have some questions... what is it actually doing?  Can I manually control some of these features?  Why would some of my meshes disappear?  Mainly Im wondering whats happening to my ground meshes they seem to be getting dropped out._lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\tAny hints?  When at street level_co_ walking around in the buildings after the scene optimizer I can get it to hold a constant 20 fps which on my system is pretty bossy (my dog peed on the motherboard to my development rig so I have been stuck on a old beat up i7 that I put together from spare parts years ago_co_ which sucks but at the same time is cool because if this can run it any modern system would be able to)_lt_br /_gt__lt_br /_gt_\n\tIf I can figure out whats causing the meshes to drop then I will definitely be using the optimize function.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_9905_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_10/wow2.jpg.799e71f9c7c9cd2f1e3d0d9dc4b8d69c.jpg_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_wow2.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_9905_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_10/wow2.thumb.jpg.3de4280fee35a010c0b2d5156b7e072b.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-19T17:43:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDid you see this?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/How_to_use_SceneOptimizer_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/How_to_use_SceneOptimizer_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-10-19T17:49:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tnope that did not come up when i googled thank you\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-19T17:51:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tdoc.babylonjs.com has a integrated search engine _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-10-19T17:53:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYeah I only came up with Octrees and Instances when I looked up scene optimization_co_ I must have overlooked this.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-10-19T17:59:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo I am looking at the doc you posted and Im kinda confused by what its telling me to do...\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code class_eq__qt_lang-javascript_qt__gt_BABYLON.SceneOptimizer.OptimizeAsync(scene_co_ BABYLON.SceneOptimizerOptions.ModerateDegradationAllowed()_co_\n_lt_span_gt__lt_span_gt_function_lt_/span_gt_() _lt_/span_gt_{\n   _lt_span_gt_// On success_lt_/span_gt_\n}_co_ _lt_span_gt__lt_span_gt_function_lt_/span_gt_() _lt_/span_gt_{\n   _lt_span_gt_// FPS target not reached_lt_/span_gt_\n})_co__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\twhy does that have a comma at the end what else is it expecting from me?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n\t_lt_/p_gt_\n_lt_p_gt_\n\t\t \n\t\t_lt_/p_gt_\n_lt_pre_gt_\n_lt_code_gt_var result _eq_ new BABYLON.SceneOptimizerOptions(60_co_ 2000)_sm_\n\nvar priority _eq_ 0_sm_\nresult.optimizations.push(new BABYLON.ShadowsOptimization(priority))_sm_\nresult.optimizations.push(new BABYLON.LensFlaresOptimization(priority))_sm_\n\n// Next priority\npriority++_sm_\nresult.optimizations.push(new BABYLON.PostProcessesOptimization(priority))_sm_\nresult.optimizations.push(new BABYLON.ParticlesOptimization(priority))_sm_\n\n// Next priority\npriority++_sm_\nresult.optimizations.push(new BABYLON.TextureOptimization(priority_co_ 256))_sm_\n\n// Next priority\npriority++_sm_\nresult.optimizations.push(new BABYLON.RenderTargetsOptimization(priority))_sm_\n\n// Next priority\npriority++_sm_\nresult.optimizations.push(new BABYLON.HardwareScalingOptimization(priority_co_ 4))_sm_\n\nreturn result_sm__lt_/code_gt__lt_/pre_gt_\n\t\n\n\n_lt_p_gt_\n\tI see this_co_ but how does this work with calling it because this looks like the contents of a function._lt_br /_gt__lt_br /_gt_\n\tthen at the end it talks about this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code class_eq__qt_lang-javascript_qt__gt__lt_span_gt__lt_span_gt_function_lt_/span_gt_ _lt_span_gt_mySceneOptimization_lt_/span_gt_(_lt_span_gt_priority_lt_/span_gt_) _lt_/span_gt_{\n  _lt_span_gt_if_lt_/span_gt_ (_lt_span_gt_typeof_lt_/span_gt_ priority _eq__eq__eq_ _lt_span_gt__qt_undefined_qt__lt_/span_gt_) {\n     priority _eq_ _lt_span_gt_0_lt_/span_gt__sm_\n  }\n\n  _lt_span_gt_this_lt_/span_gt_.priority _eq_ priority_sm_\n  _lt_span_gt_this_lt_/span_gt_.apply _eq_ _lt_span_gt__lt_span_gt_function_lt_/span_gt_ (_lt_span_gt_scene_lt_/span_gt_) _lt_/span_gt_{\n     _lt_span_gt_// Work on scene..._lt_/span_gt_\n  }_sm_\n}_lt_/code_gt_\n\nI mean the documentation is there_co_ but it makes little to no since_co_ do you know of a working example I can look at?\n_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-19T18:05:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFixed the comma typo _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tRegarding the rest of your question_co_ not sure to understand.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust call BABYLON.SceneOptimizer.OptimizeAsync(scene_co_ BABYLON.SceneOptimizerOptions.ModerateDegradationAllowed()) to get the moderate degradation option.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tModerate means_dd_\n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\tLevel 0_dd_ ShadowsOptimization and LensFlaresOptimization\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tLevel 1_dd_ PostProcessesOptimization and ParticlesOptimization\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tLevel 2_dd_ TextureOptimization(2_co_ 512)\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tLevel 3_dd_ RenderTargetsOptimization\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tLevel 4_dd_ HardwareScalingOptimization(4_co_ 2)\n\t_lt_/li_gt_\n_lt_/ul_gt__lt_p_gt_\n\tThe advanced usage chapter allows you to create your own degradation option.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-10-19T18:09:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOk gotcha!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-10-19T18:15:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWhat is causing the optimization to drop my ground mesh_t_s and nothing else?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-20T15:52:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tTough to say without a repro case..Maybe a bug?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-10-20T21:43:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYeah I can_t_t provide that as off now_co_. I think the work around will be the retopo of the elements and not doing the aggressive optimization.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]