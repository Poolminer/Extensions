[{"Owner":"cartman","Date":"2016-04-28T11:55:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys_co_ loving BabylonJS! Unfortunately i_t_m stuck at this tutorial_dd_ _lt_a href_eq__qt_http_dd_//www.pixelcodr.com/tutos/trees/game/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.pixelcodr.com/tutos/trees/game/index.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe tutorial was written using Babylon 1.13-debug. I tried using Babylon 2.3_co_ and got a really weird tree. It appears that the vertices are somewhat messed up. This was the only change I made.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny ideas on how to solve this?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAttached the pictures of the rendered trees.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/babylon2.3.jpg.4f05551c55ab7c16af78a72127e079e7.jpg_qt_ data-fileid_eq__qt_7461_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img alt_eq__qt_babylon2.3.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_7461_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/babylon2.3.jpg.4f05551c55ab7c16af78a72127e079e7.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith Babylon 2.3 (messed up vertices_co_ and somehow there_t_s a gap between the trunk and the leaves)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/babylon1.3.jpg.45e55e410caec6b3ed82ac5ae5c1c2ff.jpg_qt_ data-fileid_eq__qt_7462_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img alt_eq__qt_babylon1.3.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_7462_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/babylon1.3.thumb.jpg.b6314db672ed23427498f0289206d43a.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith Babylon 1.13-debug. Nice polygons.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-04-29T08:20:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tif the code uses some calls to the internal methods _lt_em_gt_VertexData.CreateXXX()_lt_/em_gt__co_ you should take care that_co_ as for BJS2.3_co_ their signatures change from _lt_em_gt_VertexData.CreateXXX(param1_co_ param2_co_ ...) _lt_/em_gt_to _lt_em_gt_VertexData.CreateXXX({param1_dd_ val1_co_ param2_dd_ val2_co_ etc}) _lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.3/VertexData#static-createsphere-options-rarr-vertexdata-classes-2-3-vertexdata-_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.3/VertexData#static-createsphere-options-rarr-vertexdata-classes-2-3-vertexdata-_lt_/a_gt__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/what_t_s%20new.md_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/what_t_s%20new.md_lt_/a_gt_  (_qt_breaking changes_qt_ part)_lt_/em_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"cartman","Date":"2016-04-29T13:18:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_126710_qt_ data-ipsquote-contentid_eq__qt_22218_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1461918047_qt_ data-ipsquote-userid_eq__qt_5453_qt_ data-ipsquote-username_eq__qt_jerome_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t4 hours ago_co_ jerome said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tif the code uses some calls to the internal methods _lt_em_gt_VertexData.CreateXXX()_lt_/em_gt__co_ you should take care that_co_ as for BJS2.3_co_ their signatures change from _lt_em_gt_VertexData.CreateXXX(param1_co_ param2_co_ ...) _lt_/em_gt_to _lt_em_gt_VertexData.CreateXXX({param1_dd_ val1_co_ param2_dd_ val2_co_ etc}) _lt_/em_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_em_gt__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.3/VertexData#static-createsphere-options-rarr-vertexdata-classes-2-3-vertexdata-_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.3/VertexData#static-createsphere-options-rarr-vertexdata-classes-2-3-vertexdata-_lt_/a_gt__lt_/em_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_em_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/what_t_s%20new.md_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/what_t_s%20new.md_lt_/a_gt_  (_qt_breaking changes_qt_ part)_lt_/em_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThank you! Based on your tip_co_ I use this line\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar vertexData _eq_ BABYLON.VertexData.CreateSphere({_qt_segments_qt__dd_2_co__qt_diameter_qt__dd_sizeBranch})_sm_ // compliant with Babylon 2.3\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand it works!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]