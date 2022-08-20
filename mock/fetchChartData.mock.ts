// @ts-ignore
import _ from '@umijs/utils/compiled/lodash';
import { Request, Response } from 'express';

export default {
  'GET /api/charts/pv': (req: Request, res: Response) => {
    res
      .status(200)
      .send({
        "code": 0,
        "msg": "success",
        "data": {
          "pv": 5741,
          "uv": 4677
        }
      });
  },

  'GET /api/charts/statistical': (req: Request, res: Response) => {
    const baseData = {
      "bundle_pref": [
        {
          "resource": "mklfgshn",
          "load_time": 1031.55,
          "total_error_num": 37,
          "resource_type": "js"
        },
        {
          "resource": "vpoixv",
          "load_time": 4223.16,
          "total_error_num": 14,
          "resource_type": "js"
        },
        {
          "resource": "yfjwsodwqt",
          "load_time": 2476.83,
          "total_error_num": 211,
          "resource_type": "js"
        },
        {
          "resource": "ubwzqcsgp",
          "load_time": 3804.27,
          "total_error_num": 386,
          "resource_type": "css"
        },
        {
          "resource": "rjqje",
          "load_time": 4176.05,
          "total_error_num": 243,
          "resource_type": "js"
        },
        {
          "resource": "ymstclvm",
          "load_time": 3914.2,
          "total_error_num": 452,
          "resource_type": "js"
        },
        {
          "resource": "bebdgi",
          "load_time": 2236.44,
          "total_error_num": 374,
          "resource_type": "js"
        },
        {
          "resource": "pfvbmetql",
          "load_time": 4188.92,
          "total_error_num": 310,
          "resource_type": "other"
        },
        {
          "resource": "mighzmwgu",
          "load_time": 1197.62,
          "total_error_num": 133,
          "resource_type": "css"
        },
        {
          "resource": "iwnqmmsmv",
          "load_time": 2922.44,
          "total_error_num": 207,
          "resource_type": "css"
        },
        {
          "resource": "gnwczqkvg",
          "load_time": 4671.29,
          "total_error_num": 291,
          "resource_type": "img"
        },
        {
          "resource": "jtiqywiux",
          "load_time": 1636.6,
          "total_error_num": 85,
          "resource_type": "img"
        },
        {
          "resource": "kyroiuque",
          "load_time": 2240.24,
          "total_error_num": 464,
          "resource_type": "img"
        },
        {
          "resource": "vhvpmalynf",
          "load_time": 4627.31,
          "total_error_num": 54,
          "resource_type": "css"
        },
        {
          "resource": "hlqkyfottv",
          "load_time": 1442.96,
          "total_error_num": 476,
          "resource_type": "other"
        },
        {
          "resource": "yulsilnmd",
          "load_time": 115.462,
          "total_error_num": 38,
          "resource_type": "css"
        },
        {
          "resource": "lxygmxtg",
          "load_time": 3374.42,
          "total_error_num": 447,
          "resource_type": "js"
        },
        {
          "resource": "qaubcht",
          "load_time": 4315.76,
          "total_error_num": 179,
          "resource_type": "js"
        },
        {
          "resource": "rwdwvqk",
          "load_time": 4260.00,
          "total_error_num": 165,
          "resource_type": "js"
        }
      ],
      "user_os": {
        "ios": 1401,
        "android": 1533,
        "other": 550,
        "windows": 1538,
        "mac": 1296
      },
      "geo_loaciton": {
        "provience": [
          "宁夏回族自治区",
          "山东省",
          "广西壮族自治区",
          "新疆维吾尔自治区",
          "香港特别行政区",
          "西藏自治区",
          "浙江省",
          "吉林省",
          "湖北省",
          "河南省",
          "甘肃省",
          "四川省",
          "湖南省",
          "山西省",
          "台湾",
          "辽宁省",
          "陕西省",
          "澳门特别行政区",
          "江苏省",
          "上海",
          "贵州省",
          "天津",
          "内蒙古自治区",
          "广东省",
          "江西省",
          "青海省",
          "福建省",
          "黑龙江省",
          "安徽省",
          "海南省",
          "重庆",
          "河北省"
        ],
        "user_num": [
          9,
          25,
          132,
          116,
          92,
          140,
          5,
          70,
          92,
          136,
          12,
          136,
          89,
          85,
          47,
          57,
          57,
          118,
          11,
          135,
          46,
          60,
          48,
          60,
          143,
          109,
          81,
          128,
          56,
          27,
          47,
          44,
          58,
          80
        ]
      },
      "use_time": {
        "time": [
          "1-2小时",
          "2-3小时",
          "4-5小时",
          "1小时及以下",
          "3-4小时",
          "5小时以上"
        ],
        "user_num": [
          315,
          105,
          480,
          339,
          125,
          65
        ]
      },
      "web_access ": {
        "ip": 5833,
        "pv": 16624,
        "uv": 9450
      }
    }
    const { query } = req.query;

    console.log(req);
    console.log(query);
    if (query) {
      res.status(200).send(
        {
          "code": 0,
          "msg": "success",
          data: _.pick(baseData, [query]),
        }
      );
    } else {
      res.status(200).send(
        {
          "code": 0,
          "msg": "success",
          data: baseData,
        }
      );
    }

  },
};
