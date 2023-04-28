import chalk from "npm:chalk@5";
// import lodash from "npm:lodash@4";

// // @deno-types="https://unpkg.com/@types/lodash@4.17/index.d.ts"
// import * as lodash from "https://cdn.pika.dev/lodash-es@^4.17";

import _ from "https://cdn.skypack.dev/lodash";

const res = await fetch("https://deno.land");
const body = await res.text();

console.log(chalk.green("Hello!"));
console.log(chalk.blueBright(res.headers), body.length);

const map = {
  D1: 1,
  D2: 2,
  D31: 3,
  D32: 3,
  D4: 4,
};

const analyseTiers = (map: Record<string, number>) => {
  const arr = Object.entries(map).map(([dimensionId, weight]) => {
    return {
      dimensionId,
      weight,
    };
  });
  const tiersMap = _.groupBy(arr, "weight");

  let tiersOrdered = Object.keys(tiersMap).map(function (key) {
    return { weightTier: +key, dims: tiersMap[key] };
  });
  tiersOrdered = _.orderBy(tiersOrdered, ["weightTier"], ["desc"]);
  console.log("tiersOrdered", tiersOrdered);

  for (const tier of tiersOrdered) {
    console.log("tier", tier.weightTier);
    for (const dim of tier.dims) {
      console.log("dim", dim.dimensionId);
    }
  }
};

analyseTiers(map);
