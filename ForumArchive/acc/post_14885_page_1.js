[{"Owner":"jerome","Date":"2015-05-30T12:14:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I know he_t_s modest and won_t_t self promote here_co_ but _dd_ _lt_a href_eq__qt_http_dd_//blog.raananweber.com/2015/05/26/collisions-using-workers-for-babylonjs/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//blog.raananweber.com/2015/05/26/collisions-using-workers-for-babylonjs/_lt_/a_gt__lt_/p_gt__lt_p_gt_Very interesting article ! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_By the way_co_ Raanan_co_ did you investigate inline workers (instead of separate file) with _lt_em_gt_blob_lt_/em_gt_ technique ?_lt_/p_gt__lt_p_gt_And what about _lt_em_gt_shared workers_lt_/em_gt_ for sharing data instead of indexDB approach (maybe shared workers aren_t_t implemented yet everywhere) ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_More generally_co_ something I don_t_t get  so far about collisions because I didn_t_t give a look until now _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In the WebGL hardware acceleration approach_co_ we set the mesh local system coordinates and transformations (scale_co_ rotation_co_ translation) to be applied to them CPU side and we pass all this stuff to the GPU which computes in parallel all the matrix multiplications._lt_/p_gt__lt_p_gt_Right ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Considering now the collision topic (I don_t_t even speak about physics engine_co_ just the cam collider)_co_ I wonder if _dd__lt_/p_gt__lt_p_gt_1 - we need to compute CPU side the world positions of every mesh (at least some AABB bounding boxes) to compare them to the camera position_lt_/p_gt__lt_p_gt_or_lt_/p_gt__lt_p_gt_2 - we get back_co_ after GPU computation_co_ all the world positions from the GPU itself since I have no idea if this is possible and what the cost of back data passing compared to CPU local computation if many many vertices to set in the world_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I guess the answer looks like the #1. Am I right ?_lt_/p_gt__lt_p_gt_If yes_co_ does it mean we set some bounding box for each mesh and then apply (CPU side_co_ this time) the same matrix multiplications to the bounding boxes than the ones done meanwhile to the mesh vertices GPU side ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-05-30T15:29:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Jerome_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I don_t_t know BJS_t_s specific implementation_co_ but if you_t_re asking about the general case_co_ your 1 is basically right_co_ but usually there is further CPU transformation done as well. To do a broadphase collision check all you need to know is each object_t_s world location and AABB_co_ so this can be done with few or no transformations. But comparing AABBs only tells you which objects might be colliding - to check their geometries (i.e. narrowphase collision detection) you need them in the same coordinate system_co_ so you_t_d normally have to transform._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And yes_co_ this is all on the CPU. Getting data back from the GPU is very costly_co_ and I think many consumer GPUs don_t_t support it._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-05-30T16:42:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Jerome_co__lt_/p_gt__lt_p_gt_I actually address all of your questions in part two which is still being written)_co_ but_dd__lt_/p_gt__lt_p_gt_Inline worker is actually the way I implemented it. The worker is integrated in the single file of the framework. This is why there is also a no worker version. When the no worker version is used_co_ there is an automatic fallback to the old implementation. There is also a way to use an external file for debugging purpose._lt_/p_gt__lt_p_gt_No_co_ I don_t_t use indexeddb. I eventually use transferables. I_t_ll explain exactly why in part two._lt_/p_gt__lt_p_gt_The collision test is done on the CPU side and requires both the vertex data and the object_t_s world transformation_co_ which is the way it was implemented before. To achieve that I serialize the meshes and geometries when they are updated and send the data to the worker._lt_/p_gt__lt_p_gt_Again_co_ everything is coming in part two _dd_-) I_t_ll update this thread when I finish writing._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mfdesigner","Date":"2015-05-30T22:00:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_A more natural way of performing collision detection on GPU is by solid voxelization.  The problem is then reduced to detecting voxel overlap._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_See_dd_  _qt__lt_strong_gt__lt_span_gt_GPU-BASED REAL-TIME SOLID VOXELIZATION FOR VOLUME GRAPHICS_dd_ Theory and Practice_dd_ Volume Modeling and Volumetric Collision Detection_qt_._lt_/span_gt__lt_/strong_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-05-31T05:59:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_fresh new _dd_ _lt_a href_eq__qt_http_dd_//blog.raananweber.com/2015/05/30/web-worker-without-a-separate-file/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//blog.raananweber.com/2015/05/30/web-worker-without-a-separate-file/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_excellent_co_ as the former one_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-06-07T12:30:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_PART 2 _dd_ _lt_a href_eq__qt_http_dd_//blog.raananweber.com/2015/06/06/collisions-using-workers-for-babylonjs-part-2/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//blog.raananweber.com/2015/06/06/collisions-using-workers-for-babylonjs-part-2/_lt_/a_gt__lt_/p_gt__lt_p_gt_yeeaaahh _lt_/p_gt__lt_p_gt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-06-07T14:05:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Raanan_co__lt_/p_gt__lt_p_gt_Has anyone checked Web workers specifically by browser - with the exception of IE10?  I can_t_t imagine anyone still needing to use IE10 without huge legacy issues.  The difference between IE10 and IE11 are too huge to even fully doc.  However_co_ if Web workers are reliable to use now compatability wise_co_ this would be huge.  I hope more people begin to thread these into cpu processes so that this might become the norm for making use of all of the under used processing power and memory on the new and standard hardware releasing these days.  I don_t_t have the experience with these_co_ so I_t_m looking for more examples such as yours to prove these are reliable across multiple browsers.  I look forward to more uses by you and others in the future._lt_/p_gt__lt_p_gt_Thanks._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-06-07T16:31:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_hey!_lt_/p_gt__lt_p_gt_@Jerome_co_ thanks a lot _dd_-) Only finished this article yesterday night and never had the chance to write about it here._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_@Dbawel - I believe workers are very reliable in all modern browsers. IE10 had a problem with inline workers_co_ but the worker implementation there was not too bad as well.  I think a bigger problem with IE10 is the javascript engine which was relatively slower (relative to other browsers_co_ not to IE9 _dd_-) ) IE11 had improved it_co_ but it still didn_t_t catch up. IE11 is the only browser where the new collision system is not fluent on heavy scenes. But this is due to the Vector3.Dot calculation_co_and not the worker itself. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The next thing I am moving to a worker is the simplification process_co_ which is a classic worker task. We_t_ll see what comes afterwards. I remember Jerome had some wonderful futuristic ideas _dd_-)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-06-07T16:37:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_laugh.png_qt_ alt_eq__qt__dd_lol_dd__qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-06-07T21:50:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Please keep us posted- this shows real promise towards optimizing and balancing cpu load and _lt_/p_gt__lt_p_gt_usage. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]