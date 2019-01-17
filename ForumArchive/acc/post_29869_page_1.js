[{"Owner":"Hersir","Date":"2017-04-19T13:04:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi found error using 3.0 version on android and incremental loading\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_babylon.js_dd_9119 Uncaught TypeError_dd_ this._gl.vertexAttribDivisor is not a function\n    at Engine._bindVertexBuffersAttributes (babylon.js_dd_9119)\n    at Engine.recordVertexArrayObject (babylon.js_dd_9133)\n    at Geometry._bind (babylon.js_dd_42336)\n    at Mesh._renderWithInstances (babylon.js_dd_24450)\n    at Mesh._processRendering (babylon.js_dd_24459)\n    at Mesh.render (babylon.js_dd_24547)\n    at SubMesh.render (babylon.js_dd_26311)\n    at Function.RenderingGroup.renderSorted (babylon.js_dd_19730)\n    at RenderingGroup.renderTransparentSorted (babylon.js_dd_19709)\n    at RenderingGroup.render (babylon.js_dd_19685)\n    at RenderingManager.render (babylon.js_dd_19472)\n    at Scene._renderForCamera (babylon.js_dd_22125)\n    at Scene._processSubCameras (babylon.js_dd_22181)\n    at Scene.render (babylon.js_dd_22336)\n    at Engine._renderLoop (babylon.js_dd_8695)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tGalaxy Tab 3 \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAndroid version 4.4.2\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWorks fine with babylonjs 2.5.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWill try to investigate more\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hersir","Date":"2017-04-19T13:18:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFound source of error.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_const copy _eq_ mesh.createInstance(`copy_${current}`)_sm_\n            copy.parent _eq_ mesh.parent_sm_\n            copy.setAbsolutePosition(mesh.getAbsolutePosition())_sm_\n            copy.rotation _eq_ mesh.rotation.clone()_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI copied loaded mesh 30x times. Looks like using incremental loading crush something in _lt_span style_eq__qt_color_dd_#16a085_sm__qt__gt_createInstance_lt_/span_gt_. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCould be related to_dd_\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/29739-incremental-loading-and-mesh-clone/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tShould I wait before creating instances? Right now I do it on SceneLoader callback.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-04-19T15:01:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYep as you are using incremental download you have to wait for mesh.isReady() before creating the instance\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hersir","Date":"2017-04-20T06:48:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ Thanks for feedback. I should just check it inside_lt_span style_eq__qt_color_dd_#16a085_sm__qt__gt_ registerBeforeRender _lt_/span_gt_?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-04-20T17:58:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tcorrect\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]