---
title: "NEX-GDDP：NASA 地球交换全球逐日降尺度气候预估"
date: 2026-11-03 12:00:00
permalink: /pages/e142b780/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "cag"
  - "climate"
  - "cmip5"
  - "gddp"
  - "geophysical"
  - "ipcc"
  - "nasa"
  - "nex"
  - "precipitation"
  - "temperature"
  - "weather-and-climate"
---

# NEX-GDDP：NASA 地球交换全球逐日降尺度气候预估

英文原名：NEX-GDDP: NASA Earth Exchange Global Daily Downscaled Climate Projections

## 这是什么数据

NASA NEX-GDDP 数据集由全球降尺度气候情景组成，源自耦合模式比较计划第 5 阶段（CMIP5，见 [Taylor 等 2012](https://journals.ametsoc.org/doi/abs/10.1175/BAMS-D-11-00094.1)）下进行的全球环流模式（GCM）运行，以及四个温室气体排放情景中的两个（称为代表性浓度路径（RCP），见 [Meinshausen 等 2011](https://rd.springer.com/article/10.1007%2Fs10584-011-0156-z#page-1)）。CMIP5 GCM 运行是为支持政府间气候变化专门委员会第五次评估报告（IPCC AR5）而开发的。

本数据集由气候分析组与 NASA 艾姆斯研究中心使用 NASA 地球交换平台制备，由 NASA 气候模拟中心（NCCS）分发。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：1950 年至 2100 年；分辨率：27,830 米。
- 时间范围：1950-01-01 至 2100-12-31

## 分辨率与规格

- 空间分辨率：约 27,830 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| pr | 地表降水的日平均；包括来自所有类型云（大尺度与对流）的液态与固态相。 | 27830 |  |
| tasmin | 日最低近地表气温的日平均。 | 27830 |  |
| tasmax | 日最高近地表气温的日平均。 | 27830 |  |

## 能拿来做什么

- 气候变化影响评估
- 降尺度气候预估
- 区域气候研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/NEX-GDDP');
```

- 数据集编号（Earth Engine ID）：`NASA/NEX-GDDP`
- 提供方：NASA /  Climate Analytics Group、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_NEX-GDDP

## 许可与引用

- 许可：proprietary
- 关键词：cag, climate, cmip5, gddp, geophysical, ipcc, nasa, nex, precipitation, temperature, weather-and-climate
- 数据引用：Thrasher, B., Maurer, E. P., McKellar, C., & Duffy, P. B., 2012:
Technical Note: Bias correcting climate model simulated daily temperature
extremes with quantile mapping. Hydrology and Earth System Sciences,
16(9), 3309-3314.
[doi:10.5194/hess-16-3309-2012](https://doi.org/10.5194/hess-16-3309-2012)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ERA5 月聚合数据 — ECMWF 气候再分析](/pages/87085b9b/)
- [ERA5 逐日聚合数据](/pages/9ae9975a/)
- [GCOM-C/SGLI 三级地表温度产品（V1）](/pages/a4b5eab0/)
- [GCOM-C/SGLI 三级地表温度产品（V2）](/pages/92e78526/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
