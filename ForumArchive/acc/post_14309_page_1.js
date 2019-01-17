[{"Owner":"jerome","Date":"2015-05-06T07:54:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_AFAIK_co_ many users (and sometimes I) face the_lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/12481-box-rotation/_qt__gt_ same rotation complex problem_lt_/a_gt_ _dd__lt_/p_gt__lt_p_gt_they_t_ve a got a mesh_co_ just created in its local space_co_ and they want it somewhere else (quite easy with _lt_em_gt_.position_lt_/em_gt_ attributes) with another orientation._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_em_gt_Another orientation_lt_/em_gt_ is the problem._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What does BJS do so far ?_lt_/p_gt__lt_p_gt_It provides many methods to rotate a mesh_co_ it is to say_co_ under the hood to set up the mesh world transformation matrix (translation_co_ rotation_co_ scale) and they apply it to get the result._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But_co_ usually_co_ the user doesn_t_t really know how much he has to rotate his mesh and relatively to what (translation and scaling are quite obvious_co_ not rotations)._lt_/p_gt__lt_p_gt_He only knows that he wants his mesh at this final position with_co_ say_co_ its length aligned on the box-sphere axis_co_ its width in the plane x0z and its depth facing this other mesh_co_ etc._lt_/p_gt__lt_p_gt_In other terms_co_ the user usually knows the final result he wants and not how to get it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_We can assume he knows then the new translated/rotated local system coordinates in the world _dd_ he knows the position of his mesh (the wanted new origin) and its orientation _dd_ 3 orthogonal vectors in the world describing the new mesh orientation (remember _dd_ the length aligned with box-sphere axis could be the new local X axis _co_ etc )_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So_co_ since BJS is simple and powerful_co_ maybe do we need some _lt_em_gt_locate()_lt_/em_gt_ function (any better name welcome) to set up the underlying rotation layers given a target orientation (axisX_co_ axisY_co_ axisZ) ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ex _dd_ I want a plane set at (5_co_ 5_co_ -2) with its width aligned with the (1_co_ 2_co_ 0) axis_co_ let_t_s call it _lt_em_gt_a_lt_/em_gt__co_ and its length in the plane yOa._lt_/p_gt__lt_p_gt_I definetly don_t_t know how to rotate my plane to get this... so I_t_d like to do _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var plane _eq_ BABYLON.CreatePlane(_qt_plane_qt__co_ 10.0_co_ scene)_sm_// creates a plane as usualvar origin _eq_ new BABYLON.Vector3(5_co_ 5_co_ -2)_sm_           // sets the target positionvar axisX _eq_ new BABYLON.Vector3(1_co_ 2_co_ 0)_sm_             // sets 3 orthogonal axis to define the target orientation var axisY _eq_ BABYLON.Vector3.Cross(axisX_co_ BABYLON.Axis.Z)_sm_var axisZ _eq_ BABYLON.Vector3.Cross(axisX_co_ axisY)_sm_plane.locate(origin_co_ axisX_co_ axisY_co_ axisZ)_sm_            // locates the mesh at this position with this orientation_lt_/pre_gt__lt_p_gt_I guess I could code this if someone would tell me please what is the BJS order for rotation matrices application under the hood _dd__lt_/p_gt__lt_p_gt_Rx * Ry * Rz ?_lt_/p_gt__lt_p_gt_Rz * Ry * Rx ?_lt_/p_gt__lt_p_gt_something else ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Not sure I_t_m very clear _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-05-06T11:28:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_mmh..._lt_/p_gt__lt_p_gt_I guess I can do it without any rotations_co_ just vector handling._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As the translation aspect is quite obvious to everyone (_lt_em_gt_mesh.position.x_co_ y_co_ z_lt_/em_gt_)_co_ do you think it is still worth passing an _lt_em_gt_origin_lt_/em_gt_ parameter ?_lt_/p_gt__lt_p_gt_So maybe the name _lt_em_gt_locate()_lt_/em_gt_ isn_t_t pertinent ..._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_mesh.turn(axis1_co_ axis2_co_ axis3)_sm_ ?mesh.bear(axis1_co_ axis2_co_ axis3)_sm_ ?mesh.changeAxis(axis1_co_ axis2_co_ axis3)_sm_ ?mesh.pleasePositionHere(axis1_co_ axis2_co_ axis3)_sm_ ?mesh.shutTheFckUpAndJustSetHereRightNow(axis1_co_ axis2_co_ axis3)_sm_ ?_lt_/pre_gt__lt_p_gt_any thoughts/prferences ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dsman","Date":"2015-05-06T12:03:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I had similar requirement. I had to write my own code for aligning a mesh relative to some other mesh. So if some magical function exist which can handle many scenario and wide range of shape of mesh to align with different type of mesh_co_ it could be great. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_function could be called mesh.align()  . But it is matter of debate what exact scope this method can have. I.e. what kind of shape can it support . _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(I did for my own code for aligning plane with plane. ) _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-05-06T13:13:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I would like to make it work for any mesh_co_ as well for Vector3._lt_/p_gt__lt_p_gt_It_t_s not really about aligning things together although it would be useful to align things._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It_t_s more about _dd__lt_/p_gt__lt_p_gt_I have an initial mesh position/orientation._lt_/p_gt__lt_p_gt_I know how I want it to be positioned/oriented_co_ meaning I know the final axis._lt_/p_gt__lt_p_gt_... but I don_t_t know what rotation to apply from the original status to get my target status._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So I just want my mesh to be set in the target status (known by 3 axis) without handling rotations_co_ quaternions_co_ parenting_co_ all that stuff I don_t_t understand._lt_/p_gt__lt_p_gt_It_t_s another perspective _dd_ it_t_s not HOW I transform something to get a result_co_ but only WHAT result I want to get directly._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-05-06T17:08:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Did you try mesh.lookAt ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-05-06T17:09:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_huuu... didn_t_t even know this stuff existed_lt_/p_gt__lt_p_gt_I will check_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-05-06T17:11:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_not the same... you need to know about angles with lookAt and initial constraint (mesh drawn facing the user)_lt_/p_gt__lt_p_gt_not the same need_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-05-06T17:14:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Just wanted to be sure _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-05-06T17:35:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ll code a proto in the playground soon to introduce the stuff_lt_/p_gt__lt_p_gt_still looking for a pertinent name  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_mellow.png_qt_ alt_eq__qt__dd_mellow_dd__qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_if it solves Alby_t_s box rotation problem_co_ it will be a good POC_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-05-07T14:50:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_redirecting now on _lt_em_gt_rebase()_lt_/em_gt_ topic _dd__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/14349-meshrebase/_qt__gt_http_dd_//www.html5gamedevs.com/topic/14349-meshrebase/_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]