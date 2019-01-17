[{"Owner":"Densaugeo","Date":"2016-07-19T07:23:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo I_t_m trying out Babylon by porting a demo I made in Three. I_t_m replicating the custom camera controls from old demo by writing to the camera._viewMatrix_co_ which works fine for moving the camera around_co_ but specular highlights are frozen.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSince everything else seems to work_co_ maybe the specular lighting uses a uniform that is not getting updated?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote_dd_ I would like to be able to control the camera with matrix transforms.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-07-19T18:36:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\twoot_dd_)  this is pretty rough _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tWe already have dozens of cameras (maybe the one you want is already here?)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRegarding highlights_co_ as you are hijacking the system_co_ the cache engine is not aware of the updates and then it does not wipe any cache _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Densaugeo","Date":"2016-07-21T02:31:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAfter some investigation_co_ I have found that the cameras are updating _viewMatrix based on position_co_ rotation_co_ etc..\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSince _viewMatrix is the transform of the scene relative to the camera_co_ I found it useful to define a new matrix (called _t_transform_t_)_co_ which is the inverse of _viewMatrix. It is similar to _worldMatrix_co_ but I avoided using the same name due to possible conflicts.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPosition.x_co_ y_co_ and z can be rebound to the appropriate fields on transform to keep them in sync with matrix updates. After that_co_ _getViewMatrix can be altered to find _viewMatrix from the transform matrix instead of position_co_ etc.. upVector and _cache.upVector can be hijacked to test transform for changes to know when to update _viewMatrix.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_this._viewMatrix _eq_ new BABYLON.Matrix()_sm_\nthis.transform _eq_ initialTransform_sm_\nthis.transform.invertToRef(this._viewMatrix)_sm_\n\n// ._viewMatrix now comes from .transform\nthis._getViewMatrix _eq_ function() {\n  this.transform.invertToRef(this._viewMatrix)_sm_\n \n  return this._viewMatrix_sm_\n}\n\n// Redirect .upVector + its cache to .transform_co_ so that changes to .transform trigger updates\nthis._cache.upVector _eq_ BABYLON.Matrix.Identity()_sm_\nthis.upVector _eq_ this.transform_sm_\n \n// Bind .position to .transform\nObject.defineProperties(this.position_co_ {\n  x_dd_ {\n    enumerable_dd_ true_co_\n    get_dd_ () _eq_&gt_sm_ this.transform.m[12]_co_\n    set_dd_ v _eq_&gt_sm_ this.transform.m[12] _eq_ v\n  }_co_\n  y_dd_ ...\n})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tWorks as far as I can tell. Overall_co_ not as bad as it could be.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m still looking for a WebGL library that allows using matrices without such hacks though...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]