[{"Owner":"ulisse","Date":"2016-10-20T07:13:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDear all_co__lt_br /_gt_\n\tI am new to this forum and to this topic so I apologize in advance for any wrong terminology._lt_br /_gt_\n\tI am writing an html5+js application displaying a 3d image that have been acquired as a serie of 2d slices_co_ each at a different depth_co_ from a microscope._lt_br /_gt_\n\tOver that _qt_z-stack_qt_ I would like to add also some meshes/rendered surfaces (computer created geometries)._lt_br /_gt_\n\tDo you think that this is possible using Babylon.js?_lt_br /_gt_\n\tThe idea is to show something like this image where the red part is the z-stack and the green part are rendered meshes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_4495972_gallery.png_qt_ class_eq__qt_ipsImage_qt_ src_eq__qt_http_dd_//www.imaging-git.com/sites/imaging-git.com/files/images/special/4495972_gallery.png_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tMany thanks and best regards_co__lt_br /_gt_\n\tUlisse.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-20T15:46:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello and welcome\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEverything is possible with bjs _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBut the most complex part will not be bjs related_dd_ how to generate surfaces from your 2d slices\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ulisse","Date":"2016-10-20T19:02:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHello Deltakosh and thankyou for your reply._lt_br /_gt_\n\tActually_co_ I have already an algorithm to generate surfaces (as a set of triangles) from 2d slices by applying segmentation and object reconstruction._lt_br /_gt_\n\tThe most difficult part to me seems to visualize the stack of 2d slices for which I Cannot find an example_co__lt_br /_gt_\n\tCan you suggest me something to look at for this purpose?_lt_br /_gt__lt_br /_gt_\n\tThere is a number of commercial software such as Imaris_co_ Volocity or Metamorph (all very expensive) and Open Source alternatives like FIJI_co_ ICY and ImageJ_co_ all of them based on VTK and OpenGL and distributed in classical desktop applications._lt_br /_gt_\n\tI am using some of them (both commercial and open source) but I would like to provide this functionality in a html5 application and for this reason I am looking for a way to visualize my raw data with overimposed surfaces using babylon.js.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-10-21T16:04:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Ulisse_co_ welcome to the forum.  I_t_m no expert_co_ but I want to tell you that BJS basic shapes... are generated-by and/or stored-upon a _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.4/VertexData_qt_ rel_eq__qt_external nofollow_qt__gt_VertexData_lt_/a_gt_ object.  There are many methods on a _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.4/Mesh_qt_ rel_eq__qt_external nofollow_qt__gt_BABYLON.Mesh_lt_/a_gt_ class... to work-with (get/set)... a mesh_t_s associated VertexData object (its data arrays).  Often_co_ programmers start with a blank mesh_co_ then _qt_stock_qt_ a vertexData object with data_co_ and then apply the vertexData to the blank mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is a playground scene that does some basic mesh plotting (with little helper boxes turned-on).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1UHFAP%2367_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1UHFAP#67_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can see the blank mesh created in line 5_co_ and a vertexData object being applied to that blank mesh... in line 101.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFeel free to edit_co_ run_co_ save_co_ get zip_co_ anything you like... in the Babylon Playground.  You cannot hurt anything... have fun.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-------------------------\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnother thing to look-at... might be _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Parametric_Shapes#extrusion_qt_ rel_eq__qt_external nofollow_qt__gt_Extrusion_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan you answer this?  Will the amount of vertex points around the outer edge of each slice... remain the same... for all cross-section slices (of a single object)?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn other words_co_ can/will the surface resolution (sampling detail?) change... slice-to-slice?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs far as I know_co_ if the amount of vertices remains the same.... slice-after-slice_co_ then the project will be a bit easier.  Extrusion is an option_co_ perhaps. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAgain_co_ I_t_m no expert.  Just thinking about things.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ulisse","Date":"2016-10-24T14:21:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_148312_qt_ data-ipsquote-contentid_eq__qt_25897_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1477065893_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 10/21/2016 at 6_dd_04 PM_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tMany thanks for your reply!_lt_br /_gt_\n\tThe example in the playground is perfect!! I have the position of each vertex and the connections between them (triangles).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor the second part_co_ I think that the surface resolution can be the same for all the objects in the volume but they are with a strange shape so in different slices (or planes) I have a different amount of vertices._lt_br /_gt_\n\tI am working with two photon microscopy data which are nothing than a set of parallel images acquired at a different depth._lt_br /_gt_\n\tImagine to have an apple sliced in many different planes_co_ each plane will have a different shape.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBest regards_co__lt_br /_gt_\n\tDiego Ulisse Pizzagalli.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-10-25T03:42:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMy pleasure.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan I ask some questions?  I hope so.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen these images are _qt_gathered_qt__co_ is the distance between each _qt_sample_qt_ (image)... adjustable?  Let_t_s use the apple example again.  Let_t_s pretend the slices travel along the Z-axis (depth).  Can you set the z-resolution when making the slices?  (How many images per inch of z-travel into the apple).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis value... this z-axis granularity or resolution... would determine the _qt_thickness_qt_ of each slice... once in 3D land_co_ yes?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf not-calibrated_co_ our 3D representation of the apple... might appear to be 16 inches thick.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tOk_co_ this takes me to another question.  Do the images support transparency/alpha (transparent background)? \n_lt_/p_gt_\n\n_lt_p_gt_\n\t(I_t_m really really not experienced with textures AT ALL_co_ sorry).  I have not used BJS extrusion much/any_co_ either.  But... I have done a little playing with heightMaps and displaceMaps... which are high-subdiv planes that get their elevations... from gray-scale images.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1CCIP1%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1CCIP1#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat is a simple displacement map_co_ with some code _qt_borrowed_qt_ from BJS framework... and moved into the playground editor... to be hacked-on.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI guess displacing is somewhat similar to extruding.  How to clip-off the _qt_slag_qt__co_ though_co_ huh?  How do we make the displaceMap/heightMap... no longer be _qt_square_qt_... but instead have vertices mapped along the edges of the non-displaced part of the sample?  hmm.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.youtube.com/watch?v_eq_jYbrQ-0djt0_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.youtube.com/watch?v_eq_jYbrQ-0djt0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe Red Green Show... look at the section from 0_dd_25 - 0_dd_40 (the show_t_s opening animation).  See those _qt_cutouts_qt_?  I love them!  Those _qt_cutouts_qt_ _lt_em_gt__lt_u_gt_could_lt_/u_gt__lt_/em_gt_ be done with image textures mapped-onto BJS planes (with alpha/transparent backgrounds)... but... they are _lt_a href_eq__qt_http_dd_//storage.torontosun.com/v1/dynamic_resize/sws_path/suns-prod-images/1297880731920_ORIGINAL.jpg?quality_eq_80&amp_sm_size_eq_650x_qt_ rel_eq__qt_external nofollow_qt__gt_cooler IF they have SOME thickness_lt_/a_gt_.  That thickness... is the same value as your z-resolution per slice.  (slice thickness).  Silhouettes! \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_qt__lt_em_gt_Took a walk down past your house... late last night.  All the shades were pulled and drawn... way down tight.  From within a dim light cast... two silhouettes on the shade.  Oh what a lovely... couple they made._lt_/em_gt__qt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSorry_co_ I accidentally broke-into singing an old 50_t_s song_co_ there.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan you get_co_ or do you have... the... umm... _qt_alpha channel_qt_ for each slice... so we can make a black and white silhouette image from each slice?  (Sorry for my likely-wrong terminology_co_ here)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIdeally_co_ just two colors... black and white.  No grays.  Now we have an image that we could do some displaceMap or heightMap experiments-with.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ you might hate to hear this_co_ but this might be a job for a custom shader. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat if...  hmm.  What if you never really made any mesh... never plotted any vertices... but the GPU made it LOOK LIKE you did?  Have you looked around on the web... for an _qt_image thickener_qt_ shader?  hehe.  I wonder if such a thing exists.  I bet it does.  You didn_t_t plan on shooting photon torpedoes at these composited mesh-slices_co_ did you?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  You won_t_t be needing intersectsMesh_co_ or other video game mesh-collision things_co_ right?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ hmm.  Perhaps you could FOOL the user into thinking each slice-image has some thickness... with a shader.  hmm.  (PS.  I don_t_t code shaders... they scare me.)  The slice images would still be best... if the background was all-white or all-black.  Then the shader could avoid thickening (or displaying) that portion of the image.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m just talking (out my butt_co_ as usual).  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_  Thinkin_t_.  I love that Red Green Show intro... with the silhouette image _qt_cutouts_qt_ or whatever they are called.  I wonder if such things... have an _qt_official_qt_ name.  hmm.  Comments welcome from all... if that_t_s okay-with ulisse.  I should go learn about Extrusion... see how it works.  Talk soon... party-on.  One more goofy displaceMap playground?  Okay.  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#P9UZG%239_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#P9UZG#9_lt_/a_gt_  Found via our trusty _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/playground?q_eq_applyDisplacementMap&amp_sm_page_eq_1&amp_sm_max_eq_250&amp_sm_bf_eq_all_qt_ rel_eq__qt_external nofollow_qt__gt_playground searcher_lt_/a_gt_.  Yay!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ulisse","Date":"2016-10-25T13:45:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_148766_qt_ data-ipsquote-contentid_eq__qt_25897_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1477366946_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t9 hours ago_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHi and thanks again for your detailed post. I try to reply to your points_dd__lt_br /_gt_\n\t1) Yes_co_ all the slices (or cutouts) have the same tickness and I know it. The voxel size is the same for each point in the 3d volume (say that each voxel is like a _lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt__lt_span_gt_parallelepiped_lt_/span_gt__lt_/span_gt_ of size 0.5um_co_ 0.5um_co_ 3um)._lt_br /_gt_\n\t2) Our microscope acquires images as grayscale and it has different acquisition channels_co_ so I have a grayscale img for red_co_ a grayscale img for blue_co_ a grayscale img for green_co_ a grayscale img for infrared and so on.._lt_br /_gt_\n\tAn alpha map is usually defined by asking the user to set a threshold on the background resulting in all the voxels with an intensity below that threshold to be transparent and all the voxels above that threshold being colored._lt_br /_gt_\n\tI am visualizing these images in Matlab where I am combining the channels to make an aRGB 3d image and using a 3d volume viewer function (vol3d) to display this but I would like to go for a web based approach._lt_br /_gt_\n\t3) If I understood correctly_co_ the idea would be to have some _qt_cutouts_qt_ and then to extrude them to have a tickness_co_ isn_t_t it? If that is possible I think that it is really great!!_lt_br /_gt_\n\t4) About shaders and meshes_dd_ It sounds good to use a shader but I really have 0 expertise in that. I need to visualize some computer generated geometries on top of _qt_image points_qt_ because such geometries are created by the commonly used cell detection and surface reconstruction algorithms.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs you can see I have really 0 expertise in 3d computer graphics and game development_co_ I am more on the algorithmic part related to image processing_co_ machine learning and data mining.._lt_br /_gt_\n\tFor this reason I am using commercial imaging software to display data (raw 3d images) and results (computer generated geometries) which however lag like crazy despite using a resolution of 512px x 512px x 30slices on a workstation with 256GB of RAM_co_ 24 Xeon cores and an nVidia quadro card with 8GB GDDR5 of graphic memory and 2880 CUDA cores!! (I haven_t_t said before that our data are also acquired in time but this would be another story_co_ let_t_s start from static images first)._lt_br /_gt_\n\tFor this reason I was thinking that from a game developer community it may be possible to get something to improve the visualization of these biomedical data which have far simpler geometries and textures than a 3d game in my opinion._lt_br /_gt_\n\tThanks again and best regards_co__lt_br /_gt_\n\tUlisse.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]