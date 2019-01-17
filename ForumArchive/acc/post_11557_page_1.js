[{"Owner":"iiceman","Date":"2015-01-07T22:57:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi again everybody_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am still working on my Bomberman game. I made some (little) progress but alot of questions came up. Here I want to ask some of the physics related of those._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here is what I got so far_dd_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//p215008.mittwaldserver.info/bbomberman/?players_eq_4_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//p215008.mittwaldserver.info/bbomberman/?players_eq_4_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here are the questions_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1.) do I understand right_co_ that we don_t_t have a CapsuleImpostor when using Oimo? If so_co_ what would be a good alternative to use for a humanoid? I found this demo of Oimo where they use some kind of capsules_co_ how do they do that (I didn_t_t really get it when looking at the source)? Can I do that_co_ too_co_ in Babylon? _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ _lt_a href_eq__qt_http_dd_//lo-th.github.io/Oimo.js/test_compound2.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//lo-th.github.io/Oimo.js/test_compound2.html_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_2.) it seems that I can_t_t really rotate a mesh with an impostor. I read about it here in the forum but I didn_t_t understand how I am supposed to do it. Everything I tried failed_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1NLTUH_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1NLTUH_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Since I am still stuck with the SphereImpostor I decided to have the impostor seperated from the mesh_co_ since it would be enought to just rotate the mesh and not the imposter. Something like_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var player _eq_ someInvisibleMesh_sm_var playerMesh _eq_ someMeshWithChildrenThatMakeMyBomberman_sm_var playerImpostor _eq_ aSphereMesh_sm_playerAvatar.impostor _eq_ playerAvatar.setPhysicsState(BABYLON.PhysicsEngine.SphereImpostor_co_ {    mass_dd_ 100_co_    friction_dd_ 0.001_co_    restitution_dd_ 0.999})_sm_playerMesh.parent _eq_ player_sm_playerImpostor.parent _eq_ player_sm__lt_/pre_gt__lt_p_gt_So at the moment_co_ if I rotate the player_co_ I just rotate playerMesh. That kind of works but is somehow stupid. It should be somehow possible to rotate the mesh with the impostor_co_ too_co_ right?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_3.) (actually not directly physics related but rotation _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ ) I want to rotate the player in 8 different direction when moving up_co_down_co_ left_co_ right_co_ up left_co_ up right_co_ down left and down right. Therefor I thought I could convert the direction vector (that I use to give the impulse to the physics mesh to make it move) into Euler rotation angles. I googled a bit_co_ found some equations and tried things out. Somehow that works ... at least for the first 6 directions_co_ but down left and down right give me the same result as up left and up right. So... I guess I am doing something wrong here _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here is the code for setting the rotation (on the _qt_playerMesh_qt_ wich in my code is called this.avatarWrapper)_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var finalMoveVector _eq_ moveVector.normalize().scale(this.speed)_sm_if(finalMoveVector !_eq_ BABYLON.Vector3.Zero()) {    if (finalMoveVector.x !_eq_ 0) {        this.avatarWrapper.rotation.y _eq_ Math.atan(finalMoveVector.x / finalMoveVector.z)_sm_    } else {        if(moveVector.z &gt_sm_ 0) {            this.avatarWrapper.rotation.y _eq_ 0_sm_        } else {            this.avatarWrapper.rotation.y _eq_ Math.PI_sm_        }    }}_lt_/pre_gt__lt_p_gt_Okay... thats it.. for now.. I have more questions_co_ but I save some for later _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I really hope you guys can help me out (again). I appreciate all your help big time_co_ thanks!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-01-08T01:06:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_1. If Temechon is ok to add support for capsules _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_2. You cannot easily control a mesh with physics on it because..physics is already controlling it _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ Teme_lt_span style_eq__qt_font-size_dd_12px_sm__qt__gt_chon introduce_lt_span style_eq__qt_font-family_dd_arial_co_ helvetica_co_ sans-serif_sm__qt__gt_s mesh._lt_span_gt_updatePhysicsBodyPosition back in time but it is for position. We should be able to do the same for rotation_lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_font-size_dd_12px_sm__qt__gt__lt_span style_eq__qt_font-family_dd_arial_co_ helvetica_co_ sans-serif_sm__qt__gt__lt_span_gt_3. This is not really clear to me what you want to achieve _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-01-08T08:13:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_1. okay_co_ that would be pretty cool_co_ I think_co_ maybe he needs it for his game_co_ too. @Temechon_co_ you do_co_ right? _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_2. that_t_s too bad. but if you say I can not easily control the rotation.... that kind of implies there is a difficult way to do it? I found this flyer frame demo from wingnut _lt_a href_eq__qt_http_dd_//urbanproductions.com/wingy/babylon/flyer/flyer20/flyer20.htm_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//urbanproductions.com/wingy/babylon/flyer/flyer20/flyer20.htm_lt_/a_gt_ (not sure if that_t_s the final version) Is that the hard way to do it? _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ So maybe I should stick with rotating the visible mesh independently from the physics body? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_3. okay_co_ I try again_co_ hopefully a bit clearer_dd_ I want to make the player character face the direction that he is walking. So if the user pushes _qt_D_qt__co_ the player character walks right_co_ so the little dude has to look to the right side. there are 8 directions that the player can move. so i could make a switch case for each of those_co_ but I thought it might be easier/cleaner if I take the direction vector and compute the rotation needed from this vector. therefor this formula seems to return pretty much almost the right angle_dd_ _lt_span style_eq__qt_color_dd_rgb(102_co_0_co_102)_sm_font-family_dd_monospace_sm_font-size_dd_13px_sm_background-color_dd_rgb(250_co_250_co_250)_sm__qt__gt_Math_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm_font-family_dd_monospace_sm_font-size_dd_13px_sm_background-color_dd_rgb(250_co_250_co_250)_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_0)_sm_font-family_dd_monospace_sm_font-size_dd_13px_sm_background-color_dd_rgb(250_co_250_co_250)_sm__qt__gt_atan_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm_font-family_dd_monospace_sm_font-size_dd_13px_sm_background-color_dd_rgb(250_co_250_co_250)_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_0)_sm_font-family_dd_monospace_sm_font-size_dd_13px_sm_background-color_dd_rgb(250_co_250_co_250)_sm__qt__gt_finalMoveVector_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm_font-family_dd_monospace_sm_font-size_dd_13px_sm_background-color_dd_rgb(250_co_250_co_250)_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_0)_sm_font-family_dd_monospace_sm_font-size_dd_13px_sm_background-color_dd_rgb(250_co_250_co_250)_sm__qt__gt_x _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm_font-family_dd_monospace_sm_font-size_dd_13px_sm_background-color_dd_rgb(250_co_250_co_250)_sm__qt__gt_/_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_0)_sm_font-family_dd_monospace_sm_font-size_dd_13px_sm_background-color_dd_rgb(250_co_250_co_250)_sm__qt__gt_ finalMoveVector_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm_font-family_dd_monospace_sm_font-size_dd_13px_sm_background-color_dd_rgb(250_co_250_co_250)_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_0)_sm_font-family_dd_monospace_sm_font-size_dd_13px_sm_background-color_dd_rgb(250_co_250_co_250)_sm__qt__gt_z_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm_font-family_dd_monospace_sm_font-size_dd_13px_sm_background-color_dd_rgb(250_co_250_co_250)_sm__qt__gt_)_sm__lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Problem is that I can_t_t do that if finalMoveVector.z is 0 (devision by zero) ... *looking*at*my*code*example* ... *realizing*that*I*am*checking*for*finalMoveVector.x*and*not*z* ... *feeling*stupid*now* ... uhm_co_ never mind _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ I am not sure if that is the problem though. I mean_co_ how is it possible that this works for the other 6 directions and only down left and down right are broken? But okay_co_ I guess I have to check that myself again and maybe make a playground if I can_t_t figure it out._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But you get the general idea of what I am trying to do? Is it the right approach?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(by the way_dd_ the linked online version of bomberman above should be fully playable with up to 4 players - set then parameter in the url. player1 WASD+SPACE_co_ player2 8456+0 on the num pad and players3 and 4 with gamepad. you have purle random power ups hidden that give you some more or less good power like invisibility or non stop bomb placing - if somebody tries it_co_ let me know if you find bugs! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ )_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-01-08T09:49:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello iiceman_co_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Your game is looking great ! (Mine is not advanced as yours_co_ but I_t_m working on the game UI and menu)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1. I can work on that._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_2. It_t_s already done. Check this _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1NLTUH%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1NLTUH#1_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_3. I_t_m not good in math enough to help you on this _dd_/_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-01-08T10:30:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_1. Thank you! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_2. Awesome! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_3. I am not good either but I_t_ll try again. Anybody else good at math and wants to give it a try? _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-01-08T13:07:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m looking into Oimo code_co_ and I can confirm that only BOX_co_ CYLINDER and SPHERE shapes are supported by default._lt_/p_gt__lt_p_gt_You can see here how the capsule shapes is added _dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_function initCapsuleGeometry (radius_co_ height_co_ SRadius_co_ SHeight) {        types _eq_ [ _t_sphere_t__co_ _t_sphere_t__co__t_sphere_t_]_sm_        sizes _eq_ [ radius_co_radius_co_radius_co_ radius_co_radius_co_radius_co_ radius_co_radius_co_radius ]_sm_        positions _eq_ [0_co_0_co_0_co_   0_co_height*0.5_co_0_co_ 0_co_height_co_0]_sm_        ...    }_lt_/pre_gt__lt_p_gt_It_t_s actually composed of three spheres. I can do the same in Babylon (create three spheres for each capsule)_co_ but I don_t_t know if it_t_s the best solution._lt_/p_gt__lt_p_gt_What do you think ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-01-08T13:44:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Would definitely be good enough for me. Maybe a combination of 2 spheres and a cylinder with a certain height might by more dynamic (but maybe slower)?_lt_/p_gt__lt_p_gt_   ______lt_/p_gt__lt_p_gt_O|____|O _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Or at least a dynamic amount of spheres?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_OOOOOO_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_By the way_co_ it is not possible to scale the sphere impostor_co_ right? Like from O -&gt_sm_ 0 if you know what I mean?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-01-08T13:58:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It_t_s possible to scale it. _lt_/p_gt__lt_p_gt_BTW_co_ for Oimo_co_ a cylinder is a box. Nothing more _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ So 3 spheres is the best we can do_co_ like this _dd_ 0O0_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(my ascii art definitely sucks)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-01-08T15:17:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ohw I can scale it? Then for my purpose a slim sphere would be good_co_ too. I mean a shape like an american football... so I just need to scale the Babylon mesh and the impostor adepts? I guess_co_ I really didn_t_t try that yet._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-01-08T16:28:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The impostor will be scaled according to the boudning sphere (if the impostor is a sphere) or the bounding box (if the impostor is a box)._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-01-11T00:35:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Just a short update_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1.) I guess I don_t_t need the CapsuleImpostor that badly. But some how I didn_t_t manage to scale my sphere impostor. I guess I missunderstood something here. Therefor I threw togehter a playground to show what I mean_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1ZXK8G%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1ZXK8G#1_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The two objects collide even if they actually don_t_t touch each other. I hope you guys get what I want to achieve. Is it possible?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_2 and 3 are done_co_ thanks again! Here is the current version_co_ let me know what you think_dd_ _lt_a href_eq__qt_http_dd_//p215008.mittwaldserver.info/bbomberman/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//p215008.mittwaldserver.info/bbomberman/_lt_/a_gt_ (please don_t_t mind the interface_co_ it_t_s work in progress and I just copied it from an much earlier version and it is kinda messed up. Just add as many players as you like with the + buttons and then hit the obvious play button in the center _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ ) _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-01-14T20:51:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey guys_co_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Just use a BoxImpostor instead of a SphereImpostor for the sphere._lt_/p_gt__lt_p_gt_I don_t_t know why_co_ but Oimo takes only one size to create the physics body of a sphere_co_ and by default Babylon gives it the max of the 3 radius (x_co_ y_co_ z)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So what you are trying to achieve is not possible right now_co_ but it is possible with a box impostor._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-01-14T22:34:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Okay_co_ I see_co_ thank you. I_t_ll try it out and if it doesn_t_t work as I want to_co_ I think I try to combine my sphere with one or two other impostors_co_ that should work out somehow.. probably _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-01-18T23:41:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I got a new physics related question... I think it might be related to the rotation problem_co_ but I am not sure. I am trying to use ramps that the player can go up. I only tried in a playground so far but I can_t_t get it to work as i expected it_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1XAAKS_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1XAAKS_lt_/a_gt_ (hit any key to apply an impulse to the sphere to make it go to the right)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It seems to me that the bounding box of the ramp (or better_dd_ it_t_s impostor) is not where Babylon shows it. Any idea what I am doing wrong here?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-01-19T11:32:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi again_co_ iiceman! _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1XAAKS%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1XAAKS#2_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_That works._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Basically_co_ I never saw the _qt_// throws error_dd_ undefined is not a function_qt_ for your line 49.  I did see a momentary_lt_em_gt_ d.undefined is not a function_lt_/em_gt_ compilation error_co_ but it went away after I did a fresh non-cache reload (shift-control-R in firefox).  A minor bug could have been fixed in the middle of the night... who knows?  Things happen fast around these parts.  Make sure you have cleared your browser cache before doing more testing.  The error might have disappeared for _lt_u_gt_you_lt_/u_gt__co_ too._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I also disabled line 54 - // ramp.updatePhysicsBodyPosition()_sm_  I don_t_t know when that call is supposed to be used_co_ but it annoyed me_co_ so I eliminated it.  hehe. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Note_dd_ The line numbers I am quoting are for the first demo.  My version has different line numbers because I cleaned some of the old comments out of the scene._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Then I used your line 49 rotate setter to set the rotation of the ramp to a decent angle... and did a bit of ramp position tweaking (yawn)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Then I increased the friction on the ground_co_ sphere_co_ and ramp_co_ just because I wanted-to.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Then it all started acting more correctly. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Other testers... iiceman_t_s demo allows repeated pressings of any key... to +x applyImpulse to the sphere.  Fun little demo/test._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_iiceman_co_ it seems these physics engines count-on rotation quaternions... and ramp.rotate(BABYLON.Axis.Z_co_ .5_co_ BABYLON.Space.LOCAL)_sm_ is indeed a quaternion rotater (at least I think so_co_ but I am often wrong).  In BJS_co_ when you rotate a mesh with a standard .rotation property... it is Euler.  If you look at the api for our mesh_co_ there is NOT a _lt_em_gt_.rotationQuaternion_lt_/em_gt_ property on it AT ALL_co_ by default.  It gets created... if certain conditions are met._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Take a look at..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Mesh/babylon.abstractMesh.js#L189_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Mesh/babylon.abstractMesh.js#L189_lt_/a_gt__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_if (!this.rotationQuaternion) {    this.rotationQuaternion _eq_ BABYLON.Quaternion.RotationYawPitchRoll(this.rotation.y_co_ this.rotation.x_co_ this.rotation.z)_sm_    this.rotation _eq_ BABYLON.Vector3.Zero()_sm_}_lt_/pre_gt__lt_p_gt_Per this code_co_ IF the mesh has no _lt_em_gt_.rotationQuaternion_lt_/em_gt__co_ then create one here and now.  What criteria must be met for the framework to create a _lt_em_gt_.rotationQuaternion_lt_/em_gt_... that I don_t_t know._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Generally speaking_co_ avoid .rotation when using a mesh with a setPhysicsState.  Stick with .rotate() or yaw/pitch/roll things.  Also notice that when a .rotationQuaternion is created_co_ it is set to 0_co_ nulling-out any previous (euler) rotation that was applied to the mesh._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_u_gt_Position_lt_/u_gt_ing a mesh_co_ without using applyImpulse_co_ has proven to be another challenge.  In my _qt__lt_strong_gt__lt_a href_eq__qt_http_dd_//babylonjs-playground.azurewebsites.net/#A4HF3_qt_ rel_eq__qt_external nofollow_qt__gt_links from hell_lt_/a_gt__lt_/strong_gt__qt_ demo_co_ I needed to make the green box be physics-active_co_ yet I wanted to move it with Math.cos (not with applyImpulse).  I worked-around the problem in the animation function_co_ where I move the mesh_co_ then re-apply its physicsState and links with the chain.  The imposter re-positions itself to the mesh.... when I re-set the physics state on each animation cycle._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m sure there are better ways_co_ but the point I am trying to make is that once a mesh has its physics state set... it uses physics _qt_imposters_qt_.  And if you don_t_t position or rotate the mesh using a method where the imposter _qt_comes-along on the ride_qt_ (rot/pos)_co_ then you are going to have a bad time.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In other words_co_ you might find that the imposter for a ramp... is not in the same place or at the same angle... as the MESH for that ramp.  It is because you postioned or rotated the mesh_co_ but the physics imposter said _qt_Hey_co_ I want a SPECIAL kind of postioning and rotating_qt_ and refused to follow the mesh itself. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_There_t_s lots of posts in this forum... talking about positioning and rotating mesh that have their physicsState set.  ApplyImpulse is a never-fail way.  Other ways... challenging.  The more you understand quaternions_co_ the better... but we all know that it is quite impossible to understand quaternions.  heh._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_On a similar topic..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Rumor has it... we have active physics allowed on heightMaps these days.  That means we can make a bowl out of a ground mesh_co_ and roll a sphere around in it.  That would be fun_co_ huh?  A person might play with the vertex colors on the ground mesh_co_ and the sphere will leave colorful trails wherever it rolls! _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have been excessively lazy_co_ lately_co_ but maybe somebody wants to run with that_co_ huh?  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Readers_co_ please correct mistakes I have made_co_ and help me/us learn things.  Thanks!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-01-19T12:08:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Nice! That_t_s how it was supposed to look like _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ Thanks! I check with my PC at work now_co_ so I assume it really was a cache problem._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am interested in that height map with physics thing. How is that supposed to work? Does Oimo support that? Where do those rumors come from? Any resource that I could check to find out how it is supposed to work? I would like to use something like that to build a bit more complex maps for my game without having to use individual ramps like the one that I was playing with._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-06-05T08:12:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Let_t_s bring this one back _qt_up_qt_.  Sorry that you_t_ve had no replies for so long_co_ ice.  The only webGL heightmap physics I_t_ve seen so far... is the _lt_a href_eq__qt_http_dd_//schteppe.github.io/cannon.js/demos/raycastVehicle.html_qt_ rel_eq__qt_external nofollow_qt__gt_cannonJS raycast car_lt_/a_gt_.  I_t_m sure there are others.  Near line 121..._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_            var hfShape _eq_ new CANNON.Heightfield(matrix_co_ {                elementSize_dd_ 100 / sizeX            })_sm_            var hfBody _eq_ new CANNON.Body({ mass_dd_ 0 })_sm_            hfBody.addShape(hfShape)_sm__lt_/pre_gt__lt_p_gt_Notice_co_ it_t_s NOT a threeJS heightmap... but a cannonJS heightmap.  And I believe this requires the newest CannonJS... which is not your standard Babylon Playground version._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I don_t_t know if anything can be deduced from any of this_co_ but it_t_s just some observations I_t_ve done_co_ and likely poor ones.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-06-05T12:33:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey Wingy... new picture_co_ eh? Cool cool..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for the reply but I already kinda gave up on that idea and completly removed the physics engine. I think i dont rellay need it and things are easier with moveWithCollisions... even if it sometimes doesn_t_t work as I would like to either. So maybe somebody else needs it one day and makes things work but for now I am gonna try my luck with moveWithCollisions... well as soon as I have tome and mood to try again... took a long break and didn_t_t get in the mood yet again _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]