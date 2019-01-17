[{"Owner":"davychen","Date":"2016-08-26T09:15:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thi guys_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti_t_ve a question_co_ please help.\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti have a tree mesh in the scene_co_ and i created some instances of the tree to make a forest_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti expect when i walking through the forest_co_ the trees far before my view to fade in from alpha 0 to alpha 1.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tseting alpha of material works_co_ but all instances has but one material_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti can_t_t set separate trees to different alpha.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tand if i set visibility of mesh_co_ it doesn_t_t work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfrom this link_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Transparency_and_How_Meshes_Are_Rendered_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/Transparency_and_How_Meshes_Are_Rendered_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti saw_co_ to use mesh alpha_co_ i need to export model with vertices alpha channel.\n_lt_/p_gt_\n\n_lt_p_gt_\n\thow can i do it with babylon exporter?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthank you.\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/Clipboard01.jpg.c5f90986123c15f54aa6ed1b392ce223.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_9210_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/Clipboard01.thumb.jpg.f23c07cf748f1b87d4aa5d9307b4dfbf.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Clipboard01.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-08-26T11:39:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tcamera.maxZ _eq__lt_br /_gt_\n\twill do the trick in 99% _lt_br /_gt__lt_br /_gt_\n\there are more performance optimizations_lt_br /_gt__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tplaying around with alpha channel for trees ? \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davychen","Date":"2016-08-26T12:39:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_141495_qt_ data-ipsquote-contentid_eq__qt_24774_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1472211543_qt_ data-ipsquote-userid_eq__qt_21965_qt_ data-ipsquote-username_eq__qt_Nabroski_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t48 minutes ago_co_ Nabroski said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tcamera.maxZ _eq__lt_br /_gt_\n\t\t\twill do the trick in 99% _lt_br /_gt__lt_br /_gt_\n\t\t\there are more performance optimizations_lt_br /_gt__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\t\t\tplaying around with alpha channel for trees ? \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tthank you_co_ Nabroski_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyour tips really help.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tit solves one of my problem_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmy ground is large_co_ and i can_t_t cover all the area in sight with so many trees_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tso thank you.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut i still want mesh alpha fading effect_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcould you give more suggestions?_lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-08-26T12:44:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWould a fog effect work for you?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/tutorials/Environment_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/tutorials/Environment_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-08-26T12:58:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYes im out of time_co_ its a value_co_ you have to animate it in a certain way! Thank you Adam!_lt_br /_gt__lt_br /_gt_\n\tBit sketchy and nooby_dd__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1JZWGU%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1JZWGU#0_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-08-26T13:03:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMaybe LOD would work for you?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#14ESWC_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#14ESWC_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tusing alpha_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#14ESWC%2314_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#14ESWC#14_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davychen","Date":"2016-08-26T13:55:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_141508_qt_ data-ipsquote-contentid_eq__qt_24774_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1472216635_qt_ data-ipsquote-userid_eq__qt_4289_qt_ data-ipsquote-username_eq__qt_adam_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t38 minutes ago_co_ adam said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tMaybe LOD would work for you?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#14ESWC_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#14ESWC_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tusing alpha_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#14ESWC%2314_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#14ESWC#14_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\thi Adam_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti think using fog is a good choice.\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti_t_ll see if fog can coexist with skybox.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthank you.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-08-26T13:56:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#73AEY%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#73AEY#0_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davychen","Date":"2016-08-26T14:00:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_141507_qt_ data-ipsquote-contentid_eq__qt_24774_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1472216295_qt_ data-ipsquote-userid_eq__qt_21965_qt_ data-ipsquote-username_eq__qt_Nabroski_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t57 minutes ago_co_ Nabroski said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tYes im out of time_co_ its a value_co_ you have to animate it in a certain way! Thank you Adam!_lt_br /_gt__lt_br /_gt_\n\t\t\tBit sketchy and nooby_dd__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1JZWGU%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1JZWGU#0_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\thi Nabroski_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthank you for the code sample_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut you know_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tin this sample_co_ transparent is set through alpha property of material.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tin my case_co_ all the trees are instances of one tree mesh_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tall the instances share a common material_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif i set alpha of material_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tall the trees will have same alpha level._lt_img alt_eq__qt__dd_huh_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_huh.png_qt_ title_eq__qt__dd_huh_dd__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davychen","Date":"2016-08-26T14:39:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_141516_qt_ data-ipsquote-contentid_eq__qt_24774_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1472219799_qt_ data-ipsquote-userid_eq__qt_4289_qt_ data-ipsquote-username_eq__qt_adam_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t41 minutes ago_co_ adam said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.azurewebsites.net/#73AEY%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.azurewebsites.net/#73AEY#0_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tthank you for the sample_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tit_t_s very useful.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-08-26T14:48:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI don_t_t think you can on instances they would stay like their initial state _co_ you would need to do a clone I believe._lt_br /_gt__lt_br /_gt_\n\t(if im picking up what your laying down my bad if its off topic I was speed reading before work here)_lt_br /_gt__lt_br /_gt_\n\tand how are you setting the visibility? I would recomend using .setEnabled(false)_sm_ on the mesh and drop it from the draw stack entirely.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-08-26T14:55:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_141517_qt_ data-ipsquote-contentid_eq__qt_24774_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1472220039_qt_ data-ipsquote-userid_eq__qt_18073_qt_ data-ipsquote-username_eq__qt_davychen_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t53 minutes ago_co_ davychen said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tin my case_co_ all the trees are instances of one tree mesh_co_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tall the instances share a common material_co_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tif i set alpha of material_co_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tall the trees will have same alpha level._lt_img alt_eq__qt__dd_huh_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_huh.png_qt_ title_eq__qt__dd_huh_dd__qt_ /_gt__lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThis is my 296 Post in this Forum_co_ and now you understand why\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-08-26T15:04:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYeah so then\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt__lt_span_gt_var_lt_/span_gt_ originalMesh _lt_span_gt__eq__lt_/span_gt_ _lt_span_gt_getOriginalMesh_lt_/span_gt__lt_span_gt_(_lt_/span_gt__lt_span_gt_)_lt_/span_gt__lt_span_gt__sm__lt_/span_gt_  _lt_/code_gt__lt_/pre_gt_\n\n_lt_pre_gt_\n_lt_code_gt__lt_span_gt_var_lt_/span_gt_ newInstance _lt_span_gt__eq__lt_/span_gt_ originalMesh_lt_span_gt_._lt_/span_gt__lt_span_gt_createInstance_lt_/span_gt__lt_span_gt_(_lt_/span_gt__lt_span_gt__qt_index_dd_ _qt__lt_/span_gt_ _lt_span_gt_+_lt_/span_gt_ index_lt_span_gt_)_lt_/span_gt__lt_span_gt__sm__lt_/span_gt__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\twill make an exact duplicate of the object that shares a single reference to everything that is handled by draws like materials ect... things you can change are scale position and rotation._lt_br /_gt__lt_br /_gt_\n\tnow a\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt__lt_span_gt_var_lt_/span_gt_ newClone _lt_span_gt__eq__lt_/span_gt_ originalMesh_lt_span_gt_._lt_/span_gt__lt_span_gt_clone_lt_/span_gt__lt_span_gt_(_lt_/span_gt__lt_span_gt__qt_index_dd_ _qt__lt_/span_gt_ _lt_span_gt_+_lt_/span_gt_ index_lt_span_gt_)_lt_/span_gt__lt_span_gt__sm__lt_/span_gt__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tUses the same mesh for the draw but creates new references of materials so you can change them independently.  A clone is slightly more system intensive but is the way to reuse a mesh with a different material as apposed to doing a whole new draw call.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-08-26T15:34:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI love when the community is handling questions in such a brilliant way!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davychen","Date":"2016-08-27T14:57:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_141532_qt_ data-ipsquote-contentid_eq__qt_24774_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1472223865_qt_ data-ipsquote-userid_eq__qt_19199_qt_ data-ipsquote-username_eq__qt_Pryme8_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t23 hours ago_co_ Pryme8 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tYeah so then\n\t\t_lt_/p_gt_\n\n\t\t_lt_pre_gt_\n\n_lt_code_gt__lt_span_gt__lt_span_gt_var_lt_/span_gt__lt_/span_gt_ originalMesh _lt_span_gt__eq__lt_/span_gt_ _lt_span_gt_getOriginalMesh_lt_/span_gt__lt_span_gt_(_lt_/span_gt__lt_span_gt_)_lt_/span_gt__lt_span_gt__sm__lt_/span_gt_  _lt_/code_gt__lt_/pre_gt_\n\n\t\t_lt_pre_gt_\n\n_lt_code_gt__lt_span_gt__lt_span_gt_var_lt_/span_gt__lt_/span_gt_ newInstance _lt_span_gt__eq__lt_/span_gt_ originalMesh_lt_span_gt_._lt_/span_gt__lt_span_gt_createInstance_lt_/span_gt__lt_span_gt_(_lt_/span_gt__lt_span_gt__lt_span_gt__qt_index_dd_ _qt__lt_/span_gt__lt_/span_gt_ _lt_span_gt_+_lt_/span_gt_ index_lt_span_gt_)_lt_/span_gt__lt_span_gt__sm__lt_/span_gt__lt_/code_gt__lt_/pre_gt_\n\n\t\t_lt_p_gt_\n\t\t\twill make an exact duplicate of the object that shares a single reference to everything that is handled by draws like materials ect... things you can change are scale position and rotation._lt_br /_gt__lt_br /_gt_\n\t\t\tnow a\n\t\t_lt_/p_gt_\n\n\t\t_lt_pre_gt_\n\n_lt_code_gt__lt_span_gt__lt_span_gt_var_lt_/span_gt__lt_/span_gt_ newClone _lt_span_gt__eq__lt_/span_gt_ originalMesh_lt_span_gt_._lt_/span_gt__lt_span_gt__lt_span_gt_clone_lt_/span_gt__lt_/span_gt__lt_span_gt_(_lt_/span_gt__lt_span_gt__lt_span_gt__qt_index_dd_ _qt__lt_/span_gt__lt_/span_gt_ _lt_span_gt_+_lt_/span_gt_ index_lt_span_gt_)_lt_/span_gt__lt_span_gt__sm__lt_/span_gt__lt_/code_gt__lt_/pre_gt_\n\n\t\t_lt_p_gt_\n\t\t\tUses the same mesh for the draw but creates new references of materials so you can change them independently.  A clone is slightly more system intensive but is the way to reuse a mesh with a different material as apposed to doing a whole new draw call.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tthank you_co_ Pryme_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti think this will be the final solution.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthank you\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-08-28T18:19:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2CHATH%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2CHATH#5_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davychen","Date":"2016-08-29T09:54:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_141793_qt_ data-ipsquote-contentid_eq__qt_24774_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1472408360_qt_ data-ipsquote-userid_eq__qt_21965_qt_ data-ipsquote-username_eq__qt_Nabroski_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t15 hours ago_co_ Nabroski said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2CHATH%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2CHATH#5_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tthank you Nabroski_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvery cool sample_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tverry useful.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]