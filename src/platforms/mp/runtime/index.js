import Vue from 'core/index'

import { mountComponent } from 'core/instance/lifecycle'

import {
  mustUseProp,
  isReservedTag,
  isReservedAttr,
  getTagNamespace,
  isUnknownElement
} from 'mp/util/index'

import { patch } from './patch'
import { initMP } from './lifecycle'

// install platform specific utils
Vue.config.mustUseProp = mustUseProp
Vue.config.isReservedTag = isReservedTag
Vue.config.isReservedAttr = isReservedAttr
Vue.config.getTagNamespace = getTagNamespace
Vue.config.isUnknownElement = isUnknownElement

// install platform patch function
Vue.prototype.__patch__ = patch
Vue.prototype._initMP = initMP

Vue.prototype.$mount = function (el, hydrating) {
  const options = this.$options

  if (options && (options.render || options.mpType)) {
    const { mpType = 'page' } = options
    return this._initMP(mpType, () => {
      return mountComponent(this, undefined, undefined)
    })
  } else {
    return mountComponent(this, undefined, undefined)
  }
}
export default Vue
