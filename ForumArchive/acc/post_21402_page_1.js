[{"Owner":"Dad72","Date":"2016-03-23T16:57:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want a isLocked member _co_ but it does not exist. I would lock an object to any changes even if an object is pickable.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBy locking an object_co_ you can not change it_co_ nor materials_co_ nor select ...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tis there a similar function or member? or could it be possible to have a work like this in Babylon? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-03-23T17:45:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWoot..That_t_s not supported right now and unlikely to be supported in the future. Too much work. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can freeze the worldmatrix though\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-03-23T17:50:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thow to do it_dd_ freeze the WorldMatrix? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks DK\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-03-23T18:20:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tok I found_co_ mesh.freezeWorldMatrix()_sm_ and mesh.unfreezeWorldMatrix()_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut it does not work. the object can still be select_co_ move ... _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll try to hack something_co_ then. _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-03-23T18:40:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyep it only freeze the worldmatrix\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-03-23T18:56:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tmaybe this would help _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.3/AbstractMesh#ispickable-boolean_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.3/AbstractMesh#ispickable-boolean_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-03-23T19:29:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI know isPickable Jerome_co_ I use it for 3 years now_co_ this is one of the first thing I learned from Babylon. I just wish that even if isPickable is true_co_ it may not be selectable_co_ or modify the materials and other level._lt_br_gt_\n\tBasically_co_ I want to lock an object of any changes to my editor. because all the objects are selectable._lt_br_gt_\n\tIsPickable also do not want the change on materials. isPickable is not a verous on objects. I must keep my pickable objects\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf users want avoid select an object or change by error_co_ I wish he could add a Security locks that blocks any modification_co_ selection_co_ movement.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-03-23T19:49:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHave you tried Object.freeze(obj) ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI just tried it on Object.freeze(mesh.position) and it worked.  I_t_m thinking you could easily create a function that freezes just the properties you want to freeze.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-03-23T19:51:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_ll try that. Thank you Adam.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-03-23T20:09:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis works Adam. Object.freeze freezes perfectly the object. But I do not track _lt_strong_gt_unfreeze_lt_/strong_gt_ function to unlock.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAn idea to unlock?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-03-23T20:18:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI would try replacing the object with a new one.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tmesh.position _eq_ new BABYLON.Vector3(mesh.position.x_co_ mesh.position.y_co_ mesh.position.z)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_s_gt_That didn_t_t work. _lt_/s_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt actually does work.  I had a bug in my code.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-03-23T20:40:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCheck out lines 52_co_ 53_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#21XUBV%2316_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#21XUBV#16_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-03-23T21:01:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ so we have to recreate new property if I understand well. but if I freeze the whole object_dd_ Object.freeze (mesh).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs what I should freeze or a specific property?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-03-23T21:55:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI would just freeze specific properties.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-03-23T23:25:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you for your help bring here. Here_t_s what I did in the end if it can be useful to the other. I hope that Babylon soon get this kind of functionality. but in the meantime_co_ I hope this can help.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI managed to block the entire object and unlock it. In made_co_ I simply create a clone of the subject and I add it visibility is false. This new object will be rendered visible when I unlock the freeze objects. The object freeze  will be deleted then.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis works well in 2 directions.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_\tlockObjet _eq_ function()\n\t{\n\t\tif(global.objetSelected) {\t\n\t\t\tvar name _eq_ global.objetSelected.name_sm_\n\t\t\tglobal.objectsFreeze[name] _eq_ global.objetSelected.clone(name)_sm_\n\t\t\tglobal.objectsFreeze[name].visibility _eq_ false_sm_\n\t\t\tObject.freeze(global.objetSelected)_sm_\t\t\t\t\t\t\n\t\t}\n\t}_sm_\t\n\t\n\tunlockObjet _eq_ function()\n\t{\n\t\tfor(var i _eq_ 0_sm_ i &lt_sm_ global.objets.length_sm_ i++) {\t\n\t\t\tif(global.objectsFreeze[global.objets_lt_em_gt_.name]) {\n\t\t\t\tglobal.objectsFreeze[global.objets_lt_/em_gt__lt_em_gt__lt_em_gt_.name].visibility _eq_ true_sm_\n\t\t\t\tglobal.objets_lt_/em_gt__lt_/em_gt__lt_em_gt__lt_em_gt__lt_em_gt_.dispose()_sm_\t\n\t\t\t\tglobal.objets_lt_/em_gt__lt_/em_gt__lt_/em_gt__lt_em_gt__lt_em_gt__lt_em_gt__lt_em_gt_ _eq_ global.objectsFreeze[global.objets_lt_/em_gt__lt_/em_gt__lt_/em_gt__lt_/em_gt__lt_em_gt__lt_em_gt__lt_em_gt__lt_em_gt__lt_em_gt_.name]_sm_\n\t\t\t}\n\t\t}\t\t\n\t}_sm__lt_/em_gt__lt_/em_gt__lt_/em_gt__lt_/em_gt__lt_/em_gt__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_em_gt__lt_em_gt__lt_em_gt__lt_em_gt__lt_em_gt_  _lt_/em_gt__lt_/em_gt__lt_/em_gt__lt_/em_gt__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tglobal.objetSelected corresponds to all my global variables contained in a json_dd_ var global _eq_ {objetSelected _dd_ null_co_ objets_dd_ []_co_ objectFreeze_dd_ []_co_ othervariable_dd_ valueDefaut}_sm_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]