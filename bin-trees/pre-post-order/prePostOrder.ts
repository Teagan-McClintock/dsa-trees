import { BNodeNum } from "../common/bintree";

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of visited nodes. */

function preOrder(node: BNodeNum | null): number[] {

  if (node === null) return [];

  const visitedNodes: number[] = []

  visitedNodes.push(node.val);

  //Some kind of loop

  return visitedNodes;
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of visited nodes. */

function postOrder(node: BNodeNum | null): number[] {
  return [42];
}

export { preOrder, postOrder };