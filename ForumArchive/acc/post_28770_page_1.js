[{"Owner":"BangTao","Date":"2017-03-01T02:55:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\taha_co_hello to all the smarter and warm-hearted helper! let_t_s get to the point/\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m study the Tutorials about _qt_How to use Facet data_qt__co_and there is a description about mesh partitioning_co_and the Official PG is \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#UZGNA_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#UZGNA_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand here is mine_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1YTZAC%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1YTZAC#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tso_co_if i call _qt_updateFacetData()_qt_ method_co_then there will be 10*10*10(default) blocks here_co__co_right?\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti wanna know：\n_lt_/p_gt_\n\n_lt_ol_gt__lt_li_gt_\n\t\tif there is a way/method to check if a specific block contains/intersect some facet(the whole facet or part of it). \n\t_lt_/li_gt_\n_lt_/ol_gt__lt_p_gt_\n\tthanks for u time.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-01T04:03:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyep\n_lt_/p_gt_\n\n_lt_p_gt_\n\tsay x is the index of the block on the mesh X local axis_co_ y is the index of the block on the mesh Y local axis_co_ and z the index on the Z local axis.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo if you want to know what is inside the (x-th_co_ y-th_co_ z-th) block when it_t_s partitioned by 10x10x10_co_ just compute \n_lt_/p_gt_\n\n_lt_p_gt_\n\ti _eq_ x + 10 * y + 10 * 10 * z\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand call mesh.getFacetLocalPartioning() what returns an array of arrays of facet indexes _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.abstractMesh.ts#L1821_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.abstractMesh.ts#L1821_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var i _eq_ x + 10 * y + 10 * 10 * z_sm_\nvar blocks _eq_ mesh.getFacetLocalPartioning()_sm_\n\nblocks[i] // contains all the facets intersecting the block indexes_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BangTao","Date":"2017-03-01T05:59:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\to_co_thx_co_so if it_t_s 10*10*10_co_there should be 1000 blocks.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_console.log(blocks.length) _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1YTZAC%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1YTZAC#6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe result is &gt_sm_1000_co_why is that?\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_console.log(blocks)\n\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tthe result is_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_11842_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/58b6624e0e45c_DJX3S6K6T(@XB81EVF.png.bd18bfc18b5b8d85208ac9efb88ece4c.png_qt_ alt_eq__qt_58b6624e0e45c_DJX3S6K6T(@XB81EVF.png.bd18bfc18b5b8d85208ac9efb88ece4c.png_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tdoes this means _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tblock[23] contain_lt_strong_gt_(include intersect_lt_/strong_gt_) the 349th、350th、351th、396th、397th、398th facet\n_lt_/p_gt_\n\n_lt_p_gt_\n\tblock[24] only contain(_lt_strong_gt_include intersect_lt_/strong_gt_) the 349th facet?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-01T08:05:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNope_co_ this is a flat array_co_ for performance access reasons_co_ with a max size of 10 + 10 * 10 + 10 * 10 * 10\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut not all the elements are populated_co_ only the one containing / intersecting a facet. This is why the actual size can be lower than this maximum.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tExample _dd_ block[6] _eq_ [12_co_ 23] means the facet 12 and 23 intersects the 6-th block on the X axis\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyes_co_ for your second question _dd_ the facets 349_co_ 350_co_ 351_co_ etc_co_ up to 398 have a least one vertex or their own center (barycenter) in the block[23]\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BangTao","Date":"2017-03-01T10:51:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\toh_co_haha _co_got it.Thank u_lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BangTao","Date":"2017-03-02T03:18:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\thi_co_jerome_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twhen i use sphere to test _qt_getFacetLocalPartitioning()_qt_ function.it works perfectly.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_mesh _eq_ BABYLON.Mesh.CreateSphere(_qt_sphere_qt__co_ 32.0_co_ 10.0_co_ scene)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tso if i change the mesh to a cube_co_i think it should be a cube made up with many little cubes.right?\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_mesh _eq_ BABYLON.Mesh.CreateBox(_qt_box_qt__co_ 10.0_co_ scene)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tbut it seems that they didn_t_t work well_co_the PG is _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#TQPS2_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#TQPS2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tso\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif block !_eq_ undifined \n_lt_/p_gt_\n\n_lt_p_gt_\n\tas you said _dd_the block will have a least one vertex or their own center (barycenter) ...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcan i check if a block contain part of the facet(Neither vertex nor center ，just part of it)?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-02T08:08:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIn order to work well_co_ the facets must be in general far smaller than the blocks (if the facets are as big as the blocks_co_ the results may be weird) and it_t_s mostly intended to manage meshes with many tiny facets (several dozens_co_ hundreds_co_ thousands_co_ etc) rather than meshes with few big facets. The box is_co_ by definition_co_ a mesh with few big facets_co_ so the block partitioning is probably not the best tool here.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou could try by reducing the block number for the box to 4 or 3 though.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere_t_s no provided method to check if just a part of a facet is in a given block _dd_ only the 3 vertices and the facet center are tested so far (this means 4 tests per facet_co_ what can lead to high computation when dealing with 10K facets ex _dd_ the skull)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]