// mods/team2.js - 两队分组规则
export default {
  id: "team2",
  name: "两队分组",
  description: "奇数蓝队，偶数红队",
  getResult: function(num) {
    return num % 2 === 1 ? "蓝队" : "红队";
  }
};