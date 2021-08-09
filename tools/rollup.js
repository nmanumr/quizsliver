import * as rollup from 'rollup';
import * as fs from 'fs';

import {nodeResolve} from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import {terser} from "rollup-plugin-terser";
import alias from '@rollup/plugin-alias';
import json from '@rollup/plugin-json';
import {visualizer} from 'rollup-plugin-visualizer';

export default function rollupBundle({dest, input, format = 'iife'}) {
  let plugins = [
    alias({
      entries: [
        {find: 'react', replacement: 'preact/compat'},
        {find: 'react-dom', replacement: 'preact/compat'}
      ]
    }),
    json(),
    nodeResolve(),
    commonjs(),
    typescript(),
    // terser({
    //   format: {
    //     comments: false,
    //   }
    // }),
    // visualizer(),
  ];

  return rollup.rollup({input, plugins})
    .then(function (bundle) {
      return bundle.generate({
        format,
      });
    })
    .then(function (result) {
      let newResult = result.output[0];
      fs.writeFileSync(dest, newResult.code);
    })
    .catch(function (err) {
      console.error(err);
      process.exit(1);
    });
};
