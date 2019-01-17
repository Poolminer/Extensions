[{"Owner":"gamefan","Date":"2018-07-16T07:10:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everyone_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was wondering if there is a way to show a mesh hidden behind another mesh other than by setting its renderingGroupId. I want to always show a highlighted mesh which is being interacted by user even if its blocked by other meshes. Drawing it over everything using renderingGroupId sort of confuses depth perception. Is there a best of both worlds? Perhaps by setting some transparency to the blocking meshes_co_ but how to get the list of meshes blocking a mesh_t_s visibility?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-07-16T16:24:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is far from a perfect solution_co_ but to get this started.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. See if the mesh that could be hidden is in the camera frustrum_co_ if needed_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var frustumPlanes _eq_ BABYLON.Frustum.GetPlanes(camera.getTransformMatrix())_sm_\nmesh.isInFrustum(frustumPlanes)﻿_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t2. If your mesh is in the frustrum_co_ then get the mesh bounding box or loop through all the mesh vertices and cast rays at each of the vertices with multiPick using something like lookAt() to get the normal to that vertex?  This is the part that would kind of work_co_ but surely has a lot of room for improvement.  I am interested to hear how this is done properly._lt_br /_gt_\n\t_lt_br /_gt_\n\tIt_t_s flawed_co_ because it could still miss meshes.  I can see multiple edge cases where that solution wouldn_t_t work. _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gamefan","Date":"2018-07-17T11:09:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGreat Idea. I made rays from bounding box corners to camera_t_s position. Something like this_dd__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var boundingInfo _eq_ activeObject.getBoundingInfo().boundingBox.vectorsWorld_sm_\nfor (var i _eq_ 0_sm_ i &lt_sm_ boundingInfo.length_sm_ i++) {\n\tvar ray _eq_ pickingRays[i]_sm_//pre defined rays for reuse\n\tray.origin _eq_ boundingInfo[i]_sm_\n\tscene.activeCamera.position.subtractToRef(ray.origin_co_ ray.direction)_sm_\n\tray.direction.normalize()_sm_\n        ray.length _eq_ BABYLON.Vector3.Distance(scene.activeCamera.position_co_ ray.origin)_sm_\n\tfor (var j _eq_ 0_sm_ j &lt_sm_ scene.activeCamera._activeMeshes.length_sm_ j++) {\n\t\tvar mesh _eq_ scene.activeCamera._activeMeshes.data[j]_sm_\n\t\tif (ray.intersectsMesh(mesh_co_ true).hit) {\n            \t\tmesh.visibility _eq_ 0.5_sm_\n                }\n\t}\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI never knew there was a multiPick_co_ its there as scene.multiPick and scene.multiPickWithRay. This helped in other areas. So double thanks for the bonus _lt_span class_eq__qt_ipsEmoji_qt__gt_😉_lt_/span_gt__lt_br /_gt_\n\tThe above solution works just right_co_ but I would love to see if there were a better/efficient solution.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2018-07-17T13:13:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_s_gt_There are occlusions query for this. Meshes behind another_dd_ hide_lt_/s_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_mesh.occlusionType _eq_ BABYLON.AbstractMesh.OCCLUSION_TYPE_STRICT_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_s_gt__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/features/occlusionquery_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/features/occlusionquery_lt_/a_gt__lt_/s_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_ Oops_co_ I had read wrong_co_ I understood inversse\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gamefan","Date":"2018-07-17T13:42:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t@Dad72_lt_br /_gt_\n\t_lt_br /_gt_\n\tNevertheless an interesting feature. Today is good. _lt_span class_eq__qt_ipsEmoji_qt__gt_😀_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo if I understand it right_co_ the engine will automatically discard meshes outside the camera frustum in the render cycle. But has to draw everything that is inside because it cannot decide before hand about the depth?_lt_br /_gt_\n\tWe can thus use occlusion queries to disable render of a mesh hidden by an opaque mesh. This is neat_co_ wondering why its not internally used in the engine. Perhaps because its asynchronous or slow?_lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-17T15:58:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMostly because it is webgl2 only _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-07-17T17:08:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18203-gamefan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18203_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18203-gamefan/_qt_ rel_eq__qt__qt__gt_@gamefan_lt_/a_gt_ thanks for sharing your solution.  i was hoping somebody would share a better solution as well - really was just sharing that to start and waiting for something better..._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_I didn_t_t know about ray.intersectsMesh()_co_ so we both learned something new! _lt_span_gt_If that is useful to others_co_ would be nice to encapsulate that in something like a single point to mesh (like a cone shape)_co_ and have intersectsMesh(...) available on that with maybe options for BoundingBox or MeshVertices - _lt_span_gt__lt_span_gt_Let_t_s call it MultiRay _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_br /_gt_\n\tAlso_co_ scene has a public getActiveMeshes() [_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/api/classes/babylon.scene#getactivemeshes_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/api/classes/babylon.scene#getactivemeshes_lt_/a_gt_]_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gamefan","Date":"2018-07-18T11:59:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_222053_qt_ data-ipsquote-contentid_eq__qt_38861_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1531847321_qt_ data-ipsquote-userid_eq__qt_25365_qt_ data-ipsquote-username_eq__qt_brianzinn_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t18 hours ago_co_ brianzinn said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt__lt_span_gt_Also_co_ scene has a public getActiveMeshes() [_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/api/classes/babylon.scene#getactivemeshes_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/api/classes/babylon.scene#getactivemeshes_lt_/a_gt_]_lt_/span_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYes_co_ Just got lazy there _lt_span class_eq__qt_ipsEmoji_qt__gt_😅_lt_/span_gt__co_ but yeah its unsafe to use non public variables\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_222053_qt_ data-ipsquote-contentid_eq__qt_38861_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1531847321_qt_ data-ipsquote-userid_eq__qt_25365_qt_ data-ipsquote-username_eq__qt_brianzinn_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t18 hours ago_co_ brianzinn said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt_I didn_t_t know about ray.intersectsMesh()_co_ so we both learned something new! _lt_span_gt_If that is useful to others_co_ would be nice to encapsulate that in something like a single point to mesh (like a cone shape)_co_ and have intersectsMesh(...) available on that with maybe options for BoundingBox or MeshVertices - _lt_span_gt__lt_span_gt_Let_t_s call it MultiRay _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYes_co_ can have something like Mesh.prototype.isVisiblyBlocking _eq_ function(targetMesh_co_ fastcheck_co_ camera)_lt_br /_gt_\n\tfastcheck true uses bounding box_co_ otherwise mesh vertices. Happy to make PR if need be. _lt_span class_eq__qt_ipsEmoji_qt__gt_😉_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]