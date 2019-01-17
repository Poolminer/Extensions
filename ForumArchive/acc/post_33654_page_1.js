[{"Owner":"amethlex","Date":"2017-10-26T01:02:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi All_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am new to Babylon.js and are trying tiledground.  My problem is how to dispose some submeshes of tiledGround?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have tried like \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_u_gt__lt_em_gt_myTiledGround.subMeshes[3].dispose()_lt_/em_gt__lt_/u_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut it does not work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI even tried to dispose all submeshes like\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_u_gt__lt_em_gt_for (let i _eq_ 0_sm_ i &lt_sm_ myTiledGround.subMeshes.length_sm_ ++i) {_lt_/em_gt__lt_/u_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_u_gt__lt_em_gt_  myTiledGround.subMeshes_lt_em_gt_.dispose()_lt_/em_gt__lt_/em_gt__lt_/u_gt__lt_em_gt_ _lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_u_gt__lt_em_gt__lt_em_gt_}_lt_/em_gt__lt_/em_gt__lt_/u_gt__lt_em_gt_ _lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt_And also failed. _lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt_Only when I dispose the tiledGround with _lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_u_gt__lt_em_gt__lt_em_gt_  myTiledGround.dispose()_lt_/em_gt__lt_/em_gt__lt_/u_gt__lt_em_gt_. _lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_In the end_co_ I choose to maintain multiple grounds and create / dispose manually._lt_/strong_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-10-26T13:31:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya amethlex_co_ welcome to the forum.  What you describe... is expected (normal) behavior.  The subMeshes array of a tiled ground... does NOT contain normal mesh.  Each subMesh could be called a _qt_token_qt_ object... and it has no .dispose() or .setEnabled() functions.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo you know how to use your browser_t_s built-in object inspector?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s look at this tiledGround playground demo scene.  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1FXAOY%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1FXAOY#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am doing work in lines 88-96.  After scene isReady + 3 seconds... I print tiledGround.subMeshes[4]... to console.  In my Firefox_co_ if I click-upon the first _t__lt_em_gt_object_t__lt_/em_gt_ in the displayed console line_co_ my in-browser object inspector opens in the lower right corner_co_ and I can _qt_tour_qt_ through all the methods and properties on the subMeshes[4] object.  (Object inspectors are super-handy).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere_t_s not very many properties/methods upon subMeshes[4] object_co_ eh?  It doesn_t_t have a .dispose() method_co_ or a .setEnabled() method_co_ or a .visibility property.  It is NOT a standard mesh at all.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThink of a single _qt_grid-like_qt_ mesh... like our standard ground mesh.  Let_t_s pretend we have 10 by 10 cells/subdivisions in this grid mesh.  You are trying to dispose ONE CELL of that mesh.   BJS says _qt_Hey... thou shalt not dispose only PART of a mesh._qt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou are designing a _qt_terrain server_qt__co_ I bet.  You want _qt_Hey server_co_ install a new _lt_u_gt_row_lt_/u_gt_ of terrain cells_qt_ or maybe a new _lt_u_gt_column_lt_/u_gt_ of terrain cells.  You_t_re an inventor_co_ aren_t_t you?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tTo be truthful_co_ I tried a few tests and I don_t_t foresee ANY way to dispose one tile-cell (subMesh).  Perhaps more importantly_co_ you might not ever NEED to do that.  Perhaps there are other ways to addRowOfCells() or redefineColumnOfCells(). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe have SOME dynamic never-ending Perlin-noise-bumpy terrain generators available... if that might be easier (non-server-commanded terrain).  But for on-the-fly server-installed tiles... that will take some fresh thinking from smarter people than I.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ I hope I helped show you WHY tiledGround subMeshes are not allowed to be disposed.  That would be like disposing one cell of a grid mesh.  It CAN be done (put a hole in a ground grid) but it takes removing particular indices in the ground_t_s vertexData indicesKind buffer/array... which causes the two triangular faces of that cell... to NOT be rendered. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s save that for later.  For now_co_ perhaps we should wait for more comments_co_ do more thinking and tests_co_ and maybe object-inspect a subMesh to see what cool knobs (properties) are upon it_co_ and what their current values are.  Be well_co_ party on.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWarning_dd_ I am not a pro_co_ so I could have told you something that is incorrect.  I hope not_co_ but... I make plenty of mistakes.  Wingnut is still learning... and will ALWAYS be doing so.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"amethlex","Date":"2017-10-26T17:16:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Wingnut_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you so much.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo if I do need to update the tiledground_co_ I need to dispose the old tiledground and set a new tiledground_co_ right?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust like_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tthis.tiledGround _eq_ new BABYLON.Mesh.CreateTiledGround(...)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t// Update the tiledground in the loop.\n_lt_/p_gt_\n\n_lt_p_gt_\n\twhile(...) {\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthis.tiledGround.dispose().\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthis.tiledGround _eq_ new BABYLON.Mesh.CreateTiledGround(...)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t}\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever_co_ from _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/3.1/tiledground#precision-w-number-h-number-_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/3.1/tiledground#precision-w-number-h-number-_lt_/a_gt__co_ in the constructor of tiledground_co_ I do find a optional parameter - _lt_strong_gt_canBeRegenerated_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twhat is the meaning of this parameter?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr which fields can be updated if this parameter set to true and how to update?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-10-27T09:50:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tA TiledGround object extnds the Geometry object_co_ which_co_ under certain terms_co_ can be regenerated. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tRegeneration will recreate all VerticesData_co_ and will technically create a new geometry_co_ disposing of the old one.  All you need to do is set the canBeRegenerated flag to true_co_ and change the parameters according to your needs. Afterwards call the regenerate() function and you will have new data in the same object.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNotice that we are talking about the geometry (!) and not the mesh. A mesh has a geometry_co_ which is of typte TiledGround (extending _Primitive_co_ extending Geometry). So the mesh stays the same - its geometry changes. to get a mesh_t_s geometry use mesh.geometry \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"amethlex","Date":"2017-10-30T18:36:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi RaananW_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you for your clarification.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]