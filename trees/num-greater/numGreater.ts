import { TreeNodeNum } from "../common/tree";

/** numGreater(lowerBound): starting from the invoking node and moving
 * through its children, return a count of the number of nodes whose value
 * is greater than lowerBound. */

function numGreater(node: TreeNodeNum, lowerBound: number): number {
  let count = 0;
  const stack = [node];

  while (stack.length > 0) {
    const poppedNode = stack.pop();
    if (poppedNode!.val > lowerBound) count++;
    stack.push(...poppedNode!.children);
  }

  return count;
}

export { numGreater };