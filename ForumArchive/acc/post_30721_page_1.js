[{"Owner":"TomaszFurca","Date":"2017-05-29T19:04:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ I want to use Tower of Babel in my project instead bledner exporter_co_ but i can_t_t implment it. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFile is exported to JS_co_ but after import Mesh i can see this error in console_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_Uncaught TypeError_dd_ Cannot set property _t_SCENE_t_ of undefined\n    at defineMaterials (avatar1_animations.js_dd_163)\n    at new character (avatar1_animations.js_dd_1441)\n    at new Characters (characters.ts_dd_15)\n    at e.callback (Simple.ts_dd_30)\n    at e.notifyObservers (babylon.2.5.js_dd_2)\n    at i._checkIsReady (babylon.2.5.js_dd_11)\n    at babylon.2.5.js_dd_11_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAfter read documentation_co_ I include QueuedInterpolation.1.0.min.js file in my project_co_ but sill without success. I am trying with gulp to build JS from TS files_co_ but gulp fail on error_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_[21_dd_00_dd_27] Tested 31 tests_co_ 30 passes_co_ 1 failures_dd_ FAIL\n\nevents.js_dd_163\n      throw er_sm_ // Unhandled _t_error_t_ event\n      ^\nError_dd_ Failed 1 expectations\n    at DestroyableTransform.endStream [as _flush] (/home/tomek/Downloads/Extensions-master/QueuedInterpolation/Gulp/node_modules/gulp-expect-file/index.js_dd_90_dd_26)\n    at DestroyableTransform.&lt_sm_anonymous&gt_sm_ (/home/tomek/Downloads/Extensions-master/QueuedInterpolation/Gulp/node_modules/gulp-expect-file/node_modules/through2/node_modules/readable-stream/lib/_stream_transform.js_dd_135_dd_12)\n    at Object.onceWrapper (events.js_dd_293_dd_19)\n    at emitNone (events.js_dd_86_dd_13)\n    at DestroyableTransform.emit (events.js_dd_188_dd_7)\n    at prefinish (/home/tomek/Downloads/Extensions-master/QueuedInterpolation/Gulp/node_modules/gulp-expect-file/node_modules/through2/node_modules/readable-stream/lib/_stream_writable.js_dd_450_dd_12)\n    at finishMaybe (/home/tomek/Downloads/Extensions-master/QueuedInterpolation/Gulp/node_modules/gulp-expect-file/node_modules/through2/node_modules/readable-stream/lib/_stream_writable.js_dd_458_dd_7)\n    at afterWrite (/home/tomek/Downloads/Extensions-master/QueuedInterpolation/Gulp/node_modules/gulp-expect-file/node_modules/through2/node_modules/readable-stream/lib/_stream_writable.js_dd_340_dd_3)\n    at onwrite (/home/tomek/Downloads/Extensions-master/QueuedInterpolation/Gulp/node_modules/gulp-expect-file/node_modules/through2/node_modules/readable-stream/lib/_stream_writable.js_dd_330_dd_7)\n    at WritableState.onwrite (/home/tomek/Downloads/Extensions-master/QueuedInterpolation/Gulp/node_modules/gulp-expect-file/node_modules/through2/node_modules/readable-stream/lib/_stream_writable.js_dd_115_dd_5)\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tBefore this error i saw a lot of error like this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_../src/queue/PovProcessor.ts(430_co_38)_dd_ error TS4070_dd_ Parameter _t_d_t_ of public static method from exported class has or is using private name _t_BABYLON_t_.\n../src/queue/TimelineControl.ts(24_co_42)_dd_ error TS4070_dd_ Parameter _t_scene_t_ of public static method from exported class has or is using private name _t_BABYLON_t_._lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for help\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTom\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t-----------------\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAfter changes in generate JS file_co_ mesh started work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI must delete line TOWER_OF_BABLE.Preloader.Scene  _eq_ scene and change function M to _M. But_co_ why file is not generated correctly?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-05-30T02:11:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tPing _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-05-30T15:18:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have not yet posted a QueuedInterpolation.1.1.js runtime.  Read ahead is a new feature.  1.1 is done-ish_co_ except for_dd_\n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\tallowing a positionOffset argument to the generated initScene() in the export file.  This allows for an export of one scene to be loaded next to another chunk of scene already present.  Supports read ahead of chunks of scene that are dynamically linked.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tRe-arrange skeletons in the generated code_co_ so that each use of a skeleton is a fresh copy.  I have never been able to figure out how to get multiple uses of a single skeleton to work in this or the JSON exporter.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tGetting QI.Automaton to speak. \n\t_lt_/li_gt_\n_lt_/ul_gt__lt_p_gt_\n\tThe first 2 are in generated code.  Will work on them today_co_ and post a new exporter along with both runtimes_co_  QueuedInterpolation.1.1.js &amp_sm_ TOB-runtime.1.1.js.  The reason for both is to allow using TOB without the animation system.  TOB-Runtime handles Mesh clone factories &amp_sm_ read ahead.  If you make a mesh which either has shapekeys or selects one of the mesh grand entrances_co_ then QI must be used though.  TOB-runtime is built into QI file_co_ so you never need both.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWill update this thread when first 2 published_co_ hopefully today.  Speech is takes a lot of time and testing.  Also_co_ there is a particle hair proof of concept that should be avoided.  It really needs to be refactored to be production worthy.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-05-30T20:04:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ the 1.1 runtimes are available along with an update exporter with the changes indicated above.  Also_co_ I noticed one other requirement to use the QI runtime_co_ and that is having a skeleton.  You can still use conventional / frame based animation_co_ but the skeleton inherits from QI.Skeleton not BABYLON.Skeleton.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBack to fiddling with speech.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"TomaszFurca","Date":"2017-06-11T16:43:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tToday i try to import single object using MeshFactory and i don_t_t know why i get this error_dd_ _qt_QI.Skeleton_dd_  body has more than 1 bone without a parent_qt_. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tScene initialized by TOB works great_co_ I have small issues with textures_co_ but I think this is problem with blender.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-06-12T14:29:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTomas_co_ I have taken a different approach with my extensions.  They proactively perform a lot of validation to inform where things are not as they were expected.  Sort of like the use of assert() in many other languages.  This both documents any design limitation_co_ and helps spot issues that happen later_co_ where it is not obvious what the problem really is. It also means there is less testing in code that actually does something_co_ since problems are blocked up front.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis message is pointing out that you have more than one root bone.  This is going to rule out using QI_t_s bone interpolator at this time.  You may use frame based BABYLON.Animation recorded in Blender though.  It is unusual for many skeletons to have multiple root bones.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ I do have an update of TOB coming out probably late today.  On it_co_ there is better clean up for skeletons added onto an override of dispose() in QI.Mesh.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]