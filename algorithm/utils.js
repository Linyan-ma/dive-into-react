// 序列化二叉树

let tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
    },
  },
  right: {
    val: 3,
    left: {
      val: 5,
    },
    right: {
      val: 6,
    },
  },
};
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
//          1
//       2     3
//     4     5    6
//
// 广度优先遍历
function serializationBread(tree) {
  let res = [];
  let queue = [tree];
  let node;
  while (queue.length) {
    node = queue.shift();
    res.push(node ? node.val : null);
    if (node) {
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return res;
}
// 广度优先反序列化
function unSerializationBread(data) {
  let root = new TreeNode(data.shift());
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    let leftVal = data.shift();
    if (leftVal === null) {
      node.left = null;
    } else {
      node.left = new TreeNode(leftVal);
      queue.push(node.left);
    }
    let rightVal = data.shift();
    if (rightVal === null) {
      node.right = null;
    } else {
      node.right = new TreeNode(rightVal);
      queue.push(node.right);
    }
  }
  return root;
}
// 深度优先
function serialization(tree) {
  let res = [];
  (function _serializtion(tree) {
    tree.val && res.push(tree.val);
    tree.left ? _serializtion(tree.left) : res.push(null);
    tree.right ? _serializtion(tree.right) : res.push(null);
  })(tree);
  return res;
}
// 深度优先反序列化
function unSerialization(data) {
  let i = 0;
  function structure() {
    if (i >= data.length) {
      return null;
    }
    let val = data[i];
    i++;
    if (val === null) {
      return null;
    }
    let node = new TreeNode(val);
    node.left = structure();
    node.right = structure();
    return node;
  }
  return structure(data);
}

let path = serialization(tree);
console.log(path);

let path2 = serializationBread(tree);
console.log(path2);

let treeIns = unSerializationBread(path2);
console.log("treeIns:", treeIns);

let tree2 = unSerialization(path);
console.log("tree2:", tree2);
