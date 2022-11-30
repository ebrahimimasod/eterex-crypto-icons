# Eterex Crypto Icons (420+)

Eterex crypto icons Contains more than 420 digital currency icons.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install foobar.

```bash
npm i eterex-crypto-icons
```

## Usage

In src > main.js or main.ts :
```javascript
import EterexCryptoIcons from "eterex-crypto-icons"
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.use(EterexCryptoIcons);
app.mount('#app')

```

In each view or component :
```html
<template>
   <CryptoIcon name="btc" :size="35"/>
</template>
```
## Props:
```javascript
name:
  {
   type: String,
   required: true,
   description: Name of a digital currency like (btc,eth,usdt,...)
  }

size:
  {
   type: Number,
   default: 32,
   description: Change width and height of icon togather with a number
  }
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)