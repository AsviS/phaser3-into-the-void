import InversePipeline from './inversepipeline.js';

class InversePipelinePlugin extends Phaser.Plugins.BasePlugin {

    constructor(pluginManager) {
        super(pluginManager);
    }

    start() {
        var eventEmitter = this.game.events;
        eventEmitter.once('destroy', this.destroy, this);
    }

    add(scene, key, config) {
        return new InversePipeline(scene, key, config);
    }

}

export default InversePipelinePlugin;