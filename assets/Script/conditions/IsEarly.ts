import { Condition, FAILURE, SUCCESS } from "../bhtree";

export class IsEarly extends Condition {
  /**
    * Tick method.
    * @method tick
    * @param {b3.Tick} tick A tick instance.
    * @return {Constant} A state constant.
    **/
  tick(tick) {
    let target = tick.target;
    if (Math.random() > 0.5) {
      console.log('is early? true');
      return SUCCESS;
    } else {
      console.log('is early? false');
      return FAILURE;
    }
  }
}