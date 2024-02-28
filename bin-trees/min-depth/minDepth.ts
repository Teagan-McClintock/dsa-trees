import { BNodeNum } from "../common/bintree";

/** Get minimum depth from node.
 *
 * Minimum depth: length of shortest path from node to a leaf.
 **/

function minDepth(node: BNodeNum): number {

  // if (node === null) return 0;
  if (node.lnode === null && node.rnode === null) return 1;

  // Maybe: check if we have both first, then check for one or other

  if (node.lnode && node.rnode) {
    return 1 + Math.min(
      minDepth(node.lnode),
      minDepth(node.rnode)
    );
  }
  else if (node.lnode) {
    return 1 + minDepth(node.lnode);
  }
  else {
    return 1 + minDepth(node.rnode!);
  }

}

export { minDepth };