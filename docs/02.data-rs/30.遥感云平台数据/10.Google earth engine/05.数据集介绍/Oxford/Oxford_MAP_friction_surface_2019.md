---
title: "全球摩擦面 2019 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/67001827/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "accessibility"
  - "friction"
  - "jrc"
  - "map"
  - "oxford"
  - "population"
  - "twente"
---

# 全球摩擦面 2019 [已弃用]

英文原名：Global Friction Surface 2019 [deprecated]

## 这是什么数据

本全球摩擦面列出名义年份 2019 年北纬 85 度至南纬 60 度之间所有陆地像元的陆上旅行速度。它还包括仅使用非机动交通工具的「仅步行」旅行速度。本地图由 MAP（牛津大学）、Telethon 儿童研究所（澳大利亚珀斯）、Google 与荷兰特温特大学合作制作。本项目建立在 Weiss 等 2018 年发表的先前工作（[doi:10.1038/nature25181](https://doi.org/10.1038/nature25181)）基础上。Weiss 等（2018）使用了道路（包括 Open Street Map 与 Google 道路数据集的首次全球尺度使用）、铁路、河流、湖泊、海洋、地形条件（坡度与高程）、土地覆盖类型与国界数据集。这些数据集各被分配一个或多个旅行速度（以穿越该类型每个像元的时间计）。随后将数据集组合生成「摩擦面」：一幅每个像元按像元内出现的类型分配名义总体旅行速度的地图。本项目创建了更新的摩擦面，以纳入 OSM 道路数据的最新改进。此摩擦面与 2015 版（Weiss 等 2018）的差异不一定表明基础设施的变化（如新修道路）。这类差异更有可能是数据质量改进所致，特别是 OSM 道路覆盖的更新。因此，摩擦面及其旅行时间地图之间的比较应谨慎进行，一般不应解释为可达性随时间的变化。本图表示此分配过程得到的旅行速度，单位为行进一米所需的分钟数。它构成参考论文所述全球医疗可达性地图的底层数据集。

源数据集的致谢见随附论文。

## 覆盖范围与时间

- 覆盖范围：空间：全球陆地（85°N–60°S）；时间：2019 年；分辨率：927.67 米。
- 时间范围：2019-01-01 至 2020-01-01

## 分辨率与规格

- 空间分辨率：约 927.67 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| friction | 陆上旅行速度。 | 927.67 |  |
| friction_walking_only | 仅使用非机动交通的陆上旅行速度。 | 927.67 |  |

## 能拿来做什么

- 作为可达性与旅行时间建模的底层速度面。
- 支撑医疗、教育等公共服务可达性分析。
- 做步行可达性专题研究。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('Oxford/MAP/friction_surface_2019');
```

- 数据集编号（Earth Engine ID）：`Oxford/MAP/friction_surface_2019`
- 提供方：Malaria Atlas Project、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Oxford_MAP_friction_surface_2019

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：accessibility, friction, jrc, map, oxford, population, twente
- 数据引用：D.J. Weiss, A. Nelson, C.A. Vargas-Ruiz, K. Gligori&cacute;, S. Bavadekar,
E. Gabrilovich, A. Bertozzi-Villa, J. Rozier, H.S. Gibson, T. Shekel,
C. Kamath, A. Lieber, K. Schulman, Y. Shao, V. Qarkaxhija, A.K. Nandi,
S.H. Keddie, S. Rumisha, E. Cameron, K.E. Battle, S. Bhatt, P.W. Gething.
Global maps of travel time to healthcare facilities. Nature Medicine (2020).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Accessibility to Cities 2015 [deprecated]](/pages/17a7017f/)
- [Accessibility to Healthcare 2019 [deprecated]](/pages/5a6f325a/)
- [Global Friction Surface 2015 [deprecated]](/pages/b510ae4f/)
- [GHSL：全球人口表面 1975–2030（P2023A）](/pages/cf948667/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
