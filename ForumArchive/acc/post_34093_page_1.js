[{"Owner":"brucewong21","Date":"2017-11-19T00:11:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ noob back _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt__lt_br /_gt_\n\tJust wanted to ask what may be the best way to approach creating something like a maze from 2D positional data. (Image below to show what im trying to accomplish)_lt_br /_gt_\n\tI had created something by creating custom meshes which mapped to 2D data but even creating 7 or so planes makes the performance extremely slow._lt_br /_gt_\n\tI_t_m guessing this has something to do with computing normals or creating new vertex data... Not sure. _lt_br /_gt__lt_br /_gt_\n\tSo far each of the custom planes you see below are cloned from a base custom mesh object and then a new vertexData is created for each one based on the XY coordinates of the map and applied on the mesh. Because of the huge performance hit_co_ I_t_m thinking that this isn_t_t the best way. Can anyone provide any expertise on this please? Thank you._lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_function linedef(startVertex_co_ endVertex_co_ material) {\n  this.startVertex _eq_ startVertex_sm_\n  this.endVertex _eq_ endVertex_sm_\n\n\n  let customMesh _eq_ bustomMesh.clone()_sm_\n\n  const {x_co_ y_co_ z} _eq_ startVertex_sm_\n  \n  var positions _eq_ [\n    x_co_ 5_co_ z_co_ x_co_ 0_co_ z_co_ endVertex.x_co_ 0_co_ endVertex.z_co_\n    x_co_ 5_co_ z_co_ endVertex.x_co_ 0_co_ endVertex.z_co_ endVertex.x_co_ 5_co_ endVertex.z\n  ]_sm_\n\n  var indices _eq_ [0_co_ 1_co_ 2_co_ 3_co_ 4_co_ 5]\n\n  var vertexData _eq_ new BABYLON.VertexData()_sm_\n\n  vertexData.positions _eq_ positions_sm_\n  vertexData.indices _eq_ indices_sm_    \n\n  vertexData.applyToMesh(customMesh)_sm_\n\n  var normals _eq_ []_sm_\n\n  //Calculations of normals added\n  BABYLON.VertexData.ComputeNormals(positions_co_ indices_co_ normals)_sm_\n\n  var vertexData _eq_ new BABYLON.VertexData()_sm_\n\n  vertexData.positions _eq_ positions_sm_\n  vertexData.indices _eq_ indices_sm_\n\n  //normals _eq_ normals.map((n) _eq_&gt_sm_ {return -(n)})\n  vertexData.normals _eq_ normals_sm_ //Assignment of normal to vertexData added\n\n  var uvs _eq_ [0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 1_co_ 0_co_ 1_co_ 1]_sm_\n  vertexData.uvs _eq_ uvs_sm_\n\n  vertexData.applyToMesh(customMesh)_sm_\n\n\n\n  //var redMat _eq_ new BABYLON.StandardMaterial(_qt_redMat_qt__co_ scene)_sm_\n  //redMat.diffuseTexture _eq_ new BABYLON.Texture(_qt_textures/e1m1wall.png_qt__co_ scene)_sm_\n  //redMat.bumpTexture _eq_ new BABYLON.Texture(_qt_http_dd_//i.imgur.com/wGyk6os.png_qt__co_ scene)_sm_\n\n  //customMesh.material _eq_ redMat_sm_\n  //customMesh.material.backFaceCulling _eq_ true_sm_\n  //showNormals(customMesh_co_ 5_co_ null_co_ scene)_sm_\n  customMesh.checkCollisions _eq_ true_sm_\n  return customMesh_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/5a10cba6872ad_ScreenShot2017-11-18at4_06_51PM.png.a03e44b401b86dedf9ac278239974090.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_15781_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/5a10cba7642fd_ScreenShot2017-11-18at4_06_51PM.thumb.png.33aae9c0a7bd6e9e2736e0b10f7d0147.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Screen Shot 2017-11-18 at 4.06.51 PM.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brucewong21","Date":"2017-11-19T00:36:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tSorry I found out that it was my fault in the number of draw calls to the canvas that I used for the map editor. _lt_br /_gt_\n\tI_t_m still worried about the performance of using this method of creating custom meshes to populate my map. Is this a good way to do it or am I missing something with the normal Babylon plane object? I did_t_nt want to use the plane because I didn_t_t want to bother trying to position my planes using the position property.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-11-19T06:28:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tImho_co_ if you have  only some 2D vertex coordinates_co_ you could _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- spend a little time to compute the positions (barycenter) and the size/scaling (vector length) of each of your wall\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- then use instances (or a SPS) of planes or thin boxes by positioning and scaling them accordindgly to the previous results.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis would allow you to display the whole maze in a single draw call.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]