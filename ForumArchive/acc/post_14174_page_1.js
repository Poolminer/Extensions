[{"Owner":"Deltakosh","Date":"2015-04-29T16:48:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey team_co_ for the very first time I have a question _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m looking for someone motivated to do an small piece of JS code to do a loader for STL file._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The idea will be to have it part of the repo but not merged with it so people will be able to use it only if they need it_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Please reply here if you are interested_lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-04-29T16:55:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Where are STL files avalaible for instance ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-04-29T16:57:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ll setup a FTP with some of them_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-04-29T17:28:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Here_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/MeshesLibrary/tree/master/STL_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/MeshesLibrary/tree/master/STL_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-04-29T17:35:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Waaoowww !!  github reads the file (just click on the file name) and shows the mesh !!! incredible_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-04-29T17:44:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Would a converter (.stl to .babylon) be enough? Or does it have to be a loader?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-04-29T19:03:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey DK_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m not a candidate for this task_co_ but I was wondering if you_t_re asking for a loader for STL ascii_co_ STL binary_co_ or both?  It might be good to provide such additional info to whomever is able to take on this task.  I assume it_t_s only for STL ascii files.  Also_co_ are you seeking to support loading only the mesh_co_ or also loading attributes such as color?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_DB_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-04-30T15:55:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Mind you I never even heard of an STL_co_ before.  I just hit the raw button.  This came from Blender. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The word _qt_loader_qt_ is troublesome it is just a text file.  Looks like the format is_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_solid Exported from Blender-2.74 (sub 0)facet normal -0.878070 0.128710 0.460898outer loopvertex -8.395496 -20.847273 86.863701vertex -8.345828 -20.835844 86.955132vertex -8.365781 -20.765602 86.897507endloopendfacet...facet normal 0.156189 -0.965122 -0.210105outer loopvertex 3.992925 -21.059233 82.928780vertex 2.446122 -21.603874 84.280746vertex 1.534460 -21.716881 84.122154endloopendfacetendsolid Exported from Blender-2.74 (sub 0)_lt_/pre_gt__lt_p_gt_Do not know what an _qt_outer loop_qt_ is for (parenting?).  Is there some rules for this?  If there can be only 1 solid-endsolid per file_co_ then surely it is just a mesh_co_ not an entire .babylon.  Also what are you language requirements_dd_  C_co_ C++_co_ C#_co_ Java_co_ Typescript_co_ javascript?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-04-30T16:11:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok_co_ I usually answer some of my own questions.  You want this written in Typescript.  You want it to be part of a running scene.  The code should interogate the VertexData associated with a given mesh._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It is going have to turn the data into a Blob_co_ then _qt_write it out_qt__co_ by saving it to the downloads directory like_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var objectUrl _eq_ (window.webkitURL || window.URL).createObjectURL(blob)_sm_            var link _eq_ window.document.createElement(_t_a_t_)_sm_link.href _eq_ objectUrl_sm_link.download _eq_ filename_sm_var click _eq_ document.createEvent(_qt_MouseEvents_qt_)_sm_click.initEvent(_qt_click_qt__co_ true_co_ false)_sm_link.dispatchEvent(click)_sm_          _lt_/pre_gt__lt_p_gt_Still do not know if it needs to be a single mesh_co_ though._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-04-30T22:48:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I would like a loader actually to ease the integration _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And for ASCII version only_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-05-07T11:02:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Here_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_module BABYLON {    export class STLFileLoader implements ISceneLoaderPlugin {        public solidPattern _eq_ /solid (\\S*)([\\S\\s]*)endsolid[ ]*(\\S*)/g_sm_        public facetsPattern _eq_ /facet([\\s\\S]*?)endfacet/g_sm_        public normalPattern _eq_ /normal[\\s]+([\\-+]?[0-9]+\\.?[0-9]*([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+/g_sm_        public vertexPattern _eq_ /vertex[\\s]+([\\-+]?[0-9]+\\.?[0-9]*([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+/g_sm_        public extensions _eq_ _qt_.stl_qt__sm_        public importMesh(meshesNames_dd_ any_co_ scene_dd_ Scene_co_ data_dd_ any_co_ rootUrl_dd_ string_co_ meshes_dd_ AbstractMesh[]_co_ particleSystems_dd_ ParticleSystem[]_co_ skeletons_dd_ Skeleton[])_dd_ boolean {            var matches_sm_            while (matches _eq_ this.solidPattern.exec(data)) {                var meshName _eq_ matches[1]_sm_                var meshNameFromEnd _eq_ matches[3]_sm_                if (meshName !_eq_ meshNameFromEnd) {                    console.log(_qt_error in stl_co_ solid name !_eq_ endsolid name_qt_)_sm_                }                //check meshesNames                if (meshesNames &amp_sm_&amp_sm_ meshName) {                    if (meshesNames instanceof Array) {                        if (!meshesNames.indexOf(meshName)) {                            continue_sm_                        }                    } else {                        if (meshName !_eq__eq_ meshesNames) {                            continue_sm_                        }                    }                }                //stl mesh name can be empty as well                meshName _eq_ meshName || _qt_stlmesh_qt__sm_                var babylonMesh _eq_ new Mesh(meshName_co_ scene)_sm_                this.parseSolid(babylonMesh_co_ matches[2])_sm_            }            return true_sm_        }        public load(scene_dd_ Scene_co_ data_dd_ string_co_ rootUrl_dd_ string)_dd_ boolean {            return this.importMesh(null_co_ scene_co_ data_co_ rootUrl_co_ null_co_ null_co_ null)_sm_        }        private parseSolid(mesh_dd_ Mesh_co_ solidData_dd_ string) {            var normals _eq_ []_sm_            var positions _eq_ []_sm_            var indices _eq_ []_sm_            var indicesCount _eq_ 0_sm_            //load facets_co_ ignoring loop as the standard doesn_t_t define it can contain more than vertices            var matches_sm_            while (matches _eq_ this.facetsPattern.exec(solidData)) {                var facet _eq_ matches[1]_sm_                //one normal per face                var normalMatches _eq_ this.normalPattern.exec(facet)_sm_                this.normalPattern.lastIndex _eq_ 0_sm_                if (!normalMatches) {                    continue_sm_                }                var normal _eq_ [Number(normalMatches[1])_co_ Number(normalMatches[5])_co_ Number(normalMatches[3])]_sm_                var vertexMatch_sm_                while (vertexMatch _eq_ this.vertexPattern.exec(facet)) {                    positions.push(Number(vertexMatch[1])_co_ Number(vertexMatch[5])_co_ Number(vertexMatch[3]))_sm_                    normals.push(normal[0]_co_ normal[1]_co_ normal[2])_sm_                    indices.push(indicesCount++)_sm_                }                this.vertexPattern.lastIndex _eq_ 0_sm_            }            this.facetsPattern.lastIndex _eq_ 0_sm_            mesh.setVerticesData(VertexBuffer.PositionKind_co_ positions)_sm_            mesh.setVerticesData(VertexBuffer.NormalKind_co_ normals)_sm_            mesh.setIndices(indices)_sm_            mesh.computeWorldMatrix(true)_sm_        }    }    BABYLON.SceneLoader.RegisterPlugin(new STLFileLoader())_sm_}_lt_/pre_gt__lt_p_gt_Y and Z had to be switched_co_ since every file i tested had them flipped. This should be investigated _dd_-)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Regex were partly self-generated / modified and partly shamelessly stolen from a different (very famous and highly used) 3D WebGL engine. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Want a PR for that?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-05-07T11:34:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@RaananW_lt_/p_gt__lt_p_gt_Here_co_ you parse and store the STL faces as they are._lt_/p_gt__lt_p_gt_For adjacent faces_co_ you don_t_t try to reuse vertices what is quite complex._lt_/p_gt__lt_p_gt_So normals aren_t_t computed by taking in account the fact a vertex could belong to more than one face._lt_/p_gt__lt_p_gt_Am I right ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I guess we have to trust the face normals as they are set in the STL file._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-05-07T11:42:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I am not making any optimizations. There is quite a lot that is possible_co_ including normal computation in the engine_co_ question is if it is needed. I used compute normals once_co_ there was no change in the result_co_ and I usually believe that the exported normals are correct._lt_/p_gt__lt_p_gt_Regarding vertex duplication - this is more than possible to integrate. I thought about it_co_ this might reduce the amount of vertices in ~10-20% in simple meshes. I am simply not sure where this loader will be used_co_ if it is just a temporary thing there is no need to invest too much _dd_-) if it will be integrated in the framework_co_ commenting and improvements are in order._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-05-07T11:59:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok_co_ thank you _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-05-07T14:55:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@RaananW - The Y - Z switching is also done exporting out of Blender.  Think this is discussed as a _qt_Left hand_qt_ - _qt_Right hand_qt_ design difference._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Speaking of vertex reuse_co_ it does add much complexity.  If you can read Python_co_ check Blender exporter.  Since this is just _qt_writing_qt_ to CPU / GPU memory_co_ I do not see any advantage in doing this.  Suppose someone could combine this with serializing to a .babylon_co_ but seems a very small use case._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-05-07T15:07:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_yep_lt_/p_gt__lt_p_gt_the only advantage of vertex re-use is in the case where the imported mesh is then updated within BJS and its normals recomputed._lt_/p_gt__lt_p_gt_The_lt_em_gt_ computeNormals()_lt_/em_gt_ takes into account the vertex belonging to many faces._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think it_t_s not that important however ..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-05-07T21:11:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_PR would be lovely _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-05-07T21:29:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Coming right up _dd_-)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]