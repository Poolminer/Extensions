[{"Owner":"Bladetrick","Date":"2018-06-04T12:14:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI noticed that when I am working with a pre-existing model in some 3D creating environment_co_ like 3DS Max_co_ there are a lot of objects have what appear to be layers or children (not sure what the terminology is here). In the environment you_t_re able to turn on and off the visibility of these layers. Like in the picture attached.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_18532_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_06/ShowOrHideMeshes.png.e7bff87ad7a71b20f24016087f490fa0.png_qt_ alt_eq__qt_ShowOrHideMeshes.png.e7bff87ad7a71b20f24016087f490fa0.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want to emulate what is in the picture but using Babylon Js. So that a user can load up a model and decide which layers are visible. Is there an example that already exists that does this?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAppreciate the help.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bladetrick","Date":"2018-06-04T12:19:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf there isn_t_t a technical term for it already_co_ I_t_d like to propose... Mesh Babies!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2018-06-04T14:19:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/30823-bladetrick/?do_eq_hovercard_qt_ data-mentionid_eq__qt_30823_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/30823-bladetrick/_qt_ rel_eq__qt__qt__gt_@Bladetrick_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBest option for your is babylon js tags\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/resources/tags_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/resources/tags_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm_font-size_dd_medium_sm__qt__gt__qt_Tags in babylon.js can be used to categorize/group elements_co_ and helper functions are provided to retrieve/gather tagged elements._qt__lt_/strong_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"babbleon","Date":"2018-06-04T15:11:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/30823-bladetrick/?do_eq_hovercard_qt_ data-mentionid_eq__qt_30823_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/30823-bladetrick/_qt_ rel_eq__qt__qt__gt_@Bladetrick_lt_/a_gt__co_ may I ask - what is the UX you_t_re using there with the tree?_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bladetrick","Date":"2018-06-04T15:27:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBabbleon_co_ its 3ds MAX 2017_co_ i think.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI exported it to an OBJ file.  I noticed that each object in the mesh is labelled inside the OBJ file.  Each label corresponds to an item on that tree.  So I know its possible to get the info.  I just need to know how to get reference to the child objects so i can list them on the UI and turn their visibility on and off at will.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe tag idea looks cool_co_ but I think there_t_s probably a way to do it built into babylon js already.  Just need to find it.  Maybe through the Assets Manager?  That_t_s what I used to load the OBJ file on suggestion from another post.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"babbleon","Date":"2018-06-04T15:31:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/30823-bladetrick/?do_eq_hovercard_qt_ data-mentionid_eq__qt_30823_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/30823-bladetrick/_qt_ rel_eq__qt__qt__gt_@Bladetrick_lt_/a_gt__co_ thank you. I thought it was a web based thing!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bladetrick","Date":"2018-06-04T15:44:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thehe i want it to be.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I found that using the Assets Manager like so_dd__lt_br /_gt_\n\t       \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ task.loadedMeshes[0].name_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tgives me the label in the file.  I just need to find out how to get the other mesh that are in it now.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor instance_co_ if the main mesh is Whale_01_co_ my list might look like_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhale_01_lt_br /_gt_\n\t     DorsalFin_01_lt_br /_gt_\n\t     Flipper_01_lt_br /_gt_\n\t     Flipper_02_lt_br /_gt_\n\t     Mouth_01\n_lt_/p_gt_\n\n_lt_p_gt_\n\tetc.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen_co_ as a user_co_ I can turn off visibility of the two flippers.  Or the mouth_co_ if i wanted to.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"babbleon","Date":"2018-06-04T15:46:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDoes this help you?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#0E2PG3%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#0E2PG3#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheck the console.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bladetrick","Date":"2018-06-04T15:53:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThat_t_s exactly it hehe.  I just got the same thing using the AssetsManager as posted above.  I didn_t_t realize how many meshes were loaded... until I looked.  haha_co_ whoops.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for the help talking it out!  this is perfect\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"babbleon","Date":"2018-06-04T15:57:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNo problem_co_ pleased I could help.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s always worth searching the playgrounds when you_t_re stuck on something_dd_ _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/playground/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/playground/_lt_/a_gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-06-05T03:23:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey BT... there is a system active in BJS.. called _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/layermasks_and_multi-cam_textures_qt_ rel_eq__qt_external nofollow_qt__gt_layerMasks_lt_/a_gt_  (and there_t_s mesh.renderingGroupId_co_ too_co_ but we_t_ll save that for another day).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTeam BJS recently completed a testing playground... where various scene mesh are _qt_masked-off_qt_... depending upon which button is pressed.  The buttons change the camera.layerMask.  Each mesh in the scene... uses a different layerMask.  Eight custom layers are used in the test scene.  I think there are 255 possible user-settable masks.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#11NJQT%2312_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#11NJQT#12_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn some modelers_co_ there is a feature to add a _qt_custom property_qt_ to any mesh.  Try to learn to add a custom ._lt_strong_gt_metadata _lt_/strong_gt_property to all the mesh... in your modeling software scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe _lt_strong_gt_.metadata_lt_/strong_gt_ property is _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/api/classes/babylon.abstractmesh#metadata_qt_ rel_eq__qt_external nofollow_qt__gt_an empty property which you can use_lt_/a_gt_ to send data... thru Max or Blender exporter_co_ and have it automatically import onto all your BJS mesh.metadata properties.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s look at line 13 in that playground.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_box.layerMask _eq_ 0x00000001_sm__lt_/strong_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou COULD make a box in 3dsMax... and set its .metadata property to _qt_0x00000001_qt_.  (a string)  (You do this in the modeler scene.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTHEN... when the box arrives into BJS scene via export-&gt_sm_import_co_ you could do...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_for (mesh in scene.meshes) {_lt_br /_gt_\n\t     if (scene.meshes[mesh].metadata) {_lt_br /_gt_\n\t          scene.meshes[mesh].layerMask _eq_ Number(scene.meshes[mesh].metadata)_sm_  _lt_/strong_gt_// or similar_lt_br /_gt_\n\t_lt_strong_gt_     }_lt_br /_gt_\n\t}_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSee how we have told the mesh to belong-to a certain specific layer... while inside the modeler?  Then we used the .metadata custom property to haul that _qt_layer ID_qt_ into BJS scene_co_ and then we can use it with buttons_co_ like the above playground demo does.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor example_co_ in a VR world... all trees could be 0x11110000.  All buildings... 0x11000000.  Roads... 0x00001000_co_ etc_co_ etc.  The buttons... set the camera.layerMask... so that only certain group(s) can be seen with the camera.  View-by-layer.  Cool!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLights can also have the .layerMask property.  Custom lighting for each layer_co_ if desired!  YUM!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNotes_dd_  I think ._lt_em_gt_metadata_lt_/em_gt_ is the _lt_u_gt_ONLY_lt_/u_gt_ custom modeler-property... included in Max and Blender exports.  Make sure you use the property name _qt_metadata_qt_ with no deviation.  I believe .metadata can be used to export serialized JSON objects [JSON.parse(it) after arrival into BJS scene]_co_ so if you need to haul LOTS of data out-of the modeler and into BJS scene... can do!  The .metadata truck has strong springs and a large cargo area.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t know if I am on-subject... but... this seems like something you might find useful.  I thought I had better tell you about it. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ Be well_co_ party on.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bladetrick","Date":"2018-06-05T21:41:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThat_t_s awesome!  I_t_d already accomplished what I needed just iterating through meshes and assigning their names to be the ids of checkboxes.  Then using the checkbox to denote visibility on the meshes_co_ I get what I need_sm_ however_co_ this looks like a better route because I found that some of my inherited models have duplicate names.  The modeler was being lazy_co_ I guess.  I_t_ll just have my data minions go through and assign the metadata as you describe above and get that sorted.  Thanks_co_ Wing.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]