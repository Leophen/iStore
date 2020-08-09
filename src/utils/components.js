import macbookad from '@/components/details/macbookad'
import ipadad from '@/components/details/ipadad'
import iphonead from '@/components/details/iphonead'
import airpodsad from '@/components/details/airpodsad'

export default (Vue) => {
  Vue.component('ComponentA', macbookad)
  Vue.component('ComponentB', ipadad)
  Vue.component('ComponentC', iphonead)
  Vue.component('ComponentD', airpodsad)
}
