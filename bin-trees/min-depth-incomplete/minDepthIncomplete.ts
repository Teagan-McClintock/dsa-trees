import { BNodeNum } from "../common/bintree";

/** Minimum depth from node to an "incomplete node".
 *
 * An incomplete node is a node with 0 or 1 children (not 2).
 */

function minDepthToIncomplete(node: BNodeNum): number {

  // if (node === null) return 0;
  if (node.lnode === null || node.rnode === null) return 1;

  return 1 + Math.min(
    minDepthToIncomplete(node.lnode),
    minDepthToIncomplete(node.rnode)
  );

}

export { minDepthToIncomplete };