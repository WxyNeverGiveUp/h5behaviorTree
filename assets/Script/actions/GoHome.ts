import { Action, SUCCESS } from "../bhtree";

export class GoHome extends Action {
  /**
    * Tick method.
    * @method tick
    * @param {b3.Tick} tick A tick instance.
    * @return {Constant} A state constant.
    **/
  tick(tick) {
    let target = tick.target;
    console.log('go home', target);
    return SUCCESS;
  }
}