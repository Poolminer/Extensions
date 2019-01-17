[{"Owner":"einSelbst","Date":"2017-12-20T09:16:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everyone_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI did find quite some threads which discuss this topic in one way or another but none of them really helped me understanding what I don_t_t understand yet _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI want to use vector map tiles (like this _lt_a href_eq__qt_https_dd_//mapzen.com/projects/vector-tiles/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//mapzen.com/projects/vector-tiles/_lt_/a_gt_) on a sphere_co_ so it_t_s a globe. For that matter it could also be osm xml_co_ topojson er things like that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe thing I don_t_t really get is the step to go from the json to the image. The examples I found are either using image map tiles or don_t_t explain how the conversion was done.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere are libraries like mapbox_co_ openlayers and leaflet. Would I combine those with babylon to use them for the geo-part of things?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr is it really that I have to write my own _t_kind of library_t_ which uses the data from the geo json and draw the lines and polygons myself?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t care about extrusion or a 3d effect. I want to be able to have a sphere with eg borders_co_ roads mapped and it should be efficient  so thats why I think vectors would suite better than images. Also I like the adaptive level of details which map tiles provide.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWould be great to get some opinions_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthanks_co_ Silvio\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-12-21T10:15:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Silvio_co_ welcome to the forum.  Boy_co_ you sure know how to ask big questions.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThe BabylonJS dynamicTexture is the tool to use... to map context2d images onto spheres.  And_co_ there might be some stretching/distortion.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut... there_t_s one detail that you have not disclosed.  Do you want that sphere/texture to be zoom-able_co_ and have varying levels-of-detail (lod)_co_ depending upon viewing distances? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo you want it to have layers/layer filters (choose to show ONLY roads or show ONLY buildings_co_ etc)?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf so_co_ that is a whole new challenge_co_ and will likely require generating a new dynamicTexture with every change.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOf course_co_ a BJS camera can zoom on a dynamicTexture mapped-onto a sphere_co_ no problems. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut_co_ according to my short study of the _lt_a href_eq__qt_https_dd_//tangrams.github.io/simple-demo/_qt_ rel_eq__qt_external nofollow_qt__gt_Tangram simple demo_lt_/a_gt__co_  about every 4th mouse-wheel _qt_notch_qt_... the LOD changes.  At each LOD change_co_ the tiles likely need AT LEAST re-parsing_co_ and perhaps need re-requesting from the server.  Conceivably_co_ this could cause some gruesome delays at each LOD-change point_co_ as the context2d Image() is redrawn from the new tiles_co_ and then applied to the BabylonJS dynamicTexture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps Mapzen tiles are retrieve-once-recalc-manytimes.  But_co_ I got a feeling... _lt_s_gt_that tonight_t_s gonna be a good night_lt_/s_gt__co_ that with each LOD change_co_ new tiles need to be requested from the server.  Perhaps you can enlighten us about that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWHEN does Google maps and similar things... during zoom in/out... retrieve new tiles?  Dunno.  I would assume that it happens whenever _qt_better data_qt_ is available.  _lt_a href_eq__qt_https_dd_//tangrams.github.io/walkabout-style-more-labels/_qt_ rel_eq__qt_external nofollow_qt__gt_Walkabout_lt_/a_gt_ takes about 4 seconds to complete its redraw... when a fast zoom-in/out happens.  Perhaps add another 2-3 seconds to create a new BJS dynamicTexture from the imageData of a walkabout screen.   So_co_ you might be looking-at 7 seconds for each LOD re-draw of the sphere dynamicTexture.  Perhaps not plausible_co_ but I_t_m no expert.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSO_co_ in general_co_ I have no decent advice at all.  Sorry.  If you simply want to map a _qt_freeze-frame_qt_ of a world-sized mapzen-generated image... onto a sphere_co_ using a BJS dynamicTexture_co_ then that should be fairly easy to do_co_ and we would be glad to ATTEMPT to show you how.  But if you want to zoom on the sphere_co_ and use layers_co_ in similar ways as we see in the Tangram demo_co_ then that is one hell of a monster project.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs for learning HOW to convert tiles to images/sub-Images (portions of a context2d image)... I think learning _lt_a href_eq__qt_https_dd_//mapzen.com/documentation/tangram/Javascript-API/_qt_ rel_eq__qt_external nofollow_qt__gt_Tangram_lt_/a_gt_ is the best first-step.  Go touring through _lt_a href_eq__qt_https_dd_//raw.githubusercontent.com/tangrams/tangram/master/dist/tangram.debug.js_qt_ rel_eq__qt_external nofollow_qt__gt_its source_lt_/a_gt__co_ and search for occurrences of... oh... _t_context2d_t_ and _t_new Image()_t_... things like that.  Once you get the tiles into an image format_co_ THEN it is ready for use in a BJS dynamicTexture (likely base64 format)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTake a look at this playground_dd_  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#22FWI5%2316_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#22FWI5#16_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLine 77 has a base64 image_co_ line 64 has a dynamicTexture_co_ and line 65 gets the context2d for that dynamicTexture.  You_t_ll see that _t_ctx_t_ used in other places_co_ too.  The context2d is how you _qt_mess with_qt_ a dynamicTexture_t_s data.  With a context2d_co_ you can paint_co_ draw_co_ move_co_ overwrite... pixels_co_ and _qt_insert_qt_ little patches of image (tile images) into the BIG image being used for the dynamicTexture.  This playground shows one other cool thing... at the top.  How to include-into the playground... an external JS file_co_ such as _lt_span_gt__lt_a href_eq__qt_https_dd_//github.com/tangrams/tangram/blob/master/dist/tangram.min.js_qt_ rel_eq__qt_external nofollow_qt_ title_eq__qt_tangram.min.js_qt__gt_tangram.min.js_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut remember_co_ you still don_t_t have a system to do zooming/LOD stuff that measures camera distance to sphere_co_ and determine IF/WHEN it is time to retrieve fresher tiles and re-build the dynamicTexture context2d image.  Likely_co_ you_t_ll need to determine WHEN/HOW Tangram demos such as basic demo and walkabout... determine when new/re-parsed tiles are needed_co_ and trigger THAT... with camera distance to sphere value.  Both types of zooming... BJS ArcRotateCamera AND Walkabout... are mousewheel-based_co_ so_co_ it_t_s all possible... but perhaps not so easy.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope this helps.  It probably isn_t_t wonderful news for you_co_ though.  Stay tuned_co_ others may comment soon_co_ and perhaps wiser.  I_t_ll be nearby_co_ too... feel free to tell more thoughts... we_t_re listening.  Again_co_ if you don_t_t need LOD/details/layers to change... when zooming in-to/out-from the sphere_co_ then the task is much easier.  Do tell us about that part_co_ if you please.  thx.  Party on!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"einSelbst","Date":"2017-12-22T09:58:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Wingnut_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthank you for this already very helpful response! \n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tIt_t_s still early phase in the project I_t_m attempting and right now I_t_m trying to figure out what general options are on the table.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t_qt_Do you want that sphere/texture to be zoom-able_co_ and have varying levels-of-detail (lod)_co_ depending upon viewing distances?_qt_ \n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t-&gt_sm_ yes\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t_qt_Do you want it to have layers/layer filters (choose to show ONLY roads or show ONLY buildings_co_ etc)?_qt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t-&gt_sm_ maybe not_co_ I guess it could be figured what layers are shown at a specific zoom (like only borders if far away_co_ but also roads etc when looking closer)\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tIs it wrong to assume that if I would use a texture on the sphere I might also just use the _t_image map tiles_t_ which the map-tile providers provide? The idea is to use the vectors to get rid of the images (bc there is also a transparency thing going on in my idea _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_)\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tAlmost always the map would be zoomed in so close that it wouldn_t_t look like a sphere/globe but I thought it would be good to have one as the underlying system so that you can _t_travel around the world_t_. \n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tSo the other way I can think of is using the coordinates I get in the json and create the lines for the roads from it myself.  I would need to calculate from the lat/long to my sphere coordinate system.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tDo you see other issues with that approach? (except performance probably)\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tThank you for your welcoming attitude_co_ it_t_s very appreciated!\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2017-12-22T11:17:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey einSelbst_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHaving worked both with BabylonJS and geo libs such as OpenLayers_co_ I thought I_t_d drop by to help.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat you describe is pretty much what Cesium does_dd_ _lt_a href_eq__qt_https_dd_//www.cesium.com/open-source/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.cesium.com/open-source/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUnsurprisingly_co_ rendering geographic data in multiple formats on a globe with varying LOD etc. is a complex task. Vector tiles for example is a format of data that holds much more than just geometry (it also describes all the geographic features inside of it) and requesting a webservice to stream down data at the appropriate LOD is also a complex task. Geo libs exist because of that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso you probably won_t_t be able to _qt_slap_qt_ a map renderer such as Leaflet on a 3D mesh as the map itself is already a WebGL scene with all kinds of events and stuff going on inside it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo answer your second post_co_ you could theoretically write a custom application that renders a globe and vector features on top of it_co_ based on data received from services such as MapZen. Most geo formats are well documented and you could definitely parse them yourself. The variable LOD thing will make things much more complex IMO.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBe aware that you won_t_t receive vector data in the form of a nice series of polygons or lines that you will just be able to pass on to BabylonJS though _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ Geometries can be Polygons_co_ MultiPolygons_co_ LineStrings_co_ MultiLineStrings_co_ Points_co_ MultiPoints_co_ GeometryCollections_co_ polygons can have holes in them_co_ you may have to reproject coordinates... but it is doable for sure.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope that makes things clearer for you _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ don_t_t hesitate to ask if I was not clear enough.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]