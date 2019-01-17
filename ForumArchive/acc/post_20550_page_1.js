[{"Owner":"jeti","Date":"2016-02-16T08:14:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan anyone provide me with an example of how to use the LinesMesh class?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSimply instantiating it does not seem to do the trick_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#LBRTP%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#LBRTP#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tjeti\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2016-02-16T15:04:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi ! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou have one example here _dd_ _lt_a href_eq__qt_http_dd_//babylonjs.com/Demos/Lines/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs.com/Demos/Lines/_lt_/a_gt__lt_br_gt_\n\tCheck the source code of the page to see the corresponding babylon code.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-02-16T15:05:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Jeti... welcome to the forum!_lt_br_gt_\n\tThe _t_createLines_t_ constructor... instantiates a LinesMesh.  So_co_ the #2 built-in playground demo... shows a working LinesMesh_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/?2_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/?2_lt_/a_gt_  (code lines 35-40)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWant to see the trail?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt all starts here_dd_  _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/src_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/src_lt_/a_gt__lt_br_gt_\n\tEven though you see the babylon.linesMesh.ts and .js in that folder_co_ we won_t_t visit there yet._lt_br_gt_\n\tInstead_co_ choose  _lt_span_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.mesh.js_qt_ rel_eq__qt_external nofollow_qt_ title_eq__qt_babylon.mesh.js_qt__gt_babylon.mesh.js_lt_/a_gt__lt_/span_gt_  and scroll to _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.mesh.js#L1383_qt_ rel_eq__qt_external nofollow_qt__gt_line 1383_lt_/a_gt__lt_br_gt_\n\tSee line 1389?  Yep_co_ we_t_re off to _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.meshBuilder.js#L129_qt_ rel_eq__qt_external nofollow_qt__gt_BABYLON.MeshBuilder.CreateLines_lt_/a_gt_  We went from Mesh class_co_ to MeshBuilder class.  It adds more features to the Mesh Class_lt_br_gt_\n\tNotice line 146.  There_t_s our BABYLON.LinesMesh instance_co_ but we still have no _qt_shape_qt_.  Shapes are often formed with BABYLON.VertexData object_lt_br_gt_\n\tNotice line 147.  Essentially_co_ this says go to BABYLON.VertexData.CreateLines(options) and retrieve some vertexData based on _t_options_t__co_ then return here._lt_br_gt_\n\tSo_co_ lets go visit a VertexData object... _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.mesh.vertexData.js#L917_qt_ rel_eq__qt_external nofollow_qt__gt_BABYLON.VertexData.CreateLines_lt_/a_gt_  _lt_br_gt_\n\t    [odd thing_dd_ Notice we are in the BABYLON._lt_u_gt_Mesh_lt_/u_gt_.VertexData class_co_ even though line 147 calls BABYLON.VertexData.CreateLines.  I_t_m not sure why.]_lt_br_gt_\n\tThen VertexData.CreateLines does some serious work_co_ and returns the resulting VertexData object in line 932_lt_br_gt_\n\tNow back to _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.meshBuilder.js#L129_qt_ rel_eq__qt_external nofollow_qt__gt_BABYLON.MeshBuilder.CreateLines_lt_/a_gt_ line 148.  A VertexData object has a function called ApplyToMesh()_lt_br_gt_\n\tThat is called in line 148.  VertexData holds data that it created with its own CreateLines() method.  That data is applied to the LinesMesh we instanced in line 146._lt_br_gt_\n\tLine 149_co_ we are headed back home... to _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.mesh.js#L1389_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.mesh.js#L1389_lt_/a_gt_ and done.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGruesome trail_co_ eh?  TMI_co_ eh?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_  Hope this helps.  Again_co_ welcome... good to have you with us. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-02-16T15:07:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe docs are helpful too_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/search?q_eq_linemesh_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/search?q_eq_linemesh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/playground?q_eq_LinesMesh_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/playground?q_eq_LinesMesh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t   that first result on the playground search is a nice simple example_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t   _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1DKDYG%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1DKDYG#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-02-16T15:08:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#lines_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#lines_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou need at least to pass an array populated with successive points to draw a line\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2016-02-16T15:11:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo much help in so little time &lt_sm_3\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-02-16T15:12:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thaha.  Jeti_t_s question sits unanswered for 6 hours_co_ and then suddenly FOUR of us answer at once?  What the heck?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-02-16T15:23:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tmaybe some galactic time zone ...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jeti","Date":"2016-02-16T16:15:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_116831_qt_ data-ipsquote-contentid_eq__qt_20550_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1455635533_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t59 minutes ago_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\thaha.  Jeti_t_s question sits unanswered for 6 hours_co_ and then suddenly FOUR of us answer at once?  What the heck?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThis is my first post. It had been hidden until a moderator cleared it. I assume it_t_s to avoid link spam.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis community seems to be crazy helpful. Thank you and give me some time to work through the replies.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jeti","Date":"2016-02-16T17:38:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI saw the LinesMesh mentioned in a thread on how to create a grid. The initial solutions made use of shaders and textures. Therefore I got the idea that the LinesMesh is something different than what Mesh.createLines produces. Feels a bit stupid in retrospect.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow I have a followup question_dd_ Is there a way to draw line segments instead of a continuous line? \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/15611-reference-grid-with-babylonjs/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-02-16T19:14:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tfor now_co_ no\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou have to do as many lines as you want the number of segments\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tsoon_co_ I_t_ll implement a LineSystem to solve this\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jeti","Date":"2016-02-16T23:01:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDrawing two ladders provides a decent result using two meshes. I_t_m still trying to use a dashed line to get rid of the extra segments. It_t_s a bit fiddly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#LBRTP%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#LBRTP#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSupport for line segments would definitively be nice to have.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-02-17T01:04:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey Jeti... you can use _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Parametric_Shapes_qt_ rel_eq__qt_external nofollow_qt__gt_parametric tube shapes_lt_/a_gt_ as the segments of your grid.  _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#TDUK0%2324_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#TDUK0#24_lt_/a_gt_   As you can see_co_ they are nice and straight_co_ and they have barbs sticking out to keep woodland critters from walking on your grid at night_co_ and leaving mounds of...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOkay_co_ okay_co_ just joking around with you a little.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tKeep in mind that textures can do grids_co_ too.  _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1O9A7%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1O9A7#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith some creative use of alpha/transparency_co_ you can command your grid planes to show_co_ partially-show_co_ or hide... the surface between the lines.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDon_t_t forget what Adam mentioned... our cool Playground Search.  _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/playground?q_eq_grid_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/playground?q_eq_grid_lt_/a_gt_   Have fun!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jeti","Date":"2016-02-17T07:42:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSearching the playground sounds useful. I_t_ll keep that in mind.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor now_co_ I_t_ll stick with this solution_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#LBRTP%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#LBRTP#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt uses only one LineMesh. The drawback is that parts of the outer edges are drawn twice_co_ which becomes visible if alpha is used. It_t_s good enough for now. I don_t_t think there_t_s support for vertex colors on LineMeshes.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-02-17T15:13:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tjust PRed the new mesh type _dd_ LineSystem\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var lineArray _eq_ [line1_co_ line2_co_ ..._co_ lineN]_sm_ // each line is an array of successive Vector3\nvar ls _eq_ BABYLON.MeshBuilder.CreateLineSystem(_qt_ls_qt__co_ {lines_dd_ lineArray}_co_ scene)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThis will create a single mesh composed with all the lines declared in the array _lt_em_gt_lineArray_lt_/em_gt_. So only one draw call.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-02-17T16:18:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyet in the PG _dd_\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/20577-new-mesh-type-linesystem/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tflush your browser cache ...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-02-18T16:10:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBut but but... hmm.  Jeti_co_ I realize that there is 45 LBS of _qt_fancy_qt_ draped atop Jerome_t_s demos_co_ but_co_ I just bet... Jerome_t_s solution does not satisfy your request.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJerome_co_ can your system do...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t BABYLON.Mesh.CreateLines(_qt_lines_qt__co_ [_lt_br_gt_\n\t     [new V3(someXYZ)_co_ new V3(someXYZ)_co_ new V3(someXYZ)]_co_   // a 3 point line somewhere in space_lt_br_gt_\n\t     [new V3(someXYZ)_co_ new V3(someXYZ)]_co_   // a 2 point line somewhere in space_co_ maybe not attached to the first_lt_br_gt_\n\t     [new V3(someXYZ)_co_ new V3(someXYZ)_co_ new V3(someXYZ)_co_ new V3(someXYZ)]_co_   // a 4 point line (possibly detached) somewhere in space_lt_br_gt_\n\t     [new V3(someXYZ)]  // a dot?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_br_gt_\n\t])_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t?? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd then... how about LinesMesh.vertMarker _eq_ var of any mesh... that gets instanced/cloned and placed at each vertex of all the lines!  Wow!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ the above code template might be what Jeti seeks.  Maybe your new system can do this.  I don_t_t think so.  As best I can tell_co_ your system does programmable auto-instancing.  Still learning_co_ though.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-02-18T16:18:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2K1IS4%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2K1IS4#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-02-18T16:23:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tUhn_co_ thanks Adam!  I stand erected.  errr... corrected.  Cooooool.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease allow me to _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2K1IS4%234_qt_ rel_eq__qt_external nofollow_qt__gt_ruin it_t_s simplicity_lt_/a_gt_ for us_co_ yet again.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-02-18T21:41:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_  So now_co_ let_t_s see_co_ we need each line to have its own color.  Later_co_ we_t_ll try for each _lt_u_gt_segment_lt_/u_gt_ of line to be a different color.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThen_co_ what?  A line weaving contest?  Cloth-making... with lines?  Yeah!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSpeaking of balls_co_ they have a street in Las Vegas (Fremont Street) that has a domed roof for about 4 blocks_co_ with a few (million) RGB light bulbs attached.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.emol.org/nevada/lasvegas/images/freemontstreet.jpg_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.emol.org/nevada/lasvegas/images/freemontstreet.jpg_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSomething made me think about it_co_ recently.  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt__gt_  But I suppose the lines would be unnecessary for that.  Just balls-to-the-walls to simulate that thing (and an image buffer-to-balls function).  Dementedly delicious_co_ and retro!  Why use pixels when we have spheres_co_ eh?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOh yeah_co_ this is a thread about lines_co_ not spheres.  I forgot.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-02-18T22:00:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThen_co_ what?  A line weaving contest?  Cloth-making... with lines?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tDon_t_t stop at _lt_em_gt_cloth making_lt_/em_gt_ Wingy  - virtual quilting!!_lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-02-19T08:09:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt__gt_@Wingnut_lt_/a_gt_ about the LineSystem _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1 ) yes_co_ each line can be absolutely independant from the others_co_ so you can design a ladder_co_ a grid_co_ a ruler_co_ hairs ...whatever you want what is composed with lines actually. It just will build a single mesh instead of one mesh per line as with the current _lt_em_gt_CreateLines()_lt_/em_gt_ method.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2 ) for now_co_ the LineSystem color is limited to a single one for the whole system. I intend to provide per-line_co_ per-segment_co_ per-point colors also. This needs to recode the shader used by the LineMesh class... so I first need to lean how to do this. Temechon will teach me this _sm_-)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBTW_co_ I just PRed a fix so the _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/UserFunctions_qt_ rel_eq__qt_external nofollow_qt__gt_UserFunction_lt_/a_gt_ _showNormals()_ now uses a LineSystem instead of hundreds or thousands individual line meshes _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/UserFunctions/blob/master/showNormals.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/UserFunctions/blob/master/showNormals.js_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tdocumented also_co_ very soon here _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-02-19T09:30:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\texample of hair (not goog though) _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1KBCTW%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1KBCTW#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2000 hair waving at 60 fps\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-02-19T13:02:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAhh_co_ I have seen this before.  It is Scott_t_s _qt_Smart Grass_qt_... a special hybrid breed of lawn grass.  You can_t_t mow it.  It has learned to flex its stem to avoid lawn mower blades.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-02-19T13:19:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt__gt__lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]