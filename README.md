# react-native-item-cell
A React Native default iOS item cell. The cell grows with the inner text.

<p align="center">
<img src="https://raw.githubusercontent.com/wiki/APSL/react-native-item-cell/itemcell.png" alt="ItemCell component screenshot" width="400">
</p>


## Install

RN>=0.18 is required for `1.4.x`.

### 1. Install the package:

#### option: yarn 
```bash
$ yarn add react-native-item-cell
```

#### option: npm
```bash
$ npm install react-native-item-cell --save
```

### 2. Install the dependence:

Install ``FontAwesome`` from the awesome Joel Oblador's ``react-native-vector-icons``: https://github.com/oblador/react-native-vector-icons#installation


## Usage

```javascript
<ItemCell>
  Item
</ItemCell>
```

## Prop API

| Prop | Type | Description |
|------|------|-------------|
|``showDisclosureIndicator`` | ``bool`` | Shows a small arrow at the right side of the cell. |
|``icon`` | React component or ``{uri: string}`` object or ``require()`` | React component or URI to render left icon with an URL for the image source or ``require`` for a local image source. |
| `subtitle` | `string` | An optional subtitle to render below the `children`. |
| `value` | `string` | An optional value to display instead of the disclosure indicator. |
| `backgroundColor` | `string` | The color code of the cell background color. |
| `textStyle` | `Text.propTypes.style` | The cell text style. |
| `chevronColor` | `string` color code | The color code for the disclosure indicator. |

## License

MIT

## Author

Álvaro Medina Ballester <amedina at apsl.net>
