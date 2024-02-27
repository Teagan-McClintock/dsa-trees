import { TreeNodeNum } from "../common/tree";

/** Get maximum depth from node.
 *
 * Maximum depth: length of longest path from node to a leaf.
 **/

function maxDepth(node: TreeNodeNum | null): number {
  let deepest = 0;

  /** Depth-first search
   *
   *  Keep count of how many times we've gone down, until we hit an end
   *  That becomes the deepest if it's bigger than the current
   *
   *  RECURSION
   *  base case: null node -> 0
   *  base case: node.children.length === 0 -> 1
   *
   *  for each child:
   *    deepest = Math.max(deepest, maxDepth(node.child)
   *  return
   */
}

export { maxDepth };
