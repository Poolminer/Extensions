[{"Owner":"Yazheirx","Date":"2018-10-27T02:30:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tConsidering this code_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var shippingContainer _eq_ BABYLON.MeshBuilder.CreateBox(_qt_Box_qt__co_ {\n            depth_dd_ 3_co_\n            width_dd_ 2_co_\n            height_dd_ 2\n}_co_ scene)_sm_\nshippingContainer.position _eq_ new BABYLON.Vector3(0_co_ 2_co_ 0)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tHave I moved a corner of the box to 0_co_2_co_0_co_ and edge_co_ or the center mass?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAre there any good playgrounds that would clarify this?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Yazheirx","Date":"2018-10-27T03:15:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ I have found that .position moves the _qt_center of the mesh_qt_.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/babylon101/position_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/babylon101/position_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs I am trying to move boxes to touch one another I am going to try to read the pivot document referenced to figure out how to get edges to touch\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/pivots_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/how_to/pivots_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoes anyone know of a page or playground that animates items to or from a touching_co_ but not collision_co_ state?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-10-27T08:29:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/33174-yazheirx/?do_eq_hovercard_qt_ data-mentionid_eq__qt_33174_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/33174-yazheirx/_qt_ rel_eq__qt__qt__gt_@Yazheirx_lt_/a_gt_ and welcome to the forum. Don_t_t think the use of pivots will help for your use case. It is more to do with mathematics. Just consider a move in the x axis only with box 1 to the left of box2\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbox 1 having x position x1 and width 2 * w1 and box 2 having x position x2 and width 2 * w2\n_lt_/p_gt_\n\n_lt_p_gt_\n\tStart with the right side of box1 not touching the left side of box2 then x1 + w1 &lt_sm_ x2 - w2. Let both boxes move with the same increments d and box1 move n1 times and box2 move n2 times.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor them to touch x1 + w1 + n1 * d _eq_ x2 - w2 - n2 * d.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBasically you are moving the boxes on a grid system of size d with box positions and dimensions multiple of d.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Yazheirx","Date":"2018-10-27T14:02:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_ before calling it a night_co_ I came to the same conclusion about pivots. As my end goal is to combine multiple box sizes to make a single shape. I think I am going to have to create a function to translate the movement off of a standard point on each box (let’s say the front lower left hand corner) to move things in a  predictable method. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo visualize the problem set image you have three boxes \n_lt_/p_gt_\n\n_lt_ol_gt_\n\t_lt_li_gt_\n\t\t1x1x2\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t1x1x2\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t1x2x2\n\t_lt_/li_gt_\n_lt_/ol_gt_\n\n_lt_p_gt_\n\twith proper manipulation they should be able to be assembled in a 2x2x2 cube. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2018-10-27T16_dd_10_dd_51Z_t_ title_eq__t_10/27/2018 04_dd_10  PM_t_ data-short_eq__t_Oct 27_t__gt_October 27_lt_/time_gt_ by Yazheirx_lt_/strong_gt_\n\t\n\t\t_lt_br_gt_Early morning punctuation is not my friend\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ssaket","Date":"2018-10-27T14:04:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis might help you _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/ts.html#H6RDU5_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/ts.html#H6RDU5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tEDIT_dd_ I took my rectangle overlap algo and directly plugged it into PG_co_ works only for x-z_co_ but you can get the idea. Let me know if any further help is required like checking in y direction. Moreover there_t_s a built in intersect function _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/api/classes/babylon.boundingbox#intersects_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/api/classes/babylon.boundingbox#intersects_lt_/a_gt_.. May be you should check that out.... I am too hungry.. logging out \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-10-27T14:52:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_233002_qt_ data-ipsquote-contentid_eq__qt_40895_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1540648968_qt_ data-ipsquote-userid_eq__qt_33174_qt_ data-ipsquote-username_eq__qt_Yazheirx_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t45 minutes ago_co_ Yazheirx said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI think I am going to have to create a function to translate the movement off of a standard point_lt_span_gt_﻿_lt_span_gt_﻿_lt_/span_gt__lt_span_gt_﻿_lt_/span_gt__lt_span_gt_﻿_lt_/span_gt__lt_span_gt_﻿_lt_span_gt_﻿_lt_/span_gt__lt_/span_gt__lt_/span_gt_ on each box (let’s say the front lower left hand corner) to move things in a  p_lt_span_gt_﻿_lt_/span_gt_redictable _lt_span_gt_﻿_lt_/span_gt_met_lt_span_gt_﻿_lt_/span_gt_hod.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tIt is entirely up to you but I would say the center of the box is already a standard point for all boxes and if you translate the lower left hand corner of the box by (x_co_ y_co_ z) then all points on the box_co_ including the center_co_ are translated by (x_co_ y_co_ z)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Yazheirx","Date":"2018-10-27T16:08:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_233004_qt_ data-ipsquote-contentid_eq__qt_40895_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1540651922_qt_ data-ipsquote-userid_eq__qt_14282_qt_ data-ipsquote-username_eq__qt_JohnK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t53 minutes ago_co_ JohnK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tthe center of the box is already a standard point _lt_span_gt_﻿_lt_/span_gt_for all boxes\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tMaybe my question should be_dd_  If you are attempting to manipulate multiple_co_ dissimilarly dimensioned_co_ boxes - how do you compensate for the differences in the faces to the center to allow two faces to be aligned\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am just thinking out loud here let_t_s take the same three boxes from an earlier entry_dd_\n_lt_/p_gt_\n\n_lt_ol style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_li_gt_\n\t\t1x1x2\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t1x1x2\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t1x2x2\n\t_lt_/li_gt_\n_lt_/ol_gt_\n\n_lt_p_gt_\n\tand let_t_s assume I want to move box1 to be next to box3. By next to I mean_dd_ front faces aligned lengths of two (2) side by side_co_ and the bottoms aligned (so I can later put box2 on top of box 1 to finish my cube).  I will put something in a playground soon and post it\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Yazheirx","Date":"2018-10-27T18:26:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI can now align any faces I want.  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#GVBL74%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#GVBL74#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is the key code_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_function alignFronts(targetBox_co_ movingBox) {\n    // leave the X and Y where they are\n    targetX _eq_ movingBox.position.x_sm_\n    targetY _eq_ movingBox.position.y_sm_\n    //only move the Z\n    targetZ _eq_ targetBox.position.z + targetBox.getBoundingInfo().boundingBox.maximumWorld.z - movingBox.getBoundingInfo().boundingBox.maximumWorld.z_sm_\n    movingBox.position _eq_ new BABYLON.Vector3(targetX_co_ targetY_co_ targetZ)_sm_\n\n}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tand here is the whiteboard diagram I had to draw to figure it out in the end_dd_  Let me know if anyone can find a more robust solution.\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_10/IMG_0419.JPG.324976089b990bd6a35d328a90dbe379.JPG_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_20669_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_10/IMG_0419.thumb.JPG.42b198aa2979e96b4149d5336cda26b6.JPG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_IMG_0419.JPG_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ssaket","Date":"2018-10-27T18:29:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf I am right then you basically want a snapping algorithm &gt_sm_&gt_sm_ right &gt_sm_?? Have a look at this -\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed4599360665_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/20751-aabb-snapping-in-3d/?do_eq_embed_qt_ style_eq__qt_height_dd_219px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Yazheirx","Date":"2018-10-27T18:35:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI will look at the snapping code in the future when the product moves in to _qt_Gamification_qt_ mode. But for now my goal is to show a set of random items allow the user to either click each item_co_ or click a UI button to show where each item will go relative to the rest of the items.  Basically step by step visual packing instructions\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Yazheirx","Date":"2018-10-27T21:10:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCube done.  See _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#GVBL74%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#GVBL74#4_lt_/a_gt_ for my final alignment code.  Note_dd_ I only did Align Fronts_co_ Backs_co_ Tops_co_ Bottoms_co_ and LeftFaceToRightFace.  Obviously there are all the other two more side alignments (lefts and rights) and 5 more face alignments to do_co_ but if anyone needs this solution in the future a modification of the whiteboard math posted above should allow you to  come up with it quickly. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]