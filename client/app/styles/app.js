import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'gu-mirror': {
    'position': 'fixed !important',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'zIndex': '9999 !important',
    'opacity': '0.8',
    'MsFilter': '"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)"',
    'filter': 'alpha(opacity=80)'
  },
  'BoardClass': {
    'marginBottom': [{ 'unit': '%V', 'value': 0.15 }, { 'unit': 'string', 'value': '!important' }]
  },
  'FullHeight': {
    'height': [{ 'unit': '%V', 'value': 1 }, { 'unit': 'string', 'value': '!important' }]
  },
  'search-input': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'height': [{ 'unit': 'px', 'value': 52 }],
    'position': 'relative'
  },
  'searchContent': {
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }],
    'textAlign': 'center'
  },
  'mail': {
    'border': [{ 'unit': 'string', 'value': 'ridge' }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
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
    'opacity': '0.6'
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
  'materialimage': {
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'transform': 'translate(-50%, 0)'
  },
  'fullScreen': {
    'zIndex': '9999',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'gu-hide': {
    'display': 'none !important'
  },
  'gu-unselectable': {
    'WebkitUserSelect': 'none !important',
    'MozUserSelect': 'none !important',
    'MsUserSelect': 'none !important',
    'userSelect': 'none !important'
  },
  'gu-transit': {
    'opacity': '0.2',
    'MsFilter': '"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)"',
    'filter': 'alpha(opacity=20)'
  },
  'leftmostlogout': {
    'marginRight': [{ 'unit': '%H', 'value': 0 }]
  },
  'left': {
    'width': [{ 'unit': 'px', 'value': 120 }],
    'float': 'left'
  },
  'left table': {
    'background': '#e0ecff'
  },
  'left td': {
    'background': '#eee'
  },
  'right': {
    'float': 'right',
    'width': [{ 'unit': 'px', 'value': 570 }]
  },
  'right table': {
    'background': '#e0ecff',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'right td': {
    'background': '#fafafa',
    'color': '#444',
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }]
  },
  'right td': {
    'background': '#e0ecff'
  },
  'right tddrop': {
    'background': '#fafafa',
    'width': [{ 'unit': 'px', 'value': 100 }]
  },
  'right tdover': {
    'background': '#fbec88'
  },
  'item': {
    'textAlign': 'center',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#499b33' }],
    'background': '#fafafa',
    'color': '#444',
    'width': [{ 'unit': 'px', 'value': 100 }]
  },
  'assigned': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#bc2a4d' }]
  },
  'trash': {
    'backgroundColor': 'red'
  },
  'fixedchatbox': {
    'position': 'fixed',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 0.33 }],
    'display': 'inline',
    'marginLeft': [{ 'unit': 'px', 'value': -4 }]
  },
  'fixedbutton': {
    'position': 'fixed',
    'bottom': [{ 'unit': 'px', 'value': 15 }],
    'right': [{ 'unit': 'px', 'value': 15 }]
  },
  'emailpass': {
    'height': [{ 'unit': 'px', 'value': 30 }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'marginTop': [{ 'unit': '%V', 'value': 0.02 }]
  },
  'margin': {
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'padding': {
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'paddingleft': {
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 1 }]
  },
  'p': {
    'color': '#555'
  },
  'fullWidth': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }],
    'maxWidth': [{ 'unit': 'string', 'value': 'initial' }]
  },
  'fullheight': {
    'height': [{ 'unit': 'vh', 'value': 100 }],
    'marginTop': [{ 'unit': 'string', 'value': 'auto' }],
    'marginBottom': [{ 'unit': 'string', 'value': 'auto' }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'abc': {
    'backgroundColor': '#00e676 !important'
  },
  'img': {
    'width': [{ 'unit': 'px', 'value': 115 }],
    'padding': [{ 'unit': 'rem', 'value': 0 }, { 'unit': 'rem', 'value': 0 }, { 'unit': 'rem', 'value': 0 }, { 'unit': 'rem', 'value': 0 }]
  },
  'top-bar': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'position': 'fixed',
    'backgroundColor': '#009688'
  },
  'top-bar ul': {
    'backgroundColor': '#009688'
  },
  'body': {
    'fontFamily': ''Roboto', sans-serif'
  },
  '::selection': {
    'background': 'rgba(82, 179, 217, 0.3)',
    'color': 'inherit'
  },
  'a': {
    'color': 'rgba(82, 179, 217, 0.9)'
  },
  'back': {
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 90 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'color': '#fff',
    'lineHeight': [{ 'unit': 'px', 'value': 50 }],
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }],
    'cursor': 'pointer'
  },
  'back img': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 5 }],
    'left': [{ 'unit': 'px', 'value': 30 }],
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'backgroundColor': 'rgba(255, 255, 255, 0.98)',
    'borderRadius': '100%',
    'WebkitBorderRadius': '100%',
    'MozBorderRadius': '100%',
    'MsBorderRadius': '100%',
    'marginLeft': [{ 'unit': 'px', 'value': 15 }]
  },
  'back:active': {
    'background': 'rgba(255, 255, 255, 0.2)'
  },
  'name': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 3 }],
    'left': [{ 'unit': 'px', 'value': 110 }],
    'fontFamily': ''Lato'',
    'fontSize': [{ 'unit': 'px', 'value': 25 }],
    'fontWeight': '300',
    'color': 'rgba(255, 255, 255, 0.98)',
    'cursor': 'default'
  },
  'last': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 30 }],
    'left': [{ 'unit': 'px', 'value': 115 }],
    'fontFamily': ''Lato'',
    'fontSize': [{ 'unit': 'px', 'value': 11 }],
    'fontWeight': '400',
    'color': 'rgba(255, 255, 255, 0.6)',
    'cursor': 'default'
  },
  // M E S S A G E S
  'chat': {
    'listStyle': 'none',
    'background': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 60 }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'chat li': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }],
    'overflow': 'hidden',
    'display': 'flex'
  },
  'chat avatar': {
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'position': 'relative',
    'display': 'block',
    'zIndex': '2',
    'borderRadius': '100%',
    'WebkitBorderRadius': '100%',
    'MozBorderRadius': '100%',
    'MsBorderRadius': '100%',
    'backgroundColor': 'rgba(255, 255, 255, 0.9)'
  },
  'chat avatar img': {
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'borderRadius': '100%',
    'WebkitBorderRadius': '100%',
    'MozBorderRadius': '100%',
    'MsBorderRadius': '100%',
    'backgroundColor': 'rgba(255, 255, 255, 0.9)',
    'WebkitTouchCallout': 'none',
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none'
  },
  'chat day': {
    'position': 'relative',
    'display': 'block',
    'textAlign': 'center',
    'color': '#c0c0c0',
    'height': [{ 'unit': 'px', 'value': 20 }],
    'textShadow': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#e5e5e5,' }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#e5e5e5,' }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#e5e5e5,' }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#e5e5e5,' }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#e5e5e5,' }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#e5e5e5,' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#e5e5e5,' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#e5e5e5,' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#e5e5e5,' }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#e5e5e5,' }, { 'unit': 'px', 'value': -2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#e5e5e5,' }, { 'unit': 'px', 'value': -3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#e5e5e5,' }, { 'unit': 'px', 'value': -4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#e5e5e5,' }, { 'unit': 'px', 'value': -5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#e5e5e5,' }, { 'unit': 'px', 'value': -6 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#e5e5e5,' }, { 'unit': 'px', 'value': -7 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#e5e5e5' }],
    'boxShadow': [{ 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#e5e5e5,' }, { 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': -20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#e5e5e5,' }, { 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#d7d7d7' }],
    'lineHeight': [{ 'unit': 'px', 'value': 38 }],
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'cursor': 'default',
    'WebkitTouchCallout': 'none',
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none'
  },
  'other msg': {
    'order': '1',
    'borderTopLeftRadius': '0px',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d4d4d4' }],
    'borderRadius': '12px'
  },
  'other:before': {
    'content': '""',
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'string', 'value': 'auto' }],
    'width': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'borderLeftColor': 'transparent',
    'borderBottomColor': 'transparent'
  },
  'self': {
    'justifyContent': 'flex-end',
    'alignItems': 'flex-end'
  },
  'self msg': {
    'position': 'relative',
    'background': '#dcf8c6',
    'textAlign': 'right',
    'minWidth': [{ 'unit': '%H', 'value': 0.45 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }],
    'borderRadius': '12px',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'float': 'right',
    'right': [{ 'unit': 'px', 'value': 20 }]
  },
  'self msg::before': {
    'content': '''',
    'position': 'absolute',
    'visibility': 'visible',
    'top': [{ 'unit': 'px', 'value': -1 }],
    'right': [{ 'unit': 'px', 'value': -10 }],
    'border': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'borderTop': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }]
  },
  'self msg::after': {
    'content': '''',
    'position': 'absolute',
    'visibility': 'visible',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': -8 }],
    'border': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'borderTop': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dcf8c6' }],
    'clear': 'both'
  },
  'self avatar': {
    'order': '2'
  },
  'self avatar:after': {
    'content': '""',
    'position': 'relative',
    'display': 'inline-block',
    'bottom': [{ 'unit': 'px', 'value': 19 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'borderRightColor': 'transparent',
    'borderTopColor': 'transparent',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#d4d4d4' }]
  },
  'msg': {
    'background': 'white',
    'minWidth': [{ 'unit': 'px', 'value': 50 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'borderRadius': '2px',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.07)' }]
  },
  'msg p': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.8 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }],
    'color': '#555'
  },
  'Morebutton': {
    'opacity': '0'
  },
  'msg:hover Morebutton': {
    'opacity': '1'
  },
  'eachRow:hover Morebutton': {
    'opacity': '1'
  },
  'msg img': {
    'position': 'relative',
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 450 }],
    'borderRadius': '5px',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': '#eee' }],
    'transition': 'all 0.4s cubic-bezier(0.565, -0.26, 0.255, 1.41)',
    'cursor': 'default',
    'WebkitTouchCallout': 'none',
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none',
    'screen&&<w800': {
      'width': [{ 'unit': 'px', 'value': 300 }]
    },
    'screen&&<w550': {
      'width': [{ 'unit': 'px', 'value': 200 }]
    }
  },
  'msg time': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.8 }],
    'color': '#9e9e9e',
    'marginTop': [{ 'unit': 'px', 'value': 3 }],
    'float': 'right',
    'cursor': 'default',
    'WebkitTouchCallout': 'none',
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none'
  },
  'msg sender': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.8 }],
    'color': '#9e9e9e',
    'marginTop': [{ 'unit': 'px', 'value': 3 }],
    'float': 'left',
    'cursor': 'default',
    'WebkitTouchCallout': 'none',
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none'
  },
  'msg time:before': {
    'content': '"\f017"',
    'color': '#ddd',
    'fontFamily': 'FontAwesome',
    'display': 'inline-block',
    'marginRight': [{ 'unit': 'px', 'value': 4 }]
  },
  'inputtextarea': {
    'position': 'fixed',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'zIndex': '99',
    'background': '#fafafa',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'outline': 'none',
    'paddingLeft': [{ 'unit': 'px', 'value': 55 }],
    'paddingRight': [{ 'unit': 'px', 'value': 55 }],
    'color': '#555',
    'fontWeight': '400'
  }
});
