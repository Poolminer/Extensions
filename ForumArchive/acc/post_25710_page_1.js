[{"Owner":"rainerpl","Date":"2016-10-12T00:27:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHi_co__lt_br /_gt__lt_br /_gt_\n\tIs there a built in way to _qt_lookAt_qt_ a point in 3D space_co_ using only 2 coordinates( x and y )._lt_br /_gt_\n\tI found a lookAt function from this forum_co_ but that used 3 coordinates which screws up the camera and player orientation._lt_br /_gt_\n\tId like to keep my player_t_s z rotation always at 0._lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2016-10-12T06:21:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23837-rainerpl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23837_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23837-rainerpl/_qt_ rel_eq__qt__qt__gt_@rainerpl_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tWe can accomplish this by making a function_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twe_t_ll simply borrow the 2d rotation parts of the lookAt function_co_ mainly \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var dv _eq_ targetPoint.subtract(this.position)_sm_\nvar yaw _eq_ -Math.atan2(dv.z_co_ dv.x) - Math.PI / 2_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tnow we insert it in a function..\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_function lookAt(tM_co_ lAt) {\n\t/*\n\t * tM _eq_ mesh to rotate.\n\t * lAt _eq_ vector3(xyz) of target position to look at\n\t */\n\t \n\tlAt _eq_ lAt.subtract(tM.position)_sm_\n\ttM.rotation.y _eq_ -Math.atan2(lAt.z_co_ lAt.x) - Math.PI/2_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tand finally we use it like this_sm_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_//mesh _eq_ Mesh we want to rotate\n//target _eq_ Target point to make the mesh look at.\n\nlookAt(mesh_co_ target)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPG_sm_ //Click on the ground to rotate the box _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#Q4LKP%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#Q4LKP#2_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2016-10-12T09:57:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi rainerpl and welcome to the forum!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18592-getzel/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18592_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18592-getzel/_qt_ rel_eq__qt__qt__gt_@getzel_lt_/a_gt_ made this playground yesterday_co_ maybe that helps_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1JPHAD%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1JPHAD#1_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"HenryPeng","Date":"2016-11-07T06:47:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_147055_qt_ data-ipsquote-contentid_eq__qt_25710_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1476266229_qt_ data-ipsquote-userid_eq__qt_12304_qt_ data-ipsquote-username_eq__qt_iiceman_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 2016/10/12 at 5_dd_57 PM_co_ iiceman said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHi rainerpl and welcome to the forum!\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18592-getzel/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18592_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18592-getzel/_qt_ rel_eq__qt__qt__gt_@getzel_lt_/a_gt_ made this playground yesterday_co_ maybe that helps_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1JPHAD%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1JPHAD#1_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI have a question.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow to change its rotation in 3D space_co_ not only change rotation.y._lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12304-iiceman/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12304_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12304-iiceman/_qt_ rel_eq__qt__qt__gt_@iiceman_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2016-11-07T07:50:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22996-henrypeng/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22996_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22996-henrypeng/_qt_ rel_eq__qt__qt__gt_@HenryPeng_lt_/a_gt_ I am afraid I don_t_t have a good answer. I remember I tried to achieve the same when I played with this here_dd_ _lt_a href_eq__qt_http_dd_//p215008.mittwaldserver.info/space/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//p215008.mittwaldserver.info/space/_lt_/a_gt_ if you click at an asteroid the ship is supposed to smoothly align with the target and then shoot. But if I remember right it doesn_t_t always work_co_ so I guess there is a flaw in my way of doing it. I also remember I have tried a lot of things but it was never perfect. Maybe somebody else has a good idea how to achieve the in a way that_t_s more...bulletproof. _dd_-/_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_I think those where the important functions_dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_/**\n * @param rotatingObject\n * @param pointToRotateTo\n * @returns {boolean}\n */\nfunction facePoint(rotatingObject_co_ pointToRotateTo) {\n\n\t// a directional vector from one object to the other one\n\tvar direction _eq_ pointToRotateTo.subtract(rotatingObject.position)_sm_\n\tvar distanceToTargetPoint _eq_ direction.length()_sm_\n\n\tif(distanceToTargetPoint &gt_sm_ 0.5) {\n\n\t\tvar axisVectorY _eq_ new BABYLON.Vector3(0_co_ 0_co_ 1)_sm_\n\t\tvar directionAxisForY _eq_ _t_x_t__sm_\n\t\tvar deltaY _eq_ calculateRotationDeltaForAxis(rotatingObject_co_ _t_y_t__co_ axisVectorY_co_ direction_co_ directionAxisForY)_sm_\n\n\t\tvar axisVectorZ _eq_ new BABYLON.Vector3(0_co_ 1_co_ 0)_sm_\n\t\tvar directionAxisForZ _eq_ _t_z_t__sm_\n\t\tvar deltaZ _eq_ calculateRotationDeltaForAxis(rotatingObject_co_ _t_z_t__co_ axisVectorZ_co_ direction_co_ directionAxisForZ)_sm_\n\n\t\tvar turnAroundYAxisDone _eq_ applyRotationForAxis(rotatingObject_co_ _t_y_t__co_ deltaY)_sm_\n\t\tvar turnAroundZAxisDone _eq_ applyRotationForAxis(rotatingObject_co_ _t_z_t__co_ deltaZ)_sm_\n\n\t\treturn (turnAroundYAxisDone &amp_sm_&amp_sm_ turnAroundZAxisDone) ? true _dd_ false_sm_\n\n\t}\n}\n\nfunction faceTarget(rotatingObject_co_ target){\n\treturn facePoint(rotatingObject_co_ target.position)_sm_\n}\n\nfunction calculateRotationDeltaForAxis(rotatingObject_co_ axis_co_ axisVector_co_ direction_co_ directionAxis){\n\tvar axisVectorNormalized _eq_ axisVector.normalize()_sm_\n\tvar directionVectorNormalized _eq_ direction.normalize()_sm_\n\n\t// calculate the angel for the new direction\n\tvar angle _eq_ Math.acos(BABYLON.Vector3.Dot(axisVectorNormalized_co_ directionVectorNormalized))_sm_\n\n\tif (directionAxis _eq__eq_ _t_x_t_) {\n\t\t// decide it the angle has to be positive or negative\n\t\tif (direction[directionAxis] &lt_sm_ 0) angle *_eq_ -1_sm_\n\t\t// compensate initial rotation of imported spaceship mesh\n\t\tangle +_eq_ Math.PI / 2_sm_\n\t} else {\n\t\tangle -_eq_ Math.PI / 2_sm_\n\t}\n\n\t// calculate both angles in degrees\n\tvar playerRotationOnAxis _eq_ rotatingObject.rotation[axis]_sm_\n\t// calculate and return the delta\n\treturn playerRotationOnAxis - angle_sm_\n}\n\nfunction applyRotationForAxis(rotatingObject_co_ axis_co_ delta){\n\tvar pi _eq_ Math.PI_sm_\n\n\t// check what direction to turn to take the shortest turn\n\tif (delta &gt_sm_ pi) {\n\t\tdelta -_eq_ pi*2_sm_\n\t} else if (delta &lt_sm_ -pi) {\n\t\tdelta +_eq_ pi*2_sm_\n\t}\n\n\tvar absDelta _eq_ Math.abs(delta)_sm_\n\t// rotate until the difference between the object angle and the target angle is no more than 3 degrees\n\tif (absDelta &gt_sm_ pi/360) {\n\n\t\tvar rotationSpeed _eq_ Math.max(0.2_co_ Math.min(absDelta*absDelta_co_ 1))_sm_\n\n\t\tif (delta &gt_sm_ 0) {\n\t\t\trotatingObject.rotation[axis] -_eq_ rotationSpeed * 0.1_sm_\n\t\t\tif (rotatingObject.rotation[axis] &lt_sm_ -pi) {\n\t\t\t\trotatingObject.rotation[axis] _eq_ pi_sm_\n\t\t\t}\n\t\t}\n\t\tif (delta &lt_sm_ 0) {\n\t\t\trotatingObject.rotation[axis] +_eq_ rotationSpeed * 0.1_sm_\n\t\t\tif (rotatingObject.rotation[axis] &gt_sm_ pi) {\n\t\t\t\trotatingObject.rotation[axis] _eq_ -pi_sm_\n\t\t\t}\n\t\t}\n\n\t\t// turn not done yet\n\t\treturn false_sm_\n\n\t} else {\n\n\t\t// turn done\n\t\treturn true_sm_\n\n\t}\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"HenryPeng","Date":"2016-11-07T08:12:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_150216_qt_ data-ipsquote-contentid_eq__qt_25710_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1478505009_qt_ data-ipsquote-userid_eq__qt_12304_qt_ data-ipsquote-username_eq__qt_iiceman_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t17 minutes ago_co_ iiceman said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_pre_gt_\n\n_lt_code_gt_    /**\n     * direction vector x_co_y_co_z_co_\n     * @param x\n     * @param y\n     * @param z\n     * @param defaultVec default direction(just you set)\n     */\n    function getFaceRotation(x_co_ y_co_ z_co_ defaultVec) {\n        defaultVec _eq_ defaultVec || new BABYLON.Vector3(0_co_0_co_1)_sm_ //forward\n        var v1 _eq_ new BABYLON.Vector3(x_co_y_co_z)_sm_\n        v1.normalize()_sm_\n\n        var v2 _eq_ defaultVec_sm_\n        var axis _eq_ BABYLON.Vector3.Cross(v2_co_ v1)_sm_\n        axis.normalize()_sm_\n        var angle _eq_ Math.acos(BABYLON.Vector3.Dot(v1_co_ v2))_sm_\n\n        var rotation _eq_ BABYLON.Quaternion.RotationAxis(axis_co_ angle).toEulerAngles()_sm_\n        return rotation\n    }_lt_/code_gt__lt_/pre_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12304-iiceman/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12304_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12304-iiceman/_qt_ rel_eq__qt__qt__gt_@iiceman_lt_/a_gt_ \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI think it mybe a way_lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2016-11-07T18:38:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWell_co_ here is a playground with my version... _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1SP0QL%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1SP0QL#0_lt_/a_gt_ ... it demonstrates that mine is no good... some hit pretty good_co_ some almost..and some are pretty far off. I am nor exactly sure how to use yours_co_ maybe you can make a playground_co_ too?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]