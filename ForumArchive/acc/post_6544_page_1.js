[{"Owner":"eucly2","Date":"2014-05-19T14:07:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello everyone_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_With BabylonJs we can load a scene from a babylon file but why we can_t_t load a scene from a data steam?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In my project we can save BabylonScene to a DataBase on the server with using BABYLON.SceneSerializer and JSON.stringify but after we can_t_t reload this BabyloneScene from the server._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Anyone have an idea?_lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-05-26T21:47:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello eucly2_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Welcome on board._lt_/p_gt__lt_p_gt_Not sure but I think it_t_s what Deltakosh added with this commit _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/commit/137abac2f50a636d32768f93c5bb5fec46b9dbf8_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/commit/137abac2f50a636d32768f93c5bb5fec46b9dbf8_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kilombo","Date":"2014-05-26T22:02:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello there. You can try to use a database to store the name and path (each one in is own var)_co_ then you pass the query result to a var and pass that var to the scene loader (when you instantiate one).  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_It_t_s not a complete answer to the problem_co_ but i think it can help you out._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-26T23:21:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_BTW I added this feature_dd_ just use a Load or an ImportMesh with a string starting with _qt_data_dd__qt_ instead of giving the filename_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-02-03T16:26:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_br_gt_ _lt_br_gt_I end up with the same kind of problem. I added several objects on the stage with importMesh_co_ I use Manipulator to move objects on the ground and seralize my scene I stringnify then I save it in a file with ajax and PHP._lt_br_gt_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-auto_qt__gt_var serializedScene _eq_ BABYLON.SceneSerializer.Serialize(scene)_sm_var strScene _eq_ JSON.stringify(serializedScene)_sm_$.ajax({ url_dd__qt_save_json.php_qt__co_ type_dd__t_post_t__co_ data_dd_ _t_value_eq__t_+strScene})_sm__lt_/pre_gt__lt_p_gt_in the file PHP (save_json.php)_dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-auto_qt__gt_function save($terrainName_co_ $value) {    $cheminFichierJson _eq_ _qt_./../data_admin/terrain/scene.babylon_qt__sm_    $json _eq_ json_encode($value_co_ JSON_UNESCAPED_SLASHES)_sm_    $json _eq_ str_replace(_t_\\_qt__t__co_ _t__qt__t__co_ $json)_sm_    chmod($cheminFichierJson_co_ 0777)_sm_    file_put_contents($cheminFichierJson_co_ substr($json_co_1_co_-1))_sm_    chmod($cheminFichierJson_co_ 0644)_sm_}_lt_/pre_gt__lt_p_gt_but when I load the file I have a SyntaxError_dd_ Unexpected token  _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-auto_qt__gt_BABYLON.SceneLoader.Load(_qt_./data_admin/terrain/_qt__co_ _qt_scene.babylon_qt__co_ engine_co_ function (newScene) {\tengine.runRenderLoop(function() {                newScene.render()_sm_       })_sm_            })_sm_ //SyntaxError_dd_ Unexpected token_lt_/pre_gt__lt_p_gt_ _lt_br_gt_I do not understand. Is this a bug? I have no error file name or line number. just_dd__lt_br_gt_Uncaught SyntaxError_dd_ Unexpected token_lt_br_gt_ _lt_br_gt_ _lt_br_gt_Thanks for help_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]