/**
 * todo @toggle
 * todo @log
 * todo @debounce
 * todo @throttle
 */
export function toggle(value) {
  return function (target, name, descriptor) {
    const fn = descriptor.value
    descriptor.value = async function (...reset) {
      try {
        this[value] = true
        await fn.apply(this, reset)
      } catch (err) {

      } finally {
        this[value] = false
      }
    }

  }
}