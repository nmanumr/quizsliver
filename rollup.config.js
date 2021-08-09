import {nodeResolve} from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import {terser} from "rollup-plugin-terser";
import alias from '@rollup/plugin-alias';
import {visualizer} from 'rollup-plugin-visualizer';

const commonPlugins = [
  nodeResolve(),
  commonjs(),
  typescript(),
  terser({
    format: {
      comments: false
    },
  }),
  // visualizer(),
]

export default [
  {
    input: 'src/sliver.ts',
    output: {
      file: 'output/sliver.js',
      format: 'iife'
    },
    plugins: [
      alias({
        entries: [
          {find: 'react', replacement: 'preact/compat'},
          {find: 'react-dom', replacement: 'preact/compat'}
        ]
      }),
      ...commonPlugins,
    ]
  }, {
    input: 'src/injector.ts',
    output: {
      file: 'output/injector.js',
      format: 'iife'
    },
    plugins: commonPlugins,
  }
];
