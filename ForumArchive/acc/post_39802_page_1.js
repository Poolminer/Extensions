[{"Owner":"freetoplay","Date":"2018-09-03T20:37:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIs there a way to change the position of the loading screen to static? Right now_co_ when the loading screen appears after the page load_co_ it is positioned outside of the layout_co_ probably due to it being fixed/absolute position_co_ instead of staying within the container. Is there a way to override the positioning in this case?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-04T16:27:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou can even provide your own _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/creating_a_custom_loading_screen_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/creating_a_custom_loading_screen_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can also keep the current one and override its css style (id is _qt_babylonjsLoadingDiv_qt_)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"freetoplay","Date":"2018-10-26T02:20:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHmm_co_ so after playing around with this for awhile_co_ I have not been able to set the positioning of the loading screen or disable it. _lt_span_gt__lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_ I have been unable to get the id of the CSS_co_ possibly because I am loading the scenes within a Vue component_co_ what should I do in this case?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy code looks something like this to create the scene canvas_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_template&gt_sm_\n  &lt_sm_canvas ref_eq__qt_canvas_qt_ class_eq__qt_canvas_qt_ _dd_style_eq__qt_{height_dd_ height_co_ width_dd_ width_co_ outline_dd_ none_co_ display_dd_ _t_block_t_}_qt_&gt_sm_&lt_sm_/canvas&gt_sm_\n&lt_sm_/template&gt_sm_\n\n\n&lt_sm_script lang_eq__qt_ts_qt_&gt_sm_\nexport interface ISceneArgs {\n  engine_dd_ BABYLON.Engine_sm_\n  scene_dd_ BABYLON.Scene_sm_\n  canvas_dd_ HTMLCanvasElement_sm_\n}\n\nexport default {\n  name_dd_ _qt_SceneComponent_qt__co_\n  data_dd_ function() {\n    return {\n      engine_dd_ null_co_\n      scene_dd_ null\n    }_sm_\n  }_co_\n  props_dd_ {\n    onSceneMount_dd_ {\n      type_dd_ Function_co_\n      required_dd_ true\n    }_co_\n    height_dd_ {\n      type_dd_ String_co_\n      default_dd_ _qt_100%_qt_\n    }_co_\n    width_dd_ {\n      type_dd_ String_co_\n      default_dd_ _qt_100%_qt_\n    }\n  }_co_\n  mounted() {\n    this.setupScene()_sm_\n  }_co_\n  methods_dd_ {\n    setupScene() {\n      const canvas _eq_ this.$refs.canvas as HTMLCanvasElement_sm_\n      this.engine _eq_ new BABYLON.Engine(\n        canvas_co_\n        true_co_\n        { preserveDrawingBuffer_dd_ true }_co_\n        false\n      )_sm_\n      const scene _eq_ new BABYLON.Scene(this.engine)_sm_\n      this.scene _eq_ scene_sm_\n      this.onSceneMount({\n        scene_dd_ this.scene_co_\n        engine_dd_ this.engine_co_\n        canvas_dd_ this.$refs.canvas\n      })_sm_\n    }\n  }_co_\n  beforeDestroy() {\n    window.removeEventListener(_qt_resize_qt__co_ this.handleResize)_sm_\n  }\n}_sm_\n&lt_sm_/script&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-26T16:15:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCan you share a LIVE example? something than I can try directly (I_t_m in a rush so I do not have a lot of time to setup a server and test it)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]