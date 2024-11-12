<script setup>
import { ref, watch, reactive, toRef, onMounted } from "vue"
import FluentEditor from '@opentiny/fluent-editor'

const props = defineProps({
  content: {},
  theme: {},
})

const emit = defineEmits(['updatecontent'])

// 获取编辑器容器
const quillEditorDOM = ref(null)
// 创建编辑器变量
let editor = null;
// 编辑器配置项
const TOOLBAR_CONFIG = [
  ['undo', 'redo', 'clean', 'format-painter'],
  [
    { header: [1, 2, 3, 4, 5, 6, false] },
    { font: ['songti', 'yahei', 'kaiti', 'heiti', 'lishu', 'mono', 'arial', 'arialblack', 'comic', 'impact', 'times'] },
    { size: ['12px', '14px', '16px', '18px', '20px', '24px', '32px', '36px', '48px', '72px'] }
  ],
  ['bold', 'italic', 'strike', 'underline'],
  [
    { color: [] },
    { background: [] }
  ],
  [
    { align: [] },
    { list: 'ordered' },
    { list: 'bullet' },
    { list: 'check' }],
  [{ script: 'sub' }, { script: 'super' }],
  [{ indent: '-1' }, { indent: '+1' }],
  [{ direction: 'rtl' }],
  ['link', 'blockquote', 'code', 'code-block'],
  ['image', 'file', 'better-table'],
  ['emoji', 'video', 'formula', 'screenshot', 'fullscreen'],
]
onMounted(() => {
  // 判断是否显示工具栏
  let options = props.theme
    ?
    [
      {
        theme: "snow",
        modules: {
          toolbar: TOOLBAR_CONFIG
        },
      },
    ]
    :
    []
  // 创建编辑器实例
  editor = new FluentEditor(quillEditorDOM.value, options[0])
  // 初始化并导入内容文本对象
  editor.setContents(
    props.content
  )
  watch(toRef(props, 'content'), () => {
    console.log("文档内容更新了");
    // 当文本内容发生变化时重新导入内容文本对象
    editor.setContents(
      props.content
    )
  })
  // 将修改之后的文档传递给父组件
  editor.on('text-change', (delta, oldContents, source) => {
    // 判断是否是只读模式
    props.theme ? [
      emit('updatecontent', editor.getContents().ops),
      console.log("文档修改了")
    ] : []
  })

})

</script>

<template>
  <div class="w-[100%] h-[100%]" ref="quillEditorDOM"></div>
</template>
<style scoped></style>