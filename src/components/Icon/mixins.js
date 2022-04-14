export default {
    props: {
      size: {
        type: [Number, String],
        default: () => 20
      },

      isLightCurrentTheme: {
        type: Boolean,
        default: () => true
      }
    }
  }