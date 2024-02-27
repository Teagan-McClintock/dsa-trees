import { TreeNodeNum } from "../common/tree";

/** countEvens(): starting from the invoking node and moving through its
 * children, count how many nodes have even values. Returns that count as
 * an integer. */
function countEvens(node: TreeNodeNum): number {
  let count = 0;
  const stack = [node];

  while (stack.length > 0) {
    const poppedNode = stack.pop();
    if (poppedNode!.val % 2 === 0) count++;
    stack.push(...poppedNode!.children);
  }

  return count;
}

export { countEvens };
