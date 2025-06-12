// mods.js - 规则加载器
const modsRegistry = {};

// 注册模块的函数
export function registerMod(mod) {
  if (mod && mod.id && mod.getResult) {
    modsRegistry[mod.id] = mod;
    console.log(`已注册模块: ${mod.name}`);
  } else {
    console.error("无效的模块格式:", mod);
  }
}

// 获取模块的函数
export function getMod(modId) {
  return modsRegistry[modId] || null;
}

// 获取所有模块
export function getAllMods() {
  return Object.values(modsRegistry);
}