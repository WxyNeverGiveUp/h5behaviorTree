import { Action, SUCCESS } from "../bhtree";

export class ToGround extends Action {
  /**
    * Tick method.
    * @method tick
    * @param {b3.Tick} tick A tick instance.
    * @return {Constant} A state constant.
    **/
  tick(tick) {
    let target = tick.target;
    console.log('to ground', target);
    return SUCCESS;
  }
}