---
title: "MERIT Hydro：补充可视化图层"
date: 2026-11-03 12:00:00
permalink: /pages/e2d4c415/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "hydrography"
  - "hydrosheds"
  - "merit"
  - "river-width"
  - "surface-ground-water"
  - "upstream-drainage-area"
---

# MERIT Hydro：补充可视化图层

英文原名：MERIT Hydro: Supplementary Visualization Layers

## 这是什么数据

以下为 [MERIT Hydro](MERIT_Hydro_v1_0_1) 的补充可视化图层。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球陆地河流；分辨率：18 弧秒（约 556.6 米）。
- 时间范围：1987-01-01 至 2017-01-01

## 分辨率与规格

- 空间分辨率：约 556.6 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| wth | 河道中心线处的河流河道宽度。河流河道宽度按 [Yamazaki et al. 2012, WRR] 所述方法计算，算法有若干改进/变更。此波段已从原始 3 弧秒上采样到 18 弧秒，以便在全球尺度更好地可视化。 | 556.6 |  |
| upa | 上游集水面积（汇流面积）。此波段已从原始 3 弧秒上采样到 18 弧秒，以便在全球尺度更好地可视化。 | 556.6 |  |

## 能拿来做什么

- 河流网络与流域分析
- 洪水风险与水资源评估
- 水文地形处理

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('MERIT/Hydro_reduced/v1_0_1');
```

- 数据集编号（Earth Engine ID）：`MERIT/Hydro_reduced/v1_0_1`
- 提供方：Dai Yamazaki (University of Tokyo)、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MERIT_Hydro_reduced_v1_0_1

## 许可与引用

- 许可：ODbL-1.0
- 关键词：hydrography, hydrosheds, merit, river-width, surface-ground-water, upstream-drainage-area
- 数据引用：Yamazaki D., D. Ikeshima, J. Sosa, P.D. Bates, G.H. Allen, T.M. Pavelsky.
MERIT Hydro: A high-resolution global hydrography map based on latest
topography datasets
Water Resources Research, vol.55, pp.5053-5073, 2019,
[doi:10.1029/2019WR024873](https://doi.org/10.1029/2019WR024873)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GFPLAIN250 米：全球 250 米洪泛区数据集](/pages/fcae03ea/)
- [GLCF：Landsat 全球内陆水体](/pages/500a347f/)
- [GRIDMET 干旱指数：美国本土干旱指数](/pages/f6533466/)
- [JRC 全球地表水元数据 v1.4](/pages/1f03ce37/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
