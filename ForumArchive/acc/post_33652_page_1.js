[{"Owner":"Robin","Date":"2017-10-25T22:04:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Guys_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI followed the eBook to create this super monkey ball game. When the ball fell off the cliff or spiked by the spikes_co_ it will be reset to the start position with a height of 5_co_ then it will drop and rest on the block. Oimo.js is used as the physics engine. Below is my reset function_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t   Player.prototype.reset _eq_ function(pos){_lt_br /_gt_\n\t     this.impostor.setLinearVelocity(BABYLON.Vector3.Zero())_sm__lt_br /_gt_\n\t     this.impostor.setAngularVelocity(BABYLON.Vector3.Zero())_sm__lt_br /_gt_\n\t     this.directions _eq_ [0_co_0]_sm__lt_br /_gt_\n\t     this.rotations _eq_ [0_co_0]_sm__lt_br /_gt_\n\t     this.position _eq_ pos_sm__lt_br /_gt_\n\t     this.position.y _eq_ Player.START_HEIGHT_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t      this.rotation _eq_ BABYLON.Vector3.Zero()_sm__lt_br /_gt_\n\t    }_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy question/issue is_dd_ After falling down the cliff_co_ and resetting the ball_co_ the ball will not be upside up sometimes. i.e. when I push it to go forward_co_ it will jump up instead. When I rotate it to left_co_ it will rotate to right. Do you have any idea about this issue?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you very much.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t  \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_10/blob.png.31c8da9ff63ffe735abd244f5031a307.png_qt_ data-fileid_eq__qt_15409_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_15409_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_10/blob.thumb.png.3564adb54df8a7bfca30be09952523cd.png_qt_ alt_eq__qt_blob.thumb.png.3564adb54df8a7bfca30be09952523cd.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-10-25T23:24:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tPing Ebook author _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5218_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/_qt_ rel_eq__qt__qt__gt_@Temechon_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-10-26T01:13:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys!  Welcome aboard_co_ Robin!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn my opinion_co_ this line is not necessary or useful_dd_  _lt_em_gt__lt_span style_eq__qt_color_dd_#c0392b_sm__qt__gt_ this.rotation _eq_ BABYLON.Vector3.Zero()_sm_ _lt_/span_gt__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen a mesh gets a physics impostor_co_ it no-longer uses its Euler _lt_em_gt_.rotation_lt_/em_gt_ property/value.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tInstead_co_ it uses the swell _lt_em_gt_.rotationQuaternion_lt_/em_gt_ property/value.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSoooo... I think if you replace your last line... with this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_this.rotationQuaternion _eq_ BABYLON.Quaternion.Zero()_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t...then there will be dancing in the streets.  Give her a try.  Report back_co_ if you would.  thx.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Robin","Date":"2017-10-26T05:43:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre_gt_\n_lt_code_gt_this.rotationQuaternion _eq_ BABYLON.Quaternion.Zero()_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI tried the code above_co_ but it does not work. A purple screen will be displayed forever. I do not quite understand the API description below. It seems that this attribute is read only? \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_10/image.png.2b44795cdd4124a8e8c62a5e97bcd0eb.png_qt_ data-fileid_eq__qt_15411_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_15411_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_10/image.thumb.png.5f88ab9cac84fd56f0b6913c357fb585.png_qt_ alt_eq__qt_image.thumb.png.5f88ab9cac84fd56f0b6913c357fb585.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2017-10-26T07:04:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe attribute is not read-only_co_ but if you set it it will be used INSTEAD OF the _t_rotation_t_ attribute to compute the mesh rotation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWingnut is right_co_ you don_t_t reset the rotation of your physical body when resetting the player. In OIMO_co_ there is a method called _t_resetRotation_t_. _lt_br /_gt_\n\tCould you try this _dd_ \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_this.body.resetRotation(0_co_0_co_0)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-10-26T12:39:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI wonder - what would happen if you reset the mesh_t_s rotationQuaternion?\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_mesh.rotationQuaternion.copyFromFloats(0_co_0_co_0_co_1)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThe Quaternion.Zero() function is rather misleading. A quaternion is _qt_reset_qt__co_ when x_co_y_co_z are 0 but w is 1. For that you have the BABYLON.Quaternion.Identity() function.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-10-26T14:56:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tahh_co_ yup_co_ I just _qt_guessed-at_qt_ using Q.Zero().  Thanks R.  I think you might be right.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[lines removed here - further testing proved Wingnut_t_s statements to be full-of-crap_co_ so removed] _dd_x\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1FXAOY%235_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1FXAOY#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tlines 88-98 area.  .rotation.y in render loop keeps on truckin_co_ even after I set a 3-second-delayed quaternion.anything in line 92.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhy did I think that putting a rotationQuaternion onto tiledGround after 3 seconds... would stop the renderLoop rotater?  What was I thinking?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried setting the quaternion to Zero()_co_ Identity()_co_ copyFromFloats(0_co_0_co_0_co_1)_co_ it just wouldn_t_t stop the .rotation.y.  hmm.  Go fig.  I have more learning to do.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Robin","Date":"2017-11-07T05:42:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre_gt_\n_lt_code_gt_mesh.rotationQuaternion.copyFromFloats(0_co_0_co_0_co_1)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tSorry for late reply_co_ I just move house recently. The code above works for me! _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]