[{"Owner":"AndyBeaulieu","Date":"2013-11-29T02:35:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_First off_co_ thanks for all of the great work on Babylon.js - I have had a lot of fun playing with it over the past week._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am having an issue with disappearing meshes_co_ as shown in this video_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.youtube.com/watch?v_eq_JTKbvFSBs_0&amp_sm_feature_eq_share&amp_sm_list_eq_UUjW3rmSx2bXeUnFcN4o-yOw_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.youtube.com/watch?v_eq_JTKbvFSBs_0&amp_sm_feature_eq_share&amp_sm_list_eq_UUjW3rmSx2bXeUnFcN4o-yOw_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It looks like some kind of culling issue_co_ but with the position of the camera I don_t_t think it should be hiding the meshes?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The issue occurs with both a FreeCamera and an ArcRotateCamera_co_ but it seems worse with the FreeCamera. In the scene I am creating a bunch of Meshes with different y value (elevation) data and giving them a texture for the surface._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Are there any ideas given this_co_ or can I provide more information? _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-11-29T07:38:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Uhuh!! Interesting_dd_) Could you share your code so that we can test it?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AndyBeaulieu","Date":"2013-11-29T16:15:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_(by the way I hope to get all of this cleaned up and write a nice tutorial on Babylon !)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This problem took awhile to narrow down_co_ but I found that_dd__lt_/p_gt__lt_ul_gt__lt_li_gt_I was using an async ajax call to get elevation data from a server for a whole bunch of separate meshes (64 or more _qt_tiles_qt_)_lt_/li_gt__lt_li_gt_in the ajax success_co_ I was creating a new mesh and setting vertices_co_ computing normals_co_ etc. to get a mesh with elevation formed_lt_/li_gt__lt_li_gt_if I change the method to ajax call to synchronous (async_dd_ false below)_co_ then the issue goes away._lt_/li_gt__lt_li_gt_if I leave the method as async (the default) then the issue with disappearing meshes comes back._lt_/li_gt__lt_/ul_gt__lt_p_gt_So this is kind of bizarre_co_ as JS is single-threaded so there can_t_t be thread safety issues in Babylon or anything. I_t_ll keep playing with how I do this but let me know if you have any ideas.  _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_// this is really just pseudocode !! $.ajax({        url_dd_ _qt_/api/proxy/GetElevations_qt__co_        data_dd_ JSON.stringify(query)_co_        type_dd_ _qt_POST_qt__co_        meshName_dd_ meshName_co_        async_dd_ false_co_        dataType_dd_ _qt_json_qt__co_        contentType_dd_ _qt_application/json_sm_ charset_eq_utf-8_qt__co_        success_dd_ function (result) {            var data _eq_ JSON.parse(result)_sm_            // create a ground with elevation            // create new BABYLON.Mesh(name_co_ scene)_sm_            // set vertices data and compute normals                   }    })_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2013-11-29T19:18:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey! Cool to see that Andy Beaulieu is playing with Babylon.JS! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It_t_s indeed very weird that switching to synchronous is solving the problem. BabylonJS is handling the asynchronous building of texture for you and injecting new meshes on the fly shouldn_t_t be a problem._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you could share the code indeed with David and I_co_ it will help a lot for the debugging job._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_David_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-11-30T10:30:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Could you try to call mesh._updateBoundingInfo()_sm_ to force an update of the bounding boxes?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AndyBeaulieu","Date":"2013-11-30T16:08:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks David_co_ calling _lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt__updateBoundingInfo _lt_/span_gt_worked like a charm!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Obligatory fixed video - _lt_a href_eq__qt_http_dd_//www.youtube.com/watch?v_eq_0S08faz1JpE&amp_sm_feature_eq_youtu.be_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.youtube.com/watch?v_eq_0S08faz1JpE&amp_sm_feature_eq_youtu.be_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Of course I have another question now_co_ I_t_ll start a separate thread though_co_ as it is unrelated._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]