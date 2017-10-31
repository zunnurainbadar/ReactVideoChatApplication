import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'html': {
    'overflow': 'hidden'
  },
  'backgroundLeft': {
    'backgroundColor': '#F0F4F8',
    'height': [{ 'unit': 'string', 'value': '-webkit-fill-available' }]
  },
  'mineMsg': {
    'wordWrap': 'break-word',
    'borderRadius': '15px',
    'backgroundColor': '#C7EDFC'
  },
  'otherMsg': {
    'wordWrap': 'break-word',
    'borderRadius': '15px',
    'backgroundColor': '#F0F4F8'
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
  },
  'search-input': {
    'height': [{ 'unit': 'px', 'value': 70 }],
    'position': 'relative'
  },
  'right': {
    'marginRight': [{ 'unit': '%H', 'value': NaN }]
  },
  'search-input::before': {
    'content': 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAQJJREFUKBWVkr2uQUEUhf3ET6GRaC5aFRoJKrf1BKpb8SwqovYGXkCj00k0QnRKEYkILYobvpUYmeMMyVnJl7P3mjN7Zu9zwiGv2qRFyMMSRrAFp6JPN8XzBj+wgDkUYAg7WINTYdwpDECxrRLJHeq2accdkgm8bzTvNAg2EDOGeUYI1KNO1gkuzTA1g8T7ojbn4ONQWPuHPWgeHmnzCqoe15tkSNPgPEAn68oVcOmA2XMtGK9FoE/VhOTTVNExqLCGZnxCv2pYauEC6lF0oQxX6IOvb7yX9NPEQafan+aPXDdQC18LsO6Tip5BBY6gIQaSbnMCFRCBZRcIvFkbsvCr4AFGOCxQy+JdGQAAAABJRU5ErkJggg==")',
    'display': 'block',
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 15 }],
    'zIndex': '3',
    'height': [{ 'unit': 'px', 'value': 15 }],
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'top': [{ 'unit': 'px', 'value': 11 }],
    'left': [{ 'unit': 'px', 'value': 16 }],
    'lineHeight': [{ 'unit': 'px', 'value': 32 }],
    'opacity': '0.6',
    'marginTop': [{ 'unit': '%V', 'value': 0.07 }],
    'marginLeft': [{ 'unit': '%H', 'value': -0.03 }]
  },
  'search-input > input': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'lineHeight': [{ 'unit': 'px', 'value': 22 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 25 }],
    'height': [{ 'unit': 'px', 'value': 32 }],
    'position': 'relative'
  },
  'search-input > input:focus': {
    'outline': 'none'
  },
  'textareas': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'lineHeight': [{ 'unit': 'px', 'value': 22 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 25 }],
    'height': [{ 'unit': 'px', 'value': 32 }],
    'position': 'relative'
  },
  'textarea:focus': {
    'outline': 'none'
  },
  'fixedbutton': {
    'position': 'fixed',
    'bottom': [{ 'unit': '%V', 'value': 0 }],
    'backgroundColor': '#ffffff',
    'width': [{ 'unit': '%H', 'value': 0.8 }]
  },
  'rotate': {
    'WebkitTransform': 'rotate(135deg)',
    'MozTransform': 'rotate(135deg)',
    'OTransform': 'rotate(135deg)',
    'MsTransform': 'rotate(135deg)',
    'transform': 'rotate(135deg)'
  },
  'rotateSend': {
    'WebkitTransform': 'rotate(335deg)',
    'MozTransform': 'rotate(335deg)',
    'OTransform': 'rotate(335deg)',
    'MsTransform': 'rotate(335deg)',
    'transform': 'rotate(335deg)'
  },
  'rotateAnswer': {
    'WebkitTransform': 'rotate(135deg)',
    'MozTransform': 'rotate(135deg)',
    'OTransform': 'rotate(135deg)',
    'MsTransform': 'rotate(135deg)',
    'transform': 'rotate(135deg)'
  },
  'remoteVideo > video': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.1 }],
    'marginTop': [{ 'unit': '%V', 'value': 0.05 }],
    'width': [{ 'unit': '%H', 'value': 0.85 }, { 'unit': 'string', 'value': '!important' }],
    'height': [{ 'unit': '%V', 'value': 0.2 }, { 'unit': 'string', 'value': '!important' }]
  },
  'localVideo': {
    'marginTop': [{ 'unit': '%V', 'value': 0.3 }],
    'width': [{ 'unit': '%H', 'value': 1 }, { 'unit': 'string', 'value': '!important' }],
    'height': [{ 'unit': '%V', 'value': 0.4 }, { 'unit': 'string', 'value': '!important' }]
  },
  'container': {
    'position': 'relative'
  },
  'containers video': {
    'position': 'relative',
    'zIndex': '0'
  },
  'overlay': {
    'position': 'absolute',
    'marginTop': [{ 'unit': '%V', 'value': 0.6 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'zIndex': '1'
  },
  'background': {
    'backgroundSize': 'cover',
    'backgroundPosition': 'center',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'center'
  },
  'scrollbar': {
    'float': 'left',
    'width': [{ 'unit': 'px', 'value': 1000 }],
    'overflowX': 'hidden',
    'overflowY': 'auto',
    'height': [{ 'unit': 'px', 'value': 475 }]
  },
  'selected': {
    'color': '#00bbff'
  },
  'profile': {
    'margin': [{ 'unit': '%V', 'value': 0.05 }, { 'unit': '%H', 'value': 0.05 }, { 'unit': '%V', 'value': 0.05 }, { 'unit': '%H', 'value': 0.05 }]
  }
});
