import { GoHome } from './actions/GoHome';
import { PlayBall } from './actions/PlayBall';
import { ToGround } from './actions/ToGround';
import { IsEarly } from './conditions/IsEarly';
import { BehaviorTree, Blackboard } from './bhtree';

const { ccclass, property } = cc._decorator;
@ccclass
export default class HelloWorld extends cc.Component {
    tree: BehaviorTree;
    bb: Blackboard = new Blackboard();

    start() {
        this.tree = new BehaviorTree();
        let names = {
            'toGround': ToGround,
            'playBall': PlayBall,
            'goHome': GoHome,
            'isEarly': IsEarly,
        };

        cc.loader.loadRes('data/treeData', cc.JsonAsset, (err, res: cc.JsonAsset) => {
            this.tree.load(res.json, names);
            let data = this.tree.dump();
            console.log(data);
        });
    }
    onClick() {
        this.tree.tick(this, this.bb);
    }
}
