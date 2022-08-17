// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/charts/line': (req: Request, res: Response) => {
    res.status(200).send({
      code: 0,
      msg: 'success',
      date: [
        '1981-04-19',
        '1979-08-07',
        '2010-10-05',
        '1974-02-05',
        '1970-04-12',
        '2011-05-30',
        '2005-03-20',
      ],
      data: [
        {
          data: {
            event_name: 'event_33872',
            data: [
              773.2078, 464.5778, 115.3886, 786.97182, 919.4504, 375.5243,
              992.3553,
            ],
            event_descirption: '事件描述_56',
            units: '3d',
          },
          type: 'error',
        },
        {
          type: 'other',
          data: {
            event_name: 'event_49244',
            event_descirption: '事件描述_79',
            units: '5Zg',
            data: [
              996.136, 429.083, 66.974, 192.163, 556.81842, 973.133, 683.6568,
            ],
          },
        },
        {
          data: {
            units: 'ndU',
            data: [
              665.226, 92.724, 512.298, 864.0835, 285.4467, 69.042, 66.4478,
            ],
            event_descirption: '事件描述_4',
            event_name: 'event_62477',
          },
          type: 'network',
        },
        {
          data: {
            data: [
              647.24674, 116.63683, 217.1447, 984.2767, 928.23927, 670.4414,
              415.671,
            ],
            event_name: 'event_93757',
            units: 'q3q',
            event_descirption: '事件描述_0',
          },
          type: 'network',
        },
        {
          data: {
            event_name: 'event_28601',
            data: [
              488.3719, 364.75714, 479.5148, 739.62156, 982.768, 177.3965,
              647.50242,
            ],
            event_descirption: '事件描述_7',
            units: 'oA',
          },
          type: 'error',
        },
        {
          data: {
            units: 'wJ',
            event_descirption: '事件描述_3',
            data: [
              501.77243, 756.951, 972.832, 905.62013, 573.7117, 607.7542,
              19.1049,
            ],
            event_name: 'event_31258',
          },
          type: 'user',
        },
        {
          type: 'network',
          data: {
            data: [
              452.143, 866.9898, 312.8841, 290.1362, 814.04642, 172.17452,
              375.79534,
            ],
            event_descirption: '事件描述_7',
            event_name: 'event_31290',
            units: 'OLW',
          },
        },
        {
          data: {
            event_name: 'event_78145',
            event_descirption: '事件描述_2',
            data: [
              691.0113, 318.89618, 566.115, 467.04463, 750.4256, 882.7771,
              820.524,
            ],
            units: 'iv',
          },
          type: 'user',
        },
        {
          data: {
            data: [
              302.612, 691.2967, 69.5615, 369.9168, 305.3013, 397.343, 389.838,
            ],
            units: 'uRd',
            event_name: 'event_85282',
            event_descirption: '事件描述_74',
          },
          type: 'network',
        },
        {
          data: {
            event_descirption: '事件描述_7',
            data: [
              301.4376, 203.823, 398.2655, 941.344, 624.1777, 595.56246,
              163.86469,
            ],
            event_name: 'event_36191',
            units: 'ky5',
          },
          type: 'network',
        },
        {
          data: {
            event_name: 'event_85320',
            event_descirption: '事件描述_7',
            units: '8L',
            data: [
              287.71588, 726.4247, 836.1815, 282.3436, 10.722, 294.54325,
              981.25047,
            ],
          },
          type: 'error',
        },
        {
          data: {
            event_descirption: '事件描述_21',
            units: 'h4F',
            data: [
              241.645, 67.4582, 17.676, 379.2359, 65.8539, 967.456, 810.72792,
            ],
            event_name: 'event_54213',
          },
          type: 'network',
        },
        {
          data: {
            units: 'RQs',
            event_name: 'event_92261',
            event_descirption: '事件描述_6',
            data: [
              886.283, 274.245, 546.3332, 74.3679, 335.4242, 241.1554,
              664.72133,
            ],
          },
          type: 'error',
        },
        {
          type: 'user',
          data: {
            event_descirption: '事件描述_67',
            units: 'Hz',
            data: [
              7.4425, 735.2253, 119.50084, 441.1807, 224.51359, 316.17464,
              950.7779,
            ],
            event_name: 'event_26308',
          },
        },
        {
          type: 'user',
          data: {
            units: 'HAe',
            data: [
              438.675, 51.2488, 394.569, 367.6865, 224.286, 477.9724, 71.723,
            ],
            event_descirption: '事件描述_3',
            event_name: 'event_36443',
          },
        },
        {
          type: 'other',
          data: {
            event_name: 'event_74163',
            units: 'eg4',
            event_descirption: '事件描述_91',
            data: [
              826.3926, 696.3893, 918.767, 965.3743, 299.863, 148.6666,
              928.1814,
            ],
          },
        },
        {
          data: {
            data: [
              855.8368, 924.62741, 278.336, 289.8847, 965.164, 483.9395,
              398.6806,
            ],
            event_descirption: '事件描述_0',
            units: 'l0',
            event_name: 'event_67781',
          },
          type: 'error',
        },
        {
          type: 'network',
          data: {
            event_name: 'event_22150',
            event_descirption: '事件描述_24',
            data: [
              910.4076, 947.65789, 789.039, 411.7468, 681.3208, 757.9862,
              798.485,
            ],
            units: 'QmE',
          },
        },
        {
          type: 'user',
          data: {
            event_name: 'event_16433',
            event_descirption: '事件描述_62',
            units: 'OCn',
            data: [
              64.152, 822.6216, 771.868, 392.4925, 314.4642, 809.9905, 443.4828,
            ],
          },
        },
        {
          type: 'user',
          data: {
            event_descirption: '事件描述_6',
            data: [
              60.866, 687.4476, 111.794, 15.5266, 166.26813, 484.058, 873.7121,
            ],
            event_name: 'event_11891',
            units: 'FA',
          },
        },
        {
          data: {
            units: 'ykw',
            data: [
              518.38572, 320.765, 804.18245, 185.2133, 835.183, 34.21554,
              572.24766,
            ],
            event_name: 'event_76315',
            event_descirption: '事件描述_45',
          },
          type: 'network',
        },
        {
          data: {
            units: '35h',
            event_name: 'event_48240',
            data: [
              310.248, 816.458, 841.4038, 833.3746, 331.038, 583.5157,
              272.31384,
            ],
            event_descirption: '事件描述_3',
          },
          type: 'error',
        },
        {
          data: {
            event_descirption: '事件描述_4',
            data: [
              896.2045, 748.42468, 640.675, 579.3337, 319.18166, 369.3263,
              524.344,
            ],
            units: 'bb',
            event_name: 'event_85511',
          },
          type: 'network',
        },
        {
          type: 'user',
          data: {
            data: [
              727.4601, 604.1591, 446.462, 776.5558, 315.3188, 596.6641,
              967.3028,
            ],
            units: 'hT',
            event_name: 'event_38507',
            event_descirption: '事件描述_3',
          },
        },
        {
          data: {
            event_descirption: '事件描述_2',
            event_name: 'event_29177',
            data: [
              391.46571, 226.3018, 46.8577, 58.3878, 5.7489, 216.333, 751.52025,
            ],
            units: 'bG',
          },
          type: 'user',
        },
        {
          data: {
            units: 'j14',
            data: [
              630.044, 749.7156, 376.174, 756.6938, 467.138, 134.74321,
              748.6443,
            ],
            event_descirption: '事件描述_66',
            event_name: 'event_71658',
          },
          type: 'error',
        },
        {
          type: 'network',
          data: {
            data: [
              941.6782, 996.32102, 567.63366, 654.645, 810.67935, 858.15033,
              298.38473,
            ],
            units: '3jK',
            event_descirption: '事件描述_19',
            event_name: 'event_17665',
          },
        },
        {
          type: 'error',
          data: {
            event_name: 'event_45537',
            units: 'wY',
            data: [
              234.226, 706.6737, 19.48964, 186.80782, 727.7867, 860.8824,
              59.825,
            ],
            event_descirption: '事件描述_8',
          },
        },
        {
          type: 'other',
          data: {
            data: [
              80.4387, 166.2854, 263.68616, 914.0802, 499.3892, 417.7738,
              555.277,
            ],
            event_name: 'event_16366',
            event_descirption: '事件描述_4',
            units: 'Ml',
          },
        },
        {
          type: 'error',
          data: {
            units: 'okQ',
            data: [
              250.182, 385.85651, 651.0654, 529.8615, 759.157, 172.142, 397.145,
            ],
            event_name: 'event_35835',
            event_descirption: '事件描述_47',
          },
        },
        {
          type: 'user',
          data: {
            event_descirption: '事件描述_02',
            data: [
              842.8468, 443.84564, 175.58525, 867.3284, 643.73148, 806.189,
              658.624,
            ],
            event_name: 'event_04254',
            units: 'Hb',
          },
        },
        {
          type: 'user',
          data: {
            event_name: 'event_53685',
            event_descirption: '事件描述_43',
            data: [
              254.9289, 948.53537, 42.5464, 792.2668, 586.72346, 187.658,
              541.725,
            ],
            units: '3l',
          },
        },
        {
          type: 'other',
          data: {
            event_name: 'event_27446',
            data: [
              198.1637, 39.4136, 557.9352, 225.94107, 903.25252, 689.2185,
              816.962,
            ],
            event_descirption: '事件描述_1',
            units: 'pKh',
          },
        },
        {
          type: 'error',
          data: {
            event_descirption: '事件描述_5',
            data: [
              21.6578, 881.3744, 319.5239, 276.0054, 351.938, 403.2277,
              841.4452,
            ],
            units: '4O3',
            event_name: 'event_22027',
          },
        },
        {
          data: {
            units: 'y6E',
            data: [
              819.8482, 193.552, 665.9783, 167.036, 841.734, 199.8747,
              978.34435,
            ],
            event_name: 'event_75486',
            event_descirption: '事件描述_20',
          },
          type: 'error',
        },
        {
          data: {
            units: 'fQ',
            event_name: 'event_97116',
            event_descirption: '事件描述_45',
            data: [
              439.38625, 812.5191, 365.555, 676.6253, 460.882, 506.177,
              994.8842,
            ],
          },
          type: 'other',
        },
        {
          type: 'network',
          data: {
            data: [
              429.5436, 312.9116, 376.5459, 919.881, 943.95601, 735.7143,
              879.991,
            ],
            event_descirption: '事件描述_3',
            event_name: 'event_94321',
            units: 'k6X',
          },
        },
        {
          data: {
            event_descirption: '事件描述_8',
            data: [
              724.8732, 989.6266, 229.6512, 584.6617, 289.753, 590.41634,
              58.84429,
            ],
            units: 'My6',
            event_name: 'event_58765',
          },
          type: 'network',
        },
        {
          type: 'error',
          data: {
            data: [
              392.12405, 307.229, 695.88444, 862.843, 363.12427, 57.95813,
              92.30878,
            ],
            units: 'dL',
            event_descirption: '事件描述_3',
            event_name: 'event_48661',
          },
        },
        {
          data: {
            event_descirption: '事件描述_38',
            data: [
              735.04946, 19.3467, 444.323, 388.8511, 519.526, 513.7482, 7.25766,
            ],
            event_name: 'event_76744',
            units: 'zC',
          },
          type: 'network',
        },
        {
          data: {
            units: 'hD1',
            event_name: 'event_32555',
            data: [
              795.71732, 271.66856, 513.9658, 889.6115, 794.5384, 308.688,
              870.2197,
            ],
            event_descirption: '事件描述_5',
          },
          type: 'error',
        },
        {
          data: {
            event_descirption: '事件描述_21',
            units: 'kA7',
            data: [
              304.22266, 333.6612, 375.07122, 274.05662, 525.2375, 888.114,
              683.841,
            ],
            event_name: 'event_68643',
          },
          type: 'error',
        },
        {
          data: {
            units: 'vh',
            event_name: 'event_48573',
            data: [
              736.8282, 560.3877, 587.8517, 6.01164, 48.90618, 464.5017,
              834.5866,
            ],
            event_descirption: '事件描述_7',
          },
          type: 'network',
        },
        {
          data: {
            event_descirption: '事件描述_48',
            units: 'AL',
            event_name: 'event_17306',
            data: [
              504.8854, 588.9885, 569.861, 146.843, 693.8324, 105.559, 789.179,
            ],
          },
          type: 'error',
        },
        {
          type: 'other',
          data: {
            data: [
              823.874, 588.04258, 886.8246, 164.6332, 172.4667, 875.763, 24.508,
            ],
            units: 'rDx',
            event_descirption: '事件描述_67',
            event_name: 'event_25778',
          },
        },
        {
          data: {
            units: 'j05',
            data: [
              234.799, 955.745, 274.231, 500.34247, 268.0662, 884.5866,
              244.9274,
            ],
            event_descirption: '事件描述_04',
            event_name: 'event_36859',
          },
          type: 'user',
        },
        {
          data: {
            data: [
              168.93522, 156.77228, 665.717, 886.83247, 624.082, 117.8525,
              683.8077,
            ],
            event_descirption: '事件描述_73',
            event_name: 'event_54207',
            units: 'ts',
          },
          type: 'network',
        },
        {
          type: 'network',
          data: {
            event_descirption: '事件描述_26',
            event_name: 'event_38327',
            units: 'mnK',
            data: [
              452.15605, 535.5824, 920.129, 592.7343, 686.98942, 400.2427,
              29.404,
            ],
          },
        },
        {
          type: 'other',
          data: {
            event_name: 'event_34544',
            event_descirption: '事件描述_2',
            units: 'ZEG',
            data: [
              766.3336, 818.1014, 559.36343, 393.323, 1.464, 595.8779,
              356.31148,
            ],
          },
        },
        {
          data: {
            event_name: 'event_11313',
            units: 'A4I',
            event_descirption: '事件描述_4',
            data: [
              273.4618, 636.4263, 160.077, 978.5177, 571.2531, 336.406,
              758.2488,
            ],
          },
          type: 'error',
        },
        {
          type: 'other',
          data: {
            event_name: 'event_78044',
            event_descirption: '事件描述_7',
            units: 'FnC',
            data: [
              304.38543, 704.15634, 565.6916, 755.64038, 734.239, 291.41559,
              138.557,
            ],
          },
        },
        {
          type: 'network',
          data: {
            units: 'IN',
            event_descirption: '事件描述_0',
            data: [
              695.68266, 754.031, 831.9684, 915.628, 578.7694, 980.5152,
              15.6448,
            ],
            event_name: 'event_24974',
          },
        },
        {
          type: 'user',
          data: {
            event_descirption: '事件描述_62',
            event_name: 'event_20641',
            units: 'Gh',
            data: [
              934.7144, 36.18322, 889.589, 31.9719, 98.8546, 111.13639, 367.628,
            ],
          },
        },
        {
          type: 'error',
          data: {
            event_descirption: '事件描述_7',
            data: [
              616.6123, 63.8164, 993.3355, 770.7727, 916.547, 112.7381, 973.564,
            ],
            event_name: 'event_34813',
            units: 'kR',
          },
        },
        {
          data: {
            event_descirption: '事件描述_4',
            event_name: 'event_85621',
            data: [
              778.3699, 1.208, 457.7785, 281.6178, 187.86747, 469.2863, 33.553,
            ],
            units: 'rbC',
          },
          type: 'error',
        },
        {
          type: 'other',
          data: {
            event_descirption: '事件描述_79',
            data: [
              380.2579, 684.415, 333.1145, 494.6902, 835.393, 81.122, 390.392,
            ],
            event_name: 'event_27554',
            units: 'jJ',
          },
        },
        {
          type: 'network',
          data: {
            event_descirption: '事件描述_38',
            event_name: 'event_19375',
            units: 'eyM',
            data: [
              280.60543, 794.36615, 967.2152, 617.5587, 569.3952, 886.08512,
              272.34015,
            ],
          },
        },
        {
          type: 'other',
          data: {
            event_descirption: '事件描述_4',
            event_name: 'event_31874',
            data: [
              74.7546, 306.5329, 778.232, 537.8572, 517.174, 819.4523,
              930.72047,
            ],
            units: '8rn',
          },
        },
        {
          data: {
            event_descirption: '事件描述_90',
            data: [
              410.8377, 424.2312, 220.163, 608.7236, 46.084, 456.4213, 590.2851,
            ],
            event_name: 'event_35231',
            units: 'Px',
          },
          type: 'network',
        },
        {
          type: 'other',
          data: {
            data: [
              747.7912, 683.82888, 610.12263, 377.627, 890.948, 350.23977,
              586.9004,
            ],
            event_descirption: '事件描述_2',
            event_name: 'event_37044',
            units: '4w',
          },
        },
        {
          type: 'error',
          data: {
            event_descirption: '事件描述_14',
            units: 'g4D',
            data: [
              575.8113, 93.79264, 678.61352, 445.2956, 491.7515, 729.28816,
              52.46267,
            ],
            event_name: 'event_45495',
          },
        },
        {
          data: {
            data: [
              978.16743, 861.60602, 672.066, 224.9746, 495.526, 716.3802,
              294.7321,
            ],
            event_descirption: '事件描述_6',
            units: 'yK',
            event_name: 'event_04668',
          },
          type: 'error',
        },
        {
          type: 'network',
          data: {
            event_name: 'event_89231',
            data: [
              418.01092, 86.4063, 525.8537, 545.5017, 506.4475, 484.62626,
              142.87951,
            ],
            event_descirption: '事件描述_26',
            units: 'VZ',
          },
        },
        {
          type: 'error',
          data: {
            event_descirption: '事件描述_1',
            units: '9L',
            event_name: 'event_42564',
            data: [
              377.6297, 410.428, 12.7363, 528.32357, 421.8829, 433.7577,
              902.219,
            ],
          },
        },
        {
          type: 'other',
          data: {
            event_descirption: '事件描述_7',
            event_name: 'event_88498',
            units: 'MC',
            data: [
              503.15556, 106.123, 851.18875, 83.8124, 265.7538, 761.87385,
              820.3921,
            ],
          },
        },
        {
          type: 'error',
          data: {
            data: [
              739.12426, 869.2758, 979.7485, 649.0887, 154.4815, 115.8228,
              736.4658,
            ],
            event_descirption: '事件描述_4',
            units: '8Vz',
            event_name: 'event_67453',
          },
        },
        {
          type: 'other',
          data: {
            units: 'pzI',
            data: [
              188.563, 854.4783, 861.4814, 814.02159, 907.4598, 636.6217,
              552.4461,
            ],
            event_descirption: '事件描述_27',
            event_name: 'event_18668',
          },
        },
        {
          data: {
            event_name: 'event_12025',
            units: 'HT',
            data: [
              477.977, 358.46437, 762.4482, 313.0327, 771.773, 557.75108,
              16.92478,
            ],
            event_descirption: '事件描述_66',
          },
          type: 'other',
        },
        {
          data: {
            data: [
              822.1637, 142.53737, 834.75369, 38.8863, 984.1633, 974.23478,
              769.501,
            ],
            units: '5C',
            event_descirption: '事件描述_8',
            event_name: 'event_31932',
          },
          type: 'other',
        },
        {
          data: {
            event_descirption: '事件描述_15',
            data: [
              562.776, 399.4328, 574.56941, 735.73508, 926.61412, 297.8238,
              807.49365,
            ],
            units: 'brJ',
            event_name: 'event_36114',
          },
          type: 'other',
        },
        {
          data: {
            data: [
              40.31408, 533.74677, 931.182, 749.876, 545.234, 936.213, 625.1338,
            ],
            event_descirption: '事件描述_37',
            event_name: 'event_73357',
            units: 'mbd',
          },
          type: 'other',
        },
        {
          type: 'network',
          data: {
            data: [
              617.1674, 384.4244, 321.9775, 544.042, 186.3768, 66.6311, 10.1473,
            ],
            event_descirption: '事件描述_43',
            event_name: 'event_43782',
            units: 'JoK',
          },
        },
        {
          type: 'user',
          data: {
            data: [
              341.5831, 15.5498, 483.6572, 93.7037, 192.71126, 118.6736,
              158.224,
            ],
            event_descirption: '事件描述_54',
            units: '3U',
            event_name: 'event_85646',
          },
        },
        {
          data: {
            event_name: 'event_42288',
            event_descirption: '事件描述_6',
            units: 'Bc',
            data: [
              613.2647, 27.35098, 245.2624, 8.41073, 215.6753, 161.9345,
              938.23636,
            ],
          },
          type: 'error',
        },
        {
          data: {
            units: 'Lpy',
            data: [
              143.2856, 108.7249, 595.4656, 859.5477, 872.986, 179.44563,
              512.628,
            ],
            event_descirption: '事件描述_66',
            event_name: 'event_27214',
          },
          type: 'other',
        },
        {
          type: 'user',
          data: {
            event_name: 'event_17157',
            units: 'sY',
            data: [
              768.53177, 186.14737, 424.3162, 648.93783, 951.8778, 278.1171,
              849.778,
            ],
            event_descirption: '事件描述_6',
          },
        },
        {
          type: 'network',
          data: {
            units: 'dEU',
            event_name: 'event_48196',
            event_descirption: '事件描述_6',
            data: [
              134.48388, 275.45148, 643.455, 639.895, 21.67979, 351.633,
              628.10756,
            ],
          },
        },
        {
          data: {
            units: 'Fqn',
            event_name: 'event_62636',
            data: [
              693.5587, 393.34625, 12.2183, 72.183, 428.611, 627.641, 922.468,
            ],
            event_descirption: '事件描述_3',
          },
          type: 'other',
        },
        {
          type: 'other',
          data: {
            data: [
              711.75886, 354.38479, 511.15557, 485.77747, 259.92715, 446.98152,
              32.943,
            ],
            event_name: 'event_40413',
            units: 'Ik',
            event_descirption: '事件描述_42',
          },
        },
        {
          type: 'user',
          data: {
            event_name: 'event_21670',
            data: [
              924.51886, 972.735, 841.53402, 691.36135, 786.171, 271.48883,
              164.093,
            ],
            units: 'laR',
            event_descirption: '事件描述_36',
          },
        },
        {
          type: 'error',
          data: {
            data: [
              378.3586, 711.20528, 445.00465, 855.18486, 214.0208, 300.8416,
              938.9745,
            ],
            units: 'hY',
            event_descirption: '事件描述_3',
            event_name: 'event_54925',
          },
        },
        {
          type: 'error',
          data: {
            event_descirption: '事件描述_1',
            units: 'ZVD',
            data: [
              438.438, 795.18165, 719.5732, 409.2576, 599.3174, 993.8755,
              117.383,
            ],
            event_name: 'event_12831',
          },
        },
        {
          data: {
            event_descirption: '事件描述_0',
            units: 'hS',
            data: [
              240.467, 370.3179, 268.83684, 860.2534, 350.36476, 163.75471,
              983.302,
            ],
            event_name: 'event_18634',
          },
          type: 'other',
        },
        {
          type: 'user',
          data: {
            event_name: 'event_77344',
            data: [
              580.617, 317.3578, 752.1913, 864.0185, 990.3282, 984.3051,
              436.8057,
            ],
            units: 'Y8d',
            event_descirption: '事件描述_3',
          },
        },
        {
          data: {
            units: 'ZA',
            data: [
              633.42127, 19.11142, 863.7574, 374.7365, 319.69726, 140.56431,
              966.55042,
            ],
            event_name: 'event_63910',
            event_descirption: '事件描述_8',
          },
          type: 'other',
        },
        {
          data: {
            data: [
              998.423, 313.383, 988.1764, 32.875, 221.4918, 216.7627, 999.1682,
            ],
            units: '3v',
            event_descirption: '事件描述_81',
            event_name: 'event_34794',
          },
          type: 'network',
        },
        {
          type: 'error',
          data: {
            data: [
              278.3026, 555.638, 421.65728, 684.222, 596.733, 196.2134,
              698.3522,
            ],
            event_name: 'event_54014',
            units: 'AyX',
            event_descirption: '事件描述_3',
          },
        },
        {
          data: {
            event_descirption: '事件描述_26',
            data: [
              926.7874, 904.304, 248.66653, 318.7737, 442.3541, 210.9769,
              792.4485,
            ],
            event_name: 'event_98154',
            units: 'tG',
          },
          type: 'user',
        },
        {
          type: 'network',
          data: {
            event_descirption: '事件描述_2',
            event_name: 'event_94441',
            units: 'TJ',
            data: [
              924.636, 445.82462, 258.732, 276.1547, 156.7733, 499.7341,
              841.2927,
            ],
          },
        },
        {
          type: 'error',
          data: {
            event_name: 'event_44703',
            data: [
              555.8012, 722.911, 55.6352, 615.4262, 548.51525, 706.3502,
              405.11564,
            ],
            units: 'yc',
            event_descirption: '事件描述_32',
          },
        },
        {
          type: 'error',
          data: {
            units: 'Rp',
            event_descirption: '事件描述_6',
            event_name: 'event_49309',
            data: [
              661.552, 849.513, 878.62097, 400.2957, 32.6095, 904.896,
              127.58942,
            ],
          },
        },
        {
          type: 'network',
          data: {
            data: [
              624.898, 525.8807, 355.6402, 470.4394, 818.2783, 965.088, 698.343,
            ],
            event_name: 'event_27237',
            units: 'VS',
            event_descirption: '事件描述_29',
          },
        },
        {
          data: {
            event_name: 'event_85213',
            units: 'P5y',
            data: [
              884.044, 876.5794, 818.369, 956.20445, 550.95383, 80.65686,
              388.0868,
            ],
            event_descirption: '事件描述_56',
          },
          type: 'other',
        },
        {
          type: 'other',
          data: {
            data: [
              582.472, 766.6146, 805.4437, 348.1135, 345.4743, 691.16474,
              232.784,
            ],
            event_descirption: '事件描述_74',
            units: 'JEE',
            event_name: 'event_20705',
          },
        },
        {
          type: 'error',
          data: {
            units: 'zXq',
            event_name: 'event_84788',
            data: [
              227.6384, 733.368, 272.84317, 320.418, 445.0644, 658.5456,
              331.9346,
            ],
            event_descirption: '事件描述_2',
          },
        },
        {
          data: {
            data: [
              232.1412, 480.928, 621.77225, 522.3237, 112.2463, 338.187,
              196.52623,
            ],
            units: 'S5',
            event_name: 'event_62289',
            event_descirption: '事件描述_6',
          },
          type: 'user',
        },
        {
          data: {
            data: [
              626.52694, 809.2184, 678.7838, 26.142, 963.3268, 861.86558,
              693.446,
            ],
            event_name: 'event_97275',
            event_descirption: '事件描述_49',
            units: 'gqU',
          },
          type: 'other',
        },
        {
          type: 'user',
          data: {
            event_name: 'event_44606',
            event_descirption: '事件描述_2',
            units: 'CK',
            data: [
              271.47293, 708.52127, 428.45857, 763.7469, 961.80579, 303.69982,
              708.266,
            ],
          },
        },
        {
          type: 'other',
          data: {
            event_descirption: '事件描述_6',
            data: [
              522.032, 300.7316, 518.671, 825.8465, 153.53666, 846.88845,
              143.3422,
            ],
            units: 'c3s',
            event_name: 'event_63867',
          },
        },
        {
          type: 'user',
          data: {
            event_descirption: '事件描述_32',
            event_name: 'event_83402',
            units: 'uA',
            data: [
              202.8216, 138.5745, 164.2383, 465.99614, 197.3932, 259.226,
              96.42337,
            ],
          },
        },
      ],
    });
  },
};
