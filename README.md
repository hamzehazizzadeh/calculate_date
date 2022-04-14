<div  align="center">
<h1  align="center">Calculate Date</h1>
<p  align="center">Calculate your age and dates</p>
</div>

## Getting started

### Install

```bash

$ npm install date-calculate

```

### Simple usage

```javascript

import { calculateDate } from "date-calculate";
// or
const { calculateDate } = require("date-calculate");

// usege

const { year, month, day } = calculateDate("2003/07/16");
// or

// Date Today 2022/04/14
const age = calculateDate("2003-07-16T00:00:00.000Z"); // { year: 18, month: 9, day: 7 }

```
