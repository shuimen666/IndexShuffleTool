function getResult(num) {
  // 奇数蓝队，偶数红队
  if(num==1) return "蓝队内鬼";
  if(num==2) return "红队内鬼";
  return num % 2 === 1 ? "蓝队" : "红队";
}

// 暴露函数给外部调用
export { getResult };