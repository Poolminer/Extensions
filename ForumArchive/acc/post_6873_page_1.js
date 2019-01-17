[{"Owner":"binyan","Date":"2014-06-01T20:02:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi guys_co__lt_/p_gt__lt_p_gt_Recently I_t_ve tried out the web workers with babylon.js. It_t_s pretty cool_co_ because you can move some heavy computations (like vertex data generation) out of the UI thread._lt_/p_gt__lt_p_gt_However the minified version of babylon.js cannot be used with web workers_co_ since they only have an access to a very limited scope of DOM objects. Thus_co_ since the minified version of babylon.js contains some calls to_lt_br_gt_web-workers-non-supported objects (such as window)_co_ it throws an error. _lt_/p_gt__lt_p_gt_I think it would be great to divide the minified version into two_dd_ babylon.js which would contain _qt_Pure_qt_ Javascript (or TypeScript) code_co_ and web_babylon.js which would contain the code which uses a web related stuff (more precisely - calls to the objects which are not supported by Web Workers). _lt_/p_gt__lt_p_gt_What do you think?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-06-01T20:35:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Could you be more explicit on that? I think that everything related to webgl_co_ canvas and images will not work with workers right?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"binyan","Date":"2014-06-01T21:08:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yup_co_ it won_t_t._lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(0_co_0_co_0)_sm_font-family_dd_Arial_co_ _t_Liberation Sans_t__co_ _t_DejaVu Sans_t__co_ sans-serif_sm__qt__gt_Web workers only have access to the following_dd__lt_/p_gt__lt_ul_gt__lt_li_gt_XMLHttpRequest_lt_/li_gt__lt_li_gt_Application Cache_lt_/li_gt__lt_li_gt_create other web workers_lt_/li_gt__lt_li_gt_navigator object_lt_/li_gt__lt_li_gt_location object_lt_/li_gt__lt_li_gt_setTimeout method_lt_/li_gt__lt_li_gt_clearTimeout method_lt_/li_gt__lt_li_gt_setInterval method_lt_/li_gt__lt_li_gt_clearInterval method_lt_/li_gt__lt_li_gt_importScripts method_lt_/li_gt__lt_li_gt_JSON_lt_/li_gt__lt_li_gt_Worker_lt_/li_gt__lt_/ul_gt__lt_p style_eq__qt_margin_dd_0px_sm__qt__gt_Possible implementation maybe dividing the namespace into three layers_dd__lt_/p_gt__lt_p style_eq__qt_margin_dd_0px_sm__qt__gt_1. Logic - all the data and computation classes. _lt_/p_gt__lt_p style_eq__qt_margin_dd_0px_sm__qt__gt_2. Web - all the web related stuff_co_ such as IndexDB_co_ window events_co_ etc._lt_/p_gt__lt_p style_eq__qt_margin_dd_0px_sm__qt__gt_3. WebGL pipe - classes which are responsible for passing the calculated data to WebGL._lt_/p_gt__lt_p style_eq__qt_margin_dd_0px_sm__qt__gt_ _lt_/p_gt__lt_p style_eq__qt_margin_dd_0px_sm__qt__gt_Of course it is very simplified vision_co_ and I_t_m sure there is a lot of pitfalls there_co_ but I think it worth to think about some refactoring to support Web Workers in babylon.js._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-06-01T21:34:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It is also a HUGE amount of work _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"binyan","Date":"2014-06-02T06:28:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You are right  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ These just my thoughts  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_But as a first step you might divide the existing scripts to 2 categories - those who touch Web functionality and those who don_t_t._lt_/p_gt__lt_p_gt_For example_co_ I think all the functionality of Babylon.Math can be used in Web Worker._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kevzettler","Date":"2016-10-29T16:10:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tSorry for digging up old post but I_t_d like to add that this modular separation would be good for using Babylonjs in on a multiplayer authroitive server role where you also don_t_t have access to browser objects like window and DOM\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]