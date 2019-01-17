[{"Owner":"Temechon","Date":"2014-01-28T08:36:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi all_co_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Will it be possible in a next future to create a plane shape with more than 4 vertices ? I_t_ve been trying to create a new method based on function _qt_BABYLON.Mesh.CreatePlane_qt__co_ but I_t_m stuck with indices._lt_/p_gt__lt_p_gt_What I would need is a polygon triangulation algorithm..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is it planed in a next release of Babylon_co_ or should I implement it myself ? I think about the ear clipping method (I_t_m not looking for performance_co_ just feasability)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-01-28T23:43:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You need a plane with more than 2 faces? You can see what I did with the createGround in this case?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2014-01-30T06:18:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well_co_ I need a plane with more than 2 faces_co_ yes._lt_/p_gt__lt_p_gt_But what I need the most is the possibility to handle any n-side polygone in a specific axis (like a plane today)_co_ that can be concave or convex. This n-side polygon could be then textured_co_ updated_co_ like a normal mesh._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Yes_co_ I checked createGround_co_ but I don_t_t think it answer to my problem here._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-01-30T21:37:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_i understand...Maths are required here _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2014-01-30T21:44:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ But I_t_m quite sure you know what to do here _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So_co_ is it planned somehow ? Or do I have to (try to) implement it myself ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-01-31T17:43:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hehe_co_ Not planned right now (still working on the serialization tool)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2014-02-12T09:30:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello again_co_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In order to solve my problem (create a ground with more than 4 sides/vertices)_co_ I use the wonderful library poly2tri.js (_lt_a href_eq__qt_https_dd_//github.com/r3mi/poly2tri.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/r3mi/poly2tri.js_lt_/a_gt_). _lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_Here is my solution._lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_First_co_ you have to include poly2tri.min.js in your project _dd_ _lt_/span_gt__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-html_qt__gt_&lt_sm_script type_eq__qt_text/javascript_qt_ src_eq__qt_js/lib/poly2tri.min.js_qt_&gt_sm_&lt_sm_/script&gt_sm__lt_/pre_gt__lt_p_gt_Then_co_ I used the function createFreeGround (created by Loic - thanks _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_&lt_sm_fileStore.core_Emoticons&gt_sm_/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ ). It takes in parameters an id (the mesh name)_co_ a list of vertices (vList) and a scene._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var createFreeGround _eq_ function(id_co_ vList_co_ scene_co_ updatable) {    var ground _eq_ new BABYLON.Mesh(id_co_ scene)_sm_    var normals _eq_ []_sm_    var positions _eq_ []_sm_    var uvs _eq_ []_sm_    var indices _eq_ []_sm_           //Get the uv map dimensions    var uvmapxmin _eq_ vList[0].x_sm_    var uvmapzmin _eq_ vList[0].z_sm_    var uvmapxmax _eq_ vList[0].x_sm_    var uvmapzmax _eq_ vList[0].z_sm_     vList.forEach(function(v) {        if(v.x &lt_sm_ uvmapxmin) {            uvmapxmin _eq_ v.x_sm_        }        else if(v.x &gt_sm_ uvmapxmax) {            uvmapxmax _eq_ v.x_sm_        }        if(v.z &lt_sm_ uvmapzmin) {            uvmapzmin _eq_ v.z_sm_        }        else if(v.z &gt_sm_ uvmapzmax) {            uvmapzmax _eq_ v.z_sm_        }    })_sm_        // Fill contours_co_ normals_co_ positions &amp_sm_ uvs    var currentIndice _eq_ 0_sm_\t// array contour is used to triangulate the polygon    var contours _eq_ []_sm_    vList.forEach(function(v) {        contours.push({x_dd_v.x_co_ y_dd_v.z_co_ indice_dd_currentIndice++})_sm_\t\t// This is a ground _dd_ normals up in the air !         normals.push(0_co_ 1.0_co_ 0)_sm_        positions.push(v.x_co_ 0_co_ v.z)_sm_        uvs.push((v.x - uvmapxmin) / (uvmapxmax - uvmapxmin)_co_ (v.z - uvmapzmin) / (uvmapzmax - uvmapzmin))_sm_    })_sm_        // Triangulate    var swctx _eq_ new poly2tri.SweepContext(contours)_sm_    swctx.triangulate()_sm_        // retrieve indices    var triangles _eq_ swctx.getTriangles()_sm_    triangles.forEach(function(t) {\t\tt.getPoints().forEach(function(p) { \t\t\tindices.push(p.indice)_sm_\t\t})_sm_    })_sm_        // Set data    ground.setVerticesData(positions_co_ BABYLON.VertexBuffer.PositionKind_co_ updatable)_sm_    ground.setVerticesData(normals_co_ BABYLON.VertexBuffer.NormalKind_co_ updatable)_sm_    ground.setVerticesData(uvs_co_ BABYLON.VertexBuffer.UVKind_co_ updatable)_sm_    ground.setIndices(indices)_sm_        // Set dimensions of the ground    //var width _eq_ uvmapxmax - uvmapxmin_sm_    //var height _eq_ uvmapzmax - uvmapzmin_sm_        return ground_sm_}_lt_/pre_gt__lt_p_gt_And it works !! (see screenshot attached)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It is not very difficult to understand_co_ but if you have any questions about it_co_ feel free to ask _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_&lt_sm_fileStore.core_Emoticons&gt_sm_/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_02_2014/post-5218-0-70265800-1392197409.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_02_2014/post-5218-0-70265800-1392197409.jpg_qt_ data-fileid_eq__qt_952_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-5218-0-70265800-1392197409.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-02-13T11:00:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well done!!!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2017-05-15T23:42:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_24009_qt_ data-ipsquote-contentid_eq__qt_3396_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1392197422_qt_ data-ipsquote-userid_eq__qt_5218_qt_ data-ipsquote-username_eq__qt_Temechon_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 2014-2-12 at 8_dd_30 PM_co_ Temechon said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThen_co_ I used the function createFreeGround (created by Loic - thanks _lt_img alt_eq__qt__sm_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ /_gt_ ). It takes in parameters an id (the mesh name)_co_ a list of vertices (vList) and a scene.\n\t\t_lt_/p_gt_\n\n\t\t_lt_pre class_eq__qt_ipsCode prettyprint prettyprinted_qt__gt_\n\n_lt_span class_eq__qt_kwd_qt__gt_var_lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_ createFreeGround _lt_/span_gt__lt_span class_eq__qt_pun_qt__gt__eq__lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_ _lt_/span_gt__lt_span class_eq__qt_kwd_qt__gt_function_lt_/span_gt__lt_span class_eq__qt_pun_qt__gt_(_lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_id_lt_/span_gt__lt_span class_eq__qt_pun_qt__gt__co__lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_ vList_lt_/span_gt__lt_span class_eq__qt_pun_qt__gt__co__lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_ scene_lt_/span_gt__lt_span class_eq__qt_pun_qt__gt__co__lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_ updatable_lt_/span_gt__lt_span class_eq__qt_pun_qt__gt_)_lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_ _lt_/span_gt__lt_span class_eq__qt_pun_qt__gt_{_lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_    _lt_/span_gt__lt_span class_eq__qt_kwd_qt__gt_var_lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_ ground _lt_/span_gt__lt_span class_eq__qt_pun_qt__gt__eq__lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_ _lt_/span_gt__lt_span class_eq__qt_kwd_qt__gt_new_lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_ BABYLON_lt_/span_gt__lt_span class_eq__qt_pun_qt__gt_._lt_/span_gt__lt_span_gt_Mesh_lt_/span_gt__lt_span class_eq__qt_pun_qt__gt_(_lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_id_lt_/span_gt__lt_span class_eq__qt_pun_qt__gt__co__lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_ scene_lt_/span_gt__lt_span class_eq__qt_pun_qt__gt_)_sm__lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_    _lt_/span_gt__lt_span class_eq__qt_kwd_qt__gt_var_lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_ normals _lt_/span_gt__lt_span class_eq__qt_pun_qt__gt__eq__lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_ _lt_/span_gt__lt_span class_eq__qt_pun_qt__gt_[]_sm__lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_    _lt_/span_gt__lt_span class_eq__qt_kwd_qt__gt_var_lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_ positions _lt_/span_gt__lt_span class_eq__qt_pun_qt__gt__eq__lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_ _lt_/span_gt__lt_span class_eq__qt_pun_qt__gt_[]_sm__lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_    _lt_/span_gt__lt_span class_eq__qt_kwd_qt__gt_var_lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_ uvs _lt_/span_gt__lt_span class_eq__qt_pun_qt__gt__eq__lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_ _lt_/span_gt__lt_span class_eq__qt_pun_qt__gt_[]_sm__lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_    _lt_/span_gt__lt_span class_eq__qt_kwd_qt__gt_var_lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_ indices _lt_/span_gt__lt_span class_eq__qt_pun_qt__gt__eq__lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_ _lt_/span_gt__lt_span class_eq__qt_pun_qt__gt_[]_sm__lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_           _lt_/span_gt__lt_span class_eq__qt_com_qt__gt_//Get the uv map dimensions    var uvmapxmin _eq_ vList[0].x_sm_    var uvmapzmin _eq_ vList[0].z_sm_    var uvmapxmax _eq_ vList[0].x_sm_    var uvmapzmax _eq_ vList[0].z_sm_     vList.forEach(function(v) {        if(v.x &lt_sm_ uvmapxmin) {            uvmapxmin _eq_ v.x_sm_        }        else if(v.x &gt_sm_ uvmapxmax) {            uvmapxmax _eq_ v.x_sm_        }        if(v.z &lt_sm_ uvmapzmin) {            uvmapzmin _eq_ v.z_sm_        }        else if(v.z &gt_sm_ uvmapzmax) {            uvmapzmax _eq_ v.z_sm_        }    })_sm_        // Fill contours_co_ normals_co_ positions &amp_sm_ uvs    var currentIndice _eq_ 0_sm_\t// array contour is used to triangulate the polygon    var contours _eq_ []_sm_    vList.forEach(function(v) {        contours.push({x_dd_v.x_co_ y_dd_v.z_co_ indice_dd_currentIndice++})_sm_\t\t// This is a ground _dd_ normals up in the air !         normals.push(0_co_ 1.0_co_ 0)_sm_        positions.push(v.x_co_ 0_co_ v.z)_sm_        uvs.push((v.x - uvmapxmin) / (uvmapxmax - uvmapxmin)_co_ (v.z - uvmapzmin) / (uvmapzmax - uvmapzmin))_sm_    })_sm_        // Triangulate    var swctx _eq_ new poly2tri.SweepContext(contours)_sm_    swctx.triangulate()_sm_        // retrieve indices    var triangles _eq_ swctx.getTriangles()_sm_    triangles.forEach(function(t) {\t\tt.getPoints().forEach(function(p) { \t\t\tindices.push(p.indice)_sm_\t\t})_sm_    })_sm_        // Set data    ground.setVerticesData(positions_co_ BABYLON.VertexBuffer.PositionKind_co_ updatable)_sm_    ground.setVerticesData(normals_co_ BABYLON.VertexBuffer.NormalKind_co_ updatable)_sm_    ground.setVerticesData(uvs_co_ BABYLON.VertexBuffer.UVKind_co_ updatable)_sm_    ground.setIndices(indices)_sm_        // Set dimensions of the ground    //var width _eq_ uvmapxmax - uvmapxmin_sm_    //var height _eq_ uvmapzmax - uvmapzmin_sm_        return ground_sm_}_lt_/span_gt__lt_/pre_gt_\n\n\t\t_lt_p_gt_\n\t\t\tAnd it works !! (see screenshot attached)\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIt is not very difficult to understand_co_ but if you have any questions about it_co_ feel free to ask _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_02_2014/post-5218-0-70265800-1392197409.jpg_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_post-5218-0-70265800-1392197409.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_952_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_02_2014/post-5218-0-70265800-1392197409.jpg_qt_ /_gt__lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI_t_ve tried to use your createFreeGround function but my shape doesn_t_t show up and I always ends up with zero vertices (I checked with the inspector).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried using this shape\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_\t\tvar pentagon _eq_ [\n\t\t\tnew BABYLON.Vector3(0_co_0_co_-1)_co_\n\t\t\tnew BABYLON.Vector3(1_co_0_co_0)_co_\n\t\t\tnew BABYLON.Vector3(1_co_0_co_1)_co_\n\t\t\tnew BABYLON.Vector3(-1_co_0_co_1)_co_\n\t\t\tnew BABYLON.Vector3(-1_co_0_co_0)\n\t\t]_sm_\n\t\tvar pentagonShape _eq_ createFreeGround(_qt_pentagon_qt__co_pentagon_co_scene_co_false)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIs there something wrong with the shape I_t_m using?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2017-05-16T12:34:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAll good. I figured it out.  I used this instead_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_  var vertexData _eq_ new BABYLON.VertexData()_sm_\n\n  vertexData.positions _eq_ positions_sm_\n  vertexData.indices _eq_ indices_sm_\n  vertexData.applyToMesh(someMesh)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2017-05-16T13:21:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThis code is veeeery old _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ You can also use something like this_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs.com/demos/polygon/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/demos/polygon/_lt_/a_gt_ for better results.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]