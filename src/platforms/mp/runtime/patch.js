/* @flow */

import * as nodeOps from './node-ops'
import ref from 'core/vdom/modules/ref'
import { createPatchFunction } from 'core/vdom/patch'

const modules = [ref]

export const corePatch: Function = createPatchFunction({ nodeOps, modules })

export function patch () {
  corePatch.apply(this, arguments)
  this.$updateDataToMP()
}
