[{"Owner":"masterdon","Date":"2017-06-05T08:39:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Team_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have hosted one of the playground code.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is the link to hosted URL(i have also left the debugger so that any one can play around)_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//52.52.130.247/2D-planner/2dengineworldspace.html_qt_ rel_eq__qt_external nofollow_qt__gt_2D-engine-worldspace_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever i am getting following errors there_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Error 1_dd__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\td._cacheNode.getInnerPosToRef is not a function_lt_br /_gt_\n\t    at WorldSpaceCanvas2D.Group2D._bindCacheTarget (babylon.js_dd_94301)_lt_br /_gt_\n\t    at WorldSpaceCanvas2D.Group2D.applyCachedTexture (babylon.js_dd_93634)_lt_br /_gt_\n\t    at new WorldSpaceCanvas2D (babylon.js_dd_100564)_lt_br /_gt_\n\t    at createScene (2denginescrrenspace.html_dd_58)_lt_br /_gt_\n\t    at 2denginescrrenspace.html_dd_73\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfor below code_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_canvas_eq_ new BABYLON.WorldSpaceCanvas2D(scene_co_ new BABYLON.Size(200_co_ 200)_co_ {\n                id_dd_ _qt_WorldSpaceCanvas_qt__co_\n                renderScaleFactor _dd_ 4\n                //worldPosition_dd_ new BABYLON.Vector3(0_co_ 0_co_ 200)_co_\n                //worldRotation_dd_ BABYLON.Quaternion.RotationYawPitchRoll(0_co_ 0_co_ 0)_co_\n                //enableInteraction_dd_ true\n            })_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_ Error 2_dd__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUncaught Error_dd_ Parent renderCanvas of mainRect_58_54.1 doesn_t_t have a valid owner!_lt_br /_gt_\n\t    at Rectangle2D.Prim2DBase [as constructor] (babylon.js_dd_89031)_lt_br /_gt_\n\t    at Rectangle2D.RenderablePrim2D [as constructor] (babylon.js_dd_92644)_lt_br /_gt_\n\t    at Rectangle2D.Shape2D [as constructor] (babylon.js_dd_93235)_lt_br /_gt_\n\t    at new Rectangle2D (babylon.js_dd_95191)_lt_br /_gt_\n\t    at createBox (2denginescrrenspace.html_dd_38)_lt_br /_gt_\n\t    at flytrapdatascreenspace.js_dd_464\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tfor code_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var box _eq_ new BABYLON.Rectangle2D({\n                id_dd_ _qt_mainRect__qt_+posX+_qt___qt_+posY_co_ parent_dd_ canvas_co_ x_dd_ posX_co_ y_dd_ posZ_co_ width_dd_ sWidth_co_ height_dd_ sDepth_co_ \n                fill_dd_ _qt_#404080FF_qt__co_ border_dd_ _qt_#FFFFFFFF_qt__co_ borderThickness_dd_ 0.2_co_\n                children_dd_ \n                [\n            \n                ]})_sm_\n            return box_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have downloaded babylon js from version builder. What am i missing here?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-06-05T12:28:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI think Canvas2D has to be loaded separately_co_ along with babylon.js. Did a quick search but could only find a typescript version. Perhaps you might want to ask about loading the source for canvas2d.js. As the error is specifically about Canvas2D not working in hosted project mentioning it in the title would be worth doing.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]