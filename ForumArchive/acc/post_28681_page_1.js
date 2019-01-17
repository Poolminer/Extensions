[{"Owner":"Raitch","Date":"2017-02-24T20:07:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIs it possible in some way to send the render data through socket.io (or similar) so that another babylon engine can render the same view? The other babylon engine would have all the resources preloaded of course. I_t_m not really sure how much data is used to render a frame_co_ nor how to obtain it. Basically I_t_m interested to see if I can make my local multiplayer game have online support by mirroring what_t_s happening on the 1st Babylon Engine.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat I_t_m mostly interested in is_dd__lt_br /_gt_\n\t* Is it a lot of data to send each frame through socket.io? Would I do better in sending only unit info and render based on that?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t* Can I in any efficient way _qt_save_qt_ frames and show them with delay in order to simulate lag on the host browser?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t* Has this been done before in any similar way?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not really sure what to search for_co_ so any guidance is appreciated.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"inteja","Date":"2017-02-24T21:15:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI know this is not an answer to your specific question_co_ but one somewhat similar approach I_t_ve seen is using Blender installed on the server to provide static photorealistic renders and/or lightmap textures for a real-time 3D scene. The _lt_a href_eq__qt_https_dd_//planner5d.com/_qt_ rel_eq__qt_external nofollow_qt__gt_Planner 5D_lt_/a_gt_ website/app does static rendering using _lt_a href_eq__qt_https_dd_//docs.blender.org/manual/en/dev/render/workflows/command_line.html_qt_ rel_eq__qt_external nofollow_qt__gt_Blender command line_lt_/a_gt_ on the server for instance. Should be feasible to do with Babylon.js as well. It_t_d be cool to be able to create hybrid apps that use WebGL but mix in some photorealistically rendered elements without impacting performance too much.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]