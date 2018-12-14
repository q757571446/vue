import { makeMap } from 'shared/util'

export function mustUseProp () { /* console.log('mustUseProp') */ }

export function getTagNamespace () { /* console.log('getTagNamespace') */ }

export function isUnknownElement () { /* console.log('isUnknownElement') */ }

export const isReservedTag = makeMap(
  'template,script,style,element,content,slot,link,meta,svg,view,' +
  'a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,' +
  'slider,slider-neighbor,indicator,trisition,trisition-group,canvas,' +
  'list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,' +
  'video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown',
  true
)

export const isReservedAttr = makeMap('style,class')

export function getComKey (vm) {
  return vm && vm.$attrs ? vm.$attrs['mpcomid'] : '0'
}
