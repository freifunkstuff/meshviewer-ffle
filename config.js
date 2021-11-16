module.exports = function () {
  return {
    'nodeInfos': [
      {
        'name': 'Clientstatistik',
        'href': 'https://stats.freifunk-leipzig.de/d/GVI39bqGk/nodespublic?orgId=1&refresh=5m&var-nodeid={NODE_ID}',
        'image': '/render/clients/{NODE_ID}',
        'title': 'Entwicklung der Anzahl der Clients innerhalb des letzten Tages'
      },
      {
        'name': 'Traffic',
        'href': 'https://stats.freifunk-leipzig.de/d/GVI39bqGk/nodespublic?orgId=1&refresh=5m&var-nodeid={NODE_ID}',
        'image': '/render/traffic/{NODE_ID}',
        'title': 'Traffic innerhalb des letzten Tages'
      }
    ],
    // Array of data provider are supported
    'dataPath': [
      '/data/'
    ],
    'siteName': 'Freifunk Leipzig',
    'mapLayers': [
      {
        'name': 'OpenStreetMap.HOT',
        'url': 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        'config': {
          'maxZoom': 19,
          'attribution': '&copy; Openstreetmap France | &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }
      },
      {
        'name': 'Esri.WorldImagery',
        'url': '//server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        'config': {
          'maxZoom': 20,
          'attribution': 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        }
      }
    ],
    // Set a visible frame
    'fixedCenter': [
      // Northwest
      [
  	51.4168,
        12.1983
      ],
      // Southeast
      [
	51.2516,
	12.4791
      ]
    ],
    'domainNames': [
      {
        'domain': 'l',
        'name': 'Leipzig (Gluon)'
      },
      {
        'domain': 'meshkit',
        'name': 'Leipzig (meshkit)'
      }
    ],
    'linkList': [
      {
        'title': 'Impressum',
        'href': 'https://freifunk.net/impressum/'
      },
      {
        'title': 'Datenschutz',
        'href': 'https://freifunk.net/datenschutz/'
      }
    ]
  };
};

