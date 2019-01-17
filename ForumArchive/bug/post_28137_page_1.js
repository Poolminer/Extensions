[{"Owner":"Dad72","Date":"2017-02-01T14:27:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a ground serialize with _lt_em_gt_SerializeMesh()_lt_/em_gt_ that I save in a babylon file. When I reload this file with _lt_em_gt_ImportMesh_dd_ _lt_/em_gt_ _lt_em_gt_getHeightAtCoordinates_co_ updateCoordinateHeights_co_ optimize_lt_/em_gt_ ... does not work.  In fact everything concerning the ground create with _lt_em_gt_CreateGroundFromHeightMap()_lt_/em_gt_ or _lt_em_gt_CreateGround()_lt_/em_gt_ is serialized as mesh but can no longer be used as a terrain. We can only edit the properties on the mesh and not the geometry that no longer exists after serialization.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMay be missing a serialization for the ground_co_ like _lt_strong_gt__lt_em_gt_serialiserGround()_lt_/em_gt__lt_/strong_gt_ in addition to _lt_em_gt_serializeMesh()_lt_/em_gt_. Or convert a mesh to ground after using _lt_em_gt_ImportMesh _lt_/em_gt_for used_lt_em_gt_ getHeightAtCoordinates_lt_/em_gt_. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks DK\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-02-01T15:10:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think that a de-serialized mesh is just a mesh_co_ not a groundMesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe is there an elegant way in JS to give to the deserialized mesh all the groundMesh methods ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tsomething like _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tdeserializedGround.prototype _eq_ BABYLON.GroundMesh.prototype_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDunno ...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-02-01T16:17:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tJerome is right. A groundMesh is deserialized as a regular mesh. If someone wants to step in to add this option (should not be too difficult) I_t_ll be happy to review the PR\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-02-01T16:31:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI would be delighted to offer a PR_co_ but I do not know what to change to add or make this option. Maybe _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_ _lt_/span_gt_knows what to do to add this and make a PR.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-02-01T17:37:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tno idea_co_ sorry.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-02-01T17:39:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_161719_qt_ data-ipsquote-contentid_eq__qt_28137_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1485961809_qt_ data-ipsquote-userid_eq__qt_5453_qt_ data-ipsquote-username_eq__qt_jerome_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ jerome said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tDeserializedGround.prototype _eq_ BABYLON.GroundMesh.prototype_sm_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYou said something like that_co_ but I do not understand\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-02-01T18:35:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think I understood nothing. When I do this_co_ it does not work.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_newMeshes[0].prototype _eq_ BABYLON.GroundMesh.prototype_sm_\nnewMeshes[0].updateCoordinateHeights()_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_161724_qt_ data-ipsquote-contentid_eq__qt_28137_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1485965860_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIf someone wants to step in to add this option (should not be too difficult)\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tIf Jerome says has no idea_co_ I think it_t_s difficult. I do not even know what file to edit and what to add.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-02-01T19:18:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI don_t_t really know how to make typescript class inheritance in javascript actually\n_lt_/p_gt_\n\n_lt_p_gt_\n\tImho_co_ the right way would be to make the de-serialized mesh inherit from the GroundMesh class.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-02-03T17:54:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI can not find a solution for that.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-02-03T19:32:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell_co_ I will change my method of creation and save for the terrain. ImportMesh does not load a terrain and serializeMesh_co_ does not serialize a terrain.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]