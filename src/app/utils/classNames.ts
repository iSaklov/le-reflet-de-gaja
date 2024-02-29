// export function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(' ')
// }

type ClassNamesArg = string | { [className: string]: boolean }

export function classNames(...args: ClassNamesArg[]): string {
  let classes = []

  for (const arg of args) {
    if (typeof arg === 'string') {
      classes.push(arg)
    } else if (typeof arg === 'object') {
      for (const key in arg) {
        if (arg[key]) {
          classes.push(key)
        }
      }
    }
  }

  return classes.join(' ')
}
