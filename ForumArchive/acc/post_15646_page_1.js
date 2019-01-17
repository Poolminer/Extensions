[{"Owner":"jerome","Date":"2015-07-10T09:50:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m trying to add some simplified skull meshes into my SPS._lt_/p_gt__lt_p_gt_I_t_m following this doc and this related PG _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2JBSNA%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2JBSNA#4_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The thing I don_t_t get is _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is the original mesh modified after the simplication process (meaning _dd_ it has then less vertices and indices than before) ?_lt_/p_gt__lt_p_gt_Or are new instances created somewhere (submeshes ?) ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-07-10T11:20:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Jerome_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_These are the instances that are modified/simplify and not the original._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-07-10T11:26:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_and added as LOD level _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_I am working on moving the entire implementation to a worker_co_ maybe I will find the time to do it for 2.2._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-07-10T11:29:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_So_co_ given a mesh_co_ how can I access its first simplified instance ?_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var mesh _eq_ aBrandNewMesh_sm_mesh.simplify(blah_co_ blah_co_ ...)_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-07-10T11:39:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_mesh.simplify({...}_co_ true_co_ QUADRATIC_co_function() {   var simplified _eq_ mesh.getLODLevelAtDistance(distance)_sm_})_sm__lt_/pre_gt__lt_p_gt_where _qt_distance_qt_ can be set by you_co_ as you gave it in the settings._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Another way aould be to directly use the simplification_co_ I documented it shortly here - _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/page.php?p_eq_24822_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/page.php?p_eq_24822_lt_/a_gt_ _co_ scroll all the way down. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-07-10T11:45:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok_co_ that_t_s exactly what I need _dd_ the direct simplication !_lt_/p_gt__lt_p_gt_I need to import the skull mesh_co_ then to simplify it_co_ then use a simplified instance as a shape model for my 3D particles (it runs for now with complete skulls but the FPS decreases to 30 with only 6 skulls)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So what is the way to do ?_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var decimator _eq_ new QuadraticErrorSimplification(skull)_sm__lt_/pre_gt__lt_p_gt_Then I set_co_ if needed the _lt_em_gt_decimator_lt_/em_gt_ properties (iteration_co_ aggressiveness_co_ etc)._lt_/p_gt__lt_p_gt_Then ... ?_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_mesh.simplify( what here ? I don_t_t need distance_co_ neither many different decimation levels)_sm__lt_/pre_gt__lt_p_gt_How do I actually run the decimation and where is the simplified instance ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-07-10T12:34:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_you will need to give one single Settings object. The distance will technically not be used. So_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-auto_qt__gt_var decimator _eq_ new QuadraticErrorSimplification(skull)_sm_decimator.simplify({ quality_dd_ 0.9_co_ distance_dd_ 25_co_ optimizeMesh_dd_true }_co_ function(newMesh) {   console.log(_qt_Profit!!!_qt__co_ newMesh)_sm_})_sm__lt_/pre_gt__lt_p_gt_will give you newMesh_co_ that will be the mesh you wanted._lt_br_gt_In theory this should work _dd_-)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-07-10T12:55:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The theory works _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_I_t_m going to do a PG to show this !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-07-10T12:56:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_oh_co_ I love it when theory works...  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-07-10T13:04:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_thannnnk so much you Raanan !!! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The results locally are impressive in Chrome _dd_ I can emit 100 skulls at 60 FPS here_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_[EDIT] 150 is the limit at 60 FPS on my machine_lt_/p_gt__lt_p_gt_I feel surprised by my own SPS... and BJS power !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-07-10T19:14:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_BTW Raanan_co_ I think the _lt_em_gt_simplify()_lt_/em_gt_ method is an excellent candidate for being ported to workers !  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-07-12T19:02:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yep_co_ it_t_s all on the to do list that is getting bigger all the time. The thing about this list_co_ is that my son keeps on adding things on top  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ I hope to get it finished with 2.2._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-07-13T07:22:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I see we are all in the same case_co_ with a BIG todo list and not enough free time xD_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-07-13T07:34:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m working on a time-extender implementation here _dd_ 36h per day is my goal _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-07-13T08:26:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_are there any positive results towards this goal? or is it also on your to-do list? _dd_-)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-07-13T08:49:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_recursive humor ! love it _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_laugh.png_qt_ alt_eq__qt__dd_lol_dd__qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]