[{"Owner":"smatt","Date":"2016-09-05T18:49:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was reading _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/10470-proper-way-to-generate-a-meshgeometry-from-scratch/?do_eq_findComment&amp_sm_comment_eq_61533_qt_ rel_eq__qt__qt__gt_this post_lt_/a_gt_ from _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ and I_t_m surprised how easy it is to generate a mesh._lt_br /_gt_\n\tI_t_ve enabled the colors in this playground_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1UHFAP%2360_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1UHFAP#60_lt_/a_gt_ _lt_br /_gt__lt_br /_gt_\n\tThis colors are per vertex and there is a color gradient across the face._lt_br /_gt_\n\tIs it possible to set the face colors instead the per-vertex colors? Or is there a work around to achieve the same goal?_lt_br /_gt__lt_br /_gt_\n\tThank you very much for your time_co_ Simon _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-09-06T01:36:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22935-smatt/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22935_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22935-smatt/_qt_ rel_eq__qt__qt__gt_@smatt_lt_/a_gt_.  Thanks for reading my talkie posts and test-driving my plotting playground.  Unfortunately_co_ I wasn_t_t able to study plotting enough... to answer your current question. _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_  Hopefully_co_ smarter people than I... will reply soon.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust for fun_co_ take a look at a wireframe version... _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1UHFAP%2362_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1UHFAP#62_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s be careful with terminology_co_ here.  In BabylonJS plotting_co_ a _lt_em_gt_face_lt_/em_gt_ is always a triangle.  It takes two triangles... to make a square-like _lt_em_gt_side._lt_/em_gt_  But not all _lt_em_gt_sides_lt_/em_gt_ are square-like (quadrilateral/quadrangle/tetragon - all are terms for 4-sided square-like things).  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tHow many faces use vertex #1?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you count 6_co_ you have it correct.  Two faces from the top quad_co_ two faces from the front quad_co_ and two faces from the right side.  BJS has no colorPerFace options by default_co_ so there will need to be 6 colors and 6 normals... put at position #1... to have full power to solid-colorize all 6 of those faces.... in any color.  Wow_co_ huh?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt gets worse.  Only one normal and one color... are allowed per ANY single vertex.  This means... at vertex #1 position... we would need to add 5 MORE vertices.... for a total of 6 vertices... all at point #1.  That gives 6 user-settable lighting normals and 6 user-settable vertex colors... at point #1.  All these added vertices (positions)... are positioned identically_co_ so it would still _lt_em_gt_look_lt_/em_gt_ like one vertex. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is a function involved with all this...  blankmesh.convertToFlatShadedMesh()... which I haven_t_t tried with this demo.  That function... has the abilities to add extra vertices_co_ but I_t_m not sure how to use it here_co_ or if it is useful in this situation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPoint #0 has 4 triangular faces coming together.  It needs 3 extra vertices at its position.  This is getting complicated_co_ isn_t_t it?  I hear ya.  _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_ is one of the _qt_pro plotters_qt_ around here_co_ so I will ping him and maybe he will have ideas.  Others are certainly welcome to help_co_ too.  Me?  I get a brain tumor just thinking about it.  Sorry. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBy the way... if our shape were a box_co_ this would all be much easier.  _lt_span_gt_Jerome has already written some handy box faceColors tools that work great.  But weird-shaped mesh like this one... might be more challenging._lt_/span_gt_  Try to be patient... perhaps some experts will comment soon. Be well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPS_dd_ Is that you... doing _qt_light-on-a-cord_qt_ stuff... in your picture?  Is there a proper term for that activity?  I think it_t_s cool.  Can you drop me a link or two... so I can learn about that?  Thx!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"smatt","Date":"2016-09-06T05:54:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthank you for you answer! Oh... it_t_s a side? Okay _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt_\n\tThe color gradient between these vertices across the sides looks nice... just not in my case. I_t_m trying to generate a simple ground _lt_a href_eq__qt_https_dd_//mir-s3-cdn-cf.behance.net/project_modules/max_1200/4cf15921337573.562ff7d0cb408.png_qt_ rel_eq__qt_external nofollow_qt__gt_like this image I found on Google Images_lt_/a_gt_. And every side should have it_t_s own color. With these gradient is looks kind of blurred or out of focus (like games in the early 2000s)._lt_br /_gt__lt_br /_gt_\n\tIt shouldn_t_t be a problem to write this _lt_strong_gt_every-side-has-it_t_s-own-vertices-generator_lt_/strong_gt_. When I_t_m back from Berlin I_t_m going to do this _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt__lt_br /_gt__lt_strong_gt_Yeah_co_ I_t_ve seen these _lt_em_gt_options.faceColors_lt_/em_gt_ in the _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/1be2abfb505d84e70cd009484e2440cc5c8a1ed6/src/Mesh/babylon.meshBuilder.ts#L14_qt_ rel_eq__qt_external nofollow_qt__gt_MeshBuilder_lt_/a_gt_! That_t_s incredible!_lt_img alt_eq__qt_B)_qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_cool.png_qt_ title_eq__qt_B)_qt_ /_gt__lt_/strong_gt__lt_br /_gt_\n\tMaybe someday I can understand what_t_s going on _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/1be2abfb505d84e70cd009484e2440cc5c8a1ed6/src/Mesh/babylon.mesh.vertexData.ts#L660_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_ and use it in my generator. _lt_img alt_eq__qt__dd_unsure_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_unsure.png_qt_ title_eq__qt__dd_unsure_dd__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAny advice is valuable and useful in this topic..._lt_br /_gt_\n\tPlease share your ideas_co_ helpful doc pages or playground samples _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt__lt_br /_gt_\n\tThanks_co_ Simon_lt_br /_gt__lt_br /_gt_\n\t--- Off-Topic _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ ---_lt_br /_gt_\n\tMy picture is just a simple example of _qt__lt_a href_eq__qt_https_dd_//en.wikipedia.org/wiki/Light_painting_qt_ rel_eq__qt_external nofollow_qt__gt_Light painting_lt_/a_gt__qt_ taken with a DSLR_co_ aperture as small as possible_co_ a long exposure time (~5-10s) and a flashlight moving in circles. Maybe _lt_a href_eq__qt_http_dd_//www.diyphotography.net/painting_with_light/_qt_ rel_eq__qt_external nofollow_qt__gt_this_lt_/a_gt_ can help you get started. In my case I didn_t_t use a flash at the camera position. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-09-06T07:43:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thi\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWingnutt is right _co_ the rule is _dd_ one vertex holds one normal and one color (color4).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo if you want a facet (a triangle) to have a same color_co_ just give the same color4 to the 3 vertices composing the facet. If two successive close facets must have different colors_co_ then you need to duplicate the vertices (instead of sharing them) because of the former rule.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote the the _lt_em_gt_faceColor_lt_/em_gt_ option only exists for now on some mesh types _dd_ box_co_ cylinder and polyhedron\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-09-06T07:45:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCool_co_ thanks guys.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22935-smatt/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22935_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22935-smatt/_qt_ rel_eq__qt__qt__gt_@smatt_lt_/a_gt__co_ by the look of your provided picture_co_ it appears to be a lower-rez flat-shaded texture-less heightMap.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1PVNHC%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1PVNHC#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLight _lt_em_gt_.specular_lt_/em_gt_ and material _lt_em_gt_.specularColor_lt_/em_gt_ is rather important.  Add more lights_co_ try stuff_co_ have fun.  Edit_co_ run_co_ make more saves_co_ you can_t_t hurt anything in the playground.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s not a material-per-face_co_ but it ain_t_t bad. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Positions (and sometimes directions) of lights_co_ and each having a different _lt_em_gt_.intensity_lt_/em_gt_... can be pertinent and useful_co_ too. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ you can manually _qt_plot_qt_ the heights of vertices on a heightMap ground.  But it is _lt_strong_gt_lots_lt_/strong_gt_ of work.  Most people think it is easier to draw their own gray-scale 2D image_co_ and use that image as the heightMap creator.  It might be wise to read about power-of-two image sizing... on the web.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSee _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.4/Mesh#static-creategroundfromheightmap-name-url-width-height-subdivisions-minheight-maxheight-scene-updatable-onready-rarr-groundmesh-classes-2-4-groundmesh-_qt_ rel_eq__qt_external nofollow_qt__gt_CreateGroundFromHeightMap_lt_/a_gt_ for more info.  Hope this helps.  One last _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#16UICJ%232_qt_ rel_eq__qt_external nofollow_qt__gt_bit of fun_lt_/a_gt_.  (Don_t_t use that phosphenes material as a godrays emitter or your monitor will get a tumor.  heh)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2016-09-06T08:52:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22935-smatt/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22935_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22935-smatt/_qt_ rel_eq__qt__qt__gt_@smatt_lt_/a_gt_ IMHO @Wingnut is correct_co_ each of the meshes in the picture has one colour and the different tones are automatically created by the lights used in the scene. The joy of BJS is that you can create a mesh_co_ apply a material set a light and the facet colours are done for you. @Wingnut has already suggested how the ground could be created. There are two ways of creating the clouds that I can think of._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_1. Carry on as you were by generating the mesh from vertex positions._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_2. Adapt Temechon_t_s way of creating foliage from _lt_/span_gt__lt_a href_eq__qt_http_dd_//www.pixelcodr.com/tutos/trees/trees.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.pixelcodr.com/tutos/trees/trees.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNOTE a breaking update in the code of 2\n_lt_/p_gt_\n\n_lt_table_gt__lt_tbody_gt__lt_tr_gt__lt_td_gt_\n\t\t\t\t_lt_span_gt_var vertexData _eq_ BABYLON.VertexData.CreateSphere(2_co_sizeBranch)_sm_ which worked in BABYLONJS2.2 or earlier needs to be changed to_lt_/span_gt_\n\t\t\t_lt_/td_gt_\n\t\t_lt_/tr_gt__lt_/tbody_gt__lt_/table_gt__lt_p_gt_\n\t_lt_span_gt_var_lt_/span_gt_ vertexData _lt_span_gt__eq__lt_/span_gt_ _lt_span_gt_BABYLON_lt_/span_gt_._lt_span_gt_VertexData_lt_/span_gt_._lt_span_gt_CreateSphere_lt_/span_gt_({segments_lt_span_gt__dd__lt_/span_gt__lt_span_gt_2_lt_/span_gt__co_ diameter_lt_span_gt__dd__lt_/span_gt_sizeBranch})_sm_ _lt_span_gt_ for BABYLONJS2.3 or later_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_div_gt_\n\t_lt_div_gt_\n\t\t_lt_div_gt_\n\t\t\t \n\t\t_lt_/div_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"smatt","Date":"2016-09-08T21:05:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks guys _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt__lt_br /_gt_\n\tI have now working code which provides me an acceptable result using the following code_dd__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_// light\nlet lightHemi01 _eq_ new BABYLON.HemisphericLight(_qt_hemi01_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ -1)_co_ scene)_sm_\nlightHemi01.intensity _eq_ 0.15_sm_\nlet lightDir01 _eq_ new BABYLON.DirectionalLight(_qt_dir01_qt__co_ new BABYLON.Vector3(1_co_ -1_co_ -2)_co_ scene)_sm_\nlightDir01.position _eq_ new BABYLON.Vector3(-300_co_ 300_co_ 600)_sm_\n\n// material\nlet groundMaterial _eq_ new BABYLON.StandardMaterial(_qt_groundMat_qt__co_ scene)_sm_\ngroundMaterial.diffuseColor _eq_ new BABYLON.Color3(0.431_co_ 0.922_co_ 0.514)_sm_\ngroundMaterial.specularColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm_\ngroundMesh.material _eq_ groundMaterial_sm_\ngroundMesh.convertToFlatShadedMesh()_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThis is really helpful_dd_ _lt_a href_eq__qt_http_dd_//www.pixelcodr.com/tutos/trees/trees.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.pixelcodr.com/tutos/trees/trees.html_lt_/a_gt__lt_br /_gt_\n\tMaybe I can achieve the dynamic color generation later_co_ it_t_s good right now _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-09-09T01:32:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCool.  Glad you are rolling.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was thinking (oh no!).  umm...  _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1AVEYO%2336_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1AVEYO#36_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe ground in the PG demo... is 10 subdivs_co_ so I made a texture that is 1000 by 1000_co_ and changed colors every 100 pixels.  Then I applied it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is coloring per-quad_co_ not per-face.  Also_co_ maybe it only works on grounds.  It is important to match mesh subDivs... and texture subDivs_co_ or there is problems.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut_co_ it_t_s something. *shrug*  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tJust for fun_co_ let_t_s ping _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_ and see if he has a ShaderBuilder solution for color-per-face and/or color-per-quad.  He is a genius at shader materials.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut still... maybe only grounds.  I dunno.  Seems like color-per-quad or color-per-face shouldn_t_t be so difficult.  But I_t_m no pro.  The coolest thing about the above playground... it will crash Firefox v48 after about 45 mins  _lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"smatt","Date":"2016-09-09T07:29:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThat looks really great _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt__lt_br /_gt_\n\tIf I see this correctly_co_ I have to procedural generate a SVG with a lot of small triangles with different colors_co_ export it as a PNG / JPG and apply the material..._lt_br /_gt_\n\tAll in JavaScript at runtime..._lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe there is a easier solution_lt_img alt_eq__qt__dd_unsure_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_unsure.png_qt_ title_eq__qt__dd_unsure_dd__qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2016-09-09T08:57:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHave you read these topics which seem to be covering a related area?\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/25046-making-a-mountain-ribbon-skewed-box-or-custom/?do_eq_embed_qt__gt__lt_/iframe_gt__lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/24946-geometry-vertices-positions/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"smatt","Date":"2016-09-09T09:17:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_143344_qt_ data-ipsquote-contentid_eq__qt_24989_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1473411437_qt_ data-ipsquote-userid_eq__qt_14282_qt_ data-ipsquote-username_eq__qt_JohnK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t11 minutes ago_co_ JohnK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHave you read these topics which seem to be covering a related area?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tIt looks as if they are using a material per mesh which is easier than per-side color... Do you maybe have links about custom color per side? _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_br /_gt__lt_br /_gt_\n\tWhat about these _qt__lt_a href_eq__qt_https_dd_//www.eternalcoding.com/?p_eq_283_qt_ rel_eq__qt_external nofollow_qt__gt_Multi-Materials_lt_/a_gt__qt_? Are they useful in this context?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2016-09-09T11:42:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tStrangely it was trying to understand multi-materials and whether you could specify which facets would have which colour or texture that got me started thinking in this area. And it was this_co_ your topic_co_ and the geometry vertices positions topic that got me thinking about the issues that this would involve. This led me to writing this\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjsguide.github.io/advanced/Facets_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjsguide.github.io/advanced/Facets_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhich is currently how far I have got in thinking about it. Seems nearly full circle. What I think it means is that when constructing your own mesh you need to think about placing extra vertices carefully.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-09-09T14:21:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCoooool_co_ JohnK_co_ and well thunk_co_ I suspect.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22935-smatt/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22935_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22935-smatt/_qt_ rel_eq__qt__qt__gt_@smatt_lt_/a_gt__co_ on the subject of using textures_co_ it would not necessarily be SVG.  You would create/apply a Babylon.DynamicTexture... and _qt_generate_qt_ _lt_u_gt_its_lt_/u_gt_ canvas... by using _lt_a href_eq__qt_https_dd_//www.w3.org/TR/2dcontext/_qt_ rel_eq__qt_external nofollow_qt__gt_Context2D_lt_/a_gt_ fills and strokes_co_ etc.  (Is that SVG?  *shrug*  Somewhat same methods_co_ it seems.) \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy thoughts are a bit off-topic_co_ because... it_t_s texture... and not color-per-whatever. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5292_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/_qt_ rel_eq__qt__qt__gt_@Dad72_lt_/a_gt_ did some good work in that area... and _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/?do_eq_hovercard_qt_ data-mentionid_eq__qt_11286_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/_qt_ rel_eq__qt__qt__gt_@dbawel_lt_/a_gt__co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/809-joshcamas/?do_eq_hovercard_qt_ data-mentionid_eq__qt_809_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/809-joshcamas/_qt_ rel_eq__qt__qt__gt_@joshcamas_lt_/a_gt__co_ and others_co_ too.  He and others... are/were... _qt_painting_qt_ onto textures.  _t_SVG_t_ is probably a good _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/search/?&amp_sm_type_eq_forums_topic&amp_sm_nodes_eq_28_co_16_co_29_co_30_co_31_qt_ rel_eq__qt__qt__gt_forum-search_lt_/a_gt_ keyword.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2016-09-09T15:31:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCurrently_co_ I don_t_t know anyway to indentify any specific face of an imported mesh - but only on the vertex level. However_co_ If you create your mesh proceedurally_co_ then you can provide each vertex a specific color inside the same function which creates your mesh. This might provide you with a result you would be happy with_co_ but not a simple task on complex models. Otherwise_co_ I believe you_t_re looking at a custom shader_co_ which may not be that hard to build based upon vertex ordering on your mesh..\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGood luck_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"smatt","Date":"2016-09-09T16:06:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_ this guide is REALLY GOOD! It has to be available in the official doc! _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt__lt_br /_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ that was just an idea_co_ it may or may not work._lt_img alt_eq__qt__dd_unsure_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_unsure.png_qt_ title_eq__qt__dd_unsure_dd__qt_ /_gt__lt_br /_gt__lt_br /_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/?do_eq_hovercard_qt_ data-mentionid_eq__qt_11286_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/_qt_ rel_eq__qt__qt__gt_@dbawel_lt_/a_gt_ you are right with the vertex colors! You said _qt_This _lt_strong_gt_might_lt_/strong_gt_ provide..._qt_ and_dd_ Yes_co_ the colors are terrible in my case. Each vertex has it_t_s own color and on the sides is a color gradient. The only way to achieve a good looking low poly environment with vertex-specific colors is by duplicating them for each side (read more in _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt__t_s guide)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-09-09T17:35:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ti think the best way ( fast and optimized in gpu and less code )  for detect face in shader is calculate from UV \n_lt_/p_gt_\n\n_lt_p_gt_\n\tthis not general way and this need correct UV per each mesh and faces  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tand notice if we generated mesh we use fix step per each face we can detect single face and can change that material \n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut it work on just generated Mesh for other mesh it is not good\n_lt_/p_gt_\n\n_lt_p_gt_\n\tanyway i like know why this question is here what problem force you to ask this maybe problem is not here \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]