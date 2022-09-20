import { h, defineComponent, inject, computed } from 'vue'
import { throwError } from '../../_utils'
import { uploadInjectionKey } from './interface'
import NUploadFile from './UploadFile'
import { NImageGroup } from '../../image'
import { NFadeInExpandTransition } from '../../_internal'
import NUploadTrigger from './UploadTrigger'
export default defineComponent({
  name: 'UploadFileList',
  setup(_, { slots }) {
    const NUpload = inject(uploadInjectionKey, null)
    if (!NUpload) {
      throwError(
        'upload-file-list',
        '`n-upload-file-list` must be placed inside `n-upload`.'
      )
    }
    const {
      mergedClsPrefixRef,
      listTypeRef,
      mergedFileListRef,
      fileListStyleRef,
      cssVarsRef,
      maxReachedRef,
      showTriggerRef
    } = NUpload
    const isImageCardTypeRef = computed(
      () => listTypeRef.value === 'image-card'
    )
    const renderFileList = () =>
      mergedFileListRef.value.map((file) =>
        h(NUploadFile, {
          clsPrefix: mergedClsPrefixRef.value,
          key: file.id,
          file: file,
          listType: listTypeRef.value
        })
      )
    const renderUploadFileList = () =>
      isImageCardTypeRef.value
        ? h(NImageGroup, null, { default: renderFileList })
        : h(
            NFadeInExpandTransition,
            { group: true },
            {
              default: renderFileList
            }
          )
    return () => {
      const { value: mergedClsPrefix } = mergedClsPrefixRef
      return h(
        'div',
        {
          class: [
            `${mergedClsPrefix}-upload-file-list`,
            isImageCardTypeRef.value &&
              `${mergedClsPrefix}-upload-file-list--grid`
          ],
          style: [cssVarsRef.value, fileListStyleRef.value]
        },
        renderUploadFileList(),
        showTriggerRef.value &&
          !maxReachedRef.value &&
          isImageCardTypeRef.value &&
          h(NUploadTrigger, null, slots)
      )
    }
  }
})