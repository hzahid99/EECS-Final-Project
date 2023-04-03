import * as mobilenet from '@tensorflow-models/mobilenet';
import { fetch, decodeJpeg } from '@tensorflow/tfjs-react-native';

// Load mobilenet.
const model = await mobilenet.load();

// Get a reference to the bundled asset and convert it to a tensor
const image = require('');
const imageAssetPath = Image.resolveAssetSource(image);
const response = await fetch(imageAssetPath.uri, {}, { isBinary: true });
const imageData = await response.arrayBuffer();

const imageTensor = decodeJpeg(imageData);

const prediction = await model.classify(imageTensor);

// Use prediction in app.
setState({
  prediction,
});