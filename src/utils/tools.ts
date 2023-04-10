/**
 * 调整缩放大小
 */
export function resizeScale() {
  let baseWidth = document.documentElement.clientWidth
  let baseHeight = document.documentElement.clientHeight
  let app = document.querySelector('#app') as HTMLElement
  let appStyle = app.style
  let realRatio = baseWidth / baseHeight
  let designRatio = 16 / 9
  let scaleRate = baseWidth / 1920
  if (realRatio > designRatio) {
    scaleRate = baseHeight / 1080
  }
  appStyle.transformOrigin = 'left top'
  appStyle.transform = `scale(${scaleRate})`
  appStyle.width = `${baseWidth / scaleRate}px`
}

/**
 * deleteLabel(str)
 * @description 删除目标字符串中所有标签
 * @param {String} str 目标字符串
 * @returns 经过处理后的字符串
 */
export function deleteLabel(str: string) {
  if (!str) return
  return str.replace(/<[^<>]+>/g, "").replace(/&nbsp;/gi, "")
}

/**
 * 获取静态资源URL
 * @param path assets目录下的路径，例如"home/bg.png"
 * @returns 返回静态资源URL
 */
export function getImageUrl(path: string) {
  return new URL(`../assets/${path}`, import.meta.url).href
}

/**
 * 根据属性数组去重
 * @param array 目标数组
 * @param uniProp 唯一值属性
 * @returns 返回去重数组
 */
export function uniqueArray<T>(array: T[], uniProp: string) {
  const map = new Map();
  return array.filter((item: any) => !map.has(item[uniProp]) && map.set(item[uniProp], 1));
}

/**
 * 判断图片是否可访问
 * @param url 图片的网络地址
 * @returns 布尔值
 */
export function isImageAccess(url: string) {
  return new Promise(function (resolve, reject) {
    const img = new Image();
    img.src = url;
    img.onload = function (res) {
      resolve(res)
    }
    img.onerror = function (err) {
      resolve(err)
    }
  })
}