import { Ref } from 'vue'
import { enUS, dateEnUS } from '../locales'
export default function createLocaleMixin<T extends keyof typeof enUS>(
  ns: T
): {
  localeRef: Ref<typeof enUS[T]>
  dateLocaleRef: Ref<typeof dateEnUS>
}
