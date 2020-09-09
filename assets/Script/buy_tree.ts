import { BehaviorTree } from './core/behavior_tree';
import b3 from 'behavior3js';
const d = require('./data/treeData.json');

const blackboard = new b3.Blackboard();

export enum TreeAction {
  ToGround = 'toGround',
    PlayBall = 'playBall',
    GoHome = 'goHome'
}

export enum TreeCondition {
  IsEarly = 'isEarly',
}

export class BuyTree extends BehaviorTree {
  constructor() {
    super();

    this.initAction();
    this.initCondition();
  }

  init(d: JSON) {
    super.init(d)
  }

  /** 
   * @description 初始化action
   */
  initAction() {
    this.loadAction(TreeAction.ToGround, {
      tick: function (tick: b3.Tick) {
        let target = tick.target;
        console.log('to ground', target);
        return b3.SUCCESS;
      }
    });

    this.loadAction(TreeAction.PlayBall, {
      tick: function (tick: b3.Tick) {
        let target = tick.target;
        console.log('play ball', target);
        return b3.SUCCESS;
      }
    });

    this.loadAction(TreeAction.GoHome, {
      tick: function (tick: b3.Tick) {
        let target = tick.target;
        console.log('go home', target);
        return b3.SUCCESS;
      }
    });
  }

  /**
   * @description 初始化condition
   */
  initCondition() {
    this.loadCondition(TreeCondition.IsEarly, {
      tick: function (tick: b3.Tick) {
        let target = tick.target;
        if (Math.random() > 0.5) {
          return b3.SUCCESS;
        } else {
          return b3.FAILURE;
        }
      }
    });
  }
}