[{"Owner":"Samuel Girardin","Date":"2014-02-11T04:57:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I add for some tests _lt_em_gt__lt_strong_gt_ BABYLON.Bone.prototype.getAbsolutePosition_lt_/strong_gt__lt_/em_gt_ _co_ this was easy returning m12_co_m13_co_m14 of the bone_t_s _worldTransform matrix. Now_co_  I try to add _lt_em_gt__lt_strong_gt_setAbsolutePosition_lt_/strong_gt__lt_/em_gt_ method to bone_co_ and I failed. Certainly due to my bad matrix knowledge_co_ I tried to get some inspiration from Gwenael push about Mesh.._lt_em_gt__lt_strong_gt_setAbsolutePosition_lt_/strong_gt__lt_/em_gt_. With no succes. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If someone got an idea to achieve that (Gwenael ?!) _co_ it would be super cool !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Sam._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Samuel Girardin","Date":"2014-02-11T17:11:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Samuel Girardin","Date":"2014-02-12T01:18:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-02-18T16:29:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Samuel_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Really sorry but I have been so busy recently by a project at work that I haven_t_t spent time on this forum. I haven_t_t played so far with bones in BabylonJS but I might be able to look at it. Could you share what you have done so far?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Samuel Girardin","Date":"2014-02-18T18:14:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt__lt_span style_eq__qt_font-family_dd_arial_co_ helvetica_co_ sans-serif_sm__qt__gt_Hi gwenael ! _lt_/span_gt__lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_So about skeleton and bones _dd_ I really want to be able to move one bone_co_ or a group of bones to an absolute position. I  understand the recursivity of _lt_/span_gt__lt_span style_eq__qt_font-family_dd_arial_co_ helvetica_co_ sans-serif_sm_font-size_dd_14px_sm_color_dd_rgb(51_co_51_co_51)_sm__qt__gt_Bone_lt_/span_gt__lt_span style_eq__qt_font-family_dd_arial_co_ helvetica_co_ sans-serif_sm_font-size_dd_14px_sm_color_dd_rgb(51_co_51_co_51)_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_font-family_dd_arial_co_ helvetica_co_ sans-serif_sm_font-size_dd_14px_sm_color_dd_rgb(51_co_51_co_51)_sm__qt__gt_prototype_lt_/span_gt__lt_span style_eq__qt_font-family_dd_arial_co_ helvetica_co_ sans-serif_sm_font-size_dd_14px_sm_color_dd_rgb(51_co_51_co_51)_sm__qt__gt_._lt_/span_gt__lt_span_gt__lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_getAbsoluteMatrix. I thought if I did something like the inverse of this method_co_ By first _lt_/span_gt__lt_span_gt_translate_lt_/span_gt__lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_ the root bone and apply this transformations to all other bones_co_ I would be able get THE bone MATRIX I want for moving my bone to his expected place. I failed_co_ I try during several days. _lt_/span_gt__lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span_gt__lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_If you want to have a look here is a link _dd_ _lt_a href_eq__qt_http_dd_//www.visualiser.fr/Babylon/Skin/Default.htm_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.visualiser.fr/Babylon/Skin/Default.htm_lt_/a_gt__lt_/span_gt__lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here is some screen capture with explanations... I would like to be able a bone or or group of bone where I want. I understand_co_ when the skeleton is animated_co_ I have to apply thoses transformations after the skeleton is updated. If you have one solution or some new ways I didn_t_t explored... Thks. Sam._lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//www.visualiser.fr/img/skin.jpg_qt_ alt_eq__qt_skin.jpg_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt__lt_span style_eq__qt_font-family_dd_arial_co_ helvetica_co_ sans-serif_sm__qt__gt__lt_img src_eq__qt_http_dd_//www.visualiser.fr/img/skin1.jpg_qt_ alt_eq__qt_skin1.jpg_qt__gt__lt_/span_gt__lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AndyBeaulieu","Date":"2014-02-20T15:47:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I am trying to do the something very similar..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Given the position and rotation of a mesh in the world_co_ I want to position a bone in the same position and orientation._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Does anyone have any ideas on this?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-02-21T16:41:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Bones have a function called _lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_updateMatrix_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_ which update the associated matrix._lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_The final matrix (_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_absolutematrix)_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_ transmitted to shaders is built using this matrix and the bone_t_s parent absolutematrix_dd__lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span_gt_BABYLON_lt_/span_gt__lt_span_gt_._lt_/span_gt__lt_span_gt_Bone_lt_/span_gt__lt_span_gt_._lt_/span_gt__lt_span_gt_prototype_lt_/span_gt__lt_span_gt_._lt_/span_gt__lt_span_gt_getAbsoluteMatrix_lt_/span_gt_ _lt_span style_eq__qt_font-weight_dd_bold_sm__qt__gt__eq__lt_/span_gt_ _lt_span style_eq__qt_font-weight_dd_bold_sm__qt__gt_function_lt_/span_gt_ _lt_span_gt_()_lt_/span_gt_ _lt_span_gt_{_lt_/span_gt__lt_/p_gt__lt_div_gt_        _lt_span style_eq__qt_font-weight_dd_bold_sm__qt__gt_var_lt_/span_gt_ _lt_span_gt_matrix_lt_/span_gt_ _lt_span style_eq__qt_font-weight_dd_bold_sm__qt__gt__eq__lt_/span_gt_ _lt_span style_eq__qt_font-weight_dd_bold_sm__qt__gt_this_lt_/span_gt__lt_span_gt_._lt_/span_gt__lt_span_gt__matrix_lt_/span_gt__lt_span_gt_._lt_/span_gt__lt_span_gt_clone_lt_/span_gt__lt_span_gt_()_sm__lt_/span_gt__lt_/div_gt__lt_div_gt_        _lt_span style_eq__qt_font-weight_dd_bold_sm__qt__gt_var_lt_/span_gt_ _lt_span_gt_parent_lt_/span_gt_ _lt_span style_eq__qt_font-weight_dd_bold_sm__qt__gt__eq__lt_/span_gt_ _lt_span style_eq__qt_font-weight_dd_bold_sm__qt__gt_this_lt_/span_gt__lt_span_gt_._lt_/span_gt__lt_span_gt__parent_lt_/span_gt__lt_span_gt__sm__lt_/span_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_        _lt_span style_eq__qt_font-weight_dd_bold_sm__qt__gt_while_lt_/span_gt_ _lt_span_gt_(_lt_/span_gt__lt_span_gt_parent_lt_/span_gt__lt_span_gt_)_lt_/span_gt_ _lt_span_gt_{_lt_/span_gt__lt_/div_gt__lt_div_gt_            _lt_span_gt_matrix_lt_/span_gt_ _lt_span style_eq__qt_font-weight_dd_bold_sm__qt__gt__eq__lt_/span_gt_ _lt_span_gt_matrix_lt_/span_gt__lt_span_gt_._lt_/span_gt__lt_span_gt_multiply_lt_/span_gt__lt_span_gt_(_lt_/span_gt__lt_span_gt_parent_lt_/span_gt__lt_span_gt_._lt_/span_gt__lt_span_gt_getLocalMatrix_lt_/span_gt__lt_span_gt_())_sm__lt_/span_gt__lt_/div_gt__lt_div_gt_            _lt_span_gt_parent_lt_/span_gt_ _lt_span style_eq__qt_font-weight_dd_bold_sm__qt__gt__eq__lt_/span_gt_ _lt_span_gt_parent_lt_/span_gt__lt_span_gt_._lt_/span_gt__lt_span_gt_getParent_lt_/span_gt__lt_span_gt_()_sm__lt_/span_gt__lt_/div_gt__lt_div_gt_        _lt_span_gt_}_lt_/span_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_        _lt_span style_eq__qt_font-weight_dd_bold_sm__qt__gt_return_lt_/span_gt_ _lt_span_gt_matrix_lt_/span_gt__lt_span_gt__sm__lt_/span_gt__lt_/div_gt__lt_div_gt_    _lt_span_gt_}_sm__lt_/span_gt__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AndyBeaulieu","Date":"2014-02-22T03:01:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks!!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m still not getting it though. It seems like no matter what I send to bone.updateMatrix()_co_ the deformation does not update on the mesh._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It_t_s like my changes are lost in the call to _updateDifferenceMatrix()_co_ but I don_t_t see how._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I will try to make a demo of the issue_co_ but any thoughts are welcome!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AndyBeaulieu","Date":"2014-02-22T23:47:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Here is a very small test project to show what I am trying to do..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.andybeaulieu.com/downloads/BoneSetAbsolutePosition_022214.zip_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.andybeaulieu.com/downloads/BoneSetAbsolutePosition_022214.zip_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The project has (1) a mesh with skeleton_co_ and (2) a box that is nearby and slightly rotated_co_ like so_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//www.andybeaulieu.com/downloads/deform1.png_qt_ alt_eq__qt_deform1.png_qt__gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_What I am trying to have happen is that the _qt_head_qt_ bone gets positioned and rotated in the same world space as the box_co_ like so_dd__lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//www.andybeaulieu.com/downloads/deform2.png_qt_ alt_eq__qt_deform2.png_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have a stub started_co_ but nothing else because everything I have tried has failed _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So if anyone can help with a function implementation like that below_co_ which would accept a bone and a mesh_co_ and then move that bone to the mesh and rotate_co_ many thanks in advance!_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_    THEGAME.Engine.prototype.moveBoneToMesh _eq_ function (bone_co_ mesh) {               // ********************        // need some help here...        // this function should set _qt_bone_qt_ position and orientation to         // be equal to _qt_mesh_qt_        // ********************        var matrix _eq_ mesh.getWorldMatrix().clone()_sm_                     // also_co_ calling updateMatrix here seems to do nothing_co_ regardless        // of what matrix value is sent in?        bone.updateMatrix(matrix)_sm_          }_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Samuel Girardin","Date":"2014-02-23T00:39:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey Andy  (it starts like a french song !)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think we try to achieve the same thing. I work on other stuff for now... Perhaps I don_t_t understand your problem_co_ but it seems you don t manage to see any mesh displacement or transformation._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In my case I manage to displace  (the hand of my 3D mesh). Not at the right place ... For that_co_ if  I don_t_t call something like  _dd__lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_ _lt_/span_gt__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_this.scene.beginAnimation(this.meshSkeleton _co_ 0_co_1_co_true_co_ 1)_sm_ _lt_/pre_gt__lt_p_gt_I can_t_t have the transformation when I use _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_this.meshSkeleton.bones[index].updateMatrix(matrix)_lt_/pre_gt__lt_p_gt_I_t_m almost sure calling the skeleton animation just from one frame tell to the engine to update all the skeleton. Without that I can_t_t see any tranformation(there must be an other way to update the skeleton)_lt_/p_gt__lt_p_gt_My problem is to compute the right matrix ...  Perhaps this can help. I_t_m a bit lost on this.._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Sam_lt_/p_gt__lt_p_gt__lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_      _lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AndyBeaulieu","Date":"2014-02-23T13:49:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Samuel_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Adding in a call to beginAnimation _did_ succeed in applying the deformation to my mesh_co_ thanks!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But I have the same outstanding issue as yourself now - I am not sure how to compute the correct matrix either._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Samuel Girardin","Date":"2014-02-24T02:06:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Andy_co_ could you try that ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m not sure to have -the- solution_co_ but it sounds good.. I use dude.babylon if you want to test my code._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Edit _dd_ Transformation are relative to the box position._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_// the dummy box with 2 rotations tricks to well orient the headthis.dummyHelper.rotation.y _eq_- Math.PI / 2_sm_this.dummyHelper.rotation.z _eq_ Math.PI / 2_sm_var matrix_dd_BABYLON.Matrix _eq_ this.dummyHelper.getWorldMatrix().clone()_sm_    matrix.invert()_sm_// in this case index_eq_7 is the bone head root _co_ if you want to try with the hand the index _eq_ 34this.meshSkeleton.bones[7].updateMatrix(this.meshSkeleton.bones[7].getAbsoluteMatrix().clone().multiply(matrix))_sm__lt_/pre_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//www.visualiser.fr/img/head.jpg_qt_ alt_eq__qt_head.jpg_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AndyBeaulieu","Date":"2014-02-25T03:02:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks for trying and sharing!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Unfortunately it is not working with my mesh. If I send in the topmost parent bone (_qt_hip_qt_)_co_ then it works_co_ but any other child I try does a bad scale_co_ rotate and transform on the mesh._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Maybe it is something specific with my mesh - I haven_t_t tried it with _qt_dude_qt_ yet._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ll keep playing with it - it must be a hierarchical issue - if I start with the hip bone and then work through the children_co_ maybe it can be fixed._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AndyBeaulieu","Date":"2014-02-28T18:04:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Just pinging this one again_co_ does anyone have any further ideas on this? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Basically_co_ I need to set world position and rotation of a bone inside a skeleton to have the same rotation and position as a mesh in the world. I am not understanding the bone_t_s matrix and parent relationship enough to pull this off._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_More details here -_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/3736-babylonboneprototypesetabsoluteposition/?p_eq_25777_qt__gt_http_dd_//www.html5gamedevs.com/topic/3736-babylonboneprototypesetabsoluteposition/?p_eq_25777_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-02-28T18:52:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Starting from _dd__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_136)_sm__qt__gt_this_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_meshSkeleton_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_bones_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_[_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_102_co_102)_sm__qt__gt_7_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_]._lt_/span_gt__lt_span_gt_getAbsoluteMatrix_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_()._lt_/span_gt__lt_span_gt_clone_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_()._lt_/span_gt__lt_span_gt_multiply_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_(_lt_/span_gt__lt_span_gt_matrix_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_)_lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_I think it is just a matter of getting the inverse of the absoluteMatrix to block parent hierarchy_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AndyBeaulieu","Date":"2014-02-28T21:42:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Do you mean the inverse of the _lt_strong_gt_parent_t_s_lt_/strong_gt_ absoluteMatrix?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Something like the following? Although this doesn_t_t seem to quite work..._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_THEGAME.Engine.prototype.moveBoneToMesh _eq_ function (bone_co_ mesh) {        var meshMatrix _eq_ mesh.getWorldMatrix().clone()_sm_        meshMatrix.invert()_sm_        var boneMatrix _eq_ bone.getAbsoluteMatrix().clone()_sm_        boneMatrix _eq_ boneMatrix.multiply(meshMatrix)_sm_        if (bone._parent) {            var parentMatrix _eq_ bone._parent.getAbsoluteMatrix().clone()_sm_            parentMatrix.invert()_sm_            boneMatrix _eq_ boneMatrix.multiply(parentMatrix)_sm_        }        bone.updateMatrix(boneMatrix)_sm_        that._scene.beginAnimation(bone._skeleton_co_ 0_co_ 1_co_ true_co_ 1)_sm_    }_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-03-03T22:20:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Could you prepare me a small sample somewhere ? (jsfiddle is great)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I promise to find what you need _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AndyBeaulieu","Date":"2014-03-04T19:23:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Okay_co_ here is a jsfiddle - _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p style_eq__qt_margin-left_dd_40px_sm__qt__gt__lt_a href_eq__qt_http_dd_//jsfiddle.net/andybeaulieu/9Ffv5/37/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jsfiddle.net/andybeaulieu/9Ffv5/37/_lt_/a_gt__lt_/p_gt__lt_p style_eq__qt_margin-left_dd_40px_sm__qt__gt_ _lt_/p_gt__lt_p_gt_If you go there and_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_ul_gt__lt_li_gt_click the _qt__lt_strong_gt_Copy Bones_lt_/strong_gt__qt_ button. This creates a series of box meshes that mirror the skeleton of the guy in the scene._lt_br_gt_ _lt_/li_gt__lt_li_gt_click the _qt__lt_strong_gt_Move to Bones_lt_/strong_gt__qt_ button. What _should_ happen is that the bones in the skeleton move over to their respective meshes in the _qt_copy_qt_ of the skeleton to the left. So they should translate_co_ rotate (no need to scale) to the box meshes in the skeleton to the left._lt_br_gt_ _lt_/li_gt__lt_li_gt_looking at my code_co_ the problem function is right at the top - _lt_strong_gt_moveSkeletonToBones. _lt_/strong_gt_In there_co_ I want to iterate through each bone in the skeleton_co_ and orient it (translate and rotate) to its respective _qt_copy_qt_ of the bone to the left._lt_/li_gt__lt_/ul_gt__lt_p_gt_Thanks for any ideas. I think this would be a powerful function for rag dolls and programmatic animation of the skeleton!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AndyBeaulieu","Date":"2014-03-11T22:57:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_*bump* ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-03-11T23:47:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m on it _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-03-11T23:52:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have a question_dd_ why are you not just moving the dude where the bones are ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-03-11T23:54:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Like this_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//jsfiddle.net/9Ffv5/40/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jsfiddle.net/9Ffv5/40/_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AndyBeaulieu","Date":"2014-03-12T00:44:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_heh_co_ that would be easy wouldn_t_t it _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But my what my ultimate goal here is to create a ragdoll. So_co_ the box meshes to the left will eventually have physics added to them and joints created between them._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Then_co_ by matching the position and rotation of the box meshes to the bones in the skeleton_co_ I should have a ragdoll... That_t_s the idea anyway _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ I am open to other suggestions though._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Samuel Girardin","Date":"2014-03-12T00:57:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey Andy_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Just for illustrated_co_ I think you want to  achieve something like _lt_a href_eq__qt_http_dd_//www.visualiser.fr/demo.php?id_eq_Away3D_Ragdoll_qt_ rel_eq__qt_external nofollow_qt__gt_that_lt_/a_gt_ (stage3D demo (rip)). Shoot the ragoll._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m right ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AndyBeaulieu","Date":"2014-03-12T01:01:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes Samuel - exactly!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Nice demo by the way _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]