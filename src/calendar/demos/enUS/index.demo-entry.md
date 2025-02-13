<!--single-column-->

# Calendar

How time flies.

## Demos

```demo
basic
```

## API

### Calendar Props

| Name | Type | Default | Description | Version |
| --- | --- | --- | --- | --- |
| default-value | `number` | `null` | Default selected date's timestamp. |  |
| is-date-disabled | `(timestamp: number) => boolean` | `undefined` | Validator of the date. |  |
| value | `number \| null` | `undefined` | Selected date's timestamp. |  |
| on-panel-change | `(info: { year: number, month: number })` | `undefined` | Callback on panel content is changed. | 2.24.0 |
| on-update:value | `(timestamp: number, info: { year: number, month: number, date: number }) => void` | `undefined` | Callback on date is selected. |  |

## Calendar Slots

| Name | Parameters | Description |
| --- | --- | --- |
| default | `({ year: number, month: number, date: number })` | Content to be rendered in each date. |
