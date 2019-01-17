[{"Owner":"jerome","Date":"2017-11-10T13:21:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi ladies and Gentlemen_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere comes a new feature in the _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/how_to_use_facetdata_qt_ rel_eq__qt_external nofollow_qt__gt_FacetData_lt_/a_gt_ pack.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs you may know_co_ for performance reasons_co_ the facets of a given mesh are always drawn in the same order. This comes to visual issues when the mesh is transparent and is no longer oriented in the right place from the camera _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#FWKUY0_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#FWKUY0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis new feature solves the self transparency issue by sorting the mesh facets from some location (the camera position by default) just before drawing them.  _lt_br /_gt_\n\tThe mesh is required to be _lt_em_gt_updatable_lt_/em_gt_.  _lt_br /_gt_\n\tThe depth sort is done on each call to _lt_em_gt_updateFacetData()_lt_/em_gt_. It can be disabled at any time to save CPU cycles if the mesh and the camera don_t_t move any more.  _lt_br /_gt_\n\tUsage _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_    // the mesh must be updatable\n    var mesh _eq_ BABYLON.MeshBuilder.CreateTorusKnot(_qt_mesh_qt__co_ {updatable_dd_ true}_co_ scene)_sm_\n    mesh.material _eq_ mat_sm_                         // transparent material\n    mesh.mustDepthSortFacets _eq_ true_sm_             // enable the depth sort_co_ can be disabled at any time\n    \n    scene.registerBeforeRender(function() {\n        mesh.updateFacetData()_sm_     // sort the facets each frame\n    })_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tNote that this feature uses more memory and more CPU than an usual standard mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease wait for the code review and the PR to be merged and to be pushed in the PG.  Demo _dd_ _lt_a href_eq__qt_http_dd_//jerome.bousquie.fr/BJS/test/facetDepthSort.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jerome.bousquie.fr/BJS/test/facetDepthSort.html_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-10T16:45:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHe did it!!!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-11-10T17:29:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI will add the doc in the FacetData section and also in this doc _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/resources/transparency_and_how_meshes_are_rendered#concave-meshes-and-transparency_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/resources/transparency_and_how_meshes_are_rendered#concave-meshes-and-transparency_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs I can see_co_ the CPU depth sort seems a bit better (but probably slower) than the GPU DepthPrePass because the transparent mesh keeps  then visible through itself_co_ what is not got with DepthPrePass (try to see the torus through itself).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDepthPrePass _dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1PLV5Z%2319_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1PLV5Z#19_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-10T17:34:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWhich makes sense as the pre-pass only relies on depth buffer\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-11-12T09:32:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPG _dd_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#FWKUY0%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#FWKUY0#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tdepth sorted on the left_co_ standard on the right\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-13T16:27:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThis one must go to the doc page _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-11-13T18:56:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tit will be.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-11-14T14:40:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tDocumented.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-11-15T08:17:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOf course_co_ the facet depth sort still works on live updatable meshes _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#NL03HG_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#NL03HG_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe tube path follows the curve used for Moebius ribbons _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]