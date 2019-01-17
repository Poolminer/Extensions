[{"Owner":"inteja","Date":"2018-04-04T07:13:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI know I can_t_t stop gimbal lock but I_t_d like to avoid the circumstances where it occurs in my application i.e. when a lookAt() call returns a vector close to the zenith.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBasically I_t_d like to clamp the rotational pitch from 0 to 85 degrees_co_ rather than allowing it to ever reach 90 degrees.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI see the lookAt method has an optional parameter for pitchCor (pitch correction) but that doesn_t_t seem to do what I want. What I_t_m thinking at the moment is I need to test the lookAt result to see of it_t_s &gt_sm__eq_ 85 degrees pitch and if so then clamp the pitch back to 85 degrees (without altering yaw) before applying the rotation to my mesh_co_ but I_t_m a bit lost how to achieve that or if there_t_s a better way.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEDIT\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s a PG _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#NM5LIX_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#NM5LIX_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBasically as the lookAt() approaches the zenith I want to clamp the pitch input (even though it_t_s not accurate this way) in order to eliminate the unnaturally fast spin.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope this makes sense. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2018-04-04T14:18:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAdd min max pitch to lookAt_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#NM5LIX%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#NM5LIX#2_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"inteja","Date":"2018-04-04T21:08:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_. That_t_s really helpful.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ love your profile pic - Commodore logo. Nostalgic for me as I started with Vic20_co_ onto C64 then Amiga ... the good _t_ol days _dd_-)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2018-04-04T21:27:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMe_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTrs-80 -&gt_sm_ c64 -&gt_sm_ Amiga500\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-04-05T03:42:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTrs-80_co_ -&gt_sm_ c64 -&gt_sm_ c128 -&gt_sm_ A500  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  weird. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDidjall see my _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#NM5LIX%231_qt_ rel_eq__qt_external nofollow_qt__gt_#1 PG_lt_/a_gt_?    I tried using a dummy camera... etc_co_ etc.  Embarrassing Wing-nutty-ness.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyone remember forum buddy _qt_Alby_qt_?  He and his campfire team would fight-with unwanted spin from lookAt() and billboardMode... DAILY. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think he_t_s in an institution or something_co_ now.  _lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt_  Rumor has it... he just mumbles _qt_camera epsilon_qt_  and _qt_poles_qt_ and _qt_gimbal lock_qt_ all day long_co_ and drools a lot.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut but but but... doesn_t_t it _qt_feel_qt_ like... there is a transformNormal() or some other Matrix transformation that can be done_co_ here (avoiding lookAt)? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tmesh. bake[Something]_co_ perhaps?  Or_co_ maybe re-scale the plane at some point... causing it to change its forward() vector?  What the heck?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn #1 PG_co_ line 15_dd_  camera2.noRotationConstraint _eq_ true_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere_co_ what I really wanted was... _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/api/classes/babylon.arcrotatecamera#allowupsidedown_qt_ rel_eq__qt_external nofollow_qt__gt_.allowUpsideDown_lt_/a_gt__co_ but that is an ARC cam thing (allows arcCam to behave differently... at beta _eq_ 0)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ yeah_co_ not only did I contribute NOTHING in this post_co_ but I might have made us all... a little stupider.  sorry.  heh\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"inteja","Date":"2018-04-05T03:51:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI was young and poor and only drooled over the TRS-80. Used Spectrum ZX and BBC Micros at school though.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tVIC20 &gt_sm_ C64 &gt_sm_ A500 &gt_sm_ A1200 (sadly skipped the C128 and A4000). I jumped to the PC dark side when Doom came out with a 486 DX 266.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere was nothing like 8-bit computing. Long gone are the days when you could know a system inside-out_co_ unless you count Arduino_co_ Raspberry Pi etc...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-04-05T15:21:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAmstrad CPC 464-&gt_sm_Atari STE (sorry) -&gt_sm_ Amiga 500+\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]