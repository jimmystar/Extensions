[{"Owner":"Dad72","Date":"2015-11-25T19:33:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt_I load scene serialized with a cube using BABYLON.SceneLoader.Load () the scene is load_co_ but if I move the mouse cursor_co_ I error_dd_ Active camera not set._lt_/div_gt__lt_div_gt_but yet I have an active camera as you can see in this scene._lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_See the console for error_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.castorengine.com/public/demo/Teste/index.php_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.castorengine.com/public/demo/Teste/index.php_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-11-25T19:42:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Was going to post the same thing today Dad. Seems to be with BJS 2.3. Same code I am using works quite happily with BJS 2.2 and it  includes the  _lt_u_gt_BABYLON.SceneLoader.Load () _lt_/u_gt_coding_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And despite the error message the camera does see to be active._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The exact message I get with FF which may be helpful_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_Error_dd_ Active camera not set babylon.2.3.js_dd_9_dd_16353_lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And with the FreeCamera_co_ which is active as I can move around quite easily_co_ the number of the same error messages climbs when moving the mouse cursor - but not the arrow keys._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Edited to add some extra info from my experiences._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-11-25T20:31:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_the error here_co_ but I do not really know why this error produce _dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_Scene.prototype.createPickingRayInCameraSpace _eq_ function (x_co_ y_co_ camera) {            var engine _eq_ this._engine_sm_            if (!camera) {                if (!this.activeCamera)                    throw new Error(_qt_Active camera not set_qt_)_sm_                camera _eq_ this.activeCamera_sm_            }            var cameraViewport _eq_ camera.viewport_sm_            var viewport _eq_ cameraViewport.toGlobal(engine)_sm_            var identity _eq_ BABYLON.Matrix.Identity()_sm_            // Moving coordinates to local viewport world            x _eq_ x / this._engine.getHardwareScalingLevel() - viewport.x_sm_            y _eq_ y / this._engine.getHardwareScalingLevel() - (this._engine.getRenderHeight() - viewport.y - viewport.height)_sm_            return BABYLON.Ray.CreateNew(x_co_ y_co_ viewport.width_co_ viewport.height_co_ identity_co_ identity_co_ camera.getProjectionMatrix())_sm_        }_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-11-25T21:49:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This is because you have two scenes_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var createScene _eq_ function () {\t\t\t\t\t\tscene _eq_ new BABYLON.Scene(engine)_sm_\t\t\tBABYLON.SceneLoader.Load(_qt__qt__co_ _qt_http_dd_//www.castorengine.com/public/demo/Teste/game_castor.babylon_qt__co_ engine_co_ function (newScene) {\t\t\t\t\t\tscene _eq_ newScene_sm_\t\t\t_lt_/pre_gt__lt_p_gt_the first scene (scene_eq_new BABYLON.Engine(engine)) is created but never used. But still referenced by engine. Just remove it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_On my side  will fix this to prevent the error_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-11-25T21:57:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_Oh yes_co_ is ok_co_ yet even before that worked like that. I thought that the second scene overwrite the first scene._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Thank you Deltakosh_lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]