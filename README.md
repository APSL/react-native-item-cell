# react-native-item-cell
A React Native default iOS item cell. The cell grows with the inner text.

<p align="center">
<img src="https://raw.githubusercontent.com/wiki/APSL/react-native-item-cell/itemcell.png" alt="ItemCell component screenshot" width="400">
</p>


## Install

Install the package:

```bash
$ npm i react-native-item-cell --save
```

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
|``icon`` | ``{uri: string}`` object or ``require()`` | URI to render left icon with an URL for the image source or ``require`` for a local image source. |
|``children`` | ``string`` | The inner text to render. |

## License

MIT
