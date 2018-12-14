import { getComKey } from '../util/index.js'
function getParentComKey (vm, res = []) {
  const { $parent } = vm || {}
  if (!$parent) return res
  res.unshift(getComKey($parent))
}
function formatVmData (vm) {
  const $p = getParentComKey(vm).join(',')
  const $k = $p + ($p ? ',' : '') + getComKey(vm)

  const data = Object.assign(getVmData(vm), { $k, $kk: `${$k},`, $p })
  const key = '$root.' + $k
  const res = { [key]: data }
  return res
}
function collectVmData (vm, res = {}) {
  const { $children: vms } = vm
  if (vms && vms.length) {
    vms.forEach(v => collectVmData(v, res))
  }
  return Object.assign(res, formatVmData(vm))
}

export function initDataToMP () {
  const page = getPage(this)
  if (!page) {
    return
  }

  const data = collectVmData(this.$root)
  page.setDate(data)
}

export function updateDataToMp () {
  const page = getPage(this)
  if (!page) {
    return
  }

  const data = formatVmData(this)
}
