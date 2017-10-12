import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'backgroundLeft': {
    'backgroundColor': '#F0F4F8',
    'height': [{ 'unit': 'string', 'value': '-webkit-fill-available' }]
  },
  'mineMsg': {
    'backgroundColor': '#C7EDFC'
  },
  'otherMsg': {
    'backgroundColor': '#ffffff'
  },
  'hr': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'px', 'value': 0.3 }, { 'unit': 'string', 'value': 'solid' }],
    'color': '#D8E5EF',
    'marginBottom': [{ 'unit': 'px', 'value': 2 }]
  },
  'removing': {
    'background': 'none !important',
    'color': 'inherit',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'font': [{ 'unit': 'string', 'value': 'inherit' }],
    'cursor': 'pointer',
    'outline': 'inherit !important'
  },
  'buttons': {
    'marginTop': [{ 'unit': '%V', 'value': NaN }]
  },
  'groupListStyles': {
    'marginTop': [{ 'unit': '%V', 'value': NaN }]
  }
});
