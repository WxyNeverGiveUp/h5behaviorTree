import * as b3 from 'behavior3js';

export class BehaviorTree {
  treeNames = {};
  tree = null;

  init(d: JSON) {
    this.createTree(d);
  }

  private createTree(jsonData: JSON) {
    this.tree = new b3.BehaviorTree();
    this.tree.load(jsonData, this.treeNames);
  }

  private loadNode(name: string, properties: object, type: () => void) {
    let node = new b3.Class(type);

    node.prototype.name = name;
    for(const prop in properties) {
      node.prototype[prop] = properties[prop]
    }

    this.treeNames[name] = node;
    return node;
  }

  public loadAction(name, properties: object) {
    return this.loadNode(name, properties, b3.Action)
  }

  public loadCondition(name, properties: object) {
    const condition: b3.Condition = b3.Condition;
    return this.loadNode(name, properties, condition)
  }
}