---
title: "全球摩擦面 2015 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/b510ae4f/
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

# 全球摩擦面 2015 [已弃用]

英文原名：Global Friction Surface 2015 [deprecated]

## 这是什么数据

本全球摩擦面列出名义年份 2015 年北纬 85 度至南纬 60 度之间所有陆地像元的陆上旅行速度。

本地图由牛津大学疟疾地图项目（MAP）、Google、欧盟联合研究中心（JRC）与荷兰特温特大学合作制作。制作本地图所用的底层数据集包括道路（包括 Open Street Map 与 Google 道路数据集的首次全球尺度使用）、铁路、河流、湖泊、海洋、地形条件（坡度与高程）、土地覆盖类型与国界。

这些数据集各被分配一个或多个旅行速度（以穿越该类型每个像元的时间计）。随后将数据集组合生成此「摩擦面」——一幅每个像元按像元内出现的类型分配名义总体旅行速度的地图，穿越像元的最快旅行方式用于确定该像元的旅行速度（有一些例外，如国界，其作用是施加旅行时间惩罚）。

本地图表示此分配过程得到的旅行速度，单位为行进一米所需的分钟数。它构成参考论文所述全球可达性地图的底层数据集。

源数据集的致谢见随附论文。（原文此句开头带杂散引号）

## 覆盖范围与时间

- 覆盖范围：空间：全球陆地（85°N–60°S）；时间：2015 年；分辨率：927.67 米。
- 时间范围：2015-01-01 至 2016-01-01

## 分辨率与规格

- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| friction | 陆上旅行速度。 | 927.67 |  |

## 能拿来做什么

- 作为可达性与旅行时间建模的底层速度面。
- 支撑选址、物流与应急响应分析。
- 与 2019 版摩擦面谨慎对比（差异多源于数据质量改进）。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('Oxford/MAP/friction_surface_2015_v1_0');
```

- 数据集编号（Earth Engine ID）：`Oxford/MAP/friction_surface_2015_v1_0`
- 提供方：Malaria Atlas Project、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Oxford_MAP_friction_surface_2015_v1_0

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：accessibility, friction, jrc, map, oxford, population, twente
- 数据引用：D.J. Weiss, A. Nelson, H.S. Gibson, W. Temperley, S. Peedell, A.
Lieber, M. Hancher, E. Poyart, S. Belchior, N. Fullman, B. Mappin,
U. Dalrymple, J. Rozier, T.C.D. Lucas, R.E. Howes, L.S. Tusting,
S.Y. Kang, E. Cameron, D. Bisanzio, K.E. Battle, S. Bhatt, and
P.W. Gething. A global map of travel time to cities to assess inequalities
in accessibility in 2015. Nature (2018).
[doi:10.1038/nature25181](https://doi.org/10.1038/nature25181)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Accessibility to Cities 2015 [deprecated]](/pages/17a7017f/)
- [Accessibility to Healthcare 2019 [deprecated]](/pages/5a6f325a/)
- [Global Friction Surface 2019 [deprecated]](/pages/67001827/)
- [GHSL：全球人口表面 1975–2030（P2023A）](/pages/cf948667/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
