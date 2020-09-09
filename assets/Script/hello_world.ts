import { BuyTree } from './buy_tree';
const d = require('../treeData.json');

export enum TreeAction {
    ToGround = 'toGround',
    PlayBall = 'playBall',
    GoHome = 'goHome'
}

export enum TreeCondition {
IsEarly = 'isEarly',
}

const {ccclass, property} = cc._decorator;
@ccclass
export default class HelloWorld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    start () {
        // init logic
        this.label.string = this.text;

        const buyTree = new BuyTree()
        buyTree.init(d);
        // buyTree.tick(this, )
    }
}
