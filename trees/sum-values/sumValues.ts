import { TreeNodeNum } from "../common/tree";

/** sumValues(): add up all values of node and its descendants.
 * Returns sum as an integer. */
function sumValues(node: TreeNodeNum): number {
  let sum = 0;
  const stack = [node];

  while (stack.length > 0) {
    const poppedNode = stack.pop();
    sum += poppedNode!.val;
    stack.push(...poppedNode!.children);
  }

  return sum;
}

export { sumValues };
