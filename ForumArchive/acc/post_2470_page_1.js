[{"Owner":"Dad72","Date":"2013-12-08T11:26:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_br_gt__lt_br_gt_How to save a terrain change. I used WORLDMONGER scene of example and I would like to save the terrain in a file .babylon_co_ .json or other. How it is happening?_lt_/p_gt__lt_p_gt_This feature does not seem available. We can import a HeightMap but not export or save in a json file._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you for your help._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-12-08T12:47:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello there is no built-in support for saving but you can save mesh_t_s normals and vertices to a .json file and to the inverse code for loading_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2013-12-08T13:13:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It would be possible for you to make an example in the near future. I am not about to know the ways to do so._lt_br_gt_This could be a supplement to WORLMONGER._lt_br_gt_Thank you_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-12-08T13:25:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It can be something like that_dd__lt_/p_gt__lt_p_gt_var vb _eq_ mesh.getVerticesData(BABYLON.VertexBuffer.PositionKind)_sm__lt_br_gt_var nm _eq_ mesh.getVerticesData(BABYLON.VertexBuffer.NormalKind)_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_// save VB and nm with a JSON.stringify_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_To reload you can create a mesh and then call these functions_dd__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_background-color_dd_transparent_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_newMesh.setVerticesData(savedPosition_co_ BABYLON.VertexBuffer.PositionKind_co_ false)_sm__lt_/span_gt__lt_/p_gt__lt_p_gt_newMesh.setVerticesData(savedNormal_co_ BABYLON.VertexBuffer.NormalKind_co_ false)_sm__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2013-12-08T13:35:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you very much. I will try to do something with your example._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2013-12-08T14:52:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This me returns nothing. the ground is not displayed. What have I done wrong?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I saved like this_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_$(_qt_#img_save_qt_).on(_t_click_t__co_ function() {            var vb _eq_ mesh.getVerticesData(BABYLON.VertexBuffer.PositionKind)_sm_            var nm _eq_ mesh.getVerticesData(BABYLON.VertexBuffer.NormalKind)_sm_                            $.ajax({                url_dd__t_Data/Noyau/Fonctions/Save_terrain.fonction.php_t__co_                type_dd__t_post_t__co_                data_dd__qt_vb_eq__qt_ + JSON.stringify(vb) + _qt_&amp_sm_nm_eq__qt_ + JSON.stringify(nm) + _qt_&amp_sm_terrainName_eq__qt_ + terrainName_co_                success_dd_function(data){ }            })_sm_        })_sm__lt_/pre_gt__lt_p_gt_ And load like this_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_function openTerrain(TerrainName){     $.ajax({            url_dd__t_Data/Noyau/Fonctions/Open_terrain.fonction.php_t__co_            type_dd__t_post_t__co_            data_dd_ _qt_terrainName_eq__qt_ + TerrainName_co_            success_dd_function(data){                data _eq_ data.split(_qt__sm__qt_)_sm_                var savedPosition _eq_ new Array(data[0])_sm_                var savedNormal _eq_ new Array(data[1])_sm_                LoadTerrain(savedPosition_co_ savedNormal)_sm_                            }        })_sm_}_lt_/pre_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_savedPosition  _eq_ [-50_co_0_co_50_co_-49.130434782608695_co_0_co_50_co_-48.26086956521739_co_0_co_50_co_-47.391304347826086_co_0_co_50_co_ ....]savedNormal _eq_ [0_co_1_co_0_co_0_co_1_co_0_co_0_co_1_co_0_co_0_co_1_co_0_co_0_co_1_co_0_co_0_co_1_co_0_co_0_co_1_co_0_co_0_co_1_co_0_co_0_co_1_co_0_co_0_co_1_co_ ...]_lt_/pre_gt__lt_p_gt_I reloaded the terrain as this_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_function LoadTerrain(savedPosition_co_ savedNormal){    // Code.....    // ....    ground _eq_ BABYLON.Mesh.CreateGround(_qt_ground_qt__co_ 100_co_ 100_co_ 115_co_ scene_co_ true)_sm_            ground.setVerticesData(savedPosition_co_ BABYLON.VertexBuffer.PositionKind_co_ false)_sm_    ground.setVerticesData(savedNormal_co_ BABYLON.VertexBuffer.NormalKind_co_ false)_sm_    var groundMaterial _eq_ new WORLDMONGER.GroundMaterial(_qt_ground_qt__co_ scene_co_ sun)_sm_    ground.material _eq_ groundMaterial_sm_    ground.position.y _eq_ -2.0_sm_    // Code.....    // ....}_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-12-08T17:08:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Is the new ground the same definition as the previous one? (position_co_ vertices count_co_ etc..)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2013-12-08T17:37:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I am not on understand what you want to say._lt_br_gt_You want to say if it has the same dimension._lt_br_gt__lt_br_gt_In made if i fact_dd_(use CreateGround)_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_ground _eq_ BABYLON.Mesh.CreateGround(_qt_ground_qt__co_ 100_co_ 100_co_ 115_co_ scene_co_ true)_sm_    ground.setVerticesData(savedPosition_co_ BABYLON.VertexBuffer.PositionKind_co_ false)_sm_ground.setVerticesData(savedNormal_co_ BABYLON.VertexBuffer.NormalKind_co_ false)_sm__lt_/pre_gt__lt_p_gt_The terrain not displayed._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If i done _dd_ (use CreateGroundFromHeightMap)_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_ground _eq_ BABYLON.Mesh.CreateGroundFromHeightMap(_qt_ground_qt__co_ _qt_Terrain/heightMap/heightMap.png_qt__co_ 100_co_ 100_co_ 115_co_ 0_co_ 14_co_ scene_co_ true)_sm_ground.setVerticesData(savedPosition_co_ BABYLON.VertexBuffer.PositionKind_co_ false)_sm_ground.setVerticesData(savedNormal_co_ BABYLON.VertexBuffer.NormalKind_co_ false)_sm__lt_/pre_gt__lt_p_gt_The ground remains with the values of the heightmap. The changes are not taken into account._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_PS_dd_ No problem in the console._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2013-12-08T18:38:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I found the problem_lt_br_gt_ _lt_br_gt_I had to convert Json in Array _eq_&gt_sm_ $.parseJSON()_sm__lt_br_gt_I have therefore done_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-auto_qt__gt_ground.setVerticesData($.parseJSON(savedPosition)_co_ BABYLON.VertexBuffer.PositionKind_co_ true)_sm_ground.setVerticesData($.parseJSON(savedNormal)_co_ BABYLON.VertexBuffer.NormalKind_co_ true)_sm__lt_/pre_gt__lt_p_gt_It must be also correct this_lt_br_gt_Error (new Array)_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-auto_qt__gt_var savedPosition _eq_ new Array(data[0])_sm_var savedNormal _eq_ new Array(data[1])_sm__lt_/pre_gt__lt_p_gt_Fixe_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-auto_qt__gt_var savedPosition _eq_ data[0]_sm_var savedNormal _eq_ data[1]_sm__lt_/pre_gt__lt_p_gt_ _lt_br_gt_It works correctly_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2013-12-11T14:15:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ve add in the file ElevationControl.js of WorlMonger this code to supplement the engine. I share my contribution._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-auto_qt__gt_    WORLDMONGER.Ground _eq_ function (meshGround_co_ savedPosition_co_ savedNormal)    {        this.meshGround _eq_ meshGround_sm_        this.savedPosition _eq_ savedPosition_sm_        this.savedNormal _eq_ savedNormal_sm_        this.VerticesPosition _eq_ 0_sm_        this.VerticesNormal _eq_ 0_sm_    }_sm_        WORLDMONGER.Ground.prototype.Save _eq_ function ()    {                this.VerticesPosition _eq_ JSON.stringify(this.meshGround.getVerticesData(BABYLON.VertexBuffer.PositionKind))_sm_        this.VerticesNormal _eq_ JSON.stringify(this.meshGround.getVerticesData(BABYLON.VertexBuffer.NormalKind))_sm_    }_sm_        WORLDMONGER.Ground.prototype.Load _eq_ function ()    {        this.meshGround.setVerticesData($.parseJSON(this.savedPosition)_co_ BABYLON.VertexBuffer.PositionKind_co_ true)_sm_        this.meshGround.setVerticesData($.parseJSON(this.savedNormal)_co_ BABYLON.VertexBuffer.NormalKind_co_ true)_sm_        }_sm_   _lt_/pre_gt__lt_p_gt_Use Save _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-auto_qt__gt_var buffer _eq_ new WORLDMONGER.Ground(ground)_sm_buffer.Save()_sm_    var vb _eq_ buffer.VerticesPosition_sm_var nm_eq_ buffer.VerticesNormal_sm_$.ajax({ url_dd_ _qt_Save_terrain.function.php_qt__co_ type_dd__t_post_t__co_ data_dd__qt_vb_eq__qt_ + vb + _qt_&amp_sm_nm_eq__qt_ + mn })_sm_ //Create the file_co_ but you can do otherwise_lt_/pre_gt__lt_p_gt_Use Load _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-auto_qt__gt_$.ajax({url_dd__t_Open_terrain.function.php_t__co_ type_dd__t_post_t__co_ success_dd_function(data){ // Load the file saved_co_ but you can do otherwise    data _eq_ data.split(_qt__sm__qt_)_sm_ var savedPosition _eq_ data[0]_sm_ var savedNormal _eq_ data[1]_sm_ LoadTerrain(savedPosition_co_ savedNormal)_sm_}})_sm_function LoadTerrain(savedPosition_co_ savedNormal){    //Other code (Create engin_co_ scene_co_ cam_co_ light ...)    ground _eq_ BABYLON.Mesh.CreateGround(_qt_ground_qt__co_ 100_co_ 100_co_ 115_co_ scene_co_ true)_sm_    var buffer _eq_ new WORLDMONGER.Ground(ground_co_ savedPosition_co_ savedNormal)_sm_    buffer.Load()_sm_    //Other code (Create material_co_ water...)}_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bentwonk","Date":"2017-03-27T13:01:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tthank you for this Dad72\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]