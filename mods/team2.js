// 示例：奇偶数分队预设
function getResult(num) {
  // 奇数蓝队，偶数红队
  return num % 2 === 1 ? "蓝队" : "红队";
}

// 暴露函数给外部调用
export { getResult };