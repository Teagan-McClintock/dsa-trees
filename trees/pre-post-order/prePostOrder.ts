// import { BNodeNum } from "../common/binary-search-tree";
import { TreeNodeNum } from "../common/tree";


/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of visited nodes. */

function preOrder(node: TreeNodeNum | null): number[] {
  if(node === null) return [];
  const nodesNeedToVisit = [node]; //nodes we need to vist
  const visitedNodes = [];

  while(nodesNeedToVisit.length > 0){
    const visitedNode = nodesNeedToVisit.pop();
    visitedNodes.push(visitedNode!.val)
    nodesNeedToVisit.push(...visitedNode!.children)
  }
  console.log(visitedNodes);
  return visitedNodes
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of visited nodes. */

function postOrder(node: TreeNodeNum | null): number[] {
  if(node === null) return [];
  let stack : number[] = [node.val]
  for(const c of node!.children){
    stack.push(c.val)
  }
  return stack;
}

export { preOrder, postOrder };