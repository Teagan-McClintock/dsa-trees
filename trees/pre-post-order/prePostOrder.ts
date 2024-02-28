// import { BNodeNum } from "../common/binary-search-tree";
import { TreeNodeNum } from "../common/tree";


/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of visited nodes. */

function preOrder(node: TreeNodeNum | null): number[] {
  if(node === null) return [];

  const visitedNodes = [];

  visitedNodes.push(node.val);

  for (const child of node.children) {
    visitedNodes.push(...preOrder(child));
  }

  return visitedNodes;
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of visited nodes. */

function postOrder(node: TreeNodeNum | null): number[] {
  if(node === null) return [];

  const visitedNodes = [];

  for (const child of node.children) {
    visitedNodes.push(...postOrder(child));
  }

  visitedNodes.push(node.val);

  return visitedNodes;
}

export { preOrder, postOrder };