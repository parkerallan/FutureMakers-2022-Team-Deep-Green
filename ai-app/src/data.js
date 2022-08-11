import * as tf from '@tensorflow/tfjs';

const model = await tf.loadLayersModel('https://parkerallan.github.io/model-reference/model.json');
//const example = tf.fromPixels(webcamElement);
const prediction = model.predict(example);

console.log("hello world");