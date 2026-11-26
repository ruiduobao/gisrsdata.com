---
title: "GHSL：人口格网 1975/1990/2000/2015（P2016，已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/434906ce/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "ciesin-derived"
  - "ghsl"
  - "jrc"
  - "population"
---

# GHSL：人口格网 1975/1990/2000/2015（P2016，已弃用）

英文原名：GHSL: Global Human Settlement Layers, Population Grid 1975-1990-2000-2015 (P2016) [deprecated]

## 这是什么数据

GHSL 依托新型空间数据挖掘技术的设计与实施，能够自动处理海量异构数据并从中提取分析与知识，包括：全球精细尺度卫星影像数据流、人口普查数据，以及众包或志愿者地理信息来源。

本数据集描绘人口的分布与密度，以每格网单元的人口数表示，参考时相为：1975、1990、2000、2015。

居住人口估算由 CIESIN GPW v4 提供。这些估算从人口普查或行政单元分解到格网单元，分解依据是 GHSL 全球图层中相应时相的建成区分布与密度。（见 ["Development of New Open and Free Multi-temporal Global Population Grids at 250 m Resolution."](https://publications.jrc.ec.europa.eu/repository/handle/JRC100523)）

本数据集以 World Mollweide 投影（EPSG:54009）制作。

更多信息见：[https://ghsl.jrc.ec.europa.eu/ghs_pop.php](https://ghsl.jrc.ec.europa.eu/ghs_pop.php)。

全球人类住区层（GHSL）项目由欧洲委员会、联合研究中心以及区域与城市政策总司支持。GHSL 产生描述地球上人类存在的新全球空间信息、循证分析与知识。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间：1975、1990、2000、2015 四个时相；分辨率：250 米；投影：World Mollweide（EPSG:54009）。
- 时间范围：1975-01-01 至 2015-12-31

## 分辨率与规格

- 空间分辨率：约 250 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| population_count | 每个格网单元的人口数。 | 250 |  |

## 能拿来做什么

- 全球人口分布制图
- 城市化研究
- 公共服务可达性分析

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('JRC/GHSL/P2016/POP_GPW_GLOBE_V1');
```

- 数据集编号（Earth Engine ID）：`JRC/GHSL/P2016/POP_GPW_GLOBE_V1`
- 提供方：EC JRC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2016_POP_GPW_GLOBE_V1

## 许可与引用

- 许可：proprietary
- 关键词：ciesin-derived, ghsl, jrc, population
- 数据引用：European Commission, Joint Research Centre (JRC); Columbia University,
Center for International Earth Science Information Network - CIESIN (2015):
GHS population grid, derived from GPW4, multitemporal (1975, 1990, 2000,
2015). European Commission, Joint Research Centre (JRC) [Dataset]
PID: [https://data.europa.eu/89h/jrc-ghsl-ghs_pop_gpw4_globe_r2015a](https://data.europa.eu/89h/jrc-ghsl-ghs_pop_gpw4_globe_r2015a)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GHSL: Global population surfaces 1975-2030 (P2023A)](/pages/cf948667/)
- [LandScan 高清人口数据：乌克兰（2022 年 1 月）](/pages/c7a57ce4/)
- [全球网格人口 GPWv4.11：人口密度](/pages/f230ed9d/)
- [全球网格人口 GPWv4.11：人口计数](/pages/9cd921b2/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
