[{"Owner":"Topper","Date":"2018-01-04T23:04:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHigh_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tno idea why BJS struggles with this code_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#%23RCZLX7_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/##RCZLX7_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt fails when I want to push coordinates in my array in this very line_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_myPoints.push(new BABYLON.Vector3(shortLength_co_ currentHeight_co_ 1))_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tHere´s the code of my function_sm_ doesn_t_t even start in PG_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_    this.createMeshRuler _eq_ function(){\n        \n        var rulerHeight _eq_ 5.000_sm_\n        var rulerWidth _eq_ 0.500_sm_\n        \n        var sourcePlane _eq_ new BABYLON.Plane(0_co_ 0_co_ 0_co_ 0)_sm_\n            \n        sourcePlane.normalize()_sm_\n        \n        var meshRuler _eq_ BABYLON.MeshBuilder.CreatePlane(_qt_meshRuler_qt__co_ {height_dd_rulerHeight_co_ width_dd_ rulerWidth_co_ sourcePlane_dd_ sourcePlane_co_ sideOrientation_dd_ BABYLON.Mesh.DOUBLESIDE}_co_ this.scene)_sm_\n        \n        meshRuler.position _eq_ new BABYLON.Vector3(0.5 * rulerWidth_co_ 0.5 * rulerHeight_co_ 0)_sm_\n        \n        var rulerMaterial _eq_ new BABYLON.StandardMaterial(_qt_myMaterial_qt__co_ this.scene)_sm_\n\n            rulerMaterial.emissiveColor _eq_ new BABYLON.Color3(1_co_ 1_co_ 0)_sm_\n            \n            meshRuler.material _eq_ rulerMaterial_sm_\n            \n        // Striche einfügen\n        \n        var restHoehe _eq_ rulerHeight_sm_    // verbleibende Höhe bis OK Ruler\n        var currentHeight _eq_ 0_sm_          // aktuelle Höhe beim Aufbauen des Rulers\n        var step _eq_ 0.200_sm_               // Schrittweite\n        var stepCounter _eq_ 0_sm_            // Schrittzähler (Schleifendurchläufe)\n        var shortLength _eq_ 0.2000_sm_\n        var longLength _eq_ 0.3500_sm_\n        \n        Ende_dd_ while (restHoehe &gt_sm_ 0) {\n            \n            currentHeight _eq_ restHoehe_sm_\n            \n            // kurzen Strich\n            if (stepCounter &lt_sm_ 5) {\n                \n                var myPoints _eq_ []_sm_\n                myPoints.push(new BABYLON.Vector3(0_co_ 0_co_ 0))_sm_\n                myPoints.push(new BABYLON.Vector3(shortLength_co_ currentHeight_co_ 1))_sm_\n                \n                var lines _eq_ BABYLON.MeshBuilder.CreateLines(_qt_lines_qt__co_ {points_dd_ myPoints_co_ updatable_dd_ true}_co_ this.scene)_sm_ \n                lines.color _eq_ new BABYLON.Color3(1_co_ 0_co_ 0)_sm_               \n                \n               stepCounter _eq_ stepCounter + 1_sm_\n               \n               currentHeight _eq_ currentHeight + step_sm_\n            \n            // langer Strich    \n            }else if (stepCounter _eq__eq__eq_ 5) {\n\n                var myPoints _eq_ []_sm_\n                myPoints.push(new BABYLON.Vector3(0_co_ 0_co_ 0))_sm_\n                myPoints.push(new BABYLON.Vector3(longLength_co_ currentHeight_co_ 1))_sm_\n                \n                var lines _eq_ BABYLON.MeshBuilder.CreateLines(_qt_lines_qt__co_ {points_dd_ myPoints_co_ updatable_dd_ true}_co_ this.scene)_sm_ \n                lines.color _eq_ new BABYLON.Color3(1_co_ 0_co_ 0)_sm_  \n                \n                \n                stepCounter _eq_ 0_sm_\n                \n                currentHeight _eq_ currentHeight + step_sm_\n                                    \n            // Error\n            }else{\n\n                /// Alert\n\n            }\n        }\n    }_sm_ _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAll browsers start to freeze_sm_ more or less.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny suggestions_co_ what´s happening?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBR_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMarkus\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-04T23:08:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI would say because restHoehe is never changed so your while(restHoehe &gt_sm_ 0) is always true?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-05T01:16:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#3R1BB3_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#3R1BB3_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tJust a quick idea...\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Topper","Date":"2018-01-05T07:12:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t@ Pryme8\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat´s awesome. Thanks a lot_co_ man_co_ I really appreciate it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t@ Deltakosh\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSounds about right. Damn_co_ I should definitely stop coding after 16 hour. _lt_img alt_eq__qt__dd_unsure_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_unsure.png_qt_ title_eq__qt__dd_unsure_dd__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBut for some reason BJS is highly addictive to me. _lt_img alt_eq__qt__dd_wub_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wub.png_qt_ title_eq__qt__dd_wub_dd__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBR_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMarkus\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2018-01-05T09:36:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyou could also simply use a LineSystem instead _dd_ \n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed8212541192_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/34043-linemesh-and-linesystem-per-point-color/?do_eq_embed&amp_sm_comment_eq_195603&amp_sm_embedComment_eq_195603&amp_sm_embedDo_eq_findComment_qt_ style_eq__qt_height_dd_278px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]