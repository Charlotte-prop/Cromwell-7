var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance-hallway",
      "name": "Entrance Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -3.0909474111956605,
        "pitch": 0.5785507710368805,
        "fov": 1.3591912368623837
      },
      "linkHotspots": [
        {
          "yaw": 0.6084600623282341,
          "pitch": 0.3232951272717095,
          "rotation": 0,
          "target": "1-bathroom"
        },
        {
          "yaw": 2.3820736836505194,
          "pitch": 0.32960097123791243,
          "rotation": 0,
          "target": "3-bedroom-2"
        },
        {
          "yaw": -1.5220807906810556,
          "pitch": 0.3822845679841116,
          "rotation": 0,
          "target": "2-bedroom-1"
        },
        {
          "yaw": -3.128855380120015,
          "pitch": 0.26679555333972615,
          "rotation": 0,
          "target": "4-lounge-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 3.0228328983843173,
        "pitch": -0.09096262154840318,
        "fov": 1.3591912368623837
      },
      "linkHotspots": [
        {
          "yaw": -0.03380363379917206,
          "pitch": 0.3408578074737889,
          "rotation": 0,
          "target": "0-entrance-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.7213974928968003,
          "pitch": -0.10693716176757206,
          "title": "cupboard with electric boiler",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-bedroom-1",
      "name": "Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.9968497319139287,
        "pitch": 0.3112702643837846,
        "fov": 1.3591912368623837
      },
      "linkHotspots": [
        {
          "yaw": -0.44275781762408606,
          "pitch": 0.14312394403708595,
          "rotation": 0,
          "target": "0-entrance-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -3.064513992857435,
        "pitch": 0.7026725527976723,
        "fov": 1.3591912368623837
      },
      "linkHotspots": [
        {
          "yaw": 0.02835154461278222,
          "pitch": 0.21023668018996133,
          "rotation": 0,
          "target": "0-entrance-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7669156595637681,
          "pitch": 0.21044981142429364,
          "title": "cupboard",
          "text": "Text"
        }
      ]
    },
    {
      "id": "4-lounge-kitchen",
      "name": "Lounge-kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.759523112971431,
        "pitch": 0.28903439641661777,
        "fov": 1.3591912368623837
      },
      "linkHotspots": [
        {
          "yaw": -0.8437828623363934,
          "pitch": 0.8497604109077432,
          "rotation": 0,
          "target": "0-entrance-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.8920020339797716,
          "pitch": -0.03771415880413542,
          "title": "Inbuilt fridge-freezer",
          "text": "Text"
        },
        {
          "yaw": -2.5062726485453375,
          "pitch": 0.37391114865986985,
          "title": "Inbuilt dishwasher",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "7 Cromwell Building",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
