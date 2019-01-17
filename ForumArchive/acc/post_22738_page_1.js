[{"Owner":"chicagobob123","Date":"2016-05-23T21:26:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMy workflow seems pretty basic to me. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tLoad/Cache Meshes from a 3 js files (now working with babylon files)  The meshes are complete models with UV textures already mapped. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDynamically create a new mesh by cloning the originally loaded mesh_co_  position and scale based on incoming data. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tContinue updating position information over time based on incoming information.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRemove and add meshes as needed.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn my adventure so far I first validated that I could created a SolidParticleSystem system as large as I needed. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_u_gt_Friday last week I started on phase two and am totally stuck. _lt_/u_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLoading my models from file. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe issue is  BABYLON.SceneLoader.Load(_qt_/mb/CargoContainer/_qt__co_ _qt_CargoContainer.babylon_qt__co_engine_co_ function (OnLoaded)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis does load a file but I have no idea how to access the mesh that was loaded in the OnLoaded function._lt_br /_gt_\n\tThe online documentation includes little information as to whats available in the OnLoaded function. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tImportMesh automatically loads the mesh into the scene and if you pass a null into the scene parameter the import call fails. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBABYLON.SceneLoader.ImportMesh(_qt_Cargo_container_01_qt__co_ _qt_/mb/CargoContainer/_qt__co_ _qt_CargoContainer.babylon_qt__co_ scene_co_ function (newMeshes)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI read the docs _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.4/SceneLoader_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.4/SceneLoader_lt_/a_gt_ but they were a bit sparse on this subject. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe number of replies have been stellar so I am hoping someone can point out what I am nor understanding. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2016-05-23T22:19:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21732-chicagobob123/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21732_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21732-chicagobob123/_qt_ rel_eq__qt__qt__gt_@chicagobob123_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUsing the ImportMesh method_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\ti think i made a post explaining this already but i_t_ll try again with a bit more details _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe scene parameter is the babylon scene you are loading your container into_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\texamples_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1._lt_br /_gt_\n\tvar scene _eq_ new BABYLON.Scene(engine)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t//the scene parameter should be scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2._lt_br /_gt_\n\tvar myScene _eq_ new BABYLON.Scene(engine)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t//the scene parameter should be myScene .\n_lt_/p_gt_\n\n_lt_p_gt_\n\tit cannot be null_co_ as you need a scene in order to display anything _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the following example_co_ i_t_ll be using a for..loop as i haven_t_t really worked with the SPS.\n_lt_/p_gt_\n\n_lt_p_gt_\n\taswell as a triggering a function at the end of loading the model (instead of a callback) just because i_t_m that lazy _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease see the following PG using the skull PG example_co_ everything you need is commented_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#XTSAD%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#XTSAD#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Edit_dd_ _lt_/strong_gt_In #4 below i also included very basic movement of the smallest skull from side to side.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#XTSAD%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#XTSAD#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope some of this helps_co_ if you still feel like something is confusing_co_ let us know _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-05-24T14:15:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWe are talking past each other. I understood the prior example. Maybe I didn_t_t make that clear. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe reason I have an issue with the _lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_ImportMesh_lt_span_gt_ _lt_/span_gt__lt_/span_gt_is because it loads the Mesh directly into the scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAuto loading into the scene works against my flow and works against using it as a particle. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn my current web app I created three stages.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1) load models - wait until all textures and meshes are loaded before turning on the async server creation requests\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2) start server feed_co_ create and position models add to scene\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3) Position control models\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUsing import mesh you are adding the mesh to the scene instantly. I have 20 complete models that I do not know where they go until I get the async information from server. The server position data is a continuous stream that is kind of heavy. I want the models and textures loaded before I turn the server stream on. I do not know where that model will go until I get the server information. The data I get is random real-time data. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn addition attempting to use the SolidParticleSystem I REALLY don_t_t want to add a mesh to the scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want to load the mesh_co_ add it as a shape. Apply the material.. Build the mesh apply the material. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar sps_eq_new BABYLON.SolidParticleSystem(_qt_sps_qt__co_scene)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tsps.addShape(container_co_ nb)_sm_  Its not just added to the scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I used ImportMesh I guess I could delete it from the scene before its displayed. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo in short I am trying to load a mesh get the mesh_co_ get the material loaded to the mesh_lt_em_gt_ and not have it auto loaded into the scene. _lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am going to put together a quick demo. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-05-24T14:54:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tmmh... maybe just _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\timport and reference the imported mesh _dd_ var mymesh _eq_ tthisImportedStuff in the scene\n_lt_/p_gt_\n\n_lt_p_gt_\n\tadd it to the SPS as a model _dd_ sps.addShape(mymesh_co_ nb)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthen delete it _dd_ mymesh.dispose()\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthen play with the sps _dd_ sps.buildMesh() and next fun things\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-05-24T16:52:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#XTSAD%2330_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#XTSAD#3_lt_/a_gt_4\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you comment out the this part \n_lt_/p_gt_\n\n_lt_p_gt_\n\t        var box _eq_ BABYLON.MeshBuilder.CreateBox(_qt_b_qt__co_ {}_co_ scene)_sm_        _lt_br /_gt_\n\t        sps.addShape(box_co_ nb)_sm__lt_br /_gt_\n\t        sps1.addShape(box_co_ nb)_sm__lt_br /_gt_\n\t        sps2.addShape(box_co_ nb)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand un-comment and try to use the mesh it blows up.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    //   var box _eq_ BABYLON.MeshBuilder.CreateBox(_qt_b_qt__co_ {}_co_ scene)_sm_        _lt_br /_gt_\n\t     //   sps.addShape(box_co_ nb)_sm__lt_br /_gt_\n\t     //   sps1.addShape(box_co_ nb)_sm__lt_br /_gt_\n\t     //   sps2.addShape(box_co_ nb)_sm__lt_br /_gt_\n\t        _lt_br /_gt_\n\t        sps.addShape(cargoCont01_co_ nb)_sm__lt_br /_gt_\n\t        sps1.addShape(cargoCont01_co_ nb)_sm__lt_br /_gt_\n\t        sps2.addShape(cargoCont01_co_ nb)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the function     function loaded() \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt just blows up.  Any ideas?_lt_br /_gt_\n\t                \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-05-24T16:56:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSeems to be related to the number of instances which means my first idea wont work. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-05-24T18:06:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tnope_co_ I guess it_t_s related to the number of vertices _dd_ the skull model is_co_ in my memory_co_ still 20K vertices or so and you_t_re attempting to create 8000 skulls !\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#XTSAD%2341_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#XTSAD#41_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif I set the number to 1_co_ this works\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI suppose that your containers will be something like 25-30 vertices each_co_ so the SPS should be able to manage them like it can for the current boxes. Just remember that the SPS number of vertices will be its model number of vertices times the number of wanted particles.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]