[{"Owner":"Defcronyke","Date":"2017-06-10T18:47:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI am new to 3D game dev_co_ and I_t_m wondering how to make a triangular prism that a sphere could roll down. I think I_t_m missing something huge_co_ because physics libraries only seem to support the most basic geometries_co_ excluding triangular prisms and other important shapes. Could someone please point me to some resources or explain how to deal with physical interactions between more complicated shapes? I notice that BabylonJS makes it easy to create lots of neat meshes_co_ however_co_ I_t_m missing how to simulate their shapes on the CannonJS side of things. I want to make a game where the player controls a sphere by rolling it around various scenes_co_ but it just doesn_t_t seem possible using only spheres and boxes_co_ for example.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-06-10T19:36:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya Defcronyke_co_ welcome to the forum... good to have you with us.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUse the CannonJS physics engine and use the _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/playground?code_eq_meshImpostor_qt_ rel_eq__qt_external nofollow_qt__gt_meshImpostor_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUnfortunately_co_ meshImpostor ONLY interacts with spheres_co_ but that is exactly what you are using_co_ so_co_ perfect match. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor rolling/moving the sphere_co_ use applyImpulse or setLinearVelocity.  Remember that spheres have no significant friction_co_ so_co_ it is difficult to STOP a rolling sphere.  Many times_co_ it is best to setLinearVelocity (AND angularVelocity) _eq_ new BABYLON.Vector3(0_co_ 0_co_ 0)... to stop a moving sphere.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso keep in mind that physics-active mesh... use mesh.rotationQuaternion instead of .rotation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGood luck_co_ keep us posted.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Defcronyke","Date":"2017-06-10T19:52:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks Wingnut_co_ MeshImpostor is almost perfect_co_ the sphere collides with the prism in the correct ways_co_ except I didn_t_t want the prism to have mass_dd_ 0_co_ but if I give it a mass_co_ it falls through the floor. The floor is a BoxImpostor...\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-06-10T20:10:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAh yes.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Sorry about that.  I wonder if meshImpostors react with meshImpostors.  I doubt it.  But heck_co_ try making the floor a meshImpostor_co_ too.  It probably won_t_t work_co_ but_co_ what the heck... it_t_s worth a try.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe other option might be... make the ground be a sphere... very down-scaled Y.  (a very flat sphere_co_ like a big pancake)... and then use a sphereImpostor on IT_co_ too.  Kind of weird_co_ but better than peeing on your foot_co_ right?  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_  Or perhaps put that flat pancake (with sphereImpostor) just BARELY underneath the standard ground.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn fact_co_ would a SMALL sphere (or 4 of them) with no mass... placed under the pyramid... work?  It/They might be hidden by the pyramid that is atop it/them.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll keep thinking.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Good to hear that the meshImpostor is working.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Defcronyke","Date":"2017-06-10T21:10:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tMeshImpostors don_t_t collide with each other_co_ and I can_t_t figure out how to flatten the SphereImpostor. I can visually flatten the mesh with mesh.scaling.y _eq_ 0.1_co_ but the physics body doesn_t_t get scaled with it. I tried setScalingUpdated(true) and forceUpdate()_co_ but the scaling on the physics body still remains as its original shape.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-06-10T21:35:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWhen you create a Cannon sphere shape_co_ the function takes a single value_co_ the radius. This value is then used to create the sphere. You won_t_t be able to_co_ as far as I know_co_ assign different values for width_co_ depth and height. At least not without changing the Cannon library itself.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Defcronyke","Date":"2017-06-10T21:40:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHmm_co_ so is there any option then_co_ to have a triangular prism with mass_co_ collide with a BoxImpostor (the ground)? I don_t_t want the prisms to be fixed in place.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-06-10T23:31:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tUnfortunately_co_ I_t_m not experienced with the impostor-system_co_ but I know it is indeed possible with native Cannon_co_ so I_t_d assume it is possible using the impostor-system as well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLook at this example_dd_ _lt_a href_eq__qt_https_dd_//schteppe.github.io/cannon.js/demos/shapes.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//schteppe.github.io/cannon.js/demos/shapes.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow is your prism supposed to look like?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe shape closest to the upper left cornor is a _lt_span_gt__lt_span_gt_ConvexPolyhedron_co_ Same thing_co_ I figure_co_ as the meshImpostor. Try turning the scene upside-down_lt_/span_gt__lt_/span_gt_. Is this the shape you want? Or are you thinking of a more traditional triangle_co_ you know_co_ like the roof of a very basic house? If it_t_s the latter_co_ you might as well make a cylinder shape. In the scene you see 2 cylinders. Both have 10 segments. If you create a Cannon shape with only 3 segments_co_ that will make a 3-dimensional triangle. 3 is the lowest amount of segments a cylinder is allowed to have in Cannon.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Defcronyke","Date":"2017-06-11T02:00:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThe traditional triangle is what I want_co_ as created with BABYLON.MeshBuilder.CreateCylinder(_t_triangularPrism1_t__co_ {tessellation_dd_ 3}_co_ this.scene)_co_ it looks right_co_ however when I attach a CylinderImpostor to it_co_ the prism rolls like a cylinder_co_ which is not what I want.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-06-11T08:44:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSorry about the bad info about flattening sphereImpostors.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t------\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think you can use the meshImpostor... on your prism_co_ even though it is built with a cylinder.  Should be no problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUm... let_t_s see.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. Set ground with boxImpostor and 0 mass.  Good solid ground.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t2. Um... TRY _lt_u_gt_parenting_lt_/u_gt_ 3 tiny boxes... with boxImpostors_co_ onto the bottom of the prism _t_legs_t_.  Try to make them VERY small... but they might fall thru floor if TOO small.  You may need to use 7 of them  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  As always_co_ children get physicsImpostors BEFORE parents... in the code sequence.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    2b.  If parenting/positioning is successful_co_ drop the prism with its new tiny boxImpostor-feet... onto the ground.  It SHOULD remain above ground_co_ and could even _qt_skid_qt_ a little... like it_t_s on ice.  (cool)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    2c.  If parenting/positioning fails_co_ perhaps de-parent 3-7 boxImpostor-feet_co_ and instead_co_ attach a physics joint between meshImpostor prism... and all _qt_prism feet_qt_.  We are giving our prism_t_s feet... some knees.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Joints are the _qt_physics way_qt_ to do parenting.  Joints can be set to have ALMOST zero-flexibilty (bone-like).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3.  Test by dropping prism onto ground.  We are attempting to make the GROUND keep the prism feet elevated_co_ and make the PRISM FEET keep the prism elevated.  A little cooperation. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t4.  Do that exact same thing_co_ but use a SINGLE PLANE parented-onto or jointed-onto the bottom of the prism_co_ and give it a planeImpostor.  That sounds easier_co_ and the planeImpostor _lt_em_gt_should_lt_/em_gt_ stay atop the boxImpostor ground.  Yeah!  That_t_s the ticket!  Try this way FIRST. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t* Keep in mind that mesh with .visibility _eq_ 0... can STILL have impostors (possibly wonderful for you).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-06-11T09:10:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_177772_qt_ data-ipsquote-contentid_eq__qt_30976_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1497146426_qt_ data-ipsquote-userid_eq__qt_27304_qt_ data-ipsquote-username_eq__qt_Defcronyke_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t8 hours ago_co_ Defcronyke said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThe traditional triangle is what I want_co_ as created with BABYLON.MeshBuilder.CreateCylinder(_t_triangularPrism1_t__co_ {tessellation_dd_ 3}_co_ this.scene)_co_ it looks right_co_ however when I attach a CylinderImpostor to it_co_ the prism rolls like a cylinder_co_ which is not what I want.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThat is because the cylinderImpostor is automatically created using 16 segments_co_ instead of taking into account the tesellation of the mesh itself.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Physics/Plugins/babylon.cannonJSPlugin.ts#L239_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Physics/Plugins/babylon.cannonJSPlugin.ts#L239_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was mistaken. The meshImpostor is a trimesh_co_ which_co_ if nothing has changed_co__co_ only collides with spheres and planes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou might have to go native on this one. Natively_co_ you could specify the shape of the Trimesh_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//schteppe.github.io/cannon.js/docs/classes/Trimesh.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//schteppe.github.io/cannon.js/docs/classes/Trimesh.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr a ConvexPolyhedron_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//schteppe.github.io/cannon.js/docs/classes/ConvexPolyhedron.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//schteppe.github.io/cannon.js/docs/classes/ConvexPolyhedron.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr_co_ as already mentioned_co_ create a cylinder with 3 segments_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//schteppe.github.io/cannon.js/docs/classes/Cylinder.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//schteppe.github.io/cannon.js/docs/classes/Cylinder.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe radiusTop and radiusBottom will define the width and depth_co_ and the height will define the length of the triangle.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think this would be the most performant way of doing it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tEDIT_dd_ This isn_t_t quite right_co_ but it_t_s a starting point_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#LEWTG2%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#LEWTG2#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-06-11T17:54:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tCool.  I was thinking Defcronyke wanted a _qt_tetragon?_qt__co_ though.  A 3-sided pyramid.  But I_t_m still drunk from last night_co_ so_co_ incompetence on my part... could be VAST.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Defcronyke","Date":"2017-06-11T20:22:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI attached spheres as children to the 5 sided prism_co_ positioned just inside the prism mesh_co_ giving it feet_co_ and it worked_co_ however it was very hard to line up the spheres_co_ because the axis were not the same as in world-space_co_ and it really confused me. I think until MeshImpostor can collide with other shapes than just sphere and plane_co_ I will have to just use more basic shapes_co_ because it takes too long and too much code to attach all sorts of sub-shapes to everything. It_t_s really messy. I don_t_t really understand why a HeightmapImpostor which I have working_co_ can collide with other shapes_co_ but a MeshImpostor can_t_t. It seems like a silly limitation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for the help Wingnut and Raggar. Hopefully in future versions of BabylonJS_co_ they make the MeshImpostor able to collide with other shapes.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-06-11T21:30:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt_t_s a limitation of the Cannon.js physics library_co_ unfortunately.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou_t_ll either have to improve the library yourself_co_ or wait for another library_co_ as the coder behind Cannon.js seems to be pursuing other projects.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//twitter.com/schteppe?lang_eq_da_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//twitter.com/schteppe_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2017-06-12T06:11:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI_t_m no expert here_co_ but it looks like it would be more useful if Babylon used Convex physics impostors for non-regular shapes_co_ rather than Trimeshes (which Cannon mostly doesn_t_t support).\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]