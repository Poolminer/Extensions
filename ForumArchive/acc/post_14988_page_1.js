[{"Owner":"qqdarren","Date":"2015-06-04T10:55:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I experimented with a single 3D letter in Blender_co_ then exported to the .babylon format. It was a 214KB file! I then removed the bevel_co_ and that reduced it to 67KB. But the version with bevel is nicer. So_co_ that got me wondering if the bevel is something I can add back in once the model has been loaded? Whether something text-specific_co_ or a more generic algorithm that can smooth out the hard edges in a model?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But I suppose what I really want is the Babylon version of the Three.js TextGeometry module_dd_ _lt_a href_eq__qt_http_dd_//threejs.org/docs/#Reference/Extras.Geometries/TextGeometry_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//threejs.org/docs/#Reference/Extras.Geometries/TextGeometry_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is there already something like this?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(Actually TextGeometry is just a thin layer around ExtrudeGeometry ( _lt_a href_eq__qt_http_dd_//threejs.org/docs/#Reference/Extras.Geometries/ExtrudeGeometry_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//threejs.org/docs/#Reference/Extras.Geometries/ExtrudeGeometry_lt_/a_gt_ )_co_ which would be even more useful_co_ if I could_co_ say_co_ take a png file or the contents of a 2D canvas_co_ and turn it into a 3D bevelled object.) _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-06-04T11:29:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_No_co_ this kind of 3D Text doesn_t_t exist in BJS._lt_/p_gt__lt_p_gt_But I think you could get it in this extension _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/tree/master/Dialog/fonts_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Extensions/tree/master/Dialog/fonts_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-06-04T15:31:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can also think about using binary babylon file format to reduce the size drastically_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"qqdarren","Date":"2015-06-04T16:02:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks for the ideas. I don_t_t see any mention of the binary format in the docs for the blender exporter ( _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/page.php?p_eq_24821_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/page.php?p_eq_24821_lt_/a_gt_ ). There was mention in the release notes_co_ but it goes to a dead link_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs.com/binary_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/binary_lt_/a_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The Dialog/fonts_co_ is quite mysterious_co_ with no Readme or documentation_co_ nor even inline comments. But it doesn_t_t look like an extruder_co_ more like data-as-code for one hard-coded font_co_ perhaps?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I was thinking the _lt_span_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/f68947dd6940d44d662e70de1904b75c8bd1fd71/Babylon/Mesh/babylon.mesh.vertexData.js#L774_qt_ rel_eq__qt_external nofollow_qt__gt_CreateGroundFromHeightMap() _lt_/a_gt_is not so far from an extruder_sm_ can it be easily hacked into one?_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-06-04T17:09:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi qqdarren. You might want to take a look at this video by Jonathan Williamson_co_ of cgcookie_co_ about creating text in Blender_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//www.youtube.com/watch?v_eq_AG9pz1hMEXQ#t_eq_1039_qt_ rel_eq__qt_external nofollow_qt__gt_Creating 3D Typography_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The part that might interest you is at around 8-11.00 minutes in - his use of _qt_limited dissolve_qt_ and _qt_remove doubles_qt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I used this methodology to create this_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/text/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_Babylon.js_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It contains 9 letter + a _qt_._qt__co_ the globe and of course the animation data - the total file size is 199kb. That is roughly 19kb per letter._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now_co_ I have not tried it with a bevel applied to the text._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\t \n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-06-04T17:44:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Here is it_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs.com/converterbinary.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/converterbinary.html_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"qqdarren","Date":"2015-06-04T20:50:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_David_co_ thanks_co_ I just gave it (the binary converter) a go. Interesting results_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Plain text version_dd_ 214_co_356._lt_/p_gt__lt_p_gt_binary version_dd_ 1786_co_ plus 148_co_244 meshdata._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But_co_ a web server is likely to deliver the files gzipped_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Plain text_co_ gzipped_dd_ 53_co_887 bytes_lt_/p_gt__lt_p_gt_Binary_co_ gzipped_dd_ 586 + 54_co_142 bytes (+ extra overhead of 2 requests)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Not all bad_co_ though_co_ as I imagine the binary version is parsed more quickly once the browser receives it?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-06-05T00:29:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes as there is no parsing for binary data. they are directly copied as it to the GPU_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"qqdarren","Date":"2015-06-09T14:58:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_(Continuing from comment #4) I just found this topic_co_ from February 2015_dd__lt_/p_gt__lt_p_gt_  _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/12178-3d-text-generation/_qt__gt_http_dd_//www.html5gamedevs.com/topic/12178-3d-text-generation/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Some mention of the Dialog extension_co_ but still not quite enough to know how to use it_co_ or what it is for. And some experiments using _lt_span_gt_CreateGroundFromHeightMap (which are still a bit rough_dd_ the glyphs have no thickness_co_ and then there is a plane getting left behind)._lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-06-09T16:38:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_JCPalmer is the father of Dialog extension_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-06-09T22:12:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey_co__lt_/p_gt__lt_p_gt_Let_t_s go back to the beginning.  I was making Letter meshes into individual Javascript classes_co_ so that they could be strung together to make labels.  See fontgen.blend in extensions repository.  I needed it as inline javascript_co_ since it must load real fast to build strings on the fly.  A .babylon needs to parse the whole file every import (There are 96 letters in either font2d.js or font3d.js)_co_ and a .babylon can only build originals_co_ not clones if an original already exists.  I use the Tower of Babel exporter to generate source code._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The exported javascript files are very big_co_ partly because TOB puts in a lot of spacing to make it human readable. Font3d.js uglifies down to 962.2kb (10 kb per letter). I just went into fontgen.blend and changed bevel depth to 0.01_co_ and ran the built in script in the .blend to generate my meshes_co_ then exported &amp_sm_ uglified.  File is now 2.1 mb ( 22 kb per letter)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Before we go any farther_co_ what was the letter you generating?  Are you using the default font for Blender? Blender _qt_Text_qt_ objects are not meshes_co_ you need a process or script to convert one to a mesh.  Is your process similar to fontgen.blend?  A 64kb letter seems kind of big._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]