[{"Owner":"saldukoo","Date":"2016-03-11T19:36:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIm trying to access the materials library here_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/materialsLibrary/dist_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/materialsLibrary/dist_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo after placing this script\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ &lt_sm_script src_eq__qt_/assets/game/Babylon.js-master/materialsLibrary/dist/babylon.brickProceduralTexture.min.js_qt_&gt_sm_&lt_sm_/script&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI get this for all materials\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_TypeError_dd_ BABYLON.serializeAsTexture is not a function_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThe procedural texture library works though. How to fix this one?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-03-11T22:34:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAre you using bjs 2.4?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"saldukoo","Date":"2016-03-11T23:05:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI was using 2.3. After installing 2.4 the error vanished. The materials aren_t_t working though. Im getting weird looking shaders. Here_t_s the error for FireMaterial.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_BJS - [00_dd_59_dd_25]_dd_ Unable to compile effect_dd_  babylon.2.4.js_dd_3_dd_14480\n\nBJS - [00_dd_59_dd_25]_dd_ Vertex shader_dd_fire babylon.2.4.js_dd_3_dd_14480\n\nBJS - [00_dd_59_dd_25]_dd_ Fragment shader_dd_fire babylon.2.4.js_dd_3_dd_14480\n\nBJS - [00_dd_59_dd_25]_dd_ Defines_dd_ #define ALPHATEST\n#define BonesPerMesh 0\n#define NUM_BONE_INFLUENCERS 0\n babylon.2.4.js_dd_3_dd_14480\n\nBJS - [00_dd_59_dd_25]_dd_ Error_dd_ ERROR_dd_ 0_dd_137_dd_ _t_uv_t_ _dd_ undeclared identifier\nERROR_dd_ 0_dd_137_dd_ _t_x_t_ _dd_  field selection requires structure or vector on left hand side\nERROR_dd_ 0_dd_138_dd_ _t_y_t_ _dd_  field selection requires structure or vector on left hand side\nERROR_dd_ 0_dd_139_dd_ _t_x_t_ _dd_  field selection requires structure or vector on left hand side\nERROR_dd_ 0_dd_140_dd_ _t_y_t_ _dd_  field selection requires structure or vector on left hand side\nERROR_dd_ 0_dd_141_dd_ _t_x_t_ _dd_  field selection requires structure or vector on left hand side\nERROR_dd_ 0_dd_142_dd_ _t_y_t_ _dd_  field selection requires structure or vector on left hand side\n babylon.2.4.js_dd_3_dd_14480_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-03-11T23:17:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAdding _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/11802-luaacro/?do_eq_hovercard_qt_ data-mentionid_eq__qt_11802_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/11802-luaacro/_qt__gt_@Luaacro_lt_/a_gt_ who wrote the fireMaterial\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Luaacro","Date":"2016-03-15T11:47:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello saldukoo_co_ can you share with us your material configuration ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn my tests the material works_co_ so I need your configuration to find the special case where you get this error. Thanks ! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Luaacro","Date":"2016-03-31T21:03:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi saldukoo_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI finally found the problem and fixed it_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/pull/1076_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/pull/1076_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHave fun!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]