[{"Owner":"bma73","Date":"2016-02-15T21:37:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m manipulating the vertices of a ground mesh using the .updateMeshPositions() method and  now i want to get the height at a specific point (x_co_z) on the mesh with .getHeightAtCoordinates().\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUnfortunately_co_ this doesn_t_t seem to work...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is a playground example_dd__lt_br_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1JXJVF%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1JXJVF#2_lt_/a_gt__lt_br_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat am I doing wrong? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBMA\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-02-16T05:34:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe altitudes are computed_co_ for performance reasons_co_ once on the first call to getHeightAtCoordinates() because the height map_co_ designed from an image_co_ wasn_t_t supposed to be updated then\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNevertheless_co_ if you want to force the altitude recomputation at will_co_ just use the private method _computeHeightQuads() _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.groundMesh.ts#L109_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.groundMesh.ts#L109_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_heightMap._computeHeightQuads()_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThis will generate a new underlying pre-computed altitude array.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote well that_co_ for now_co_ this is not optimized to be used in the render loop because a new big array is generated each call. Your GC will shout !\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUntil I find a way to fix this_co_ you should use a ribbon instead (if you don_t_t need the heights from an image) and the same dedicated user function than in this example _dd_ \n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/19615-getaltitudeat/?do_eq_embed&amp_sm_embedComment_eq_111186&amp_sm_embedDo_eq_findComment_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-02-16T09:03:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ I guess I_t_ve got an idea to make a fix to optimize the update for Ground mesh regarding the GC\n_lt_/p_gt_\n\n_lt_p_gt_\n\tkeep posted\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-02-16T10:23:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI just PRed an optimization_co_ regarding the GC_co_ with a new public method called updateCoordinateHeights() to force the height array reomputation on demand without any memory reallocation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll show a PG example as soon as the fix is pushed in the PG engine.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t[EDIT] _dd_\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/19731-new-getheightatcoordinates-and-getnormalatcoordinates-functions/?do_eq_embed&amp_sm_embedComment_eq_116815&amp_sm_embedDo_eq_findComment_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-02-16T19:21:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tit is pushed to PG\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-02-17T13:27:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\there_t_s the commented PG _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1JXJVF%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1JXJVF#3_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bma73","Date":"2016-06-06T12:04:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthank you for the updates - that_t_s really working like a charm._lt_br /_gt_\n\tI_t_ve got another related question_dd__lt_br /_gt__lt_br /_gt_\n\tHow do I apply the normal info from  _qt_getNormalAtCoordinates(x_co_ z)_qt_ to the box_t_ rotation in this example_lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1JXJVF%239_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1JXJVF#9_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny help would be really appreciated _dd_-)_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-06-06T12:45:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tplease have a look a this example _dd_ _lt_a href_eq__qt_http_dd_//jerome.bousquie.fr/BJS/demos/getHeightAtCoordinates.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jerome.bousquie.fr/BJS/demos/getHeightAtCoordinates.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tcode here _dd_ _lt_a href_eq__qt_http_dd_//jerome.bousquie.fr/BJS/demos/getHeightAtCoordinates.js_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jerome.bousquie.fr/BJS/demos/getHeightAtCoordinates.js_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe boxes are rotated according the terrain normals _dd_ just a cross product (two actually) between the box direction (velocity) and the current terrain normal. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tground API doc _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.4/GroundMesh_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.4/GroundMesh_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]