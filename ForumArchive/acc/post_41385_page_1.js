[{"Owner":"timetocode","Date":"2018-11-19T23:09:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHow does one structure a humanoid mesh and then use it within babylon such that one can ray pick isolated body parts as they move through animations? Does one just leave each body part as a separate object in blender..?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow will pickResult tell me that a ray traveled through the right hand? Currently the character is 11 separate meshes and animated completely in javascript_co_ which makes the picking work just fine but is non-desirable for adding animations _dd_D. Also not sure about the performance ramifications\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_2018-11-14_02-42-35.gif.d47324e42bee0b236a1761dd58ab4ae5.gif_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21085_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/2018-11-14_02-42-35.gif.d47324e42bee0b236a1761dd58ab4ae5.gif_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"trevordev","Date":"2018-11-20T18:12:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYep_co_ using a separate mesh as a body part in blender should work. One note is that picking only works for node animations_co_ skinned animation picking will pick from the static position but if your characters are like in your image node animations should work fine. If the characters have complex geometry it is also recommended to use invisible hit boxes for the picking instead of the actual mesh to save on perf.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"timetocode","Date":"2018-11-20T23:26:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks I_t_m sure that_t_ll make things much easier.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow do I make something a node animation vs a skinned animation (are there bones/rigs/armatures allowed) ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow would one take one animation and use it on a dozen different models? All my characters have the same proportions but different heads_co_ torsos etc.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"trevordev","Date":"2018-11-21T00:11:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/32589-patrickryan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_32589_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/32589-patrickryan/_qt_ rel_eq__qt__qt__gt_@PatrickRyan_lt_/a_gt_ might have the asset creation knowledge to answer this\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PatrickRyan","Date":"2018-11-21T00:51:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12667-timetocode/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12667_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12667-timetocode/_qt_ rel_eq__qt__qt__gt_@timetocode_lt_/a_gt__co_ If you are thinking of node animation_co_ you are animating the individual parts of the body with no skeleton. You can use parent relationships_co_ but trying to retarget animations to other meshes would be impossible. The best approach to this is what _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29361_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/_qt_ rel_eq__qt__qt__gt_@trevordev_lt_/a_gt_ mentioned above. Use your normal skeleton/skinning process and animate as you normally would. The thing that you are interested in_co_ however_co_ is creating a cube primitive and making it a child of the important joints in your skeleton.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor example_co_ placing a cube as a child of the hand ensuring that the cube fits the hand mesh as close as possible. Do this for each body part you need to raycast to and what you will end up with are cubes following along with your animations. When you export that mesh_co_ you want to use a naming convention that would be easy to scrub for in code so you can gather all of them quickly and set them not to render. Then you will only want to raycast against these targets. In this way_co_ you can combine your character_t_s mesh into one mesh to reduce draw calls_co_ but still get the individual targets to cast against. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen for sharing animations across models_co_ make sure they are all skinned to the same skeletal structure (naming and hierarchy needs to be the same) and then you can point one animation at any other mesh you want. So long as the bones have the exact same conventions as the originating animation_co_ it will animate correctly. _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/babylon101/animations_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/babylon101/animations_lt_/a_gt_ The mesh_co_ textures_co_ and skinning information does not matter for the animation_co_ only the skeletal structure as the animation will crawl the heirarchy looking for a named joint to set a rotation value on. It has no concept of the skinning information_co_ the mesh_co_ or the materials on top of the skeleton. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope this makes sense_co_ but please feel free to ping me if you have more questions.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"timetocode","Date":"2018-11-21T02:59:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAll of this sounds great! I do have more questions_co_ as the end state sounds really ideal for what I_t_m making but I_t_m not quite sure how it all works together.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m hearing that using animations from blender to position a rigged model does not actually change the transforms of each body part on the CPU. Is that true? (is it a shader...?)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow does attaching a cube to the leg bone produce an object that does actually move on the CPU? Because at face value I don_t_t see how the cube is any different than the leg itself. Is it simply b/c the cube would be a separate object? (and then no shader gets used..?)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf so then a lot of my confusion may come from me not knowing how to correctly make a 3D character to begin with. I_t_m using a voxel art program called MagicaVoxel for the modeling itself_co_ and I drew each body part and saved it as a separate obj file (!). This is what I_t_m using in the current game prototype_co_ where these 11 body parts are parented to each other manually in my code and then animated tediously by functions that rotate each mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tExample (no need to read too carefully_co_ just conveying a general approach)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21099_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/image.png.42720da78b2e5d53f3dd0166fd6119ce.png_qt_ alt_eq__qt_image.png.42720da78b2e5d53f3dd0166fd6119ce.png_qt_ /_gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21100_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/image.png.d97cef9d39c2f7fbcdea21edafbee40a.png_qt_ alt_eq__qt_image.png.d97cef9d39c2f7fbcdea21edafbee40a.png_qt_ /_gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21101_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/image.png.75c89b4a4d7a671e00fa3c41734ad24a.png_qt_ alt_eq__qt_image.png.75c89b4a4d7a671e00fa3c41734ad24a.png_qt_ /_gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21102_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/image.png.dfcef005b3eecca1e96fe10ebf514c2d.png_qt_ alt_eq__qt_image.png.dfcef005b3eecca1e96fe10ebf514c2d.png_qt_ /_gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21103_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/image.png.dd6733c0e58bbffbdf0b4ffb8fcf0755.png_qt_ alt_eq__qt_image.png.dd6733c0e58bbffbdf0b4ffb8fcf0755.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_// example_sm_ template contains all of the body parts loaded once and positioned\n// I have one template per _qt_model_qt_ (zombie with suit_co_ and the soccer player)\nthis.leftUpperArm _eq_ template.leftUpperArm.createInstance()\nthis.leftUpperArm.parent _eq_ this.torso\n\nthis.leftLowerArm _eq_ template.leftLowerArm.createInstance()\nthis.leftLowerArm.parent _eq_ this.leftUpperArm\n\nthis.leftHand _eq_ template.leftHand.createInstance()\nthis.leftHand.parent _eq_ this.leftLowerArm\n// skipped_dd_ the 8 other body parts and the weapons\n\n\n// example of how the animation logic ends up looking...\nupdate(delta) {\n    if (this.isWalking) {\n        // swing the cute little legs\n        this.rightLeg.rotation.x +_eq_ 4.6 * this.walkToggle * delta\n        this.leftLeg.rotation.x -_eq_ 4.6 * this.walkToggle * delta\n\n        // flip the direction the legs are moving\n        if (this.rightLeg.rotation.x &gt_sm_ 0.8) {\n            this.walkToggle _eq_ 1\n        }\n        if (this.rightLeg.rotation.x &lt_sm_ -0.8) {\n            this.walkToggle _eq_ -1\n        }\n    }\n\n    if (this.isPlayingDeathAnimation) {\n        // makes the whole character fall down_co_ towards _t_death.rotation_t_\n        // _t_this.node_t_ is a the parent to which everything is connected\n        lerpTowards(this.node.rotation_co_ _t_x_t__co_ this.death.rotation.x_co_ delta * 5)\n        lerpTowards(this.node.rotation_co_ _t_y_t__co_ this.death.rotation.y_co_ delta * 5)\n        lerpTowards(this.node.rotation_co_ _t_z_t__co_ this.death.rotation.z_co_ delta * 5)\n\n        // makes the character sink a little bit into the ground\n        lerpTowards(this.node.position_co_ _t_y_t__co_ this.death.position.y_co_ delta * 5)\n        if (this.node.position.y _eq__eq__eq_ this.death.position.y) {\n            console.log(_t_death animation complete_t_)\n            this.isPlayingDeathAnimation _eq_ false\n        }\n    }\n    // skipped_dd_ like 400 more lines like this for animation\n    // and 800 for the player  logic _dd_(\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo is it really just whether these things are separate meshes/objects (not sure the term) in blender that determines whether the individual parts are can be hit with rays? Or have I missed the point\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI should mention that the end goal here is to handle lag compensation of shots in a first person shooter where characters are comprised of multiple hit boxes with animations (it works!). So NullEngine is a significant component (thus no GPU and all of these questions!) . I_t_m now trying to make this thing bearable to use_co_ that means being able to use art tools for the animation.. and I guess I_t_ve also now learned that  these meshes are 11x more expensive to render than they ought to be. Also that hypothetically the server should load only a _qt_hitbox_qt_ version of the models_co_ while the client loads the actual render-able version (in addition to the hitbox_co_ which it needs for optionally placing a blood effect when predicting a shot).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks so much for the replies _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29361_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/_qt_ rel_eq__qt__qt__gt_@trevordev_lt_/a_gt_ and _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/32589-patrickryan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_32589_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/32589-patrickryan/_qt_ rel_eq__qt__qt__gt_@PatrickRyan_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"timetocode","Date":"2018-11-21T12:27:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI crammed some blender tutorials_co_ so I can actually attempt to implement this thing now. I did get stuck though.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21113_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/2018-11-21_03-20-15.gif.201475b73b967403553c596f0846b9d1.gif_qt_ alt_eq__qt_2018-11-21_03-20-15.gif.201475b73b967403553c596f0846b9d1.gif_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe white box on the zombie_t_s left forearm is the TestHitBox\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21114_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/image.png.f4c472198810e7562d2d44175deda104.png_qt_ alt_eq__qt_image.png.f4c472198810e7562d2d44175deda104.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is a little messed up but it is good enough for this test. The whole zombie is one mesh this time.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21115_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/image.png.28dafc289b0e2f4ad2b61e93e757d8db.png_qt_ alt_eq__qt_image.png.28dafc289b0e2f4ad2b61e93e757d8db.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe forearm hit box is a separate mesh and its vertices are assigned to the _qt_forearm left_qt_ bone so that it moves with the animation (perhaps this part is wrong).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen playing the animation I_t_m getting no discernible changes in rotation/position from the TestHitBox. I_t_m presuming this means I couldn_t_t hit it with a raycast. Or maybe it just needs its matrices updated...\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_BABYLON.SceneLoader.LoadAssetContainer(_t_http_dd_//localhost_dd_8080/models/_t__co_ _t_test-anim.babylon_t__co_ this.scene_co_ (container) _eq_&gt_sm_ {\n    //console.log(container)\n    container.meshes.forEach(mesh _eq_&gt_sm_ {\n        mesh.position.x _eq_ 90\n        mesh.position.z _eq_ 90\n\n        setInterval(() _eq_&gt_sm_ {\n            console.log(mesh.name_co_ _t__dd__dd__t__co_ mesh.rotation_co_ mesh.position)\n        }_co_ 1000)\n    })        \n    this.scene.beginAnimation(container.skeletons[0]_co_ 0_co_ 100_co_ true_co_ 1)\n    container.addAllToScene()\n}_co_ null_co_ err _eq_&gt_sm_ { console.log(_t_err_t__co_ err) })_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAlso tried mesh.computeBonesUsingShaders _eq_ false on just the hitbox mesh -- still the console logs only says_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_TestHitBox _dd__dd_ d {x_dd_ 0_co_ y_dd_ 0_co_ z_dd_ 0} d {x_dd_ 90_co_ y_dd_ 0_co_ z_dd_ 90}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tNow that everything is set up I feel like we_t_re super close!! Worst case I could probably parse the animation and position the hitbox via javascript in parallel to the gpu doing its thing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-11-21T15:15:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou might try to use the _lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_attachToBone method of a mesh to ensure it is moved by the skeleton ?_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PatrickRyan","Date":"2018-11-21T18:54:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou are going along the right path so far_co_ and I just see one issue from your last post. It sounds like you are skinning the white hitbox to the skeleton which puts you in the same problem as before where it will only hit the box_t_s bind position. This is because the vertices are taking their final position from the translation of the joints they are skinned to and interpolating a position based on an offset between them weighted by the skin. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAn example would be that you have a vertex that is skinned to two joints with a 0.7 weight to one and a 0.3 weight to the other. All skin weights must be normalized (add up to 1) and you can have up to 4 joint influences in Babylon.js. When you move that sample skeleton the vertex will take its final position as a linear interpolation between the two joints_co_ not midway between them but 20% closer to the 0.7 weight joint including the offsets from the bones. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat you want from your hitboxes is not to calculate the vertices of the box like you do for skinning_co_ but rather to take the translation_co_ rotation_co_ and scale from a joint and apply it to the transform of the hitbox. The vertices of the hitbox do not change at all and just take their position from the triangle list of the mesh. To do this in Blender_co_ you are looking for a parent relationship like this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//docs.blender.org/manual/en/latest/editors/3dview/object/properties/relations/parents.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//docs.blender.org/manual/en/latest/editors/3dview/object/properties/relations/parents.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSetting a parent on an object confers no skin to it_co_ but rather the transform takes the translation_co_ rotation_co_ and scale from the parent node. In essence_co_ it is a separate mesh with the properties you need for a ray cast_co_ but follows a joint. In a sense_co_ it_t_s similar to skinning to the skeleton_co_ but the difference is that the mesh won_t_t deform and you can only take the properties of your single parent node. That means if you have a leg mesh and parent it to the leg joint_co_ and the knee bends_co_ your leg mesh won_t_t follow that. This could be useful for a simple minecraft-type character_co_ but again_co_ you would need to carry 1 mesh per body part rather than one mesh for the whole body_co_ which skinning allows. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor attachments_co_ however_co_ parenting is the best way to go... that could be accessories_co_ hitboxes_co_ or even things like attaching a character to another character like a mount.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"timetocode","Date":"2018-11-22T01:37:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_ve tried a few options now_co_ including_dd_\n_lt_/p_gt_\n\n_lt_ul_gt_\n\t_lt_li_gt_\n\t\thitboxMesh.attachToBone(forearmLeftBone)\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tblender_co_ select hitbox then select forearm bone in pose mode_co_ then Parent to_dd_\n\t\t_lt_ul_gt_\n\t\t\t_lt_li_gt_\n\t\t\t\tobject\n\t\t\t_lt_/li_gt_\n\t\t\t_lt_li_gt_\n\t\t\t\tbone\n\t\t\t_lt_/li_gt_\n\t\t\t_lt_li_gt_\n\t\t\t\tbone relative\n\t\t\t_lt_/li_gt_\n\t\t_lt_/ul_gt_\n\t_lt_/li_gt_\n_lt_/ul_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21137_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/image.png.b7f5cb04c924c2b0ef6be36f85f16cca.png_qt_ alt_eq__qt_image.png.b7f5cb04c924c2b0ef6be36f85f16cca.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSome of these look okay in blender (some don_t_t). None of them have produced a transform that changes while an animation is playing yet.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn fact I went on to dig into the skeletons[0].bones objects_co_ and even while a visible animation is playing in BJS_co_ none of these objects are changing at all.  So I may be accessing these objects incorrectly. I_t_m still a little confused about GPU vs CPU so I don_t_t know if bones not moving within the javascript application (instead only moving on the gpu)  is just how it works...but I_t_m suspicious that I_t_m just doing something else wrong.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m going to be digging through the bjs bone demos_co_ because I distinctly remember one of them was manipulating bone orientation from javascript... \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"timetocode","Date":"2018-11-22T02:23:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYep_co_ I was definitely wrong about the bones. I just happened to randomly pick bones from my model that weren_t_t rotating. Bones do have their transforms changing during an animation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not sure how to connect the hitboxes in blender yet_co_ I_t_ll post back later.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf anyone comes across this thread for their own learning_co_ this playground demo has bones_co_ animations_co_ and a tool for visualizing them_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1B1PUZ%2315_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1B1PUZ#15_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tLogging the varying bone positions to console or creating additional BoneAxesViewers has been pretty good for learning.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"timetocode","Date":"2018-11-22T11:01:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAs far as I can tell parenting a mesh to a bone is fine in blender_co_ but not supported via the blender to babylon exporter. Does that sound possible?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhile I am a newbie with blender_co_ I think I_t_ve tried most sane permutations of parenting relationships and while several work in blender animations they all result in a stationary hitbox in babylon (often at the foot of the model). The only way that *bones* produce movement from blender in babylon is with weighted vertices (I think?).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is all hypothetically possible though_co_ as _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt__t_s suggestion of attachToBone can prove. Both attachToBone and regular old .parent will produce a bone moving a mesh in babylon which is all that needs to happen in the end. Though I_t_ll note that this alone does not fully repair any of the models I_t_ve tried_co_ because when the mesh gets attached to a bone on the babylon side it is in an orientation that isn_t_t the same as it was in blender.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m a blender/importer newb but that_t_s my conclusion.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think this thread may come to a similar conclusion_dd_ _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/22851-blender-exporter-missing-meshes-when-parented-to-bone/_qt_ rel_eq__qt__qt__gt_http_dd_//www.html5gamedevs.com/topic/22851-blender-exporter-missing-meshes-when-parented-to-bone/_lt_/a_gt_ I could totally see why this feature was not valuable for animation_co_ though it is good for attaching weapons_co_ advanced collision checks_co_ and fancy network stuff.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve got a few final experiments to do_co_ but unless someone chimes in and tells me that this doesn_t_t sound right_co_  I_t_m going to pursue alternatives (have a few in mind already_co_ modify exporter_co_ or making two models and attaching them on the babylon side).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHappy Thanksgiving for those that celebrate. _lt_span class_eq__qt_ipsEmoji_qt__gt_🦃_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2018-11-22T11:54:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m using the bone functions getPositionToRef() and getRotationToRef() to sync hitboxes to bones.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_235777_qt_ data-ipsquote-contentid_eq__qt_41385_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1542884505_qt_ data-ipsquote-userid_eq__qt_12667_qt_ data-ipsquote-username_eq__qt_timetocode_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t22 hours ago_co_ timetocode said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t......_co_ modify exporter_co_ ......\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tIf you went down this path_co_ you would help others using the Blender exporter as well _lt_span_gt__lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_You would have to somehow use the rotation in Blender to fix the rotation in BabylonJS_co_ though_co_ as as you say_co_ the rotation in BabylonJS is different from that of Blender. I think the model in BabylonJS inherits the rotationQuaternion of the bone. You would either rotate the model/hitbox each frame_co_ or take the difference from Blender and BabylonJS and apply this before attaching the model to the bone._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-11-22T13:32:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWould be amazing if added to the exporter Guyz _lt_span_gt__lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"timetocode","Date":"2018-11-23T03:53:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI took a look at many things including the exporter_co_ the importer (aka mesh.parse) and the alternative of disabling the bone shader for a mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI couldn_t_t make much headway with the exporter as I don_t_t know python_co_ blender_co_ or 3d math (lol...). So take what I say with a heap of salt. What I think I learned though was that parenting a mesh to the bone does not exist in the python exporter_co_ nor does it exist in the babylon mesh Parse. The exporter+importer have the concept of meshes being parented to meshes_co_ and bones being parented to bones and each follows different schemas... most of the bone stuff being arrayIndex based and most of the mesh stuff having to do with either a dynamically assigned id or the name of the mesh in blender. Each method made sense in its own context_co_ but a mesh to bone would be a bit new. First off_co_ it is a slightly ambiguous relationship. Blender itself has two parenting modes for this_co_ one called _qt_object_qt_ (presumably the normal relationship) which doesn_t_t move the mesh even when the bone moves for some reason and one called _qt_bone_qt_ which is the one that makes the mesh actually move when the bone moves. Babylon can do regular .parent to attach a mesh to a bone as well as attachToBone_co_ which I_t_m not sure what the difference is_co_ both seem to move the mesh attached to the bone. So at least in the exporter something pretty new would need to be added that would say that a mesh has a parent_co_ that this parent is a bone (special)_co_ which armature the bone is in_co_ and which bone index. On the babylon side there would need to be a parser (well_co_ its just json) for this new property that can be on meshes_co_ and then someone would have to decide what the relationship actually is... i believe just .parent is where its at_co_ but I_t_m not sure. And then we get to the part that I don_t_t know how to do_dd_ what is the actual LocRot of the mesh? We want the mesh to move with the bone like any object parented to any other_co_ that part is already done by the virtues of transforms matrices. But the initial offset position of the mesh relative to the bone (whose parent is the armature) needs to be captured in blender and then expressed in babylon. I_t_m not sure how to even see those numbers in blender.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUsing computeBonesWithShaders _eq_ false was another option I explored. In this scenario one makes a hitbox in blender and allows it to be transformed just like the skin of the mesh (i set all the vertex weights to 1 for one bone). This *almost* works. Specifically it seems that using computeBonesWithShaders _eq_ false on the whole zombie mesh did allow the raycaster to adjust to changes in its shape. I was uncertain about how accurate it was_co_ but I was able to register hits on poses that had the arms in a different positions. However when I added multiple new meshes to the arms as hitboxes in blender and tried the same on them_co_ I would lose them. Everything was okay in the renderer_co_ but when firing rays at the character these hitboxes could only be hit when they were near the neutral pose. I mention this because perhaps a slight change in here might be another way to create a multi-mesh picking system compatible with animations -- performance ramifications unknown.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo yea that_t_s my summary. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat I_t_m actually going to do to finish this project is to create the hitboxes in babylon. I_t_m going to iterate through the bones_co_ I_t_m going to create my 11 hit boxes using MeshBuilder.Box_co_ then parent them to bones_co_ and then fiddle around a fair amount with their positions until these hitboxes are sitting in approximately the same place as the limbs of my meshes. I know that sounds only like a partial solution_co_ and it is_co_ but the time investment is modest. These hitboxes only need manually typed in the first time_co_ and then they_t_ll conform to any animations that are added from blender.. which is a big plus because my previous approach was entirely programmatic with no art software involved in animation.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"timetocode","Date":"2018-11-23T12:36:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI do want to revisit the exporter after I learn more 3d stuff. For now I_t_m going to mark this as solved. Thanks for the education everyone.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAfter loading the model_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_skeleton.bones.forEach(bone _eq_&gt_sm_ {        \n    const hitbox _eq_ createHitbox(bone.name_co_ this.scene)\n    if (hitbox) {\n        hitbox.attachToBone(bone_co_ container.meshes[0])\n    }                \n})_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tExample of a manual hit box_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_const createHitbox _eq_ (name_co_ scene) _eq_&gt_sm_ {\n    let hitbox _eq_ null\n\n    if (name _eq__eq__eq_ _t_torso_t_) {\n        hitbox _eq_ BABYLON.MeshBuilder.CreateBox(`${name}-hitbox`_co_ {\n            width_dd_ 15_co_\n            height_dd_ 18_co_\n            depth_dd_ 10\n        }_co_ scene)\n        hitbox.position.y _eq_ 2\n    }\n    // etc hardcoded positions for the other 10 hitboxes\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tBlender_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21161_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/image.png.bb3e65796ea74773ae02dc06da41feb8.png_qt_ alt_eq__qt_image.png.bb3e65796ea74773ae02dc06da41feb8.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn-game test (hitboxes 120% scale for visibility)_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21162_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/2018-11-23_04-17-49.gif.93f5a8d31e8790da989d848d01d3a0ad.gif_qt_ alt_eq__qt_2018-11-23_04-17-49.gif.93f5a8d31e8790da989d848d01d3a0ad.gif_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe hit boxes come out approximate this way_co_ but definitely close enough. It would be a little tedious but I think this approach would also be viable for realistic models.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI haven_t_t done the network part for this version of the character yet_co_ but I think it is going to be the same as before and no problem. I also haven_t_t figured out how to have a run animation on the lower half while the upper body plays a different set of animations yet_co_ but I_t_m sure between adding an upperbody/lowerbody bone_co_ or cutting the guy in half_co_ or posting here again it_t_ll work out.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks again all!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]