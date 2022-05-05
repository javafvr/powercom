import { computed, onMounted, onUnmounted, ref } from "vue"

export default function () {
  let windowWidth = ref(window.innerWidth)

  const onWidthChange = (event) => {windowWidth.value = event.target.outerWidth}
  onMounted(() => window.addEventListener('resize', onWidthChange))
  onUnmounted(() => window.removeEventListener('resize', onWidthChange))
  
  const breakpoint = computed(() => {
    if (windowWidth.value < 576) return 'xs'
    if (windowWidth.value >= 576 && windowWidth.value < 768) return 'sm'
    if (windowWidth.value >= 768 && windowWidth.value < 992) return 'md'
    if (windowWidth.value >= 992 && windowWidth.value < 1200) return 'lg'
    if (windowWidth.value >= 1200 && windowWidth.value < 1440) return 'xl'
    if (windowWidth.value >= 1440 && windowWidth.value < 1900) return 'xxl'
    if (windowWidth.value >= 1900) return 'xxxl'
    return null;
  })

  const width = computed(() => windowWidth.value)
  return { width, breakpoint }
}