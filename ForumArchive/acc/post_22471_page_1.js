[{"Owner":"NasimiAsl","Date":"2016-05-10T06:33:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thi in this topic we try to solve all problem in GPU picking system\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti think we have this questions _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. how can pick changed vertex in gpu side\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. what information we can fetch \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-05-10T06:47:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tabout q1 _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tafter shader  we dont access any data (new position info or Color info )\n_lt_/p_gt_\n\n_lt_p_gt_\n\tonly one way to get a data after process shader we have \n_lt_/p_gt_\n\n_lt_p_gt_\n\twe can readPixel from result of Shader \n_lt_/p_gt_\n\n_lt_p_gt_\n\ti use this stuff for get information of picking\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1_dd_ make a camera and use it like Ray( Ray in raycast ) \n_lt_/p_gt_\n\n_lt_p_gt_\n\t2_dd_ make a render target and use raycamera for get a pixel of data\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3_dd_ use a small texture (4x4) in render target and less fov _dd_ 0.000001 so we see a exactly pixel of mesh \n_lt_/p_gt_\n\n_lt_p_gt_\n\t4_dd_ make id Color System for give number from pixel  (rgb to  long integer)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t5_dd_ we make helper material and set my wanted data per pixel with color\n_lt_/p_gt_\n\n_lt_p_gt_\n\t6 _dd_ use this helper material on render target and i fetch this data with readpixel and get Number\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#JAG8B%238_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#JAG8B#8_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tin this sample i make all steps and log picked identity with console.Log\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-05-10T07:38:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#JAG8B%2310_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#JAG8B#10_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#JAG8B%2312_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#JAG8B#12_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-05-10T14:29:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWow_co_ Naz!  Hi again!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hereby crown you King of the GPU_co_ NasimiAsl!  Thanks for the play-by-play explanation_co_ too.  Excellent_co_ excellent_co_ excellent. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy dog took a look at the code_co_ gasped (dog gasp)_co_ and immediately booked himself on a flight to Jamaica.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBounding-box-less and Octree-less picking/intersecting.  Fascinating!  Irregular shapes_co_ no problems.  hmm.  Wow.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(Wingy carefully examines the GPU on the desk in front of him_co_ and scratches his beard in curious wonderment.)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-10T21:21:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tReally impressive. I second Wingnut_dd_ You are the king of GPU_dd_)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-05-11T03:19:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tthanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ _co_ i hope this help somewhere _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ua4192","Date":"2017-06-26T18:20:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tVery sorry for my ignorance but do you mean that it_t_s possible to pick a mesh by using GPU?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBest regards\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-26T18:22:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThere are some implementation out there (but no in bjs)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-06-27T04:15:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26724-ua4192/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26724_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26724-ua4192/_qt_ rel_eq__qt__qt__gt_@ua4192_lt_/a_gt_ hi\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyes it is possible that have some cpu side working but it is fixed progress like rendertarget but you  can detect your mesh\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti update that for BJS v3 and  you most use BABYLONX  &gt_sm_ Extensions &gt_sm_ ShaderBuilder\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#JAG8B%2314_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#JAG8B#14_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-06-27T04:19:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ i can make it work  only used by BJS ( with customMaterial - or ShaderMaterial too)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ua4192","Date":"2017-06-27T19:29:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHI.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOne more time I have to recognize that your code is too much for my short knowledge.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_dd_ )\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI agree with other members_co_ you are the king of GPU.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere you can see my idea.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#R38VAY%2314_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#R38VAY#14_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe matrix of rays I am using is 25 x 25 _eq_ 625 rays with scene.pick method.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBasically I am limiting the number of meshes in my scene to 625 in each mouse movement.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBesides this I am also replacing the scene by its bounding box when camera is moving.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOf course if oclussion clulling function could be executed in less time this wouldn_t_t be necesary.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs you can see in this PG when I move the camera position this happens_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1.- the scene meshes are replace by its bounding box_co_ so I can rotate / zon /pan in a very agile way.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2.- When camera is static again (no movement detected) I apply the oclussion culling function  with a matrix of 25 c 25 scene.pick calls dividing the canvas in 25 x 25.cell matrix.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow could I apply your technique?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs you can guess I would prefer to laucnh oclussion culling when carmera changes_co_ but time spent depends directly on the rays launched by the function and they are computed by CPU in secuence.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am trying to renderize a big scene  (CAD Plane)_co_ and my best achievement is to replace the scene by the bounding box in camera movements.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBest regards and again sorry for my ignorance.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBest regards\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-06-28T05:05:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thi before i start work on this ( if that possible _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ ) i need now what purpose you had  means( simulation _co_ or ... )\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbecause this ray picking system designed for one single ray it is possible we make it for a lot ray but it is take a time\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ua4192","Date":"2017-06-28T17:25:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHI.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOf course.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_dd_ )\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am trying to make a web CAD viewer.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy idea was to launch a matrix of rays (if posible 30x30) dividing the canvas in 900 cells. With my solution based on scene.pick method this takes around 40 secs_co_ I guess that if task could be managed by GPU it could take around 10 times lor even less. I guess that in GPU you can launch jobs in parallel.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn this way I will only discard very small piezes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy problem is that in my scenes I have more than 20000 meshes and many times 80% are ocluded by other meshes. But as BABYLONJS doesn_t_t provide any oclussion system between different meshes then I am rendering in my scenes many meshes that are nnot needed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMany thanks in advanced if you have some time to work on it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am sure that if you get it_co_ your work will be used by many people.  _sm_ )\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDon_t_t hesiate to ask me for more details if you consider.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBest regards\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]