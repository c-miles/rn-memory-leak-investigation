import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('MemoryLeakTestApp', () => App);

AppRegistry.runApplication('MemoryLeakTestApp', {
  rootTag: document.getElementById('root'),
});
